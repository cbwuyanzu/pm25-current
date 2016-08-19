var auth = require('../helpers/auth');
var proxy = require('../helpers/proxy');

var config = {
  /**
   * --------- ADD YOUR UAA CONFIGURATION HERE ---------
   *
   * This uaa helper object simulates NGINX uaa integration using Grunt allowing secure cloudfoundry service integration in local development without deploying your application to cloudfoundry.
   * Please update the following uaa configuration for your solution
   */
  uaa: {
    clientId: 'driver',
    serverUrl: 'https://64382272-902f-4cf9-ae9f-7c729bb323bc.predix-uaa.run.aws-usw02-pr.ice.predix.io',
    defaultClientRoute: '/about',
    base64ClientCredential: 'ZHJpdmVyOmdlZ2VnZQ=='
  },
  /**
   * --------- ADD YOUR SECURE ROUTES HERE ------------
   *
   * Please update the following object add your secure routes
   *
   * Note: Keep the /api in front of your services here to tell the proxy to add authorization headers.
   */
  proxy: {
    '/api/inquiry-raw(.*)': {
      url:'https://inquiry-driver-cdz.run.aws-usw02-pr.ice.predix.io/services/driver/raw_data/$1',
      instanceId: 'e9449d68-da92-4a36-b73a-660028f8e06e'
    },
    '/api/inquiry-aggregated(.*)': {
      url:'https://inquiry-driver-cdz.run.aws-usw02-pr.ice.predix.io/services/driver/daily_data/$1',
      instanceId: 'e9449d68-da92-4a36-b73a-660028f8e06e'
    },
    '/api/latest(.*)': {
      url:'https://inquiry-driver-cdz.run.aws-usw02-pr.ice.predix.io/services/driver/latest_data/$1',
      instanceId: 'e9449d68-da92-4a36-b73a-660028f8e06e'
    }
  }
};

module.exports = {
  server: {
    options: {
      port: 9000,
      base: 'public',
      open: true,
      hostname: 'localhost',
      middleware: function (connect, options) {
        var middlewares = [];

        //add predix services proxy middlewares
        middlewares = middlewares.concat(proxy.init(config.proxy));

        //add predix uaa authentication middlewaress
        middlewares = middlewares.concat(auth.init(config.uaa));

        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        var directory = options.directory || options.base[options.base.length - 1];
        options.base.forEach(function (base) {
          // Serve static files.
          middlewares.push(connect.static(base));
        });

        // Make directory browse-able.
        middlewares.push(connect.directory(directory));

        return middlewares;
      }
    }
  }
};
