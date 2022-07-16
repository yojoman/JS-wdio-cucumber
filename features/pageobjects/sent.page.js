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
}

module.exports = SentPage;
