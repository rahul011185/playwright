// @ts-check
const { test, expect } = require('@playwright/test');
test.skip('has title',async({ page }) => {
   await page.goto('https://www.demoblaze.com/index.html');
   const pageTitle= await page.title();
   const urlC= await page.url();
   await expect(page).toHaveTitle('STORE');
   console.log(urlC);
   console.log(pageTitle)
});


