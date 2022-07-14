const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();

When(/^I click on New message button$/, async () => {
  await securePage.openNewMessage();
});

When(/^I fill To field with "(.*)"$/, async (destination) => {
  await newLetterPage.fillDestination(destination);
});

When(/^I fill Subject with "(.*)"$/, async (subject) => {
  await newLetterPage.fillSubject(subject);
});

When(/^I fill Message Area with "(.*)"$/, async (text) => {
  await newLetterPage.fillTextField(text);
});

Then(
  /^I expect Letter is filled properly with "(.*)" and "(.*)" fields$/,
  async (destination, subject) => {
    await newLetterPage.verifyNewLetterFilledProperly(destination, subject);
  }
);
