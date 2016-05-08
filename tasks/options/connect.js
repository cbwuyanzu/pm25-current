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
    clientId: 'gegege',
    serverUrl: 'https://22d00b7a-388b-4b16-a142-56c99c8002fe.predix-uaa.run.aws-usw02-pr.ice.predix.io',
    defaultClientRoute: '/about',
    base64ClientCredential: 'Z2VnZWdlOnF1YW5xdWFu'
  },
  /**
   * --------- ADD YOUR SECURE ROUTES HERE ------------
   *
   * Please update the following object add your secure routes
   *
   * Note: Keep the /api in front of your services here to tell the proxy to add authorization headers.
   */
  proxy: {
    '/api/view-service(.*)': {
      url: 'https://predix-views.run.aws-usw02-pr.ice.predix.io/v1$1',
      instanceId: 'cca889f8-128e-4640-92f5-51df2325bf5d'
    },
    '/api/inquiry-service(.*)': {
      url:'https://cdz-inquiry-timeseries-service.run.aws-usw02-pr.ice.predix.io/services/pm25services/yearly_data/sensor_id$1',
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
