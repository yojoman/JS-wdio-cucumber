const BasePage = require("./base.page");

class DraftsPage extends BasePage {
  get titleOfFirstLetterFromDrafts() {
    return $(".//span[@role='heading']");
  }

  get letterDestionationFromDraft() {
    return $(".mr0-5.align-top");
  }

  get letterStatusInFolders() {
    return $(".//h3[text()='No messages found']");
  }
}

module.exports = DraftsPage;
