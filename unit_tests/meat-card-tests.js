var assert = chai.assert;
let comp;
let sr;
let divHead;
let divBody;
let span;
function checkStyle(_attribute, _value) { 
  style = getComputedStyle(comp);
  assert.include(style[_attribute], _value);
}

before(done => {
  setTimeout(function() {
    comp = document.createElement("meat-card");
    comp.innerHTML =
      ' <div id="h" slot="header">\
        <span>Default</span>\
    </div>\
    <div id="b" slot="body" class="card-body">\
        <div>Item 1</div>\
        <div>Item 2</div>\
    </div>';
    document.body.append(comp);
    sr = comp.shadowRoot;
    done();
  }, 1000);
});

describe("meat-card basic requirements", function() {
  it("Component should exist", function(done) {
    assert.isDefined(comp);
    done();
  });
  it("Shadowroot should exist", function(done) {
    assert.isDefined(sr);
    done();
  });
  it("shadowDOM should exist", function(done) {
    assert.equal(sr instanceof ShadowRoot, true);
    done();
  });
  it("should have tag named meat-card", function(done) {
    let tagName = comp.tagName;
    assert.equal(tagName, "MEAT-CARD");
    done();
  });
});

describe("Check header and body", function() {
  it("Should have header Default", function(done) {
    assert.equal(comp.querySelector("#h").innerText, "Default");
    done();
  });
  it("Should have body as Item 1 Item 2", function(done) {
    assert.equal(comp.querySelector("#b").innerText, "Item 1\nItem 2");
    done();
  });

});

describe("Test default CSS", function() { 
  it("Should have correct background-color", function(done) {
    checkStyle("background-color", "rgb(255, 255, 255)")
    done();
  });
  it("Should have correct box-shadow", function(done) {
    checkStyle("box-shadow", "rgba(0, 0, 0, 0.15) 0px 2px 12px 0px")
    done();
  });
})

describe("Tests Shadow functionality", function() {
  it("Should initially not have shadow attribute", function(done) {
    assert.equal(comp.hasAttribute("shadow"), false);
    done();
  });
  it("Should have shadow hover attribute when set", function(done) {
    comp.shadow = "hover";
    assert.equal(comp.shadow, "hover");
    done();
  });
  it("Should have shadow never attribute when set", function(done) {
    comp.shadow = "never";
    assert.equal(comp.shadow, "never");
    done();
  });
  it("Should have shadow hover attribute when set", function(done) {
    comp.shadow = "";
    assert.equal(comp.getAttribute("shadow"), null);
    done();
  });
  it("should be that the shadow should display when shadow is always", function(done) {
    comp.shadow = "always";
    this.timeout(2000);
    setTimeout(function() {
      const shadow = getComputedStyle(comp);
      assert.equal(shadow.boxShadow, "rgba(0, 0, 0, 0.15) 0px 2px 12px 0px");
      done();
    }, 500);
  });
  it("should be that the shadow should not display when shadow is never", function(done) {
    comp.shadow = "never";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("boxShadow", "none")
      done();
    }, 500);
  });
});
describe("Tests getters and setters", function() {
  it("Should get shadow attribute value", function(done) {
    let retVal = comp.shadow;
    assert.equal(retVal, "never");
    done();
  });
});
describe("Class methods tests", function() {
  /* attributeChangedCallback() test */
  it("attributeChangedCallback should return nothing", function(done) {
    assert.equal(comp.attributeChangedCallback("shadow", "", ""), undefined);
    done();
  });
});

