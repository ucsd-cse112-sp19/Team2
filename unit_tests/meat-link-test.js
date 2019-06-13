var assert = chai.assert;
let comp;
let sr;
let inner;
let style; 
function checkStyle(_attribute, _value) { 
  sr = comp.shadowRoot;
  inner = sr.querySelector("a");
  style = getComputedStyle(inner);
  assert.include(style[_attribute], _value);
}
before(done => {
  setTimeout(function() {
    comp = document.createElement("meat-link");
    document.body.append(comp);
    sr = comp.shadowRoot;
    done();
  }, 1000);
});

describe("meat-link basic requirements", function() {
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
describe("meat-link existence", function() {
  it("shadowDOM should exist", function(done) {
    sr = comp.shadowRoot;
    assert.equal(sr instanceof ShadowRoot, true);
    done();
  });
  it("should have tag named meat-input", function(done) {
    let tagName = comp.tagName;
    assert.equal(tagName, "MEAT-LINK");
    done();
  });
});
describe("Test default CSS", function() {
  it("should have default CSS position", function(done) {
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("text-decoration", "none")     
      done();
    }, 500);
  });
  it("should have default CSS display", function(done) {
    assert.include(style["display"],'inline');
    done(); 
  }); 
  it("should have default CSS color", function(done) {
    assert.equal(style["color"], "rgb(0, 0, 0)");
    done(); 
  }); 

});

describe("Tests Text functionality", function() {
  it("Should have meat-link as text", function(done) {
    comp.innerHTML = "meat-link";
    assert.equal(comp.innerHTML, "meat-link");
    done();
  });
});
describe("Tests color functionality", function() {
  it("should initially have no color attribute", function() {
    assert.equal(comp.hasAttribute("color"), false);
  });
  it("should initially be that color attribute is null", function() {
    assert.equal(comp.color, null);
  });
  it("should be that color set by setter can be returned by getter", function(done) {
    comp.color = "green";
    assert.equal(comp.color, "green");
    done();
  });

  it("should be that other colors work", function(done) {
    comp.color = "red";
    assert.equal(comp.color, "red");
    done();
  });
  it("should be that color set by setAttribute can be returned by getter", function(done) {
    comp.setAttribute("color", "green");
    assert.equal(comp.color, "green");
    done();
  });
  it("should be that another color set by setAttribute can be returned by getter", function(done) {
    comp.setAttribute("color", "red");
    assert.equal(comp.color, "red");
    done();
  });
  it("should be that another color set by setAttribute can be returned by getter", function(done) {
    comp.setAttribute("color", "red");
    assert.equal(comp.color, "red");
    done();
  });
  it("should be that removal of attribute causes getter to return false", function(done) {
    comp.removeAttribute("color");
    assert.equal(comp.color, null);
    done();
  });
  it("should be that setting color to white, the CSS should be white", function(done) {
    comp.color = "white";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color", "rgb(255, 255, 255)")
      checkStyle("text-decoration", "none solid rgb(255, 255, 255")
      done();
    }, 500);
  });
  it("should be that setting color to green, the CSS should be green", function(done) {
    comp.color = "green";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color", "rgb(89, 192, 64)")
      done();
    }, 500);
  });
  it("should be that setting color to red, the CSS should be red", function(done) {
    comp.color = "red";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color", "rgb(204, 80, 80)")
      done();
    }, 500);
  });
  it("should be that setting color to purple, the CSS should be purple", function(done) {
    comp.color = "purple";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color","rgb(170, 85, 170)");
      done();
    }, 500);
  });
  it("should be that setting color to yellow, the CSS should be yellow", function(done) {
    comp.color = "yellow";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color", "rgb(255, 230, 0)");
      done();
    }, 500);
  });
  it("should be that setting color to orange, the CSS should be orange", function(done) {
    comp.color = "orange";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color", "rgb(223, 138, 64)");
      done();
    }, 500);
  });
  it("should be that setting color to grey, the CSS should be grey", function(done) {
    comp.color = "grey";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("color", "rgb(119, 119, 119)");
      done();
    }, 500);
  });
  it("should be that removing attribute, it will not exist", function(done) {
    comp.removeAttribute("color");
    assert.equal(comp.hasAttribute("color"), false);
    done();
  });
});

describe("Tests href functionality", function() {
  it("should be that there is initially not href attribute"),
    function(done) {
      assert.equal(test.hasAttribute("href"), false);
      done();
    };
  it("should be that setting href, it should be www.meat-space.org", function(done) {
    comp.href = "www.meat-space.org";
    assert.equal(comp.href, "www.meat-space.org");
    done();
  });
  it("should be that assigning href, it should be www.meat-space.org", function(done) {
    comp.href = "www.example.com";
    assert.equal(comp.href, "www.example.com");
    done();
  });
});

