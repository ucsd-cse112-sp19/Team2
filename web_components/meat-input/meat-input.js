import style from './meat-input.css';

const template = document.createElement("template");
template.innerHTML = `
<style>
${style}
</style>
<input id="input" type="text"></input>
<div id="suggestionContainer"></div>
`;

export class MeatInput extends HTMLElement {
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
    this._switchFocus = this._switchFocus.bind(this);
    this._onInputChange = this._onInputChange.bind(this);

    this._suggestions = [];
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
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
    console.log(this.textContent);
    this.input.value = this.textContent;

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
        if (newVal == "") this.input.disabled = true;
        break;
      case "readonly":
        if (newVal == "") this.input.readOnly = true;
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
  }

  /**
   * @param {event} evt
   * Allow user to use keyboard arrows to navigate up and down the list
   */
  _switchFocus(evt) {
    const OriginalFocus = this._currentFocus;
    // move focus up or down the list of suggestions
    if (evt.keyCode == 40) this._currentFocus++;
    else if (evt.keyCode == 38) this._currentFocus--;

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
      this._currentFocus = OriginalFocus;
      return;
    }

    // focus the suggestion
    suggestion.focus();

    // enter key pressed
    if (evt.keyCode == 13) {
      this.value = suggestion.value; // set host value to the suggestion so user can use the value in their event listener
      this.input.value = suggestion.value; // set input value to the suggestion to reflect back visually
      this.suggestionContainer.innerHTML = "";
      this._currentFocus = 0;
      this.input.focus();
    }
  }

  /**
   * @param {object} evt
   * Suggest terms for user to select whenever they input characters.
   */
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

window.customElements.define("meat-input", MeatInput);
