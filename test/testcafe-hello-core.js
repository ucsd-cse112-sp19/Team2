import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Running tests for core-hello`// declare the fixture
    .page `../web_components/core-hello/core-hello-test.html1`;

test("Adds 'Hello world,' to string", async t => {
    const shadowInput = await Selector(() => document.querySelector('core-hello').shadowRoot.querySelector('#main-text'));
    const userInput = await Selector(() => document.querySelector('core-hello'));
    const expectedOutput = shadowInput.textContent + userInput.textContent;
    await t
        .expect(shadowInput.innerText).eql('Hello world, ');
});

test("Adds 'Hello world,' to {input}", async t => {
    const shadowInput = await Selector(() => document.querySelector('core-hello').shadowRoot.querySelector('#main-text'));
    const userInput = await Selector(() => document.querySelector('core-hello'));

    await t
        .expect(shadowInput.innerText).eql("Hello world, ")
        .expect(userInput.innerText).eql('Meatspace!');
});

test("Check that tag-name is core-hello", async t => {
    const component = await Selector(() => document.querySelector('core-hello'));

    await t
        .expect(component.tagName).eql("core-hello");
});

test("Check for rainbow attribute", async t => {
    const component = await Selector(() => document.querySelector('core-hello'));

    await t
        .expect(component.hasAttribute("rainbow")).eql(true);
});