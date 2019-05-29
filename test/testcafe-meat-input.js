import { Selector, ClientFunction } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-input` // declare the fixture
  .page`../web_components/meat-input/meat-input-demo.html`;

const getElementById = Selector(id => document.querySelector(id));

test("Check that the size attribute exists", async t => {
  const component = await getElementById("meat-input");
  await t.expect(component.getAttribute("size")).eql("small");
});

test("Check that the placeholder attribute exists", async t => {
  const component = await getElementById("meat-input");
  await t.expect(component.getAttribute("placeholder")).eql("Small");
});

test("Check that the autocomplete attribute exists", async t => {
  const component = await getElementById("meat-input");
  await t.expect(component.getAttribute("autocomplete")).eql("off");
});

test("Check that tag-name is meat-input", async t => {
  const component = getElementById("meat-input");
  await t.expect(component.tagName).eql("meat-input");
});

test("Click button", async t => {
  const component = getElementById("meat-input");
  await t.click(component);
});

test("Hover button", async t => {
  const component = getElementById("meat-input");
  await t.hover(component);
});
