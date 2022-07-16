const BasePage = require("./base.page");

class LoginPage extends BasePage {
  get inputUserName() {
    return $('input[autocomplete="username"]');
  }

  get inputUserPassword() {
    return $("#password");
  }

  get staySignedIn() {
    return $("#staySignedIn");
  }

  get buttonSubmit() {
    return $("button[type=submit]");
  }
}

module.exports = LoginPage;
