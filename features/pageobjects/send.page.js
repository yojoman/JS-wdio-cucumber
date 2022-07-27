const BasePage = require("./base.page");

class SendPage extends BasePage {
    get sentFolderButton() {
        return $("a[title*=Sent]");
      }
      
  get titleOfFirstLetterFromSent() {
    return $(".//span[@role='heading']");
  }

  get sentFolderButton() {
    return $("a[title*=Sent]");
  }
 }

module.exports = new SendPage();