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
            sr = document.querySelector("meat-input").shadow; 
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
describe("href", function() { 
    it ("Should take in a href to meat-space.org"), function(done) { 
        const comp = document.querySelector('meat-link')
        comp.href = "www.meat-space.org";
        const test = document.querySelector('meat-link')
        assert.equal(test.href, "www.meat-space.org");
        done()
    }
})
describe("bootstrap attribute", function() { 
    /*
    it ("Should have bootstrap nav-link", function(done) { 
        comp.setAttribute("bootstrap", "nav-link");
        const host = document.querySelector("meat-link");
        const inner = host.shadow.querySelector("a");
        const hi = getComputedStyle(inner).display;
        assert.equal(hi, block);
        done()
    })*/
    /*
    it ("Should have bootstrap navbar-brand", function(done) { 
        comp.setAttribute("bootstrap", "navbar-brand");
    })
    it ("Should have bootstrap nav-link dropdown-toggle", function(done) { 
        comp.setAttribute("bootstrap", "nav-link dropdown-toggle");
    })
    it ("Should have bootstrap dropdown-item", function(done) { 
        comp.setAttribute("bootstrap", "dropdown-item");

    })*/
});
/*
describe("color", function() { 
    
})
describe("disabled", function() { 
    
})
describe("href", function() { 
    
})
describe("icon", function() { 
    
})
describe("type", function() { 
    
})
describe("underline", function() { 
    
})
*/

