const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();

When(/^I click on New message button$/, async () => {
  await securePage.newMessageButton.click();
});

When(/^I fill To field with "(.*)"$/, async (destination) => {
  await newLetterPage.letterDestination.waitForDisplayed();
  await newLetterPage.letterDestination.setValue(destination);
});

When(/^I fill Subject with "(.*)"$/, async (subject) => {
  await newLetterPage.letterSubject.setValue(subject);
  await newLetterPage.letterSubject.click();
});

When(/^I fill Message Area with "(.*)"$/, async (text) => {
  await browser.keys("Tab");
  await browser.keys(text);
});

Then(
  /^I expect Letter is filled properly with "(.*)" and "(.*)" fields$/,
  async (destination, subject) => {
    await newLetterPage.letterDestinationAfterFilling.waitForDisplayed();
    expect(await newLetterPage.letterDestinationAfterFilling.getAttribute('title')).to.equal(destination);
    expect(await newLetterPage.letterSubject.getValue()).to.equal(subject);
  }
);