var assert = chai.assert; 
let comp; 
let sr;

before((done) => { 
    setTimeout(function(){
    comp = document.createElement('meat-input');
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

describe('Tests meat-input placeholder getters and setters', function() { 
    /* Placeholder */
    it ("placeholder attribute should exist", function(done) { 
        comp.setAttribute("placeholder", "meat-space");
        assert.equal(comp.hasAttribute("placeholder"), true);
        done()
    })
    it ("placeholder should be meat-space", function(done) { 
        assert.equal(comp.getAttribute("placeholder"), "meat-space");
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
        assert.equal(comp.placeholder, "");
        done();
    })

    it ("should be that assignment to 'test3' causes placeholder attribute to exist", function(done) { 
        comp.setAttribute("placeholder", "test3");
        assert.equal(comp.hasAttribute('placeholder'), true);
        done();
    })

    it ("should be that assignment to 'test3' causes placeholder attribute to be 'test3'", function(done) { 
        comp.setAttribute("placeholder", "test3");
        assert.equal(comp.getAttribute("placeholder"), 'test3');
        done();
    })
  
    it ("should be that assignment to true causes disabled to be false", function(done) { 
        comp.removeAttribute("placeholder");
        assert.equal(comp.hasAttribute('placeholder'), false);
        done();
    })

});

describe('Tests meat-input disabled getters and setters', function() { 
    it ("should be that disabled is false when getter is called", function(done) { 
        assert.equal(comp.hasAttribute("disabled"), false);          
        done();
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
        assert.equal(comp.disabled, false);
        done();
    })

    it ("should be that assignment to true causes disabled to be false", function(done) { 
        comp.removeAttribute("disabled", "");
        assert.equal(comp.disabled, false);
        done();
    })
});

describe('Misc attributes', function() { 
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

}); 
describe('Size attributes', function() { 

    it ("should be that assignment to 'small' sets size to 'small'", function(done) { 
        comp.setAttribute("size", 'small');    
        assert.equal(comp.getAttribute("size"), 'small');
        done();
    })
    it ("should be that setting size attribute to 'large' will be 'large'", function(done) { 
        comp.size = 'large';
        assert.equal(comp.size, 'large');
        done();
    })
    it ("should be that setting size attribute to 'medium' will be 'medium'", function(done) { 
        comp.size = 'medium';
        assert.equal(comp.size, "medium");
        done();
    })
});


describe('Tests getters and setters of password attribute', function() { 
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
})

describe('Tests getters and setters of limit attribute', function() { 
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
        assert.equal(comp.limit, "");
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
})

