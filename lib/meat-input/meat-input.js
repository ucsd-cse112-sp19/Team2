"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeatInputElement = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement("template");
template.innerHTML = "\n<style></style>\n<link rel=\"stylesheet\" href=\"/web_components/meat-input/meat-input.css\"/>\n<input id=\"input\" type=\"text\"></input>\n<div id=\"suggestionContainer\"></div>\n";

var MeatInputElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MeatInputElement, _HTMLElement);

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
  function MeatInputElement() {
    var _this;

    _classCallCheck(this, MeatInputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatInputElement).call(this));
    _this._sortSuggestions = _this._sortSuggestions.bind(_assertThisInitialized(_this));
    _this._switchFocus = _this._switchFocus.bind(_assertThisInitialized(_this));
    _this._onInputChange = _this._onInputChange.bind(_assertThisInitialized(_this));
    _this._suggestions = [];
    _this.shadow = _this.attachShadow({
      mode: "open"
    });

    _this.shadow.appendChild(template.content.cloneNode(true));

    _this.input = _this.shadow.querySelector("input");
    _this.suggestionContainer = _this.shadow.querySelector("#suggestionContainer");
    _this._currentFocus = 0; // 0 means focusing input, 1 would be the first autocomplete suggestion, 2 would be the second...
    // when user types into the input, update internal state

    _this.input.addEventListener("input", _this._onInputChange); // when user presses any keys while input is focused, call _switchFocus


    _this.input.addEventListener("keydown", _this._switchFocus); // if you click inside the input, you focus it, therefore should reflect that internally


    _this.input.addEventListener("mousedown", function () {
      _this._currentFocus = 0;
    });
    /* Close the suggestion list whenever a click occurs */


    document.addEventListener("click", function () {
      _this.suggestionContainer.innerHTML = "";
    });
    return _this;
  }
  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */


  _createClass(MeatInputElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      // User may have attempted to set suggestions before element loaded in, set them now.
      this._upgradeProperty("suggestions"); // if this input is within a form, find the form and connect to it


      var parentNode = this.parentNode;

      while (parentNode) {
        if (parentNode && parentNode.nodeName == "FORM") {
          // form reset
          parentNode.addEventListener("reset", function () {
            // Shouldn't change value of a readonly input
            if (_this2.hasAttribute("readonly")) return;
            _this2.input.value = "";
            _this2.value = "";
          }); // form submit

          parentNode.addEventListener("submit", function (evt) {
            parentNode.append(_this2.input);
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

  }, {
    key: "attributeChangedCallback",

    /*
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     * */
    value: function attributeChangedCallback(name, oldVal, newVal) {
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

  }, {
    key: "_upgradeProperty",
    value: function _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        var value = this[prop];
        delete this[prop];
        this[prop] = value;
      } // sort suggestions alphanumerically


      if (prop == "suggestions") {
        this._sortSuggestions();
      }
    }
    /**
     * Sort suggestions alphanumerically for user convenience, make toggleable via attribute?
     */
    // _sortSuggestions = () => {

  }, {
    key: "_sortSuggestions",
    value: function _sortSuggestions() {
      this._suggestions = this._suggestions.sort(function (a, b) {
        // If characters get matched to the regular expression \D+\, push [infinity, "the first char"]
        // If numbers get matched to the regular expression \d+\, push [the numbers, ""]
        var aMatches = [];
        var bMatches = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
          aMatches.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
          bMatches.push([$1 || Infinity, $2 || ""]);
        }); // Go through the array and compare either the number or the character depending on what got matched earlier, if we end up comparing chracters and numbers, number
        // takes priority because the chararacter group's first element in its array is infinity, similarly, the second element in the number group's array is ""

        var index = 0;
        var aGroup = null;
        var bGroup = null;
        var result = null;

        while (aMatches[index] != null && bMatches[index] != null) {
          aGroup = aMatches[index];
          bGroup = bMatches[index]; // compare each group

          result = aGroup[0] - bGroup[0] || aGroup[1].localeCompare(bGroup[1]); // if the comparison is unequal, then just return the result

          index++;

          if (result != 0) {
            return result;
          }
        } // otherwise, decide by the length


        return aMatches.length - bMatches.length;
      });
    }
    /**
     * @param {event} evt
     * Allow user to use keyboard arrows to navigate up and down the list
     */
    // _switchFocus = (evt) => {

  }, {
    key: "_switchFocus",
    value: function _switchFocus(evt) {
      // move focus up or down the list of suggestions
      if (evt.keyCode == 40) {
        // down
        this._currentFocus++;
      } else if (evt.keyCode == 38) {
        // up
        this._currentFocus--;
      } // focus 0 means focusing the input


      if (this._currentFocus == 0) {
        this.input.focus();
        return;
      } // get reference to suggestion item


      var suggestion = this.shadow.querySelector("#suggestion".concat(this._currentFocus)); // if no suggestion, reached end of list, undo operation and return;

      if (!suggestion) {
        if (evt.keyCode == 40) {
          // down
          this._currentFocus--;
        } else if (evt.keyCode == 38) {
          // up
          this._currentFocus++;
        }

        return;
      } // focus the suggestion


      suggestion.focus(); // enter key pressed

      if (evt.keyCode == 13) {
        evt.preventDefault();
        /* If the ENTER key is pressed, prevent the form from being submitted,*/

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

  }, {
    key: "_onInputChange",
    value: function _onInputChange(evt) {
      if (!evt.target.value) {
        this._renderSuggestions([]);

        return;
      } // match all suggestions where the beginning is the same as the input and render


      var regex = new RegExp("^".concat(evt.target.value, "(.*?)"), "i");

      var matchedSuggestions = this._suggestions.filter(function (suggestion) {
        return suggestion.match(regex);
      });

      this._renderSuggestions(matchedSuggestions);

      this.value = evt.target.value;
    }
    /**
     * @param {array} suggestions
     * Render list of suggestions as dropdown list under input
     */

  }, {
    key: "_renderSuggestions",
    value: function _renderSuggestions(suggestions) {
      var _this3 = this;

      // if autocomplete is on or suggest is not on, don't render the suggestions list
      if (!this.getAttribute("suggest") == "on" || this.getAttribute("autocomplete") == "on") {
        return;
      }

      this.suggestionContainer.innerHTML = ""; // const container = this.shadow.querySelector("#suggestionContainer");
      // container.innerHTML = "";

      suggestions.forEach(function (suggestion, index) {
        var row = document.createElement("div");
        row.id = "suggestion" + (index + 1);
        row.setAttribute("tabindex", index + 1);
        row.className = "suggestion";
        row.value = suggestion;
        row.innerHTML = "<strong>" + suggestion.substr(0, _this3.input.value.length) + "</strong>"; // bold the matching part

        row.innerHTML += suggestion.substr(_this3.input.value.length);
        row.addEventListener("click", function () {
          _this3.input.value = row.textContent;
          _this3._currentFocus = index + 1;
        });
        row.addEventListener("keydown", _this3._switchFocus);

        _this3.suggestionContainer.appendChild(row);
      });
    }
    /**
     * Allow user to get list of autocomplete suggestions
     */

  }, {
    key: "suggestions",
    get: function get() {
      return this._suggestions;
    }
    /**
     * @param {array} val
     * Allow user to set list of autocomplete suggestions
     */
    ,
    set: function set(val) {
      this._suggestions = val;

      this._sortSuggestions();
    }
    /**
     * The following methods are the usual get and set
     * Get - allow user to retrieve value of the attribute
     * Set - Allows uer to assign the value of the attribute
     */

  }, {
    key: "size",
    get: function get() {
      return this.getAttribute("size");
    },
    set: function set(val) {
      if (val) this.setAttribute("size", val);else this.removeAttribute("size");
    }
  }, {
    key: "limit",
    get: function get() {
      return this.getAttribute("limit");
    },
    set: function set(val) {
      if (val) this.setAttribute("limit", val);else this.removeAttribute("limit");
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this.getAttribute("placeholder");
    },
    set: function set(val) {
      if (val) this.setAttribute("placeholder", val);else this.removeAttribute("placeholder");
    }
  }, {
    key: "password",
    get: function get() {
      return this.hasAttribute("password");
    },
    set: function set(val) {
      if (val) this.setAttribute("password", "");else this.removeAttribute("password");
    }
  }, {
    key: "suggest",
    get: function get() {
      return this.hasAttribute("suggest");
    },
    set: function set(val) {
      if (val) this.setAttribute("suggest", val);else this.removeAttribute("suggest");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["disabled", "size", "limit", "placeholder", "password", "value", "readonly", "suggest", "autocomplete", "bootstrap", "type"];
    }
  }]);

  return MeatInputElement;
}(_wrapNativeSuper(HTMLElement));

exports.MeatInputElement = MeatInputElement;
window.customElements.define("meat-input", MeatInputElement);