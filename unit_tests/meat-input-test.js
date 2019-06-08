var assert = chai.assert; 
let comp; 
let sr;

before((done) => { 
    setTimeout(function(){
    comp = document.createElement('meat-input');
    document.body.append(comp);
    sr = comp.shadowRoot;
      done();
    },1000);
});

describe('meat-input basic requirements', function() { 
    it ("Component should exist", function(done) { 
        assert.isDefined(comp);
        done();
    })
    it ("Shadowroot should exist", function(done) { 
        sr = comp.shadowRoot; 
        assert.isDefined(sr);
        done();
    })
    
});
describe('meat-input existence', function() { 
    it ("shadowDOM should exist", function(done) { 
        sr = comp.shadowRoot; 
        assert.equal(sr instanceof ShadowRoot, true);
        done();
     })
     it ("should have tag named meat-input", function(done) { 
         let tagName = comp.tagName;
         assert.equal(tagName, 'MEAT-INPUT');
         done()
     })
  });

describe('Tests meat-input placeholder functionality', function() { 
    it ("should be that placeholder initially does exist", function(done) { 
        assert.equal(comp.hasAttribute("placeholder"), false);
        done()
    })
    it ("should be that setter to 'meat-space' causes placeholder to be 'meat-space'", function(done) { 
        comp.placeholder = "meat-space";
        assert.equal(comp.placeholder, "meat-space");
        done();
    })
    it ("should be that setter to 'meat-space2' causes placeholder to be 'meat-space2'", function(done) { 
        comp.placeholder = "meat-space2";
        assert.equal(comp.placeholder, "meat-space2");
        done();
    })
    it ("should be that setter '' to placeholder disables placeholder'", function(done) { 
        comp.placeholder = "";
        assert.equal(comp.placeholder, null);
        done();
    })
    it ("placeholder attribute should exist", function(done) { 
        comp.setAttribute("placeholder", "meat-space");
        assert.equal(comp.hasAttribute("placeholder"), true);
        done()
    })
    it ("placeholder should be meat-space", function(done) { 
        assert.equal(comp.getAttribute("placeholder"), "meat-space");
        done()
    })
 
    it ("should be that assignment to 'test3' causes placeholder attribute to exist", function(done) { 
        comp.setAttribute("placeholder", "test3");
        assert.equal(comp.hasAttribute('placeholder'), true);
        done();
    })
  
    it ("should be that assignment to true causes disabled to be false", function(done) { 
        comp.removeAttribute("placeholder");
        assert.equal(comp.hasAttribute('placeholder'), false);
        done();
    })

});

describe('Tests meat-input disabled functionality', function() { 
    it ("should be that disabled is false when getter is initially called", function(done) { 
        assert.equal(comp.hasAttribute("disabled"), false);          
        done();
    })
    it ("should be that disabled is false when getter is initially called", function(done) { 
        comp.setAttribute("disabled", "")
        this.timeout(2000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          document.body.append(comp)
          const green_inner = sr.querySelector("input");
          const hi = getComputedStyle(green_inner);
          assert.equal(hi.cursor, 'not-allowed');
          done();
        },500);
    })
    
    it ("should be that setter to true causes disabled to be true", function(done) { 
        comp.disabled = true;
        assert.equal(comp.disabled, true);
        done();
    })
    it ("should be that setter to false causes disabled to be false", function(done) { 
        comp.disabled = false;
        assert.equal(comp.disabled, false);
        done();
    })
    
    it ("should be that assignment to true again causes disabled to be false", function(done) { 
        comp.setAttribute("disabled", "");
        assert.equal(comp.getAttribute("disabled"), "");
        done();
    })

    it ("should be that assignment to true causes disabled to be false", function(done) { 
        comp.removeAttribute("disabled", "");
        assert.equal(comp.hasAttribute("disabled"), false);
        done();
    })
});

