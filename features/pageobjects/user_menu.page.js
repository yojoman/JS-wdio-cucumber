const BasePage = require("./base.page");

class UserMenuPage extends BasePage {
  get signOutButton() {
    return $(".//button[text()='Sign out']");
  }

  get userMenuButton() {
    return $(".//button[contains(@class,'relative')]");
  }
}

module.exports = new UserMenuPage();
