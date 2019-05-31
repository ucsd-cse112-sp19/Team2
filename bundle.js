'use strict';

const template = document.createElement("template");
template.innerHTML = `
  <style></style>
  <link rel="stylesheet" href="/web_components/common.css"/>
  <link rel="stylesheet" href="/web_components/meat-button/meat-button.css"/>
  <button id="button" type="reset"></button>
`;

class MeatButtonElement extends HTMLElement {
  /**
   * meat-button webcomponent
   * @customelement meat-button
   * @description displays a stylized button
   * @example <meat-button></meat-button>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-button/meat-button-demo.html} for working example.
   * @property {attribute} autofocus -Enables button to automatically get focus when the page loads.
   * @property {string} bootstrap -Enables bootstrap as styling of the button.
   * @property {attribute} circle -Enables a circle shaped button.
   * @property {attribute} disabled -Disables button from accepting events.
   * @property {attribute} round -Enables a round shaped button.
   * @property {string} size -Changes the size of the button.
   * @property {string} type -Enables the specified type of button.
   * */
  constructor() {
    super();
    this._submitButton;
    this._parentForm;
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.button = this.shadow.querySelector("#button");
    this.addEventListener("click", this._onClick);
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // Need to get the content inbetween the <meat-button> tags into the button so it renders
    this.button.textContent = this.textContent;

    // Look up dom tree for a parent form
    let parentNode = this.parentNode;
    while (parentNode) {
      if (parentNode && parentNode.nodeName == "FORM") {
        this._parentForm = parentNode;
        break;
      }
      parentNode = parentNode.parentNode;
    }

    this._submitButton = document.createElement("button");
    this._submitButton.type = "hidden";
    this.appendChild(this._submitButton);
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    /* <meat-button type="default" disabled></meat-button> */
    return [
      "autofocus",
      "color",
      "circle",
      "disabled",
      "round",
      "size",
      "type",
      "bootstrap"
    ];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "disabled":
        if (newVal == "") this.button.disabled = true;
        else this.button.disabled = false;
        break;
      case "autofocus":
        if (newVal == "") this.button.autofocus = true;
        else this.button.autofocus = false;
        break;
      case "type":
        this.button.type = newVal;
        break;
      case "bootstrap":
        this.button.className = newVal;
        break;
    }
  }

  /**
   * getters and setters for attributes
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get round() {
    return this.hasAttribute("round");
  }

  set round(val) {
    if (val) {
      this.setAttribute("round", "");
    } else {
      this.removeAttribute("round");
    }
  }

  get circle() {
    return this.hasAttribute("circle");
  }

  set circle(val) {
    if (val) {
      this.setAttribute("circle", "");
    } else {
      this.removeAttribute("circle");
    }
  }

  get size() {
    return this.getAttribute("size");
  }

  set size(val) {
    if (val) {
      this.setAttribute("size", val);
    } else {
      this.removeAttribute("size");
    }
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(val) {
    if (val) {
      this.setAttribute("type", val);
    } else {
      this.removeAttribute("type");
    }
  }

  // getters and setters for attributes
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get round() {
    return this.hasAttribute("round");
  }

  set round(val) {
    if (val) {
      this.setAttribute("round", "");
    } else {
      this.removeAttribute("round");
    }
  }

  get circle() {
    return this.hasAttribute("circle");
  }

  set circle(val) {
    if (val) {
      this.setAttribute("circle", "");
    } else {
      this.removeAttribute("circle");
    }
  }

  get size() {
    return this.getAttribute("size");
  }

  set size(val) {
    if (val) {
      this.setAttribute("size", val);
    } else {
      this.removeAttribute("size");
    }
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(val) {
    if (val) {
      this.setAttribute("type", val);
    } else {
      this.removeAttribute("type");
    }
  }

  get color() {
    return this.getAttribute("color");
  }

  set color(val) {
    if (val) {
      this.setAttribute("color", val);
    } else {
      this.removeAttribute("color");
    }
  }

  /*
   * This is unnecessary for now, the user can just attach an event listener to <meat-button>
   * */
  _onClick(evt, thisComponent) {
    switch (this.getAttribute("type")) {
      case "reset":
        if (this._parentForm) {
          this._parentForm.reset();
        }
        break;
      case "submit":
        if (this._parentForm) {
          this._submitButton.click();
        }
        break;
    }
  }
}

window.customElements.define("meat-button", MeatButtonElement);

