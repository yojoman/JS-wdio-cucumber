const BasePage = require("./base.page");

class DraftsPage extends BasePage {
  get titleOfFirstLetterFromDrafts() {
    return $(".//span[@role='heading']");
  }

  get letterStatusInFolders() {
    return $(".//h3[text()='No messages found']");
  }
}

module.exports = new DraftsPage();
