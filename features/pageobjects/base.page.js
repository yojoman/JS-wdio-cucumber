module.exports = class BasePage {
  async open(path) {
    return await browser.url(`/${path}`);
  }
};
