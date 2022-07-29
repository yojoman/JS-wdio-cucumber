const { When, Then, AfterAll } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const loginPage = require("../pageobjects/login.page");
const userMenuPage = require("../pageobjects/user_menu.page");

When(/^I open user menu$/, async () => {
  await userMenuPage.userMenuButton.click();
});

When(/^I click on Sign Out button$/, async () => {
  await userMenuPage.signOutButton.waitForDisplayed();
  await userMenuPage.signOutButton.click();
});

Then(/^I expect to be signed out and see "(.*)" title$/, async (title) => {
  await loginPage.inputUserPassword.waitForDisplayed();
  expect(await browser.getTitle()).to.equal(title);
});

Then(/^I refresh page$/, async () => {
  await browser.refresh();
});

AfterAll(/^Make a screenshot$/, async () => {
  await browser.saveScreenshot("reports/testing result.png");
});
