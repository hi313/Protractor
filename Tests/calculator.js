// Only use to show Code suggestions.
// import { browser, element, by } from "protractor";
import 'babel-polyfill';                                                         // Used only for Async - Await. 

// Test Suite :
// Only those Test Suites will be executed which have "f" before describe.
//fdescribe('1 Test Suite', function () {

    //browser.manage().timeouts().implicitlyWait(30000);

    //beforeAll(function(){
        // console.log('It is displayed only once before all test cases');
        // browser.get('http://juliemr.github.io/protractor-demo/');
        // browser.driver.get('url');     // Only for non Angular websites.
        // browser.manage().window().maximize();
    // })

    // beforeEach(function(){
        // console.log('It is displayed every time before each test cases');
    // })

    // Test cases or Scripts :
    // Only those test cases will be executed which have "f" before "it".
    //fit('1 Test case', function () {
        
        // browser.getTitle().then(title => { console.log("The Page Title is : " + title); })
        // expect(browser.getTitle()).toEqual('Super Calculator');
        // browser.getCurrentUrl().then(url => { console.log("The Current URL is : " + url); })
        // var text = element(by.tagName('h3')).getText();
        // text.then(elementText =>{ console.log("Heading is: " + elementText); })
        
        // element(by.model('first')).sendKeys('1');
        // element(by.model('first')).clear();
        
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

        // Drop Down Way 4 :
        // When "div Class" is present :  
        // $('.hi1.hi2').click();                                                      // eg: class name = hi1 hi2
        // element(by.cssContainingText('div.class name', 'option name')).click();
                
        // element(by.model('second')).sendKeys('2');
        // element(by.css('[ng-click="doAddition()"]')).click();
        // element(by.buttonText('Go!')).click();
        // var button = element(by.buttonText('Go!')).getAttribute('id');
        // button.then(idValue => { console.log("The id value for Go button is : " + idValue); })
        
        // Check Result Way 1 :
        // let result = element(by.cssContainingText('.ng-binding', '3'));
        // expect(result.getText()).toEqual('3');

        // Check Result Way 2:
        // expect(element(by.binding('latest')).getText()).toEqual('3');
        // browser.sleep(2000);
       
    // });

    // this test case will not be displayed because it does not have focuss "f" before it :
    // it('Second test case', function(){
        // console.log("1 Test Suite - Second Test Case")
    // })

    // this test case is temporarily disabled because it has "x" before "it".
    // xit('Third test case', function(){
        // console.log("1 Test Suite - Third Test Case")
    // })

    // afterEach(function(){
        // console.log('It is displayed every time after each test cases');
    // })

    // afterAll(function(){
        // console.log('It is displayed only once after all test cases');
    // })
// });

// This Test Suite will not be executed because it does not have focuss "f" before "describe".
describe('2 Test Suite', function(){
    it('First test case', function(){
        console.log("2 Test Suite - First test case")
        var a = true;
        var b = true;
        var c = 10;
        var d = "jasmine";
        expect(a).toBe(true);
        expect(b).not.toBe(true);
        expect(c).toEqual(10);
        expect(d).toBeNull();
        // expect(d).not.toBeNull();
        expect(d).toContain("jas");
        // expect(d).not.toContain("jas");
    })
});

// This is temporarily disabled as it has "x" before "describe".
// var fs = require('fs')      // only for Screen shot for full page.
xdescribe('3 Test Suite', function(){
    it('3 Test Suite - 1 test case', function(){
        // For Calender :
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
        // browser.switchTo().alert().accept();       // it will click "OK" button.
        // browser.switchTo().alert().dismiss();      // it will click "CANCEL" button.
        // let alert = browser.switchTo().alert();
        // alert.sendKeys("abc");                     // it will send text to alert.

        // Frame :
        // browser.switchTo().frame(0);                                   // Way 1
        // browser.switchTo().frame("frame id value");                    // Way 2
        // browser.switchTo().frame("frame name value");                  // Way 3
        // let frameElement = element(by.xpath("abc"));
        // browser.switchTo().frame(frameElement.getWebElement());        // Way 4
        // browser.switchTo().defaultContent();                           // come out of frame to main window.

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
    })
});

