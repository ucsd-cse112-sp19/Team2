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
});

test("test-white has attributes underline and color", async t => {
  const component = getElementById("#test-white");
  await t
    .expect(component.getAttribute("underline")).eql("always")
    .expect(component.getAttribute("color")).eql("white")
});

test("test-white is white", async t => {
  const component = getElementById("#test-white");
  //const style = window.getComputedStyle(component.shadowRoot.querySelector("a"));
  await t
    //.expect(style.color).eql('rgb(33, 37, 41)')
    .expect(component.getAttribute("color")).eql("white")
});

test("test-red has attributes underline and color", async t => {
  const component = getElementById("#test-red");
  await t
    .expect(component.getAttribute("underline")).eql("hover")
    .expect(component.getAttribute("color")).eql("red");
});

test("test-red has attributes underline and color", async t => {
  const component = getElementById("#test-red");
  await t
    .expect(component.getAttribute("color")).eql("red")
});
