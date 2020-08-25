let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let dropDown_input = element.all(by.options('value for (key, value) in operators')).get(1);
    
    // Only When "ng-model" or "ng-options" or "option" is present :

    // Drop Down Way 1 : 
    // element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
    // browser.sleep(2000);
    
    // Drop Down Way 2 :
    // element(by.cssContainingText('option', '%')).click();
    // browser.sleep(2000);

    // Drop Down Way 3 :
    // element.all(by.options('value for (key, value) in operators')).get(0).click();
    // browser.sleep(2000);
    
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.selectDropDown = function(){
        dropDown_input.click();
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        expect(element(by.binding('latest')).getText()).toEqual(result);
        // let output = element(by.cssContainingText('.ng-binding', result));
        // expect(output.getText()).toEqual(result);
        browser.sleep(2000);
    };
};

module.exports = new homepage();