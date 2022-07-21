const BasePage = require("./base.page");

class NewLetterPage extends BasePage {
  get letterDestination() {
    return $("input[placeholder='Email address']");
  }

  get letterDestinationAfterFilling() {
    return $(".//span[contains(@class, 'composer-addresses-fakefield-inner')]");
  }

  get letterSubject() {
    return $("input[placeholder='Subject']");
  }

  get letterStatus() {
    return $(".mr0-5.mauto");
  }

  get closeLetterButton() {
    return $('button[data-testid*="close-button"]');
  }

  get letterDestionationFromDraft() {
    return $(".//span[contains(@class,'composer-addresses-fakefield-inner')]");
  }

  get sendLetterButton() {
    return $(".//span[text()='Send']");
  }

  get notificationSentLetter() {
    return $(".//span[text()='Message sent.']");
  }

  async validatedEmail(email) {
    return /^[a-zA-Z0-9]{1,}@[\w-]+\.[a-z]{3}$/i.test(email);
  }

  async validatedDate(date) {
    return /^\w{5} \w{2} \d{1,2}:\d{2} \D{2}$/i.test(date);
  }
}

module.exports = NewLetterPage;
