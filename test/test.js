var assert = chai.assert; 
let sr = document.getElementById('component').shadowRoot;
let comp = document.getElementById('component');
describe('core-hello basic requirements', function() { 
  /* Check if ShadowRoot Exists */ 
  it ("shadowDOM should exist", function() { 
    assert.equal(sr instanceof ShadowRoot, true);
  })

  /* Should Add 'Hello world,' */ 
  it ("should add 'Hello world,' to string", function() { 
    assert.equal(sr.getElementById('main-text').innerHTML, "Hello world, ");
  })
  /* Should Concat Hello World to Input */ 
  it ("should concat 'Hello world,' to {input}", function() { 
    let input = document.getElementById('component').innerHTML; 
    assert.equal(sr.getElementById('main-text').innerHTML + input, "Hello world,  Veronica ");
  })

  /* Input has varying length */ 
  it ("should concat 'Hello world,' to {multi-worded input}", function() { 
    document.getElementById('component').innerHTML = " Multiple Words Value";
    assert.equal(sr.getElementById('main-text').innerHTML + document.getElementById('component').innerHTML, "Hello world,  Multiple Words Value");
  })

  /* Check Tag Name */ 
  it ("should have tag named CORE-HELLO", function() { 
    let tagName = comp.tagName;
    assert.equal(tagName, 'CORE-HELLO');
  })

   /* Check Tag Name */ 
  it ("should have tag named CORE-HELLO", function() { 
    let tagName = comp.tagName;
    assert.notEqual(tagName, 'lCORE-HELLO');
  })

    /* Test language attribute exists */ 
    it ("should have language attribute", function() { 
      comp.setAttribute("lang", '');
      assert.equal(comp.hasAttribute("lang"), true);
    })
}); 

describe('core-hello Language Functionality', function() { 
  it ("should output language in spanish", function() { 
    comp.setAttribute("lang", 'sp');
    assert.equal(sr.getElementById('main-text').innerHTML, "Hola mundo, ");
  })
  it ("should output language in english", function() { 
    comp.setAttribute("lang", 'en');
    assert.equal(sr.getElementById('main-text').innerHTML, "Hello world, ");
  })
  it ("should output language in french", function() { 
    comp.setAttribute("lang", 'fr');
    assert.equal(sr.getElementById('main-text').innerHTML, "Bonjour le monde, ");
  })
}); 

describe('core-hello Rainbow Functionality', function() { 
  /* Test rainbow attribute exists */ 
  it ("should have rainbow attribute", function() { 
    comp.setAttribute("rainbow", '');
    assert.equal(comp.hasAttribute("rainbow"), true);
  })
}); 

describe('CSS tests', function() { 
  /* Test color styling */ 
  it ("Text should turn white when adding color to style", function() { 
    comp.style.color = "white"
    assert.equal(comp.style.color, "white");
  })
  /* Test font styling */ 
  it ("Text should change font to Montserrat", function() { 
    comp.style.fontFamily = "Montserrat";
    assert.equal(comp.style.fontFamily, "Montserrat");
  })

  /* Test font size styling */ 
  it ("Text should change font size to 30px", function() { 
    comp.style.fontSize = "30px";
    assert.equal(comp.style.fontSize, "30px");
  })

    /* Test center styling */ 
    it ("Text should be centered when changing textAlign", function() { 
      comp.style.textAlign = "center";
      assert.equal(comp.style.textAlign, "center");
    })
}); 
