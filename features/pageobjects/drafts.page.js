const BasePage = require("./base.page");

class DraftsPage extends BasePage {
  get draftsFolderButton() {
    return $("a[title*=Drafts]");
  }

  get titleOfFirstLetterFromDrafts() {
    return $(".//span[@role='heading']");
  }

  letterStatusInFolders(text) {
    return $(`.//h3[text()='${text}']`);
  }
}

module.exports = new DraftsPage();