const rainbow = `
    :host {
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;
        
        -webkit-animation: rainbow 18s ease infinite;
        -z-animation: rainbow 18s ease infinite;
        -o-animation: rainbow 18s ease infinite;
            animation: rainbow 18s ease infinite;}
        
        @-webkit-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-moz-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-o-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @keyframes rainbow { 
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
    }
`;

const tmpl = document.createElement("template");
tmpl.innerHTML = `
<style>
:host {
    font-family: var(--font-family, Helvetica);
    font-size: var(--font-size, 50px);
    background-color: var(--background-color, #9E9E9E);
    width: var(--width);
    height: var(--height);
    margin: var(--margin, auto);
    display: var(--display, block);
    text-align: var(--text-align, center);
}
/* when "hidden" attribute applied, display nothing */
:host([hidden]){
    display: none;
}
</style>
<span id="main-text">Hello world, </span>
<slot></slot>
`;

class CoreHelloElement extends HTMLElement {
  /**
   * core-hello web component
   * @customelement core-hello
   * @description displays 'Hello World, <input>!'
   * @example <caption> Hello World! </caption>
   * <core-hello rainbow lang="en">
   * Alex!
   * </core-hello>
   * @see [Demo]{@link https://meat-space.org/web_components/core-hello/core-hello-test.html} for working example.
   * @property {boolean} rainbow -Enables a background rainbow effect.
   * @property {string} lang -Set language (English, French, Spanish). Default is English.
   * */
  constructor() {
    console.info("Constructing core-hello!");
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    /*
     * method attaches a shadow DOM tree to the specified element.
     */
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  /**
   * tell component to call attributeChangedCallback method when the following attributes are found
   */
  static get observedAttributes() {
    return ["rainbow", "lang"];
  }

  /**
   * Invoked when one of the custom element's attributes is added, removed, or changed.
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    console.info(`AttributeChangedCallback called for | ${name} |.`);
    switch (name) {
      case "rainbow":
        this.updateStyle(this);
        break;
      case "lang":
        this.updateLang(this, newVal);
        break;
    }
  }

  /**
   * update styling with rainbow
   * @param {Object} elem
   */
  updateStyle(elem) {
    console.info("Updating style: applying rainbow.");
    const shadowRoot = elem.shadowRoot;
    shadowRoot.querySelector("style").textContent += rainbow;
  }

  /**
   * update language
   * @param {Object} elem
   * @param {string} lang
   */
  updateLang(elem, lang) {
    console.info(`Updating Language: applying ${lang}.`);
    const shadowRoot = elem.shadowRoot;
    let text;
    switch (lang) {
      case "en":
        text = "Hello world, ";
        break;
      case "sp":
        text = "Hola mundo, ";
        break;
      case "fr":
        text = "Bonjour le monde, ";
        break;
      default:
        text = "Hello world, ";
        break;
    }
    shadowRoot.querySelector("#main-text").textContent = text;
    /*
     * update the span inside the main div
     */
  }

  /**
   * rainbow effect
   * @param {string} val
   */
  set rainbow(val) {
    if (val) {
      this.setAttribute("rainbow", "");
    } else {
      this.removeAttribute("rainbow");
    }
  }
  /**
   * gets the rainbow attribute, might be useful when interacting with outside javascript?
   */
  get rainbow() {
    return this.getAttribute("rainbow");
  }

  /**
   * language support
   * @param {string} val
   */
  set lang(val) {
    if (val) {
      this.setAttribute("lang", val);
    } else {
      this.removeAttribute("lang");
    }
  }
  /**
   * gets the lang attribute
   */
  get lang() {
    return this.getAttribute("lang");
  }
}
window.customElements.define("core-hello", CoreHelloElement);

const template$1 = document.createElement("template");
template$1.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-card/meat-card.css"/>
<slot id="header" name="header"></slot>
<slot id="body" name="body"></slot>
`;

class MeatCardElement extends HTMLElement {
  /**
   * meat-card webcomponent
   * @customelement meat-card
   * @description A reusable card with replaceable markup.
   * @example <meat-card></meat-card>
   */
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.shadowDOM.appendChild(template$1.content.cloneNode(true));
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {}

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return ["shadow"];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
  }

  /**
   * Getters and Setters
   */
  get shadow() {
    return this.getAttribute("shadow");
  }

  set shadow(val) {
    if (val) {
      this.setAttribute("shadow", val);
    } else {
      this.removeAttribute("shadow");
    }
  }
}
window.customElements.define("meat-card", MeatCardElement);

const template$2 = document.createElement("template");
template$2.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-input/meat-input.css"/>
<input id="input" type="text"></input>
<div id="suggestionContainer"></div>
`;

class MeatInputElement extends HTMLElement {
  /**
   * meat-input webcomponent
   * @customelement meat-input
   * @description displays a stylized input field
   * @example <meat-input></meat-input>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-input/meat-button-demo.html} for working example.
   * @property {attribute} autocomplete -Enables autocomplete by caching previous input.
   * @property {string} bootstrap -Enables bootstrap as styling of the button.
   * @property {attribute} disabled -Disables input from accepting events.
   * @property {integer} limit -Restricts how many characters can be entered in the input.
   * @property {attribute} password -Format input as a password field.
   * @property {string} placeholder -Describes what goes into the input initially.
   * @property {attribute} readonly -Disables input from being written.
   * @property {string} size -Determines the size of the input box.
   * @property {attribute} suggest -Enables the dropdown of suggestions for the input.
   * @property {string} type -Describes the type of input.
   * @property {string} value -The contents of the input.
   * */
  constructor() {
    super();
    this._sortSuggestions = this._sortSuggestions.bind(this);
    this._switchFocus = this._switchFocus.bind(this);
    this._onInputChange = this._onInputChange.bind(this);

    this._suggestions = [];
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template$2.content.cloneNode(true));
    this.input = this.shadow.querySelector("input");
    this.suggestionContainer = this.shadow.querySelector(
      "#suggestionContainer"
    );

