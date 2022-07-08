const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

Given(/^I am on the (\w+) page of ProtonMail$/, async (page) => {
  await loginPage.open(page);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await loginPage.login(username, password);
});

Then(/^I should see my mail account with (.*)$/, async (title) => {
  await securePage.verifyTitle(title);
});
