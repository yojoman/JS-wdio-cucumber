const BasePage = require("./base.page");

class NewLetterPage extends BasePage {
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

  get letterDestionationFromDraft() {
    return $(".mr0-5.align-top");
  }

  get sendLetterButton() {
    return $(".//span[text()='Send']");
  }

  get notificationSentLetter() {
    return $(".//span[text()='Message sent.']");
  }

  // async fillDestination(destination) {
  //   await this.letterDestination.waitForDisplayed();
  //   await this.letterDestination.setValue(destination);
  // }

  // async fillSubject(subject) {
  //   await this.letterSubject.setValue(subject);
  //   await this.letterSubject.click();
  // }

  // async fillTextField(text) {
  //   await browser.keys("Tab");
  //   await browser.keys(text);
  // }

  // async verifyNewLetterFilledProperly(destination, subject) {
  //   await this.letterDestinationAfterFilling.waitForDisplayed();
  //   await expect(this.letterDestinationAfterFilling).toHaveTextContaining(
  //     destination
  //   );
  //   await expect(this.letterSubject).toHaveValueContaining(subject);
  // }

  async waitingUntilLetterSaved() {
    await this.letterStatus.waitForExist();
  }

  async verifyLetterIsSaved() {
    await expect(this.letterStatus).toHaveTextContaining("Saved");
  }

  async closeLetter() {
    await this.closeLetterButton.click();
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

  async validatedEmail(email) {
    return /^[a-zA-Z0-9]{1,}@[\w-]+\.[a-z]{3}$/i.test(email);
  }
}

module.exports = NewLetterPage;
