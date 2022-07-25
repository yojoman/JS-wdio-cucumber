const BasePage = require("./base.page");

class UserMenuPage extends BasePage {
  get signOutButton() {
    return $(".//button[text()='Sign out']");
  }
}

module.exports = new UserMenuPage();
