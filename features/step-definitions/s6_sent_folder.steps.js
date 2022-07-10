const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^User opens 'Sent' folder$/, async () => {
  await securePage.openSentFolder();
});

Then(/^The letter with "(.*)" subject should be present$/, async (subject) => {
  await securePage.verifyLettersInSent(subject);
});