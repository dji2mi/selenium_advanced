var webDriver = require('selenium-webdriver');
var driver = new webDriver.Builder()
    .usingServer('http://localhost:4444/wd/hub')
    .withCapabilities(webDriver.Capabilities.firefox())
    .build();

describe('protractor test', function() {

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();
    
    });

    it('should have a title', async function() {
        
      await browser.get('https://www.apc.com/shop/us/en/tools/ups_selector/');
      var flowSelector = element(by.xpath("//label[contains(@class, 'FlowSelector') and text()='Home, Home Office and Small Business']"));
      await browser.actions().mouseMove(flowSelector, {x: 0, y: 0}).mouseDown().mouseUp().perform();
      var configureButton = element(by.xpath("//button[contains(@class, 'FlowSelector_btnFlowSelection') and child::span[text()='Configure by Load']]"));
      await browser.executeScript("arguments[0].setAttribute('style', 'background: yellow;')", configureButton);
      browser.sleep(4000);
      await browser.executeScript("arguments[0].click()", configureButton);
      browser.sleep(3000);
      
      await browser.element(by.xpath("//input[contains(@class, 'CustomTextField_seCustomInput')]")).sendKeys('600');
      var continueButton = element(by.xpath("//a[contains(@class, 'SeButton_primary') and child::span[text()='Continue']]"));
      await browser.actions().mouseMove(continueButton, {x: 0, y: 0}).mouseDown().mouseUp().perform();
      expect(browser.getTitle()).toEqual('APC UPS Selector/Calculator - Find the Correct Battery Backup');
    });
});