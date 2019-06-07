var assert = chai.assert; 
let comp; 
let sr;

before((done) => { 
  setTimeout(function(){
  comp = document.createElement('core-hello');
  document.body.append(comp);
  sr = comp.shadowRoot;
    done();
  }, 1000);
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
    assert.equal(sr instanceof ShadowRoot, true);
    done();
  })
   /* Check Tag Name */ 
   it ("should have tag named CORE-HELLO", function(done) { 
    let tagName = comp.tagName;
    assert.equal(tagName, 'CORE-HELLO');
    done();
  })

   /* Check Tag Name */ 
  it ("should have tag named CORE-HELLO", function(done) { 
    let tagName = comp.tagName;
    assert.notEqual(tagName, 'lCORE-HELLO');
    done();
  })

});

describe('core-hello basic requirements', function() { 
  
  /* Should Add 'Hello world,' */ 
  it ("should add 'Hello world,' to string", function(done) { 
    assert.equal(sr.getElementById('main-text').innerHTML, "Hello world, ");
    done();
  })
  /* Should Concat Hello World to Input */ 
  it ("should concat 'Hello world,' to {input}", function(done) { 
    comp.innerHTML = "MeatSpace";
    let input = comp.innerHTML; 
    assert.equal(sr.getElementById('main-text').innerHTML + input, "Hello world, MeatSpace");
    done();
  })

  /* Input has varying length */ 
  it ("should concat 'Hello world,' to {multi-worded input}", function(done) { 
    comp.innerHTML = " Multiple Words Value";
    assert.equal(sr.getElementById('main-text').innerHTML + comp.innerHTML, "Hello world,  Multiple Words Value");
    done();
  })
    /* Test language attribute exists */ 
    it ("should have language attribute", function(done) { 
      comp.setAttribute("lang", '');
      assert.equal(comp.hasAttribute("lang"), true);
      done();
    })
}); 

describe('core-hello Language Functionality', function() { 
  it ("should output language in spanish", function(done) { 
    comp.setAttribute("lang", 'sp');
    assert.equal(sr.getElementById('main-text').innerHTML, "Hola mundo, ");
    done();
  })
  it ("should output language in english", function(done) { 
    comp.setAttribute("lang", 'en');
    assert.equal(sr.getElementById('main-text').innerHTML, "Hello world, ");
    done();
  })
  it ("should output language in french", function(done) { 
    comp.setAttribute("lang", 'fr');
    assert.equal(sr.getElementById('main-text').innerHTML, "Bonjour le monde, ");
    done();
  })
}); 


describe('core-hello Rainbow Functionality', function() { 
  /* Test rainbow attribute exists */ 
  it ("should have rainbow attribute", function(done) { 
    comp.setAttribute("rainbow", '');
    assert.equal(comp.hasAttribute("rainbow"), true);
    done();
  })
}); 

describe('CSS tests', function() { 
  /* Test color styling */ 
  it ("Text should turn white when adding color to style", function(done) { 
    comp.style.color = "white"
    assert.equal(comp.style.color, "white");
    done();
  })
  /* Test font styling */ 
  it ("Text should change font to Montserrat", function(done) { 
    comp.style.fontFamily = "Montserrat";
    assert.equal(comp.style.fontFamily, "Montserrat");
    done();
  })

  /* Test font size styling */ 
  it ("Text should change font size to 30px", function(done) { 
    comp.style.fontSize = "30px";
    assert.equal(comp.style.fontSize, "30px");
    done();
  })

    /* Test center styling */ 
    it ("Text should be centered when changing textAlign", function(done) { 
      comp.style.textAlign = "center";
      assert.equal(comp.style.textAlign, "center");
      done();
    })
}); 