describe("Tests disabled functionality", function() {
  it("initially does not have disabled attribute", function(done) {
    assert.equal(comp.disabled, false);
    done();
  });
  it("has disabled attribute", function(done) {
    comp.setAttribute("disabled", "true");
    assert.equal(
      document.querySelector("meat-link").getAttribute("disabled"),
      "true"
    );
    done();
  });
  it("should be that disabled is false when getter is initially called", function(done) {
    comp.setAttribute("disabled", "");
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("opacity", "0.65");
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

describe("Tests underline functionality", function() {
  it("initially does not have underline attribute", function(done) {
    assert.equal(comp.hasAttribute("underline"), false);
    assert.equal(comp.underline, null);
    done();
  });
  it("has underline attribute", function(done) {
    comp.setAttribute("underline", "never");
    assert.equal(
      document.querySelector("meat-link").getAttribute("underline"),
      "never"
    );
    done();
  });
  it("should be that when underline is never, there is none", function(done) {
    comp.underline = "never";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("text-decoration", "none solid rgb(0, 0, 0)")
      done();
    }, 500);
  });
  it("should be that when underline is never, there is always", function(done) {
    comp.underline = "always";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("text-decoration", "underline solid rgb(0, 0, 0)");
      done();
    }, 500);
  });
  it("should be that when underline is never, there is underline", function(done) {
    comp.underline = "always";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("text-decoration", "underline solid rgb(0, 0, 0)");
      done();
    }, 500);
  });
  it("should be that when underline is never, there is underline", function(done) {
    comp.underline = "hover";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("text-decoration", "none solid rgb(0, 0, 0)");
      done();
    }, 500);
  });
  it("has underline never", function(done) {
    comp.setAttribute("underline", "never");
    assert.equal(
      document.querySelector("meat-link").getAttribute("underline"),
      "never"
    );
    done();
  });
  it("has underline hover", function(done) {
    comp.setAttribute("underline", "hover");
    assert.equal(
      document.querySelector("meat-link").getAttribute("underline"),
      "hover"
    );
    done();
  });
  it("has underline always", function(done) {
    comp.setAttribute("underline", "always");
    assert.equal(
      document.querySelector("meat-link").getAttribute("underline"),
      "always"
    );
    done();
  });
  it("should have no attribute when removing", function(done) {
    comp.removeAttribute("underline");
    assert.equal(comp.hasAttribute("underline"), false);
    done();
  });
});
/* TODO */
describe("Tests bootstrap functionality", function() {
  it("should have bootstrap nav-link", function(done) {
    comp.setAttribute("bootstrap", "nav-link");
    assert.equal(
      document.querySelector("meat-link").getAttribute("bootstrap"),
      "nav-link"
    );
    done();
  });
  it("should have correct CSS for navbar-brand", function(done) {
    comp.bootstrap = "navbar-brand";
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("display", "inline-block");
      checkStyle("color", "rgba(0, 0, 0, 0.9)")
      done();
    }, 500);
  });

  it("should have correct CSS for nav-link", function(done) {
    comp.setAttribute("bootstrap", "nav-link");
    this.timeout(2000);
    setTimeout(function() {
      checkStyle("text-decoration", "none solid rgb(0, 123, 255)");
      // assert.equal(style["white-space"], 'nowrap');
      // assert.equal(style["font-size"], '1.25rem');
      done();
    }, 500);
  });

  it("should have correct CSS for dropdown-item", function(done) {
    comp.setAttribute("bootstrap", "dropdown-item");

    this.timeout(2000);
    setTimeout(function() {
      checkStyle("background-color", 'rgba(0, 0, 0, 0)');
      checkStyle("font-weight", '400');
      checkStyle("display", 'block');
      /*
          assert.equal(style["text-decoration"], 'none solid rgb(0, 123, 255)');
          //assert.equal(style["white-space"], 'nowrap');
          assert.equal(style["font-weight"], '400');
          
          assert.equal(style["border"], '0');*/
      done();
    }, 500);
  });

  it("should have correct CSS for dropdown-item", function(done) {
    comp.setAttribute("bootstrap", "dropdown-toggle");
    this.timeout(2000);
    setTimeout(function() {
      sr = comp.shadowRoot;
      const inner = sr.querySelector("a");
      const style = getComputedStyle(inner);
      checkStyle("white-space", 'nowrap');
      /*
          assert.equal(style["text-decoration"], 'none solid rgb(0, 123, 255)');
         
          assert.equal(style["background-color"], 'transparent');
          assert.equal(style["display"], 'inline-block');*/
      done();
    }, 500);
  });
  /*
    it ("Should have bootstrap navbar-brand", function(done) { 
        comp.setAttribute("bootstrap", "navbar-brand");
        assert.equal(comp.getAttribute("bootstrap"), "navbar-brand");
        done();
    })
    
    it ("Should have bootstrap nav-link dropdown-toggle", function(done) { 
        comp.setAttribute("bootstrap", "nav-link dropdown-toggle");
    })
    it ("Should have bootstrap dropdown-item", function(done) { 
        comp.setAttribute("bootstrap", "dropdown-item");

    })*/
});

describe("Tests getters and setters, and methods", function() {
  it("constructor()", function(done) {
    assert.notEqual(comp.constructor(), true);
    done();
  });
  it("observedAtributes getter", function(done) {
    assert.notEqual(comp.observedAttributes, false);
    done();
  });

  it("test disabled getter & setter", function(done) {
    comp.disabled = true;
    assert.equal(comp.disabled , true);
    comp.disabled = false;
    assert.equal(comp.disabled , false);
    done();
  });

  it("test type getter & setter", function(done) {
    comp.type = "a";
    assert.equal(comp.type , "a");
    comp.type = false;
    assert.equal(comp.type , null);
    done();
  });
  it("test color getter & setter", function(done) {
    comp.color = "red";
    assert.equal(comp.color , "red");
    comp.color = false;
    assert.equal(comp.color , null);
    done();
  });

});

