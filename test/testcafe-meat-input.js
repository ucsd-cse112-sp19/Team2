import { Selector, ClientFunction } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-input` // declare the fixture
  .page`../web_components/meat-input/meat-input-demo.html`;

const getElementById = Selector(id => document.querySelector(id));
const getShadow = Selector(root => document.querySelector(root).shadowRoot); 

test("Check that the autocomplete attribute exists", async t => {
  const component = await getElementById("meat-input");
  await t.expect(component.getAttribute("autocomplete")).eql("off");
});
test("Visuals of Default Button", async t => {
  const component = await getElementById("meat-input");
  const shadowInput = await Selector(() => document.querySelector('#large-input').shadowRoot.querySelector('input'));
  await t.expect(shadowInput.getStyleProperty('cursor')).eql("text");
})
test("Check that the size attribute exists", async t => {
  const component = await getElementById("#large-input");
  await t.expect(component.getAttribute("size")).eql("large");
});

test("Allows user input", async t => { 
  const component = await getElementById("#large-input");
  await t
    .typeText(component, "meat-space")
    .expect(component.getAttribute("placeholder")).eql("Large")
})

test("Check that the placeholder attribute exists", async t => {
  const component = await getElementById("#small-input");
  await t.expect(component.getAttribute("placeholder")).eql("Small");
});

test("Visuals of Disabled Button", async t => {
  const component = await getElementById("#medium");
  const shadowInput = await Selector(() => document.querySelector('#medium').shadowRoot.querySelector('#input'));
  await t
    .hover(component)
    .expect(shadowInput.getStyleProperty('width')).eql("159px");
});

test("Check that tag-name is meat-input", async t => {
  const component = getElementById("meat-input");
  await t.expect(component.tagName).eql("meat-input");
});
/*
test("Click button", async t => {
  const component = getElementById("meat-input");
  const shadowInput = await Selector(() => document.querySelector('#basic').shadowRoot.querySelector('#input'));
  await t
    .click(shadowInput)
    .expect(shadowInput.getStyleProperty('border')).eql('');
});
*/
test("Hover button", async t => {
  const component = getElementById("meat-input");
  await t.hover(component);
});

test("Typing text into input-field", async t => { 
  const shadowInput = await Selector(() => document.querySelector('#large-input').shadowRoot.querySelector('#input'));

  await t
    .typeText(shadowInput, "meat-space")
    .expect(shadowInput.value).eql("Stuff inside tag should go inside inputmeat-space");
})

test("Cannot type in disabled input-field", async t => { 
  const shadowInput = await Selector(() => document.querySelector('#disabledtest').shadowRoot.querySelector('#input'));

  await t
    .typeText(shadowInput, "meat-space")
    .expect(shadowInput.value).eql("");
})
