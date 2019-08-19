describe('protractor test', function() {
    it('should have a title', function() {
      browser.get('https://www.zagat.com/');
      element(by.xpath("//a[contains(@class, 'zgt-latest-content-more')]")).click();
      element(by.xpath("//span[contains(@class, 'zgt-media-card-title-text') and text()='The 50 Best Restaurants in Washington DC']")).click();
      element(by.xpath("//span[contains(@class, 'zgt-basic-facts-title-text') and text()='Himitsu']")).click();
        expect(browser.getTitle()).toEqual('The 50 Best Restaurants in Washington DC - Zagat');
    });
});