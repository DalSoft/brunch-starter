exports.config = {
  paths: {
    "public": 'www'
  },
  modules: {
    definition: false,
    wrapper: false
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^(vendor|bower_components)/,
        'test/js/test.js': /^test(\/|\\)(?!vendor)/,
        'test/js/test-vendor.js': /^test(\/|\\)(?=vendor)/
      },
      order: {
        before: []
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': /^(vendor|bower_components)/,
        'test/css/test.css': /^test/
      },
      order: {
        before: [],
        after: []
      }
    }
  }
};