const BasePage = require("./base.page");

class SecurePage extends BasePage {
  get newMessageButton() {
    return $(".//button[text()='New message']");
  }

  get draftsFolderButton() {
    return $("a[title*=Drafts]");
  }

  get sentFolderButton() {
    return $("a[title*=Sent]");
  }

  get userMenu() {
    return $(".//button[contains(@class,'relative')]");
  }

  // async verifyTitle(title) {
  //   await this.newMessageButton.waitForDisplayed();
  //   await expect(browser).toHaveTitleContaining(title);
  // }

  // async openNewMessage() {
  //   await this.newMessageButton.click();
  // }

  async openDraftsFolder() {
    await this.draftsFolderButton.waitForDisplayed();
    await this.draftsFolderButton.click();
  }

  async openSentFolder() {
    await this.sentFolderButton.click();
  }

  async openUserMenu() {
    await this.userMenu.click();
  }
}

module.exports = SecurePage;
