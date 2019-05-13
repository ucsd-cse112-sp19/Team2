const { By } = require("selenium-webdriver");
const { expect, assert } = require("chai");
const path = require("path");

async function getExtShadowRoot() {
  let shadowHost;
  await (shadowHost = driver.findElement(By.css('core-hello')));
  return driver.executeScript("return arguments[0].shadowRoot", shadowHost);
}
async function findShadowDomElement(shadowDomElement) {
  let shadowRoot;
  let element;
  await (shadowRoot = getExtShadowRoot());
  await shadowRoot.then(async result => {
    await (element = result.findElement(By.css(shadowDomElement)));
  });

  return element;
}

describe("core-hello unit tests", () => {
  const driver = global.driver;

  it("should test attributes of core-hello", async () => {
    await driver.get(
      "http://localhost:8080/web_components/core-hello/core-hello-test.html"
    );

    let shadowElem = findShadowDomElement('main-text');
    // let shadowRoot = getExtShadowRoot();
    // assert.equal(shadowRoot instanceof ShadowRoot, true);

    // const altAttribute = await driver.findElement(By.className('section-img-logo')).getAttribute('alt');

    // expect(altAttribute).to.equal('BrowserStack logo');
    assert.equal(shadowElem.getAttribute('innerHTML'), "Hello world, ");
  });

  after(async () => driver.quit());
});
