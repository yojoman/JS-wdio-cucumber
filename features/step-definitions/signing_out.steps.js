const { When, Then, AfterAll } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const UserMenuPage = require("../pageobjects/user_menu.page");
const userMenuPage = new UserMenuPage();

When(/^I open user menu$/, async () => {
  await securePage.userMenuButton.click();
});

When(/^I click on Sign Out button$/, async () => {
  await userMenuPage.signOutButton.waitForDisplayed();
  await userMenuPage.signOutButton.click();
});

Then(/^I expect to be signed out and see "(.*)" title$/, async (title) => {
  await loginPage.inputUserPassword.waitForDisplayed();
  await loginPage.verifyTitle(title);
});

AfterAll(/^Verify that signing out was successful$/, async () => {
  await browser.refresh();
  await loginPage.verifyTitle("Proton Account");
  await browser.saveScreenshot("testing result.png");
});