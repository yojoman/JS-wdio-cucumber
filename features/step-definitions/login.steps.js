const { Before, Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

Before(/^Mazimize browser window$/, async () => {
  await browser.maximizeWindow();
});

Given(/^I am on the (.*) page of ProtonMail$/, async (page) => {
  await loginPage.open(page);
});

When(/^I login with "(.*)" and "(.*)" data$/, async (username, password) => {
  await loginPage.inputUserPassword.waitForDisplayed();
  await loginPage.inputUserName.setValue(username);
  await loginPage.inputUserPassword.setValue(password);
  await loginPage.staySignedIn.click();
  await loginPage.buttonSubmit.click();
});

Then(/^I expect to see my mail account with "(.*)" title$/, async (title) => {
  await securePage.newMessageButton.waitForDisplayed();
  expect(await browser.getTitle()).to.include(title);
});
