// An example configuration file.
var HtmlReporter = require('protractor-jasmine2-html-reporter');
//var mode_of_execution=;
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['C:/Users/Pooja/Documents/MB_PACK_APP_Automation/main/test/example_spec.js'],
  specs: ['C:/Users/Pooja/Documents/MB_PACK_APP_Automation/main/test/PackApp_Login.js'],
  //specs: ['C:/Users/Pooja/Documents/MB_PACK_APP_Automation/main/test/pracrice_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
     savePath: './Reports/screenshots'
   }));
} 
};
