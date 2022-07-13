const { When, Then, AfterAll } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^I open user menu$/, async () => {
  await securePage.openUserMenu();
});

When(/^I click on Sign Out button$/, async () => {
  await securePage.signOut();
});

Then(/^I expect to be signed out and see "(.*)" title$/, async (title) => {
  await loginPage.verifyTitle(title)
});

AfterAll (/^Verify that signing out was successful$/, async()=> {
  await browser.refresh();
  await loginPage.verifyTitle("Proton Account");
  await browser.saveScreenshot("testing result.png");
})