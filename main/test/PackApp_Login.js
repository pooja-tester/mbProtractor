describe("PPD Login_Logout Test",function()
{
 it('Login using existing user', function() 
  {
   
    //launch browser

     browser.get("https://ppd-dev.milkbasket.com/index.html#/login");
      browser.manage().window().maximize();
      element(by.xpath("//input[@class='text-input text-input-md']")).sendKeys("2444444531");
      element(by.xpath("//span[text()='Send OTP']")).click();
      browser.sleep(8000);

      element(by.xpath("//input[@class='text-input text-input-md']")).sendKeys("1234");
      element(by.xpath("//span[text()='Verify']")).click();
     
      browser.sleep(4000);

      expect(element(by.xpath("//ion-label[text()='Select Hub']")).getText()).toEqual("Select Hub");
      //element(by.xpath("//button[@id='select-12-0']")).click();
      //element(by.xpath("//div[@class='alert-radio-group']/button/span/div")).click();
     // restart  browser with new session
      browser.restart();
    });
   
         it('Login using non existing user', function() 
  {
    browser.get("https://ppd-dev.milkbasket.com/index.html#/login");
    
      browser.manage().window().maximize();
     element(by.xpath("//input[@class='text-input text-input-md']")).sendKeys("1234567890");
    browser.sleep(8000);
    element(by.xpath("//span[text()='Send OTP']")).click();
    browser.sleep(8000);
    expect(element(by.xpath("//h3[@id='alert-subhdr-0']")).getText()).toEqual("messages.incorrect_mobile");  
    browser.sleep(8000);

    
  });
});