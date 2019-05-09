// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    frameworks: ["parcel"],
 
    // add patterns with all your tests even if they should not
    // be handled by parcel
    files: [
      "spec/**/*.js",
      {
        // parcel tests should not be watched. Parcel will do the
        // watching instead
        pattern: "parcel/**/*.js",
        watched: false,
        included: false
      }
    ],
 
    // let karma know which of the test files should be bundled
    // with parcel
    preprocessors: {
      "parcel/*": ["parcel"]
    },

    parcelConfig: {
      cacheDir: "./.cache", // default: "./.cache"
      detailedReport: true, // default: false,
      logLevel: 2 // default: 1
    }
  });
};

/*

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: false,
      thresholds: {
        statements: 85,
        lines: 84,
        branches: 65,
        functions: 68
      }
    },
    reportSlowerThan: 300,
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
*/