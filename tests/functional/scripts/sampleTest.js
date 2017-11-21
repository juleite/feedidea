module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://feedidea.mybluemix.net')
      .waitForElementVisible('body', 60000, true,
        function(){}, 'Waiting for Search Input to become visible')
      .waitForElementPresent('.navbar-brand', 60000)
      .pause(5000)
      .end();
  }
};
