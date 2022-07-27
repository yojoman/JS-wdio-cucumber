const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const newLetterPage = require("../pageobjects/new_letter.page");
const draftsPage = require("../pageobjects/drafts.page");

When(/^I wait "(.*)" seconds$/, async (sec) => {
  await browser.pause(sec * 1000);
});

Then(/^I expect "(.*)" text is displayed on Letter$/, async (text) => {
  expect(await newLetterPage.letterStatus.getText()).to.contains(text);
});

Then(/^I expect saved Letter date has HH:MM XM format$/, async () => {
  const date = await newLetterPage.letterStatus.getText();
  expect(await newLetterPage.validatedDate(date)).is.equal(true);
});

When(/^I open Drafts folder$/, async () => {
  await newLetterPage.closeLetterButton.click();
  await draftsPage.draftsFolderButton.waitForDisplayed();
  await draftsPage.draftsFolderButton.click();
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

When(/^I open the last letter from Drafts$/, async () => {
  await draftsPage.titleOfFirstLetterFromDrafts.click();
});

Then(
  /^I expect Letter contains correct "(.*)" and "(.*)" fields$/,
  async (destination, subject) => {
    await newLetterPage.letterSubject.waitForDisplayed();
    expect(
      await newLetterPage.letterDestionationFromDraft.getAttribute("title")
    ).to.equal(destination);
    expect(await newLetterPage.letterSubject.getValue()).to.equal(subject);
  }
);

Then(/^I expect Email "(.*)" matches defined format$/, async (email) => {
  expect(await newLetterPage.validatedEmail(email)).to.equal(true);
});
