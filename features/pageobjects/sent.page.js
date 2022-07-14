const BasePage = require("./base.page");

class SentPage extends BasePage {
  get titleOfFirstLetterFromDrafts() {
    return $("div[style='--index:0;']");
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
}

module.exports = SentPage;
