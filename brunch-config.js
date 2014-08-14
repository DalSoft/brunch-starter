exports.config = {
  paths: {
    "public": 'www'
  },
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(vendor|bower_components)/,
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/,
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      },
      order: {
        before: []
      }
    },
    stylesheets: {
      joinTo: {
        'stylesheets/app.css': /^app/,
        'stylesheets/vendor.css': /^(vendor|bower_components)/,
        'test/stylesheets/test.css': /^test/
      },
      order: {
        before: [],
        after: []
      }
    }
  }
};