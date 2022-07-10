const { Before, Given, When, Then} = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const loginPage = new LoginPage();
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

Before (/^Mazimize browser window$/, async()=>{
  await browser.maximizeWindow();
})

Given(/^User on the (\w+) page of ProtonMail$/, async (page) => {
  await loginPage.open(page);
});

When(
  /^User logins with "(\w+)" and "(.+)" data$/,
  async (username, password) => {
    await loginPage.login(username, password);
  }
);

Then(
  /^User should see their mail account with "(.*)" title$/,
  async (title) => {
    await securePage.verifyTitle(title);
  }
);
