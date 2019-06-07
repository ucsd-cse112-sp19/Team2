import { Selector } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-link` // declare the fixture
   .page`http://127.0.0.1:8080/web_components/meat-link/meat-link-demo.html`;

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
    .expect(component.getStyleProperty('color')).eql('rgb(0, 0, 0)')
});

test("Cannot click disabled link", async t => {
  const component = await Selector(() => document.querySelector('#disabled-test').shadowRoot.querySelector('a'));
  await t
    .hover(component)
    .expect(component.getStyleProperty('cursor')).eql('not-allowed')
});

test("Test underline only on hover", async t => {
  const component = await Selector(() => document.querySelector('#underline-hover').shadowRoot.querySelector('a'));
  
  await t
    .expect(component.getStyleProperty('text-decoration')).eql('none solid rgb(0, 0, 0)')
    
  await t
   .hover(component)
   .expect(component.getStyleProperty('text-decoration')).eql('none solid rgb(0, 0, 0)') // ???
});

test("Test never hover attribute", async t => {
  const component = await Selector(() => document.querySelector('#underline-never').shadowRoot.querySelector('a'));
  
  await t
    .hover(component)
    .expect(component.getStyleProperty('text-decoration')).eql('none solid rgb(0, 0, 0)')
});

test("Test always underline attribute", async t => {
  const component = await Selector(() => document.querySelector('#underline-always').shadowRoot.querySelector('a'));
  await t
  .expect(component.getStyleProperty('text-decoration')).eql('underline solid rgb(0, 0, 0)')

  await t
    .hover(component)
    .expect(component.getStyleProperty('text-decoration')).eql('underline solid rgb(0, 0, 0)')
});

test("test-white has attributes underline and color", async t => {
  const component = getElementById("#test-white");
  await t
    .expect(component.getAttribute("underline")).eql("always")
    .expect(component.getAttribute("color")).eql("white")
});

test("test-white is white", async t => {
  const component = getElementById("#test-white");

  await t
    .expect(component.getAttribute("color")).eql("white")
});

test("test-white is white CSS", async t => {
  const component =  await Selector(() => document.querySelector('#test-white').shadow.querySelector("a"));
  await t
    .expect(component.getStyleProperty('color')).eql('rgb(255, 255, 255)')
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

test("Can click link", async t => {
  const component = await Selector(() => document.querySelector('#color').shadow.querySelector("a"));
  await t
    .click(component)

  const newPage = await Selector(() => document.querySelector('#text-test'))
  await t
  .expect(newPage.textContent).eql("Basic buttons");
});


