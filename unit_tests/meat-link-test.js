var assert = chai.assert; 
let sr = document.querySelector("meat-link").shadow; 
let comp = document.querySelector("meat-link"); 

describe('meat-input basic requirements', function()  { 
    before(function(){
        sr = document.querySelector("meat-link").shadow;
        comp = document.querySelector('meat-link');
      });

    it ("shadowDOM should exist", function(done) { 
        setTimeout(function() { 
            sr = comp.shadow; 
            assert.equal(sr instanceof ShadowRoot, true);
        }, 0)
        done();
    })

    it ("should have tag named meat-link", function() { 
        let tagName = comp.tagName;
        assert.equal(tagName, 'MEAT-LINK');
    })
});
describe("Text", function() { 
    it ("Should have meat-link as text", function(done) {
        comp.innerHTML = "meat-link";
        assert.equal(document.querySelector('meat-link').innerHTML, 'meat-link');
        done()
    })
})
describe("color", async() => { 
    it ("has color attribute", function(done) { 
        comp.setAttribute("color", "green"); 
        assert.equal(document.querySelector('meat-link').getAttribute("color"), "green");
        done();
    })
    it ("correct css", function(done) { 
        comp.setAttribute("color", "green"); 
        const host = document.querySelector("meat-link");
        const inner = host.shadow.querySelector("a");
        const style = getComputedStyle(inner).color;
        assert.equal(style, "rgb(89, 192, 64)");
        done()
    })

})

describe("href", function() { 
    it ("Should take in a href to meat-space.org"), function(done) { 
        const test = document.querySelector('meat-link')
        assert.equal(test.href, "www.meat-space.org");
        done()
    }
})

describe("disabled", function() { 
    it ("has disabled attribute", function(done) { 
        comp.setAttribute("disabled", "true"); 
        assert.equal(document.querySelector('meat-link').getAttribute("disabled"), "true");
        done();
    })
    it ("correct css", function(done) { 
        const host = document.querySelector("meat-link");
        const inner = host.shadow.querySelector("a");
        const style = getComputedStyle(inner).cursor;
        assert.equal(style, "not-allowed");
        done()
    })

})

describe("underline", function() { 
    it ("has underline attribute", function(done) { 
        comp.setAttribute("underline", "never"); 
        assert.equal(document.querySelector('meat-link').getAttribute("underline"), "never");
        done();
    })
    it ("has underline never", function(done) { 
        comp.setAttribute("underline", "never"); 
        assert.equal(document.querySelector('meat-link').getAttribute("underline"), "never");
        done();
    })
    it ("has underline hover", function(done) { 
        comp.setAttribute("underline", "hover"); 
        assert.equal(document.querySelector('meat-link').getAttribute("underline"), "hover");
        done();
    })
    it ("has underline always", function(done) { 
        comp.setAttribute("underline", "always"); 
        assert.equal(document.querySelector('meat-link').getAttribute("underline"), "always");
        done();
    })
})

describe("bootstrap attribute", function() { 
    it ("should have bootstrap nav-link", function(done) {
        comp.setAttribute("bootstrap", "nav-link");
        assert.equal(document.querySelector('meat-link').getAttribute("bootstrap"), "nav-link");
        done();
    });
    it ("correct css bootstrap nav-link", function(done) { 
        const host = document.querySelector("meat-link");
        const inner = host.shadow.querySelector("a");
        const hi = getComputedStyle(inner).display;
        assert.equal(hi, "block");
        done();
    });
    
    it ("Should have bootstrap navbar-brand", function(done) { 
        comp.setAttribute("bootstrap", "navbar-brand");
        assert.equal(document.querySelector('meat-link').getAttribute("bootstrap"), "navbar-brand");
        done();
    })
    it ("correct css bootstrap navbar-brand", function(done) { 
        const host = document.querySelector("meat-link");
        const inner = host.shadow.querySelector("a");
        const style = getComputedStyle(inner).display;
        assert.equal(style, "inline-block");
        done();
    });
    /*
    it ("Should have bootstrap nav-link dropdown-toggle", function(done) { 
        comp.setAttribute("bootstrap", "nav-link dropdown-toggle");
    })
    it ("Should have bootstrap dropdown-item", function(done) { 
        comp.setAttribute("bootstrap", "dropdown-item");

    })*/
});



