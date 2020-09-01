// Only use to get Tips and Help.
// npm i --save-dev babel-preset-env
// npm i --save-dev babel-register
require("babel-register")({
  presets: ["env"]
});

// Only used to take Screen shots :
var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");

// Only used to take Screen shots :
var reporter = new HtmlScreenshotReporter({
  dest: "target/screenshots",
  filename: "my-report.html",
});

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
    // browserName: "firefox",
    
    // To run without UI :
    // chromeOptions: { args: [ "--headless" ] }
    // 'moz:firefoxOptions': { args: [ "--headless" ] }
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Spec patterns are relative to the current working directory when
  // protractor is called.

  // specs: ['../Tests/example_spec.js'],
  specs: ['../Tests/calculator.js'],
  // specs: ["../Tests/calculatorPOM.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  // Following is only used to take Screen shots :
  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);

    // Only used to obtain results in XML file :
    var jasmineReporters = require("jasmine-reporters");
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: "./XML Results",
        filePrefix: "xmlresults",
      })
    );

    // Only used to obtain screenshots on failure in HTML report :
    var fs = require("fs-extra");
    fs.emptyDir("screenshots/", function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == "failed") {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get("browserName");

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream(
                "screenshots/" + browserName + "-" + result.fullName + ".png"
              );
              stream.write(new Buffer(png, "base64"));
              stream.end();
            });
          });
        }
      },
    });

    // Only used for Allure Reporter :
    var AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: "allure-results",
      })
    );
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  //Only used for HTML Report :
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get("browserName");
      browserVersion = caps.get("version");
      platform = caps.get("platform");

      var HTMLReport = require("protractor-html-reporter-2");

      testConfig = {
        reportTitle: "Test Execution Report",
        outputPath: "./HTML Report",
        outputFilename: "HTML Test Report",
        screenshotPath: "./screenshots",
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform,
      };
      new HTMLReport().from("XML Results/xmlresults.xml", testConfig);
    });
  },
};