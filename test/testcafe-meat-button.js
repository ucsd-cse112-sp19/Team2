import { Selector, ClientFunction } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-button` // declare the fixture
  .page`../web_components/meat-button/meat-button-demo.html`;

const getElementById = Selector(id => document.querySelector(id));
const setAttribute = ClientFunction((id, attributeName, value) => {
  document.querySelector(id).setAttribute(attributeName, value);
});

test("Check that color attribute exists", async t => {
  const component = await getElementById("meat-button");
  await t.expect(component.hasAttribute("color")).eql(true);
});
test("Check white color attribute", async t => {
  const component = await getElementById("meat-button");
  await t.expect(component.getAttribute("color")).eql("white");
});

test("Check that tag-name is meat-button", async t => {
  const component = getElementById("meat-button");
  await t.expect(component.tagName).eql("meat-button");
});

test("Click button", async t => {
  const component = getElementById("meat-button");
  await t.click(component);
});

test("Hover button", async t => {
  const component = getElementById("meat-button");
  await t.hover(component);
});

//describe('Tests meat-button disabled functionality', function() { 

  // it ("should be that an undisabled button is clickable (disabled clicking testing must be in codeclimate)", function(done) { 
    
  //     comp.disabled = false;
  //     clicked = false;
  //     comp.addEventListener("click", function(){
  //       clicked = true;
  //       console.log("clicked!");
  //     });
  //     comp.click();
  //     assert.equal(clicked, true);
  //     done();
  // })
  //  it ("should be that a disabled button is unclickable", function(done) { 
  //     comp.disabled = true;
  //      clicked = false;
  //      comp.click();
  //      document.body.append(comp);
  //      assert.equal(clicked, false);
  //      done();
  //  })
  // }); 