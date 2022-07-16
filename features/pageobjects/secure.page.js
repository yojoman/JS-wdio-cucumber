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

  get userMenuButton() {
    return $(".//button[contains(@class,'relative')]");
  }
}

module.exports = SecurePage;
