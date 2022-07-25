const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const draftsPage = require("../pageobjects/drafts.page");
const newLetterPage = require("../pageobjects/new_letter.page");

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
    expect(await newLetterPage.letterSubject.getAttribute("value")).to.equal(
      subject
    );
  }
);

Then(/^I expect Email "(.*)" matches defined format$/, async (email) => {
  expect(await newLetterPage.validatedEmail(email)).to.equal(true);
});