    this._currentFocus = 0; // 0 means focusing input, 1 would be the first autocomplete suggestion, 2 would be the second...

    // when user types into the input, update internal state
    this.input.addEventListener("input", this._onInputChange);
    // when user presses any keys while input is focused, call _switchFocus
    this.input.addEventListener("keydown", this._switchFocus);
    // if you click inside the input, you focus it, therefore should reflect that internally
    this.input.addEventListener("mousedown", () => {
      this._currentFocus = 0;
    });

    /* Close the suggestion list whenever a click occurs */
    document.addEventListener("click", () => {
      this.suggestionContainer.innerHTML = "";
    });
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // User may have attempted to set suggestions before element loaded in, set them now.
    this._upgradeProperty("suggestions");

    // if this input is within a form, find the form and connect to it
    let parentNode = this.parentNode;
    while (parentNode) {
      if (parentNode && parentNode.nodeName == "FORM") {
        // form reset
        parentNode.addEventListener("reset", () => {
          // Shouldn't change value of a readonly input
          if (this.hasAttribute("readonly")) return;
          this.input.value = "";
          this.value = "";
        });

        // form submit
        parentNode.addEventListener("submit", evt => {
          parentNode.append(this.input);
        });
        return;
      }
      parentNode = parentNode.parentNode;
    }
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    return [
      "disabled",
      "size",
      "limit",
      "placeholder",
      "password",
      "value",
      "readonly",
      "suggest",
      "autocomplete",
      "bootstrap",
      "type"
    ];
  }

