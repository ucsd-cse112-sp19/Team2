import { Selector, ClientFunction } from 'testcafe'; // first import testcafe selectors

fixture `Running tests for meat-button`// declare the fixture
    .page `../web_components/meat-button/meat-button-demo.html`;

const getElementById = Selector(id => document.querySelector(id));
const setAttribute = ClientFunction((id, attributeName, value) => {
    document.querySelector(id).setAttribute(attributeName, value);
});

test("Check that color attribute exists", async t => {
    const component = await getElementById('meat-button');
    await t
        .expect(component.hasAttribute("color")).eql(true);
});
test("Check white color attribute", async t => {
    const component = await getElementById('meat-button');
    await t
        .expect(component.getAttribute("color")).eql('white');
});

test("Check that tag-name is meat-button", async t => {
    const component = getElementById('meat-button');
    await t
        .expect(component.tagName).eql("meat-button");
});

test("Click button", async t => {
    const component = getElementById('meat-button');
    await t
        .click(component);
});


test("Hover button", async t => {
    const component = getElementById('meat-button');
    await t
        .hover(component);
});

test("Check that round attribute exists", async t => {
    const component = await getElementById('meat-button');
    await t
        .expect(component.hasAttribute("round")).eql(true);
});
