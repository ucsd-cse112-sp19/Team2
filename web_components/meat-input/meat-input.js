const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-input/meat-input.css"/>
<input id="input" type="text"></input>
<div id="suggestionContainer"></div>
`;

export class MeatInputElement extends HTMLElement {
  /**
   * meat-input webcomponent
   * @customelement meat-input
   * @description displays a stylized input field
   * @example <meat-input></meat-input>
   * @see [local_Demo]{@link http://127.0.0.1:5501/web_components/meat-input/meat-input-demo.html} for local examples.
   * @see [Demo]{@link https://meat-space.org/web_components/meat-input/meat-input-demo.html} for working example.
   * @property {boolean} disabled -Disable input from accepting text.
   * @property {string} size -Changes the size of the input box.
   * @property {string} placeholder -Placeholder showing what text this input can take.
   * @property {boolean} password -Make the input a password field and replace text with asteriks.
   * @property {string} value -Default text value within the input box.
   * @property {boolean} readOnly -Determines if the input box can be edited.
   * @property {boolean} suggest -Determines if input box will display a predetermined suggestion list.
   * @property {boolean} autocomplete -Determines if input box will use native browser capabilit to display user's previous inputs as suggestion.
   * */
  constructor() {
    super();
    this._sortSuggestions = this._sortSuggestions.bind(this);
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
    // User may have attempted to set suggestions before element loaded in, set them now.
    this._upgradeProperty("suggestions");

    // if user specifies bootstrap, link style to bootstrap
    if (this.hasAttribute("bootstrap")) {
      const newLink = this.shadow.querySelector("link"); // link stylesheet to bootstrap's stylesheet
      newLink.rel = "stylesheet";
      newLink.href =
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
      newLink.integrity =
        "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
      newLink.crossOrigin = "anonymous";
    }

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
      case "type":
        this.input.type = newVal;
        break;
      case "bootstrap":
        this.input.className = newVal;
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
   * @param {string} suggestions
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
    return this.getAttribute("limit");
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
