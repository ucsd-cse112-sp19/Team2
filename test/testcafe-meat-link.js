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

test("Hover link", async t => {
  const component = getElementById("meat-link");
  await t.hover(component);
});