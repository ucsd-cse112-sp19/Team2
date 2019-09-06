var assert = chai.assert;
let comp;
let sr;
let inner; 
let style; 
function checkStyle(_attribute, _value) { 
  sr = comp.shadowRoot;
  inner = sr.querySelector("input");
  style = getComputedStyle(inner);
  assert.equal(style[_attribute], _value);
}
before(done => {
  setTimeout(function() {
    comp = document.createElement("meat-input");
    document.body.append(comp);
    sr = comp.shadowRoot;
    done();
  }, 1000);
});

describe("meat-input basic requirements", function() {
  it("Component should exist", function(done) {
    assert.isDefined(comp);
    done();
  });
  it("Shadowroot should exist", function(done) {
    sr = comp.shadowRoot;
    assert.isDefined(sr);
    done();
  });
});
describe("meat-input existence", function() {
  it("shadowDOM should exist", function(done) {
    sr = comp.shadowRoot;
    assert.equal(sr instanceof ShadowRoot, true);
    done();
  });
  it("should have tag named meat-input", function(done) {
    let tagName = comp.tagName;
    assert.equal(tagName, "MEAT-INPUT");
    done();
  });
});
describe("Tests default meat-input CSS", function() {
  it("should be default CSS for cursor", function(done) {
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("cursor", "text")
      done();
    }, 500);
  });
  it("should have default color", function(done) {
    checkStyle("color", "rgb(68, 68, 68)")
    done()
  });
  it("should have default height", function(done) {
    checkStyle("height", "38px")
    done()
  });
  it("should have default height", function(done) {
    checkStyle("font-size", "14px")
    done()
  });
  it("should have default border-radius", function(done) {
    checkStyle("border-radius", "3px")
    done()
  });
  it("should have default outline", function(done) {
    checkStyle("outline", "rgb(68, 68, 68) none 0px")
    done()
  });
  it("should have default background color", function(done) {
    checkStyle("background-color", "rgb(255, 255, 255)")
    done()
  });
  it("should have default focus-border", function(done) {
    checkStyle("border", "1px solid rgb(204, 204, 204)")
    done()
  });
  it("should have default focus-border", function(done) {
    checkStyle("transition", "border 0.3s ease 0s")
    done()
  });

}); 
describe("Tests meat-input placeholder functionality", function() {
  it("should be that placeholder initially does exist", function(done) {
    assert.equal(comp.hasAttribute("placeholder"), false);
    done();
  });
  it("should be that setter to 'meat-space' causes placeholder to be 'meat-space'", function(done) {
    comp.placeholder = "meat-space";
    assert.equal(comp.placeholder, "meat-space");
    done();
  });
  it("should be that setter to 'meat-space2' causes placeholder to be 'meat-space2'", function(done) {
    comp.placeholder = "meat-space2";
    assert.equal(comp.placeholder, "meat-space2");
    done();
  });
  it("should be that setter '' to placeholder disables placeholder'", function(done) {
    comp.placeholder = "";
    assert.equal(comp.placeholder, null);
    done();
  });
  it("placeholder attribute should exist", function(done) {
    comp.setAttribute("placeholder", "meat-space");
    assert.equal(comp.hasAttribute("placeholder"), true);
    done();
  });
  it("placeholder should be meat-space", function(done) {
    assert.equal(comp.getAttribute("placeholder"), "meat-space");
    done();
  });

  it("should be that assignment to 'test3' causes placeholder attribute to exist", function(done) {
    comp.setAttribute("placeholder", "test3");
    assert.equal(comp.hasAttribute("placeholder"), true);
    done();
  });

  it("should be that assignment to true causes disabled to be false", function(done) {
    comp.removeAttribute("placeholder");
    assert.equal(comp.hasAttribute("placeholder"), false);
    done();
  });
});

describe("Tests meat-input disabled functionality", function() {
  it("should be that disabled is false when getter is initially called", function(done) {
    assert.equal(comp.hasAttribute("disabled"), false);
    done();
  });
  it("should be that disabled is false when getter is initially called", function(done) {
    comp.setAttribute("disabled", "");
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("cursor", "not-allowed")
      done();
    }, 500);
  });

  it("should be that setter to true causes disabled to be true", function(done) {
    comp.disabled = true;
    assert.equal(comp.disabled, true);
    done();
  });
  it("should be that setter to false causes disabled to be false", function(done) {
    comp.disabled = false;
    assert.equal(comp.disabled, false);
    done();
  });

  it("should be that assignment to true again causes disabled to be false", function(done) {
    comp.setAttribute("disabled", "");
    assert.equal(comp.getAttribute("disabled"), "");
    done();
  });

  it("should be that assignment to true causes disabled to be false", function(done) {
    comp.removeAttribute("disabled", "");
    assert.equal(comp.hasAttribute("disabled"), false);
    done();
  });
});

