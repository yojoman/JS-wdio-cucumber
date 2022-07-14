const BasePage = require("./base.page");

class UserMenuPage extends BasePage {
  get signOutButton() {
    return $(".//button[text()='Sign out']");
  }

  async signOut() {
    await this.signOutButton.waitForDisplayed();
    await this.signOutButton.click();
  }
}

module.exports = UserMenuPage;
