var assert = chai.assert; 
let comp; 
let sr;
let divHead; 
let divBody; 
let span; 

before(function(done) { 
    setTimeout(function(){
        /*
        comp = document.createElement('meat-card');
        divHead = document.createElement('div'); 
        divHead.slot = "header"; 
        divHead.span = "HEADER"

        span = document.createElement('span'); 
        span.innerText = "Header"
        comp.append(span);

        divBody = document.createElement('div'); 
        divBody.slot = "body"; 
        divBody.className = "card-body";
        
        comp.appendChild(divHead);
        comp.appendChild(span);
        comp.appendChild(divBody);
        document.append(comp)
        */

    }, 1000);
    setTimeout(function(){
        comp = document.querySelector('meat-card');
        sr =comp.shadowRoot;
        done();
    }, 1000);
    
    //sr = comp.shadowRoot
});

describe('meat-card basic requirements', function() { 
    it ("Component should exist", function(done) { 
        assert.isDefined(comp);
        done();
    })
    it ("Shadowroot should exist", function(done) { 
        sr = comp.shadowRoot; 
        assert.isDefined(sr);
        done();
    })
    /*
    it ("shadowDOM should exist", function(done) { 
        this.timeout(3000)
        sr = comp.shadowRoot; 
        assert.equal(sr instanceof ShadowRoot, true);
        done();
     })*/
     it ("should have tag named meat-card", function(done) { 
         let tagName = comp.tagName;
         assert.equal(tagName, 'MEAT-CARD');
         done()
     })
    
});
/*
describe("Tests Shadow functionality", function() { 
    it ("Should initially not have shadow attribute", function(done) {
        assert.equal(comp.hasAttribute("shadow"), false);
        done()
    }) 
    it ("Should have shadow hover attribute when set", function(done) {
        comp.shadow = "hover"
        assert.equal(comp.shadow, "hover");
        done()
    })
    it ("Should have shadow never attribute when set", function(done) {
        comp.shadow = "never"
        assert.equal(comp.shadow, "never");
        done()
    })
    it ("Should have shadow hover attribute when set", function(done) {
        comp.shadow = ""
        assert.equal(comp.getAttribute("shadow"), null);
        done()
    })
    it ("should be that setting color to red, the CSS should be red", function(done) { 
        comp.setAttribute("shadow", "hover");
        this.timeout(2000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("header");
          const style = getComputedStyle(inner);
          assert.equal(style, "rgb(204, 80, 80)");
          done();
        },500);
    })
    it ("should be that setting color to red, the CSS should be red", function(done) { 
        comp.color = "red"
        this.timeout(2000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("a");
          const style = getComputedStyle(inner);
          assert.equal(style.color, "rgb(204, 80, 80)");
          done();
        },500);
    })
})

describe("Test CSS of Basic Cards", function() { 
    it ("should be that setting color to red, the CSS should be red", function(done) { 
        comp.appendChild(divHead);
        this.timeout(3000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = comp.querySelector("slot");
          assert.equal(inner.className, "card-body");
          assert.equal(inner.slot, "header");
          done();
        },500);
    })
    

})*/
