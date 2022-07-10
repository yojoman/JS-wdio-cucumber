const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^User clicks on 'New message' button$/, async () => {
  await securePage.openNewMessage();
});

When(/^User fills 'To' field with "(.*)"$/, async (destination) => {
  await securePage.fillDestination(destination);
});

When(/^User fills 'Subject' with "(.*)"$/, async (subject) => {
  await securePage.fillSubject(subject);
});

When(/^User fills 'Message Area' with "(.*)"$/, async (text) => {
  await securePage.fillTextField(text);
});

Then(
  /^Letter is filled properly with "(.+)" and "(.*)" fields$/,
  async (destination, subject) => {
    await securePage.verifyNewLetterFilledProperly(destination, subject);
  }
);

// When(/^We wait some time$/, async () => {
//   await securePage.waitingUntilLetterSaved()
// });

// Then(/^Letter will be saved automatically$/, async () => {
//   await securePage.verifyLetterIsSaved();
// });

// When(/^We open Draft folder$/, async () => {
//   await securePage.closeLetter();
//   await securePage.openDraftsFolder();
// });

// Then(
//   /^Letter will be present inside the folder with correct "(.+)" subject$/,
//   async (subject) => {
//     await securePage.verifyLetterInDrafts(subject);
//   }
// );
