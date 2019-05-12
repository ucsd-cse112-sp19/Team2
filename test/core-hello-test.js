const { By } = require('selenium-webdriver');
const { expect } = require('chai');
const path = require('path');
const url = `file:///${path.join(__dirname, 'core-hello-test.html')}`;

describe('core-hello unit tests', () => {
    const driver = global.driver;

    it('should test attributes of core-hello', async () => {
        await driver.get(url);
        // await driver.get('https://meat-space.org/web_components/core-hello/core-hello-test.html');
        await (shadowRoot = driver.findElement(By.css('core-hello')));
        assert.equal(shadowRoot instanceof ShadowRoot, true);
        // const altAttribute = await driver.findElement(By.className('section-img-logo')).getAttribute('alt');

        // expect(altAttribute).to.equal('BrowserStack logo');
    });

    after(async () => driver.quit());
});


