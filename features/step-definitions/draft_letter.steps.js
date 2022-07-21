const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();
const DraftsPage = require("../pageobjects/drafts.page");
const draftsPage = new DraftsPage();

When(/^I wait "(.*)" seconds$/, async (sec) => {
  await browser.pause(`${sec}000`);
});

Then(/^I expect Letter is saved automatically$/, async () => {
  expect(await newLetterPage.letterStatus.getText()).to.contains("Saved");
});

Then(/^I expect date has valid format$/, async () => {
  const date = await newLetterPage.letterStatus.getText();
  expect(await newLetterPage.validatedDate(date)).is.equal(true);
});

When(/^I open Drafts folder$/, async () => {
  await newLetterPage.closeLetterButton.click();
  await securePage.draftsFolderButton.waitForDisplayed();
  await securePage.draftsFolderButton.click();
});

Then(
  /^I expect Letter is present inside the folder with correct "(.*)" subject$/,
  async (subject) => {
    await draftsPage.titleOfFirstLetterFromDrafts.waitForDisplayed();
    expect(await draftsPage.titleOfFirstLetterFromDrafts.getText()).to.equal(
      subject
    );
  }
);
