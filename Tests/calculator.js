describe('calculator website', function () {

    browser.manage().window().maximize();
    //browser.manage().timeouts().implicitlyWait(30000);

    it('test', function () {
        
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('1');
        
        // Drop Down Way 1 :
        element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
        browser.sleep(2000);

        // Drop Down Way 2 :
        element(by.cssContainingText('option', '%')).click();
        browser.sleep(2000);

        // Drop Down Way 3 :
        element.all(by.options('value for (key, value) in operators')).get(0).click();
        browser.sleep(2000);

        element(by.model('second')).sendKeys('2');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding', '3'));
        expect(result.getText()).toEqual('3');
        browser.sleep(2000);
       
    });
});