describe('Tests readonly functionality', function() { 
    it ("Assigning readonly attribute should exist", function(done) { 
        comp.setAttribute("readonly", "")
        assert.equal(comp.hasAttribute("readonly"), true);
        done()
    })
    it ("Getting readonly attribute should be true", function(done) { 
        assert.equal(comp.getAttribute("readonly"), "");
        done()
    })
    it ("Setting readonly attribute should exist", function(done) { 
        comp.readOnly =""
        assert.equal(comp.hasAttribute("readonly"), true);
        done()
    })
    it ("Removing readonly attribute should make it not exist", function(done) { 
        comp.removeAttribute("readonly");
        assert.equal(comp.hasAttribute("readonly"), false);
        done()
    })


}); 
describe('Tests size attributes', function() { 
    it ("should be that size is null when getter is initially called", function(done) { 
        assert.equal(comp.size, null);
        done();
    })
    it ("should be that setter to small causes getter to return small", function(done) { 
      comp.size = "small";
      assert.equal(comp.size, "small");
      done();
    })
    
    it ("should be that setter to medium causes getter to return medium", function(done) { 
      
      comp.size = "medium";
      assert.equal(comp.size, "medium");
      done();
    })
    it ("should be that setter to large causes getter to return large", function(done) { 
      comp.size = "large";
      assert.equal(comp.size, "large");
      done();
    })
    
    it ("should be that removal of attribute causes getter to be false", function(done) { 
      comp.removeAttribute("size", "");
      assert.equal(comp.size, null);
      done();
    })
    it ("should be that assignment to small causes getter to return small", function(done) { 
      comp.setAttribute("size", "small");
      assert.equal(comp.size, "small");
      done();
    })
    it ("should be that assignment to large causes getter to return large", function(done) { 
      comp.setAttribute("size", "large");
      assert.equal(comp.size, "large");
      done();
    })
    it ("it should be small", function(done) { 
      comp.size = "small";
      this.timeout(1000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        const green_inner = sr.querySelector("input");
        const hi = getComputedStyle(green_inner);
        assert.equal(hi.width, "100px");
        assert.equal(hi.height, "38px");
        done();
      },500);
    })
    it ("it should be medium", function(done) { 
      comp.size = "medium";
      this.timeout(1000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        const green_inner = sr.querySelector("input");
        const hi = getComputedStyle(green_inner);
        assert.equal(hi.width, "200px");
        assert.equal(hi.height, "38px");
        done();
      },500);
    })
    it ("it should be large", function(done) { 
      comp.size = "large";
      this.timeout(1000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        const green_inner = sr.querySelector("input");
        const hi = getComputedStyle(green_inner);
        assert.equal(hi.width, "300px");
        assert.equal(hi.height, "38px")
        done();
      },500);
    })
    it ("it should be defaulted to medium size", function(done) { 
      comp.size = "";
      this.timeout(1000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        const green_inner = sr.querySelector("input");
        const hi = getComputedStyle(green_inner);
        assert.equal(hi.width, "166px");
        assert.equal(hi.height, "38px")
        done();
      },500);
    })
    it ("should be that removing size attribute will make it not exist", function(done) { 
        comp.removeAttribute("size")
        assert.equal(comp.hasAttribute("size"), false);
        done();
    })
});


describe('Tests password functionality', function() { 
    it ("should be that password attribute does not exist", function(done) { 
        assert.equal(comp.hasAttribute("password"), false);
        done();
    })
    it ("should be that setting password attribute will be false", function(done) { 
        comp.password = ""; 
        assert.equal(comp.password, false);
        done();
    })
    it ("should be that setting password attribute will be false", function(done) { 
        comp.password = ""; 
        assert.equal(comp.password, false);
        done();
    })
    it ("should be that assigning password attribute will be true", function(done) { 
        comp.setAttribute("password", true)
        assert.equal(comp.hasAttribute("password"), true);
        done();
    })
    it ("should be that setting password attribute will be true", function(done) { 
        comp.setAttribute("password", "")
        assert.equal(comp.getAttribute("password"), "");
        done()
    })
    it ("should be that removing password attribute will make it not exist", function(done) { 
        comp.removeAttribute("password")
        assert.equal(comp.hasAttribute("password"), "");
        done()
    })
})

describe('Tests limit functionality', function() { 
    it ("should be that limit attribute does not exist", function(done) { 
        assert.equal(comp.hasAttribute("limit"), false);
        done()
    })
    it ("should be that setting limit attribute will be 10", function(done) { 
        comp.limit = 10; 
        assert.equal(comp.limit, 10);
        done();
    })
    it ("should be that setting limit attribute will be false", function(done) { 
        comp.limit = ""; 
        assert.equal(comp.limit, null);
        done();
    })
    it ("should be that assigning limit attribute will be 20", function(done) { 
        comp.setAttribute("limit", 20)
        assert.equal(comp.hasAttribute("limit"), true);
        done();
    })
    it ("should be that assigning limit attribute will be false", function(done) { 
        comp.setAttribute("limit", "")
        assert.equal(comp.limit, false);
        done();
    })
    it ("should be that removing limit attribute will make it not exist", function(done) { 
        comp.removeAttribute("limit")
        assert.equal(comp.hasAttribute("limit"), false);
        done();
    })
})

/* form-control, form-check-input, */

describe('Tests bootstrap functionality', function() { 
    it ("it should not have bootstrap attribute initially", function(done) { 
        assert.equal(comp.hasAttribute("bootstrap"), false);
        done()
    })
    it ("should be that setting bootstrap will make the attribute exist", function(done) { 
        comp.bootstrap = "form-control";
        assert.equal(comp.bootstrap, "form-control");
        assert.equal(comp.getAttribute("bootstrap", "form-control"));
        done();
    })
    it ("should have correct bootstrap CSS", function(done) { 
        comp.setAttribute("bootstrap", "form-control");
        this.timeout(1000);
        setTimeout(function(){
            sr = comp.shadowRoot; 
            const green_inner = sr.querySelector("input");
            const hi = getComputedStyle(green_inner);
            assert.equal(hi["transition"], "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s");
            assert.equal(hi["display"], "block");
            done();
        },500);
    })
})

