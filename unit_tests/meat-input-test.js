var assert = chai.assert; 
let sr = document.querySelector("meat-input").shadow; 
let comp = document.querySelector("meat-input"); 

describe('meat-input basic requirements', async() => { 
    before(function(){
        sr = document.querySelector("meat-button").shadow;
        comp = document.querySelector('meat-button');
      });

    it ("shadowDOM should exist", function(done) { 
        setTimeout(function() { 
            sr = document.querySelector("meat-input").shadow; 
            assert.equal(sr instanceof ShadowRoot, true);
        }, 0)
        done();
    })

    it ("should have tag named meat-input", function() { 
        let tagName = comp.tagName;
        assert.equal(tagName, 'MEAT-INPUT');
    })
});
describe('Placeholder attributes', function() { 
    /* Placeholder */

    it ("placeholder attribute should exist", function(done) { 
        comp.setAttribute("disabled", false);
        comp.setAttribute("placeholder", "meat-space");
        assert.equal(comp.hasAttribute("placeholder"), true);
        done()
    })
    it ("placeholder should be meat-space", function() { 
        assert.equal(comp.getAttribute("placeholder"), "meat-space");
    })

});
describe('disabled attributes', function() { 
    /*Disabled*/
    it ("disabled attribute should exist", function(done) { 
        comp.setAttribute("disabled", true);
        assert.equal(comp.hasAttribute("disabled"), true);
        done();
    })

    it ("css of cursor should be not-allowed", function(done) { 
        var style;
        setTimeout(function() { 
            comp.setAttribute("disabled", true);
            if (sr != null) {
                style = window.getComputedStyle(sr.querySelector("input"));      
                assert.equal(style["cursor"], "not-allowed");
            } 
           
        }, 0)
        done();

 
    })

    comp.setAttribute("value", "meat-input")
    it ("value attribute should exist", function() { 
        assert.equal(comp.hasAttribute("value"), true);
    })
    it ("value attribute should be meat-input", function() { 
        assert.equal(comp.getAttribute("value"), "meat-input");
    })

});

describe('Misc attributes', function() { 
    comp.setAttribute("readonly", true)
    it ("readonly attribute should exist", function() { 
        assert.equal(comp.hasAttribute("readonly"), true);
    })

    it ("readonly attribute should be true", function() { 
        assert.equal(comp.getAttribute("readonly"), 'true');
    })


}); 
describe('Size attributes', function() { 
        /* Size */ 
        
        it ("size attribute should not accept numeric value", function(done) { 
            comp.setAttribute("size", 100); 
            assert.equal(comp.hasAttribute("size"), false);
            done();
        })
        it ("size attribute should be small", function(done) { 
            comp.setAttribute("size", "small");
            assert.equal(comp.getAttribute("size"), "small");
            done();
        })
        it ("size attribute should be large", function(done) { 
            comp.setAttribute("size", "large");
            assert.equal(comp.getAttribute("size"), "large");
            done();
        })
});



describe('Password attributes', function() { 
   comp.setAttribute("password", true);
   it ("password attribute should exist", function() { 
       assert.equal(comp.hasAttribute("password"), true);
   })
})