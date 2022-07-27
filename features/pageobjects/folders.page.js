const BasePage = require("./base.page");

class FolderPage extends BasePage {
  get selectAllCheckBox() {
    return $(".checkbox-input");
  }

  get deletePermanentlyButton() {
    return $("button[data-testid*='deletepermanently']");
  }

  get deletePermanentlySubmitButton() {
    return $(".//button[text()='Delete']");
  }

  letterStatusInFolders(text) {
    return $(`.//h3[text()='${text}']`);
  }
}

module.exports = new FolderPage();
