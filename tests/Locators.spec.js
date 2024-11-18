//const { test, expect } = require('@playwright/test');
import { test, expect } from "@playwright/test"
    test.skip('has title',async({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');
    await page.fill('id=loginusername','RahulKatoch1985')
    await page.fill('id=loginpassword','Test@123')
    await page.click('[onclick="logIn()"]');
    const namePanel= await page.locator("#nameofuser");
    await expect(namePanel).toContainText('Welcome RahulKatoch1985');
    const nameElements=await page.$$("#tbodyid > div:nth-child(n) > div > div > h4 > a");
    for( const nameElement of nameElements)
    {
       console.log(await nameElement.textContent());
    }
 });
 test.skip('Abcd',async({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');
    await page.fill('id=loginusername','RahulKatoch1985');
    await page.fill('id=loginpassword','Test@123');
    await page.click('[onclick="logIn()"]');
    const slideImage= await page.getByAltText("First slide");
    await expect.soft(slideImage).toBeVisible();   
 });
 test.only('Abcd',async({ page }) => {
   await page.goto('https://www.demoblaze.com/index.html');
   await page.click('#login2');
   await page.fill('id=loginusername','RahulKatoch1985');
   await page.fill('id=loginpassword','Test@123');
   await page.click('[onclick="logIn()"]');
   const slideImage= await page.getByAltText("First slide");
   await expect.soft(slideImage).toBeVisible();   
});