  /*
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "disabled":
        if (newVal == "") {
          this.input.disabled = true;
        }
        break;
      case "readonly":
        if (newVal == "") {
          this.input.readOnly = true;
        }
        break;
      case "value":
        this.input.value = newVal;
        break;
      case "placeholder":
        this.input.placeholder = newVal;
        break;
      case "limit":
        this.input.maxLength = newVal;
        break;
      case "password":
        this.input.type = "password";
        break;
      case "autocomplete":
        this.input.autocomplete = newVal;
        break;
      case "suggest":
        // if autocomplete was not explicitely set and the user wants their own suggestions on,
        // then turn off autocomplete
        if (!this.hasAttribute("autocomplete") && newVal == "on") {
          this.input.autocomplete = "off";
        }
        break;
      case "size":
        this.input.setAttribute("size", newVal);
        break;
      case "bootstrap":
        this.input.setAttribute("bootstrap", newVal);
        this.input.className = newVal;
        break;
      case "type":
        this.input.type = newVal;
        break;
    }
  }

  /**
   * @param {string} prop
   * Aim to make webcomponents lazy.
   * A developer might attempt to set a property on your element before its definition has been loaded.
   * This will make sure the property is set when the element loads in.
   */
  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }

    // sort suggestions alphanumerically
    if (prop == "suggestions") {
      this._sortSuggestions();
    }
  }

  /**
   * Sort suggestions alphanumerically for user convenience, make toggleable via attribute?
   */
  // _sortSuggestions = () => {
  _sortSuggestions() {
    this._suggestions = this._suggestions.sort(function(a, b) {
      // If characters get matched to the regular expression \D+\, push [infinity, "the first char"]
      // If numbers get matched to the regular expression \d+\, push [the numbers, ""]
      const aMatches = [];
      const bMatches = [];
      a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
        aMatches.push([$1 || Infinity, $2 || ""]);
      });
      b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
        bMatches.push([$1 || Infinity, $2 || ""]);
      });

      // Go through the array and compare either the number or the character depending on what got matched earlier, if we end up comparing chracters and numbers, number
      // takes priority because the chararacter group's first element in its array is infinity, similarly, the second element in the number group's array is ""
      let index = 0;
      let aGroup = null;
      let bGroup = null;
      let result = null;
      while (aMatches[index] != null && bMatches[index] != null) {
        aGroup = aMatches[index];
        bGroup = bMatches[index];
        // compare each group
        result = aGroup[0] - bGroup[0] || aGroup[1].localeCompare(bGroup[1]);
        // if the comparison is unequal, then just return the result
        index++;
        if (result != 0) {
          return result;
        }
      }

      // otherwise, decide by the length
      return aMatches.length - bMatches.length;
    });
  }

  /**
   * @param {event} evt
   * Allow user to use keyboard arrows to navigate up and down the list
   */
  // _switchFocus = (evt) => {
  _switchFocus(evt) {
    // move focus up or down the list of suggestions
    if (evt.keyCode == 40) {
      // down
      this._currentFocus++;
    } else if (evt.keyCode == 38) {
      // up
      this._currentFocus--;
    }

    // focus 0 means focusing the input
    if (this._currentFocus == 0) {
      this.input.focus();
      return;
    }

    // get reference to suggestion item
    const suggestion = this.shadow.querySelector(
      `#suggestion${this._currentFocus}`
    );

    // if no suggestion, reached end of list, undo operation and return;
    if (!suggestion) {
      if (evt.keyCode == 40) {
        // down
        this._currentFocus--;
      } else if (evt.keyCode == 38) {
        // up
        this._currentFocus++;
      }
      return;
    }

    // focus the suggestion
    suggestion.focus();

    // enter key pressed
    if (evt.keyCode == 13) {
      evt.preventDefault(); /* If the ENTER key is pressed, prevent the form from being submitted,*/
      if (this._currentFocus > -1) {
        this.value = suggestion.value; // set host value to the suggestion so user can use the value in their event listener
        this.input.value = suggestion.value; // set input value to the suggestion to reflect back visually
        this.suggestionContainer.innerHTML = "";
        this._currentFocus = 0;
        this.input.focus();
      }
    }
  }

  /**
   * @param {object} evt
   * Suggest terms for user to select whenever they input characters.
   */
  // _onInputChange = (evt) => {
  _onInputChange(evt) {
    if (!evt.target.value) {
      this._renderSuggestions([]);
      return;
    }

    // match all suggestions where the beginning is the same as the input and render
    const regex = new RegExp(`^${evt.target.value}(.*?)`, "i");
    const matchedSuggestions = this._suggestions.filter(suggestion =>
      suggestion.match(regex)
    );
    this._renderSuggestions(matchedSuggestions);
    this.value = evt.target.value;
  }

  /**
   * @param {array} suggestions
   * Render list of suggestions as dropdown list under input
   */
  _renderSuggestions(suggestions) {
    // if autocomplete is on or suggest is not on, don't render the suggestions list
    if (
      !this.getAttribute("suggest") == "on" ||
      this.getAttribute("autocomplete") == "on"
    ) {
      return;
    }

    this.suggestionContainer.innerHTML = "";

    // const container = this.shadow.querySelector("#suggestionContainer");
    // container.innerHTML = "";
    suggestions.forEach((suggestion, index) => {
      const row = document.createElement("div");
      row.id = "suggestion" + (index + 1);
      row.setAttribute("tabindex", index + 1);
      row.className = "suggestion";
      row.value = suggestion;
      row.innerHTML =
        "<strong>" +
        suggestion.substr(0, this.input.value.length) +
        "</strong>"; // bold the matching part
      row.innerHTML += suggestion.substr(this.input.value.length);
      row.addEventListener("click", () => {
        this.input.value = row.textContent;
        this._currentFocus = index + 1;
      });
      row.addEventListener("keydown", this._switchFocus);
      this.suggestionContainer.appendChild(row);
    });
  }

  /**
   * Allow user to get list of autocomplete suggestions
   */
  get suggestions() {
    return this._suggestions;
  }

  /**
   * @param {array} val
   * Allow user to set list of autocomplete suggestions
   */
  set suggestions(val) {
    this._suggestions = val;
    this._sortSuggestions();
  }

  /**
   * The following methods are the usual get and set
   * Get - allow user to retrieve value of the attribute
   * Set - Allows uer to assign the value of the attribute
   */
  get size() {
    return this.getAttribute("size");
  }

  set size(val) {
    if (val) this.setAttribute("size", val);
    else this.removeAttribute("size");
  }

  get limit() {
    return this.getAttribute("limit");
  }

  set limit(val) {
    if (val) this.setAttribute("limit", val);
    else this.removeAttribute("limit");
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }

  set placeholder(val) {
    if (val) this.setAttribute("placeholder", val);
    else this.removeAttribute("placeholder");
  }

  get password() {
    return this.hasAttribute("password");
  }

  set password(val) {
    if (val) this.setAttribute("password", "");
    else this.removeAttribute("password");
  }

  get suggest() {
    return this.hasAttribute("suggest");
  }

  set suggest(val) {
    if (val) this.setAttribute("suggest", val);
    else this.removeAttribute("suggest");
  }
}

