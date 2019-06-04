import { Selector } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-link` // declare the fixture
   .page`../web_components/meat-link/meat-link-demo.html`;

const getElementById = Selector(id => document.querySelector(id));

test("Check that tag-name is meat-link", async t => {
  const component = getElementById("meat-link");
  await t.expect(component.tagName).eql("meat-link");
});

test("Click link", async t => {
  const component = getElementById("meat-link");
  await t.click(component);
});

test("Correct CSS color", async t => {
  const component = getElementById("#color");
  await t
    .expect(component.getStyleProperty('color')).eql('rgb(33, 37, 41)')
});

test("Cannot click disabled link", async t => {
  const component = await Selector(() => document.querySelector('#disabled').shadowRoot.querySelector('a'));
  await t
    .hover(component)
    .expect(component.getStyleProperty('cursor')).eql('pointer')
});

test("Hover link", async t => {
  const component = getElementById("#test");
  await t
    .hover(component)
    //.expect(component.getStyleProperty('text-decoration')).eql('none solid rgb(33, 37, 41)')
});
