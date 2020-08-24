let homepage = require('../pages/homepagePOM');
describe('calculator website with Page Object Model', function () {

    browser.manage().window().maximize();
    //browser.manage().timeouts().implicitlyWait(30000);

    it('POM', function () {
        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('10');
        homepage.selectDropDown();
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        homepage.verifyResult('2');
        browser.sleep(2000);
       
    });

    it('Fail test', function () {
        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('10');
        homepage.selectDropDown();
        homepage.enterSecondNumber('5');
        homepage.clickGo1();
        homepage.verifyResult('2');
        browser.sleep(2000);
    });
});