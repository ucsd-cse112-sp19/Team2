var assert = chai.assert; 
let sr = document.querySelector("meat-input").shadowRoot; 
let comp = document.querySelector("meat-input"); 

describe('meat-input basic requirements', function() { 
  /* Check if ShadowRoot Exists */ 
  it ("shadowDOM should exist", function() { 
    assert.equal(sr instanceof ShadowRoot, true);
  })
});