describe("Tests readonly functionality", function() {
  it("Assigning readonly attribute should exist", function(done) {
    comp.setAttribute("readonly", "");
    assert.equal(comp.hasAttribute("readonly"), true);
    done();
  });
  it("Getting readonly attribute should be true", function(done) {
    assert.equal(comp.getAttribute("readonly"), "");
    done();
  });
  it("Setting readonly attribute should exist", function(done) {
    comp.readOnly = "";
    assert.equal(comp.hasAttribute("readonly"), true);
    done();
  });
  it("Removing readonly attribute should make it not exist", function(done) {
    comp.removeAttribute("readonly");
    assert.equal(comp.hasAttribute("readonly"), false);
    done();
  });
});
describe("Tests size attributes", function() {
  it("should be that size is null when getter is initially called", function(done) {
    assert.equal(comp.size, null);
    done();
  });
  it("should be that setter to small causes getter to return small", function(done) {
    comp.size = "small";
    assert.equal(comp.size, "small");
    done();
  });

  it("should be that setter to medium causes getter to return medium", function(done) {
    comp.size = "medium";
    assert.equal(comp.size, "medium");
    done();
  });
  it("should be that setter to large causes getter to return large", function(done) {
    comp.size = "large";
    assert.equal(comp.size, "large");
    done();
  });

  it("should be that removal of attribute causes getter to be false", function(done) {
    comp.removeAttribute("size", "");
    assert.equal(comp.size, null);
    done();
  });
  it("should be that assignment to small causes getter to return small", function(done) {
    comp.setAttribute("size", "small");
    assert.equal(comp.size, "small");
    done();
  });
  it("should be that assignment to large causes getter to return large", function(done) {
    comp.setAttribute("size", "large");
    assert.equal(comp.size, "large");
    done();
  });
  it("it should be small", function(done) {
    comp.size = "small";
    this.timeout(1000);
    setTimeout(function() {
      checkStyle("width", "100px")
      checkStyle("height", "38px")
      done();
    }, 500);
  });
  it("it should be medium", function(done) {
    comp.size = "medium";
    this.timeout(1000);
    setTimeout(function() {
      checkStyle("width", "200px")
      checkStyle("height", "38px")
      done();
    }, 500);
  });
  it("it should be large", function(done) {
    comp.size = "large";
    this.timeout(1000);
    setTimeout(function() {
      checkStyle("width", "300px")
      checkStyle("height", "38px")
      done();
    }, 500);
  });

  it("should be that removing size attribute will make it not exist", function(done) {
    comp.removeAttribute("size");
    assert.equal(comp.hasAttribute("size"), false);
    done();
  });
});

describe("Tests password functionality", function() {
  it("should be that password attribute does not exist", function(done) {
    assert.equal(comp.hasAttribute("password"), false);
    done();
  });
  it("should be that setting password attribute will be false", function(done) {
    comp.password = "";
    assert.equal(comp.password, false);
    done();
  });
  it("should be that setting password attribute will be false", function(done) {
    comp.password = "";
    assert.equal(comp.password, false);
    done();
  });
  it("should be that assigning password attribute will be true", function(done) {
    comp.setAttribute("password", true);
    assert.equal(comp.hasAttribute("password"), true);
    done();
  });
  it("should be that setting password attribute will be true", function(done) {
    comp.setAttribute("password", "");
    assert.equal(comp.getAttribute("password"), "");
    done();
  });
  it("should be that removing password attribute will make it not exist", function(done) {
    comp.removeAttribute("password");
    assert.equal(comp.hasAttribute("password"), "");
    done();
  });
});

describe("Tests limit functionality", function() {
  it("should be that limit attribute does not exist", function(done) {
    assert.equal(comp.hasAttribute("limit"), false);
    done();
  });
  it("should be that setting limit attribute will be 10", function(done) {
    comp.limit = 10;
    assert.equal(comp.limit, 10);
    done();
  });
  it("should be that setting limit attribute will be false", function(done) {
    comp.limit = "";
    assert.equal(comp.limit, null);
    done();
  });
  it("should be that assigning limit attribute will be 20", function(done) {
    comp.setAttribute("limit", 20);
    assert.equal(comp.hasAttribute("limit"), true);
    done();
  });
  it("should be that assigning limit attribute will be false", function(done) {
    comp.setAttribute("limit", "");
    assert.equal(comp.limit, false);
    done();
  });
  it("should be that removing limit attribute will make it not exist", function(done) {
    comp.removeAttribute("limit");
    assert.equal(comp.hasAttribute("limit"), false);
    done();
  });
});

/* form-control, form-check-input, */

describe("Tests bootstrap functionality", function() {
  it("it should not have bootstrap attribute initially", function(done) {
    assert.equal(comp.hasAttribute("bootstrap"), false);
    done();
  });
  it("should be that setting bootstrap will make the attribute exist", function(done) {
    comp.bootstrap = "form-control";
    assert.equal(comp.bootstrap, "form-control");
    assert.equal(comp.getAttribute("bootstrap", "form-control"));
    done();
  });
  it("should have correct bootstrap CSS", function(done) {
    comp.setAttribute("bootstrap", "form-control");
    this.timeout(1000);
    setTimeout(function() {
      checkStyle("transition", "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s")
      checkStyle("display", "block")
      done();
    }, 500);
  });
});

describe("Tests getters and setters", function() {
  it("getting size should return large", function(done) {
    comp.size = "large";
    assert.equal(comp.size, "large");
    done();
  });
  it("getting limit should return 10", function(done) {
    comp.limit = 10;
    assert.equal(comp.limit, 10);
    done();
  });
  it("getting placeholder should return test", function(done) {
    comp.placeholder = "test";
    assert.equal(comp.placeholder, "test");
    done();
  });
  it("getting password should return true", function(done) {
    comp.password = "test";
    assert.equal(comp.password, true);
    done();
  });
  it("getting suggest should return true", function(done) {
    comp.suggest = "test";
    assert.equal(comp.suggest, true);
    done();
  });
  it("getting password should return test", function(done) {
    comp.password = "test";
    assert.notEqual(comp.password, "test");
    done();
  });
  it("getting suggestions should return test", function(done) {
    comp.suggestions = "test";
    assert.equal(comp.suggestions, "test");
    done();
  });
});

describe("Tests class methods", function() {
  it("_renderSuggestions test", function(done) {
    comp._renderSuggestions(["test1", "test2"]);
    let retVal = comp.setAttribute("suggest", "on");
    assert.notEqual(retVal, false);
    done();
  });
});
