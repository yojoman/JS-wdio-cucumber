const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^I click on New message button$/, async () => {
  await securePage.openNewMessage();
});

When(/^I fill To field with "(.*)"$/, async (destination) => {
  await securePage.fillDestination(destination);
});

When(/^I fill Subject with "(.*)"$/, async (subject) => {
  await securePage.fillSubject(subject);
});

When(/^I fill Message Area with "(.*)"$/, async (text) => {
  await securePage.fillTextField(text);
});

Then(
  /^I expect Letter is filled properly with "(.*)" and "(.*)" fields$/,
  async (destination, subject) => {
    await securePage.verifyNewLetterFilledProperly(destination, subject);
  }
);
