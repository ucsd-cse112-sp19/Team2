var assert = chai.assert; 
let comp; 
let sr;
let link = "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg";
const fillStyles = ["fill", "contain", "cover", "none", "scale-down"];
const referrerPolicies = [
    "no-referrer",
    "no-referrer-when-downgrade",
    "origin",
    "origin-when-cross-origin",
    "unsafe-url"
  ];
before((done) => { 
    setTimeout(function(){
    comp = document.createElement('meat-image');
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

    it ("shadowDOM should exist", function(done) { 
        sr = comp.shadowRoot; 
        assert.equal(sr instanceof ShadowRoot, true);
        done();
     })
     it ("should have tag named meat-input", function(done) { 
         let tagName = comp.tagName;
         assert.equal(tagName, 'MEAT-IMAGE');
         done()
     })
    
});

describe('Tests src functionality', function() { 
    it ("should be that src initially does exist", function(done) { 
        assert.equal(comp.hasAttribute("src"), false);
        done()
    })
    it ("should be that setter causes src to be image file", function(done) { 
        comp.src = link;
        assert.equal(comp.src, link);
        done();
    })
    it ("should be that assigning src will be null", function(done) { 
        comp.src = "";
        assert.equal(comp.getAttribute('src'), null);
        done();
    })
});

describe('Tests fit functionality', function() { 
    it ("should be that fit is false when getter is initially called", function(done) { 
        assert.equal(comp.hasAttribute("fit"), false);          
        done();
    })
    it ("should be that fit is fill, contain, cover, none, or scale-down else false", function(done) { 
        comp.fit = "";
        assert.equal(comp.hasAttribute("fit"), false);
        done();
    })
    it ("should be that fit is fill, contain, cover, none, or scale-down else false", function(done) { 
        comp.fit = "garbage";
        assert.equal(comp.hasAttribute("fit"), false);
        done();
    })
    it ("should be that assigning fit to fill will have correct CSS", function(done) { 
        comp.setAttribute("fit", "fill");
        this.timeout(1000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("img")
          const style = getComputedStyle(inner);
          assert.equal(style['objectFit'], "fill");
          done();
        },500);
      })
      it ("should be that assigning fit to contain will have correct CSS", function(done) { 
        comp.setAttribute("fit", "contain");
        this.timeout(1000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("img");
          const style = getComputedStyle(inner);
          assert.equal(style['objectFit'], "contain");
          done();
        },500);
    
      })
      it ("should be that assigning cover to contain will have correct CSS", function(done) { 
        comp.setAttribute("fit", "cover");
        this.timeout(1000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("img");
          const style = getComputedStyle(inner);
          assert.equal(style['objectFit'], "cover");
          done();
        },500);
      })
      it ("should be that assigning none to contain will have correct CSS", function(done) { 
        comp.setAttribute("fit", "none");
        this.timeout(1000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("img");
          const style = getComputedStyle(inner);
          assert.equal(style['objectFit'], "none");
          done();
        },500);
      })
      it ("should be that assigning scale-down to contain will have correct CSS", function(done) { 
        comp.setAttribute("fit", "scale-down");
        this.timeout(1000);
        setTimeout(function(){
          sr = comp.shadowRoot; 
          const inner = sr.querySelector("img");
          const style = getComputedStyle(inner);
          assert.equal(style['objectFit'], "scale-down");
          done();
        },500);
      })
      it ("should be removing fit attribute, it will not exist", function(done) { 
        comp.removeAttribute("fit")
        assert.equal(comp.getAttribute('fit'), null);
        done();
    })
 
});

describe('Tests alt functionality', function() { 
    it ("should be that alt initially does exist", function(done) { 
        assert.equal(comp.hasAttribute("alt"), false);
        done()
    })
    it ("should be that setter causes src to be image file", function(done) { 
        comp.alt = "meat-space";
        assert.equal(comp.alt, "meat-space");
        done();
    })
    it ("should be that assigning alt will be null", function(done) { 
        comp.alt = "";
        assert.equal(comp.getAttribute('alt'), null);
        done();
    })
});

describe('Tests referer functionality', function() { 
    it ("should be that referrer initially does exist", function(done) { 
        assert.equal(comp.hasAttribute("referrerpolicy"), false);
        done()
    })
    it ("should be that setter causes src to be image file", function(done) { 
        comp.referrerpolicy = referrerPolicies[0];
        assert.equal(comp.referrerpolicy, referrerPolicies[0]);
        done();
    })
    it ("should be that assigning src will be null", function(done) { 
        comp.src = "";
        assert.equal(comp.getAttribute('src'), null);
        done();
    })
});
