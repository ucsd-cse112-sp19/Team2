const template = document.createElement("template");
template.innerHTML = `
<style>

:host {

  position: relative;
  display: inline-block;

  /* special override-able css variables */
  
  /* TODO: Determine needed variables. */
  --border-radius: 10px;
  
  /* Colors */
  --background-color: #ffffff;
  --text-color: #444444;
  --border: 1px solid #cccccc;
  --placeholder-color: #add8e6

  --hover-background-color: #daeeff;
  --focus-background-color: #daeeff;

  --hover-text-color: #3388ff;
  --focus-text-color: #3388ff;
  
  --hover-border: 1px solid #daeeff;
  --focus-border: 1px solid #daeeff;
  --active-border: 1px solid #3388ff;
}

/* Default style if no type is specified */
input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: var(--text-color);
  border: var(--border);
  padding: 5px;
  outline: hidden; /* This may not be needed */
}

placeholder {
    color: var(--placeholder-color);
}


/* Attributes: */
/* Size */
:host([size = "small"]) {
    width: 100px;
    height: inherit;
}
:host([size = "medium"]) {
    width: 200px;
    height: inherit;
}
:host([size = "large"]) {
    width: 300px;
    height: inherit;
}

#suggestionContainer {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.suggestion {
  padding-left: 5px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
  font-family: sans-serif;
}

.suggestion:hover {
  background-color: var(--hover-background-color, #daeeff);
  border: var(--active-border);
}

.suggestion:focus {
  background-color: var(--hover-background-color, #daeeff);
  border: var(--active-border);
}

/* Actions: */
/* Focus */

</style>
<input id="input"></input>
<div id="suggestionContainer"></div>
`;

/**
 * meat-input webcomponent
 * @customelement meat-input
 * @description displays a stylized input field
 * @example <meat-input></meat-input>
 * */
export class MeatInputElement extends HTMLElement {
  /**
   * Create an instance of MeatInputElement
   */
  constructor() {
    super();
    this._suggestions = [];
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.input = this.shadow.querySelector("input");
    this._currentFocus = 0;
    this.input.addEventListener('input', this._onInputChange);
    this.input.addEventListener("keydown", this._switchFocus);
  }

  _switchFocus = (evt) => {
    if (evt.keyCode == 40) { // down
      this._currentFocus++;
    } else if (evt.keyCode == 38) { //up
      this._currentFocus--;
    } else if (evt.keyCode == 13) {

    }
    console.log(this._currentFocus);
    if (this._currentFocus == 0) {
      this.input.focus();
      return;
    }
    const suggestion = this.shadow.querySelector(`#suggestion${this._currentFocus}`);
    suggestion.focus();

    if (evt.keyCode == 13) {
      evt.preventDefault();  /*If the ENTER key is pressed, prevent the form from being submitted,*/
      if (this._currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (suggestion) suggestion.click();
      }
    }
    
  }

  _renderSuggestions(suggestions){
    const container = this.shadow.querySelector("#suggestionContainer");
    container.innerHTML = "";

    //const container = this.shadow.querySelector("#suggestionContainer");
    //container.innerHTML = "";
    suggestions.forEach((suggestion, index) => {
      const row = document.createElement("div");
      row.id = "suggestion"+(index+1);
      row.setAttribute('tabindex', (index+1));
      row.className = "suggestion"
      row.innerHTML = "<strong>" + suggestion.substr(0, this.input.value.length) + "</strong>"
      row.innerHTML += suggestion.substr(this.input.value.length);
      row.addEventListener("click", evt => {
        this.input.value = row.textContent;
      });
      row.addEventListener("keydown", this._switchFocus);
      container.appendChild(row);
    })
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    this._upgradeProperty('suggestions');
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    return ["disabled", "clearable", "size", "limit", "placeholder", "autocomplete"];
  }

  /*
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    console.log(name, oldVal, newVal);
    switch (name) {
      case "disabled":
        if (newVal == "") {
          this.input.disabled = true;
        }
        break;
      case "clearable":
        break;
      case "placeholder":
        this.input.placeholder = newVal;
        break;
      case "limit":
        break;
    }
  }

  /** 
   * @param {string} evt 
   * Aim to make webcomponents lazy.
   * A developer might attempt to set a property on your element before its definition has been loaded. 
   * This will make sure the property is set when the element loads in.
  */
  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }

    // sort suggestions alphanumerically
    if (prop == "suggestions") {
      this._sortSuggestions();
    }
  }

  _sortSuggestions = () => {
    this._suggestions = this._suggestions.sort(function (a, b) {
      //If characters get matched to the regular expression \D+\, push [infinity, "the first char"]
      //If numbers get matched to the regular expression \d+\, push [the numbers, ""]
      let aMatches = []; 
      let bMatches = [];
      a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { aMatches.push([$1 || Infinity, $2 || ""]) });       
      b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bMatches.push([$1 || Infinity, $2 || ""]) });

      //Go through the array and compare either the number or the character depending on what got matched earlier, if we end up comparing chracters and numbers, number 
      //takes priority because the chararacter group's first element in its array is infinity, similarly, the second element in the number group's array is ""
      let index = 0;
      let aGroup = null;
      let bGroup = null;
      let result = null;
      while(aMatches[index] != null && bMatches[index] != null) {      
          aGroup = aMatches[index];
          bGroup = bMatches[index];
          // compare each group
          result = (aGroup[0] - bGroup[0]) || aGroup[1].localeCompare(bGroup[1]);
          // if the comparison is unequal, then just return the result
          index++;
          if (result != 0) {
              return result;
          }
      }

      //otherwise, decide by the length
      return aMatches.length - bMatches.length;
    });
  }

  /**
   * @param {object} evt 
   * Suggest terms for user to select.
   */
  _onInputChange = (evt) => {
    if (!evt.target.value) {
      this._renderSuggestions([]);
      return;
    }
    const regex = new RegExp(`^${evt.target.value}(.*?)`);
    const matchedSuggestions = this._suggestions.filter((suggestion) => suggestion.match(regex));
    this._renderSuggestions(matchedSuggestions);
  }

  get suggestions() {
    return this._suggestions;
  }

  set suggestions(val) {
    this._suggestions = val;
    this._sortSuggestions();
  }
}
window.customElements.define("meat-input", MeatInputElement);