window.customElements.define("meat-input", MeatInputElement);

const template$3 = document.createElement("template");
template$3.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-link/meat-link.css"/>
<a></a>
`;

class MeatLinkElement extends HTMLElement {
  /**
   * meat-link webcomponent
   * @customelement meat-link
   * @description displays a stylized link
   * @example <meat-link></meat-link>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-link/meat-link-demo.html} for working example.
   * @property {string} bootstrap -Enables bootstrap as styling of the button.
   * @property {string} color -Specifies the color of the link.
   * @property {attribute} disabled -Disables the link from accepting events.
   * @property {string} href -The location of where the link redirects.
   * @property {string} icon -Class that specifies the icon image for the link.
   * @property {string} type -Specifies the type of the media that the link points to.
   * @property {attribute} underline -Underlines the link.
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template$3.content.cloneNode(true));
    this.link = this.shadow.querySelector("a");
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    this.link.textContent = this.textContent;
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return [
      "type",
      "color",
      "href",
      "disabled",
      "underline",
      "icon",
      "bootstrap"
    ];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "disabled":
        this.link.setAttribute("disabled", newVal);
        this.link.disabled = newVal;
        break;
      case "underline":
        this.link.setAttribute("underline", newVal);
      case "href":
        this.link.href = newVal;
        break;
      case "type":
        this.link.type = newVal;
        break;
      case "color":
        this.link.setAttribute("color", newVal);
        break;
      case "bootstrap":
        this.link.setAttribute("bootstrap", newVal);
        this.link.className = newVal;
        break;
    }
  }

  /**
   * Getters and Setters
   */
  get color() {
    return this.getAttribute("color");
  }

  set color(val) {
    if (val) this.setAttribute("color", val);
    else this.removeAttribute("color");
  }

  get underline() {
    return this.getAttribute("underline");
  }

  set underline(val) {
    if (val) this.setAttribute("underline", val);
    else this.removeAttribute("underline");
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(val) {
    if (val) this.setAttribute("type", val);
    else this.removeAttribute("type");
  }

  get href() {
    return this.getAttribute("href");
  }

  set href(val) {
    if (val) this.setAttribute("href", val);
    else this.removeAttribute("href");
  }

  get bootstrap() {
    return this.getAttribute("bootstrap");
  }

  set bootstrap(val) {
    if (val) this.setAttribute("bootstrap", val);
    else this.removeAttribute("bootstrap");
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) this.setAttribute("disabled", val);
    else this.removeAttribute("disabled");
  }
}
window.customElements.define("meat-link", MeatLinkElement);

var index = {
    MeatButtonElement,
    CoreHelloElement,
    MeatCardElement,
    MeatInputElement,
    MeatLinkElement
};

module.exports = index;
