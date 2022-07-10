const { When, Then, AfterAll } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^User opens user menu$/, async () => {
  await securePage.openUserMenu();
});

When(/^Click on 'Sign Out' button$/, async () => {
  await securePage.signOut();
});

Then(/^User should be signed out and see "(.*)" title$/, async (title) => {
  await loginPage.verifyTitle(title)
});

AfterAll (/^Verify that signing out was successful$/, async()=> {
  await browser.refresh();
  await loginPage.verifyTitle("Proton Account");
  await browser.saveScreenshot("testing result.png");
})