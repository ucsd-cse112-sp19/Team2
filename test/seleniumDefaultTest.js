const { By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest', () => {
    const driver = global.driver;

    it('should go to meat-space.org and check the BrowserStack img alt attribute', async () => {
        await driver.get('https://meat-space.org/news.html');
        // await driver.get('https://meat-space.org/web_components/core-hello/core-hello-test.html');
        // await (shadowRoot = driver.findElement(By.css('core-hello')));
        // assert.equal(shadowRoot instanceof ShadowRoot, true);
        const altAttribute = await driver.findElement(By.className('section-img-logo')).getAttribute('alt');

        expect(altAttribute).to.equal('BrowserStack logo');
    });

    after(async () => driver.quit());
});


