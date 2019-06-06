import { Selector, ClientFunction } from "testcafe"; // first import testcafe selectors

fixture`Running tests for meat-button` // declare the fixture
  .page `http://127.0.0.1:8080/web_components/meat-button/meat-button-demo.html`;

const getElementById = Selector(id => document.querySelector(id));
const setAttribute = ClientFunction((id, attributeName, value) => {
  document.querySelector(id).setAttribute(attributeName, value);
});

test("Check that color attribute exists", async t => {
  const component = await getElementById("#check-button");
  await t
    .expect(component.hasAttribute("color")).eql(true);
});
test("Check white color attribute", async t => {
  const component = await getElementById("#check-button");
  await t.expect(component.getAttribute("color")).eql("white");
});

test("Check that tag-name is meat-button", async t => {
  const component = getElementById("#check-button");
  await t.expect(component.tagName).eql("meat-button");
});

test("Click button", async t => {
  const input = getElementById("#input");
  const component = getElementById("#reset");
  await t
    .typeText(input, "meat-space")
    .click(component)
    .expect(input.textContent).eql('');
    
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