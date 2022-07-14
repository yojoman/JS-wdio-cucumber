const BasePage = require("./base.page");

class DraftsPage extends BasePage {
  get titleOfFirstLetterFromDrafts() {
    return $("div[style='--index:0;']");
  }

  get letterDestionationFromDraft() {
    return $(".mr0-5.align-top");
  }

  get letterStatusInFolders() {
    return $(".//h3[text()='No messages found']");
  }

  async verifyLetterInDrafts(subject) {
    await this.titleOfFirstLetterFromDrafts.waitForDisplayed();
    await expect(this.titleOfFirstLetterFromDrafts).toBeExisting();
    await expect(this.titleOfFirstLetterFromDrafts).toHaveTextContaining(
      subject
    );
  }

  async openLetterFromDrafts() {
    await this.titleOfFirstLetterFromDrafts.click();
  }

  async verifyNoLettersInDrafts() {
    await this.letterStatusInFolders.waitForDisplayed();
    await expect(this.letterStatusInFolders).toHaveTextContaining(
      "No messages found"
    );
  }
}

module.exports = DraftsPage;
