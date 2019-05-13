const { By } = require("selenium-webdriver");
const { expect } = require("chai");
const path = require("path");
const assert = chai.assert; 

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
    // await driver.get('https://meat-space.org/web_components/core-hello/core-hello-test.html');
    // await (shadowRoot = driver.findElement(By.css("#core-hello")));
    const shadowRoot = findShadowDomElement('core-hello')
    assert.equal(shadowRoot instanceof ShadowRoot, true);
    // const altAttribute = await driver.findElement(By.className('section-img-logo')).getAttribute('alt');

    // expect(altAttribute).to.equal('BrowserStack logo');
  });

  after(async () => driver.quit());
});
