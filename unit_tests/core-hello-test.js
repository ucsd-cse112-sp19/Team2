var assert = chai.assert;
let comp;
let sr;

before(done => {
  setTimeout(function() {
    comp = document.createElement("core-hello");
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
  it("shadowDOM should exist", function(done) {
    assert.equal(sr instanceof ShadowRoot, true);
    done();
  });
  /* Check Tag Name */
  it("should have tag named CORE-HELLO", function(done) {
    let tagName = comp.tagName;
    assert.equal(tagName, "CORE-HELLO");
    done();
  });

  /* Check Tag Name */
  it("should have tag named CORE-HELLO", function(done) {
    let tagName = comp.tagName;
    assert.notEqual(tagName, "lCORE-HELLO");
    done();
  });
});

describe("core-hello basic requirements", function() {
  /* Does not have attributes */
  it("Should not have attributes", function(done) {
    assert.equal(comp.hasAttributes(), false);
    done();
  })
  /* Has attributes after setting them */
  it("Should have attributes after setting them", function(done) {
    comp.setAttribute("rainbow", "");
    comp.setAttribute("lang", "en");
    assert.notEqual(comp.attributes, "undefined");
    done();
  });
  /* Should Add 'Hello world,' */
  it("should add 'Hello world,' to string", function(done) {
    assert.equal(sr.getElementById("main-text").innerHTML, "Hello world, ");
    done();
  });
  /* Should Concat Hello World to Input */
  it("should concat 'Hello world,' to {input}", function(done) {
    comp.innerHTML = "MeatSpace";
    let input = comp.innerHTML;
    assert.equal(
      sr.getElementById("main-text").innerHTML + input,
      "Hello world, MeatSpace"
    );
    done();
  });

  /* Input has varying length */
  it("should concat 'Hello world,' to {multi-worded input}", function(done) {
    comp.innerHTML = " Multiple Words Value";
    assert.equal(
      sr.getElementById("main-text").innerHTML + comp.innerHTML,
      "Hello world,  Multiple Words Value"
    );
    done();
  });
  /* Test language attribute exists */
  it("should have language attribute", function(done) {
    comp.setAttribute("lang", "");
    assert.equal(comp.hasAttribute("lang"), true);
    done();
  });
});
describe("core-hello Language Functionality", function() {
  it("default should not output in spanish", function(done) {
    assert.notEqual(sr.getElementById("main-text").innerHTML, "Hola mundo, ");
    done();
  });
  it("default should output in english", function(done) {
    assert.equal(sr.getElementById("main-text").innerHTML, "Hello world, ");
    done();
  });
  it("should output language in spanish", function(done) {
    comp.setAttribute("lang", "sp");
    assert.equal(sr.getElementById("main-text").innerHTML, "Hola mundo, ");
    done();
  });
  it("should output language in english", function(done) {
    comp.setAttribute("lang", "en");
    assert.equal(sr.getElementById("main-text").innerHTML, "Hello world, ");
    done();
  });
  it("should output language in french", function(done) {
    comp.setAttribute("lang", "fr");
    assert.equal(
      sr.getElementById("main-text").innerHTML,
      "Bonjour le monde, "
    );
    done();
  });
  it("Removing lang attribute should default langauge to english", function(done) {
    comp.removeAttribute("lang");
    assert.equal(sr.getElementById("main-text").innerHTML, "Hello world, ");
    done();
  })
});

describe("core-hello Rainbow Functionality", function() {
  /* Test rainbow attribute exists */
  it("should have rainbow attribute", function(done) {
    comp.setAttribute("rainbow", "");
    assert.equal(comp.hasAttribute("rainbow"), true);
    done();
  });
  it("Unsetting rainbow attribute should remove it", function(done) {
    comp.removeAttribute("rainbow");
    assert.equal(comp.hasAttribute("rainbow"), false);
    done();
  });
});

describe("CSS tests", function() {
  /* Test color styling */
  it("Text should turn white when adding color to style", function(done) {
    comp.style.color = "white";
    assert.equal(comp.style.color, "white");
    done();
  });
  /* Test font styling */
  it("Text should change font to Montserrat", function(done) {
    comp.style.fontFamily = "Montserrat";
    assert.equal(comp.style.fontFamily, "Montserrat");
    done();
  });

  /* Test font size styling */
  it("Text should change font size to 30px", function(done) {
    comp.style.fontSize = "30px";
    assert.equal(comp.style.fontSize, "30px");
    done();
  });

  /* Test center styling */
  it("Text should be centered when changing textAlign", function(done) {
    comp.style.textAlign = "center";
    assert.equal(comp.style.textAlign, "center");
    done();
  });
});
describe("Getters and setters tests", function() {
  /* Test lang getter */
  it("lang getter should return en", function(done) {
    comp.lang = "en";
    assert.equal(comp.lang, "en");
    done();
  });
  /* Test rainbow getter */
  it("rainbow getter should return ''", function(done) {
    comp.rainbow = "test";
    assert.equal(comp.rainbow, "");
    done();
  });
  /* Test rainbow setter */
  it("rainbow setter should return 'test'", function(done) {
    let retVal = comp.rainbow = "test";
    assert.equal(retVal, "test");
    done();
  });
  /* Test lang setter */
  it("lang setter should return 'fr'", function(done) {
    let retVal = comp.lang = "fr";
    assert.equal(retVal, "fr");
    done();
  });   
});
describe("Class methods tests", function() {
  /* attributeChangedCallback() test */
  it("attributeChangedCallback should return nothing", function(done) {
    assert.equal(comp.attributeChangedCallback("rainbow", "", "en"), undefined);
    done();
  });
  /* updateLang() test */
  it("lang should not be changed to en", function(done) {
    comp.updateLang(comp, "fr");
    assert.notEqual(
      sr.getElementById("main-text").innerHTML,
      "Hello world, "
    );
    done();
  });
  /* updateStyle() test */
  it("rainbow", function(done) {
    comp.updateStyle(comp);
    assert.notEqual(comp.hasAttribute("rainbow"), false);
    done();
  });
});
