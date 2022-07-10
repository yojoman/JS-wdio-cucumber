const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

Given(/^User on the (\w+) page of ProtonMail$/, async (page) => {
  await loginPage.open(page);
});

When(/^User logins with (\w+) and (.+)$/, async (username, password) => {
  await loginPage.login(username, password);
});

Then(/^User should see their mail account with (.*)$/, async (title) => {
  await securePage.verifyTitle(title);
});
