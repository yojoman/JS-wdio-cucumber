const BasePage = require("./base.page");

class SecurePage extends BasePage {
  get newMessageButton() {
    return $(".//button[text()='New message']");
  }

  get letterDestination() {
    return $("input[placeholder='Email address']");
  }

  get letterDestinationAfterFilling() {
    return $("div[data-testid*=address]");
  }

  get letterSubject() {
    return $("input[placeholder='Subject']");
  }

  get letterStatus() {
    return $(".mr0-5.mauto");
  }

  get closeLetterButton() {
    return $('button[data-testid*="close-button"]');
  }

  get draftsFolderButton() {
    return $("a[title*=Drafts]");
  }

  get titleOfFirstLetterFromDrafts() {
    return $("div[style='--index:0;']");
  }

  get letterDestionationFromDraft() {
    return $(".mr0-5.align-top");
  }

  get sendLetterButton() {
    return $(".//span[text()='Send']");
  }

  get letterStatusInFolders() {
    return $(".//h3[text()='No messages found']");
  }

  get sentFolderButton() {
    return $("a[title*=Sent]");
  }

  get selectAllCheckBox() {
    return $(".checkbox-input");
  }

  get deletePermanentlyButton() {
    return $("button[data-testid*='deletepermanently']");
  }

  get deletePermanentlySubmitButton() {
    return $(".//button[text()='Delete']");
  }

  get userMenu() {
    return $(".//button[contains(@class,'relative')]");
  }

  get signOutButton() {
    return $(".//button[text()='Sign out']");
  }

  get notificationSentLetter() {
    return $(".//span[text()='Message sent.']");
  }

  async verifyTitle(title) {
    await this.newMessageButton.waitForDisplayed();
    await expect(browser).toHaveTitleContaining(title);
  }

  async openNewMessage() {
    await this.newMessageButton.click();
  }

  async fillDestination(destination) {
    await this.letterDestination.waitForDisplayed();
    await this.letterDestination.setValue(destination);
  }

  async fillSubject(subject) {
    await this.letterSubject.setValue(subject);
    await this.letterSubject.click();
  }

  async fillTextField(text) {
    await browser.keys("Tab");
    await browser.keys(text);
  }

  async verifyNewLetterFilledProperly(destination, subject) {
    await this.letterDestinationAfterFilling.waitForDisplayed();
    await expect(this.letterDestinationAfterFilling).toHaveTextContaining(
      destination
    );
    await expect(this.letterSubject).toHaveValueContaining(subject);
  }

  async waitingUntilLetterSaved() {
    await this.letterStatus.waitForExist();
  }

  async verifyLetterIsSaved() {
    await expect(this.letterStatus).toHaveTextContaining("Saved");
  }

  async closeLetter() {
    await this.closeLetterButton.click();
  }

  async openDraftsFolder() {
    await this.draftsFolderButton.waitForDisplayed();
    await this.draftsFolderButton.click();
  }

  async verifyLetterInDrafts(subject) {
    await this.titleOfFirstLetterFromDrafts.waitForDisplayed();
    await expect(this.titleOfFirstLetterFromDrafts).toBeExisting();
    await expect(this.titleOfFirstLetterFromDrafts).toHaveTextContaining(
      subject
    );
  }
  
  async validatedEmail(str) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i.test(
      str
    );
  }

  async openLetterFromDrafts() {
    await this.titleOfFirstLetterFromDrafts.click();
  }

  async letterContainsCorrectInfo(destination, subject) {
    await this.letterSubject.waitForDisplayed();
    await expect(this.letterDestionationFromDraft).toHaveTextContaining(
      destination
    );
    await expect(this.letterSubject).toHaveValueContaining(subject);
  }

  async sendLetter() {
    await this.sendLetterButton.waitForDisplayed();
    await this.sendLetterButton.click();
  }

  async verifyLetterSent() {
    await this.notificationSentLetter.waitForDisplayed();
    await expect(this.notificationSentLetter).toHaveTextContaining(
      "Message sent"
    );
  }

  async verifyNoLettersInDrafts() {
    await this.letterStatusInFolders.waitForDisplayed();
    await expect(this.letterStatusInFolders).toHaveTextContaining(
      "No messages found"
    );
  }

  async openSentFolder() {
    await this.sentFolderButton.click();
  }

  async verifyLettersInSent(subject) {
    await expect(this.titleOfFirstLetterFromDrafts).toBeExisting();
    await expect(this.titleOfFirstLetterFromDrafts).toHaveTextContaining(
      subject
    );
  }

  async sellectAllLetters() {
    await this.selectAllCheckBox.click();
  }

  async deleteAllLettersFromSent() {
    await this.deletePermanentlyButton.click();
  }

  async confirmDeletionAllLettersFromSent() {
    await this.deletePermanentlySubmitButton.waitForDisplayed();
    await this.deletePermanentlySubmitButton.click();
  }

  async verifyLettersNotPresentInSent() {
    await this.letterStatusInFolders.waitForDisplayed();
    await expect(this.letterStatusInFolders).toBeExisting();
    await expect(this.letterStatusInFolders).toHaveTextContaining(
      "No messages found"
    );
  }

  async openUserMenu() {
    await this.userMenu.click();
  }

  async signOut() {
    await this.signOutButton.waitForDisplayed();
    await this.signOutButton.click();
  }
}

module.exports = SecurePage;