// Read data from JSON file :
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

// Async - Await : another way to get title.
// describe('6 Test Suite', () => {
    // it('6 Test Suite - 1 Test case', async() => {
        // browser.get("http://juliemr.github.io/protractor-demo/")
        // console.log(await browser.getTitle());
    // })
// })

// Get value from a Input Field.
// Confirm Text Box is not editable.
// fdescribe('7 Test Suite', () => {
    // it('get value from Input Field', async() => {
        // let getMe = "Here comes element location".
        // let value = await getMe.getAttribute("value");
        // console.log(value);
    // });

    // it('Confirm Text Box is not editable', async() => {
        // let isEditable = element(by.model('operator')).isEnabled();
        // console.log(await isEditable);
        // expect(isEditable).toBe(false);
    // });

    // it('Get Position, Height, Width', async() => {
        // element(by.id("idname")) = $('#idname').
        // element(by.class(classname)) = $('.classname').
        // let location = $('#button2').getLocation();
        // let size = await element(by.buttonText('Submit')).getSize();
        // console.log(location.x);
        // console.log(location.y);
        // console.log(size.height);
        // console.log(size.width);
    // });

    // Display all options of check boxes.
    // it('Select all the fruits', () => {
        // browser.get("https://play.letcode.in/checkbox");
        // let allLabels = element.all(by.tagName("label"))
        // let size = allLabels.count();
        // let labels = allLabels.get(size);
        // let labels = allLabels.get(-1);                               // Display Last Element
        // let first = allLabels.first();                                // Display First Element
        // let last = allLabels.last();                                  // Display Last Element
        // allLabels.each(async (ele, i) => {
            // let text = await ele.getText();
            // console.log(text, '==>' + i);
        // })
        // expect(allLabels.count()).toBe(5);
    // });

    // Map - Display First Column of a table.
    // it("Print train numbers", () => {
        // browser.waitForAngularEnabled(false);
        // browser.manage().timeouts().implicitlyWait(20000);
        // browser.get("https://erail.in/trains-between-stations/mgr-chennai-ctr-MAS/ksr-bengaluru-SBC");
        // $("#chkSelectDateOnly").click();
        // browser.sleep(3000);
        // let rows = $$("#divTrainsList .TrainList tr");                           // $$("css value") = element.all(by("css value")).
        // let myTrainNumberMap = rows.map( async (ele, index) => {
                // let firstData = ele.$$('td').get(0);
                // console.log(await firstData.getText());
                // return {
                    // "trainNumber": await firstData.getText(),
                    // "index": index
                // }});
        // console.log(myTrainNumberMap);
    // });

    // Filter - find unselected checkbox.
    // it("Find unselected checkbox", () => {
        // browser.get("https://play.letcode.in/checkbox");
        // let checkBoxes = $$("input");
        // console.log(checkBoxes.count());
        // let unchecked = checkBoxes.filter(async (ele, index) => {
            // return await ele.isSelected() == false; });
        // unchecked.each(async ele => {
            // console.log(await ele.isSelected()); })
    // });

    // Web table - find element inside a Table.
    // it('table', () => {
        // browser.get("https://play.letcode.in/table");
        // let table = $("table#table tbody");
        // let rows = table.$$("tr");
        // rows.each((ele, i) => {
            // let first = ele.$$("td").get(0);
            // first.getText().then(t => {
                // console.log(t)
            // }) });
        // let count = rows.count();
        // console.log(count);
        // expect(count).toBe(3);
        // for (let i = 0; i < count; i++) {
            // let firstTD = rows.get(i).$$("td");
            // let firstData = firstTD.get(0);
            // let text = firstData.getText();
            // if (text === "Yashwanth") {
                // let checkBox = firstTD.last().$("input");
                // checkBox.click();
            // } };
        // browser.sleep(5000);
    // });

    // Mouse Right Click.
    // it("Right Click", async () => {
        // browser.get("https://play.letcode.in/contextmenu");
        // browser.sleep(3000);
        // let btn = $("app-context-menu button");
        // browser.actions().click(await btn.getWebElement(),protractor.Button.RIGHT).perform();
    // });

// });