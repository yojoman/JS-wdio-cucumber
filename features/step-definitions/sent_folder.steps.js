const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const SentPage = require("../pageobjects/sent.page");
const sentPage = new SentPage();

When(/^I open Sent folder$/, async () => {
  await securePage.sentFolderButton.click();
});

Then(/^I expect to see Letter with "(.*)" subject$/, async (subject) => {
  await expect(sentPage.titleOfFirstLetterFromDrafts).toBeExisting();
  await expect(sentPage.titleOfFirstLetterFromDrafts).toHaveTextContaining(
    subject
  );
});