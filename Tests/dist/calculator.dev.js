"use strict";

// Test Suite :
// Only those test suite will be executed which have "f" before describe :
fdescribe('calculator website', function () {
  browser.manage().window().maximize(); //browser.manage().timeouts().implicitlyWait(30000);

  beforeAll(function () {
    console.log('It is displayed only once before all test cases');
  });
  beforeEach(function () {
    console.log('It is displayed every time before each test cases');
  }); // Test cases or Scripts :
  // Only focussed test case will be executed - "fit"

  fit('test case 1', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.getTitle().then(function (title) {
      console.log("The Page Title is : " + title);
    });
    expect(browser.getTitle()).toEqual('Super Calculator');
    browser.getCurrentUrl().then(function (url) {
      console.log("The Current URL is : " + url);
    });
    var text = element(by.tagName('h3')).getText();
    text.then(function (elementText) {
      console.log("Heading is: " + elementText);
    });
    element(by.model('first')).sendKeys('1'); // element(by.model('first')).clear();
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

    element(by.model('second')).sendKeys('2');
    element(by.css('[ng-click="doAddition()"]')).click(); // element(by.buttonText('Go!')).click();

    var button = element(by.buttonText('Go!')).getAttribute('id');
    button.then(function (idValue) {
      console.log("The id value for Go button is : " + idValue);
    }); // Check Result Way 1 :
    // let result = element(by.cssContainingText('.ng-binding', '3'));
    // expect(result.getText()).toEqual('3');
    // Check Result Way 2:

    expect(element(by.binding('latest')).getText()).toEqual('3');
    browser.sleep(2000);
  }); // this test case will not be displayed because it does not have focuss "f" before it :

  it('Second test case', function () {
    console.log("1 Test Suite - Second Test Case");
  }); // this test case will be temporarily disabled because it has "x" before it :

  xit('Third test case', function () {
    console.log("1 Test Suite - Third Test Case");
  });
  afterEach(function () {
    console.log('It is displayed every time after each test cases');
  });
  afterAll(function () {
    console.log('It is displayed only once after all test cases');
  });
}); // this will not be displayed because it does not have focuss "f" before describe :

describe('Second Test Suite', function () {
  it('First test case', function () {
    console.log("2 Test Suite - First test case");
    var a = true;
    var b = true;
    var c = 10;
    var d = "jasmine";
    expect(a).toBe(true);
    expect(b).not.toBe(true);
    expect(c).toEqual(10);
    expect(d).toBeNull(); // expect(d).not.toBeNull();

    expect(d).toContain("jas"); // expect(d).not.toContain("jas");
  });
}); // This is temporarily disabled as it has "x" before describe :

xdescribe('Third Test Suite', function () {
  it('First test case', function () {
    console.log("3 Test Suite - First test case"); // browser.driver.get('');
    // browser.sleep(2000);
    // For Calender :
    // browser.executeScript("document.getElementById('').value='01/20/2020'");   
    // browser.sleep(2000);
  });
  it('Second test case', function () {
    console.log("3 Test Suite - Second test case");
    browser.driver.get('https://ng-bootstrap.github.io/#/components/tooltip/examples');
    browser.sleep(2000); // Mouse actions :
    // tooltip :

    var button = element(by.css("button[ngbtooltip='Tooltip on top']"));
    browser.actions().mouseMove(button).perform(); // Double Click :
    // browser.actions().mouseMove(button).doubleClick().perform();
    // browser.actions().doubleClick(button).perform();
    // Keyboard action :
    // element(by.model('xyz')).sendKeys(protractor.Key.ENTER);

    browser.sleep(2000);
  });
  fit('Third test case', function () {
    console.log("3 Test Suite - Third test case");
  });
});