"use strict";

// Test Suite :
// Only those Test Suites will be executed which have "f" before describe.
fdescribe('1 Test Suite', function () {
  browser.manage().window().maximize(); //browser.manage().timeouts().implicitlyWait(30000);

  beforeAll(function () {
    console.log('It is displayed only once before all test cases');
  });
  beforeEach(function () {
    console.log('It is displayed every time before each test cases');
  }); // Test cases or Scripts :
  // Only those test cases will be executed which have "f" before "it".

  fit('1 Test case', function () {
    browser.get('http://juliemr.github.io/protractor-demo/'); // browser.driver.get('url');     // Only for non Angular websites.

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
  }); // this test case is temporarily disabled because it has "x" before "it".

  xit('Third test case', function () {
    console.log("1 Test Suite - Third Test Case");
  });
  afterEach(function () {
    console.log('It is displayed every time after each test cases');
  });
  afterAll(function () {
    console.log('It is displayed only once after all test cases');
  });
}); // This Test Suite will not be executed because it does not have focuss "f" before "describe".

describe('2 Test Suite', function () {
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
}); // This is temporarily disabled as it has "x" before "describe".
// var fs = require('fs')      // only for Screen shot for full page.

xdescribe('3 Test Suite', function () {
  it('3 Test Suite - 1 test case', function () {// For Calender :
    // browser.executeScript("document.getElementById('Here come element location').value='01/20/2020'");
    // Mouse actions :
    // Display Tool Tip :
    // var button = "Here locate element";
    // browser.actions().mouseMove(button).perform();
    // Double Click :
    // browser.actions().mouseMove(button).doubleClick().perform();
    // browser.actions().doubleClick(button).perform();
    // Keyboard action :
    // element(by.model('xyz')).sendKeys(protractor.Key.ENTER);
    // Alert, Popup :
    // browser.switchTo().alert().getText().then(text =>{ console.log("Alert Text is : " + text); })
    // browser.switchTo().alert().accept();   // it will click "OK" button.
    // browser.switchTo().alert().dismiss();  // it will click "CANCEL" button.
    // Frame :
    // browser.switchTo().frame(0);
    // New Tab Window :
    // var winHandles = browser.getAllWindowHandles();
    // winHandles.then(function(handles){
    // var parentWindow = handles[0];
    // var tabWindow = handles[1];
    // browser.waitForAngularEnabled(false);  // only for non angular applications.
    // browser.switchTo().window(tabWindow);
    // browser.getTitle().then(title => { console.log("New Tab Window Title is : " + title); })
    // browser.close();   // it will close currently focused window.
    // browser.switchTo().window(parentWindow);
    // })
    // Screen shot for full page :
    // browser.takeScreenshot().then(function(fullPage){
    // var stream = fs.createWriteStream('./Screen shot/Full page.png');
    // stream.write(new Buffer(fullPage, 'base64'));
    // stream.end(); })
    // Screen shot for any element in page :
    // var logo = "Here locate element";
    // logo.takeScreenshot().then(function(element){
    // var stream = fs.createWriteStream('./Screen shot/Element.png');
    // stream.write(new Buffer(element, 'base64'));
    // stream.end(); })
    // Drag and Drop :
    // var source = "Here locate element";
    // var destination = "Here locate element";
    // browser.actions().dragAndDrop(source,destination).perform();
  });
}); // Read data from JSON file :
// var data = require('../Json file/first.json')
// describe("4 Test Suite", function(){
// it("4 Test Suite - 1 Test case", function(){
// console.log(data.url);
// console.log(data.credentials.username);
// })
// })
// Generate Fake or Random Data :
// install : npm i faker
// var faker = require('faker');
// describe("5 Test Suite", function(){
// it("5 Test Suite - 1 Test case", function(){
// console.log(faker.name.firstName());
// console.log(faker.name.lastName());
// console.log(faker.phone.phoneNumber());
// console.log(faker.address.city());
// console.log(faker.internet.email());
// })
// })