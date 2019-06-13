var MeatInput = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/* Note, this CSS needs a lot of work */\n/* Default styling for the input */\n/* host */\n:host {\n    position: relative;\n    display: inline-block;\n    font-family: sans-serif;\n    text-align: left;\n    color: rgb(68, 68, 68);\n    height: 38px;\n    font-size: 14px;\n    border-radius: 3px;\n    outline: none;\n\n    /* CSS Variables */\n    --input-padding: 10px;\n    --input-background-color: white;\n    --input-border: 1px solid #CCCCCC;\n    --input-hover-border: 1px solid #888888;\n    --input-focus-border: 1px solid #3388ff;\n    --input-active-border: 1px solid #3388ff;\n}\n\n::placeholder {\n    color: #AAAAAA;\n}\n\ninput {\n    position: relative;\n    display: inline-block;\n\n    background-color: var(--input-background-color);\n    padding: var(--input-padding);\n    border: var(--input-border);\n\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n\n    /* These 4 are incorporated from bootstrap */\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    overflow: visible;\n\n    color: inherit;\n    border-radius: inherit;\n    outline: inherit;\n    font-family: inherit;\n    text-align: inherit;\n    \n    transition: border .3s;\n\n    /* special override-able css variables */\n}\n\ninput:hover {\n    border: var(--input-hover-border);\n}\n\ninput:focus {\n    border: var(--input-focus-border);\n}\n\ninput:active {\n    border: var(--input-active-border);\n}\n\n/* Attributes: */\n/* Size */\ninput[size=\"small\"] {\n    width: 100px;\n    height: inherit;\n}\ninput[size=\"medium\"] {\n    width: 200px;\n    height: inherit;\n}\ninput[size=\"large\"] {\n    width: 300px;\n    height: inherit;\n}\n\n/* Disabled */\ninput[disabled] {\n    border: none;\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n  \n/* Suggestion Styling */\n#suggestionContainer {\n    position: absolute;\n    border: var(--input-border);\n    border-bottom: none;\n    border-top: none;\n    z-index: 99;\n    /*position the autocomplete items to be the same width as the container:*/\n    top: 100%;\n    left: 0;\n    right: 0;\n}\n\n/* Suggestion Rows */\n.suggestion {\n    padding-left: 5px;\n    cursor: pointer;\n    background-color: #fff; \n    border-bottom: 1px solid #d4d4d4; \n    font-family: inherit;\n    font-size: 15px\n}\n\n.suggestion:hover {\n    border: var(--suggestion-hover-border);\n}\n\n.suggestion:focus {\n    background-color: var(--suggestion-focus-background-color, #daeeff);\n    border: var(--suggestion-focus-border);\n}\n\n/* Bootstrap integration */\ninput[bootstrap~=\"form-control\"] {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n  \n@media (prefers-reduced-motion: reduce) {\n    :host([bootstrap~=\"form-control\"]) > input {\n      transition: none;\n    }\n}\n\ninput[bootstrap~=\"form-control\"]::-ms-expand {\n    background-color: transparent;\n    border: 0;\n}\n\ninput[bootstrap~=\"form-control\"]:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\ninput[bootstrap~=\"form-control\"]::-webkit-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]::-moz-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[boostrap~=\"form-control\"]::-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]::placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]:disabled, input[bootstrap~=\"form-control\"][readonly] {\n    background-color: #e9ecef;\n    opacity: 1;\n  }\n\ninput[bootstrap~=\"form-control-file\"], input[bootstrap~=\"form-control-range\"] {\n    display: block;\n    width: 100%;\n}\n\ninput[bootstrap~=\"form-control-plaintext\"] {\n    display: block;\n    width: 100%;\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem;\n    margin-bottom: 0;\n    line-height: 1.5;\n    color: #212529;\n    background-color: transparent;\n    border: solid transparent;\n    border-width: 1px 0;\n}\n\n/* Unsure about this one */\ninput[bootstrap~=\"form-control-plaintext\"].form-control-sm, input[bootstrap~=\"form-control-plaintext\"].form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n}\n\ninput[bootstrap~=\"form-control-sm\"] {\n    height: calc(1.5em + 0.5rem + 2px);\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n}\n\ninput[bootstrap~=\"form-control-lg\"] {\n    height: calc(1.5em + 1rem + 2px);\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    border-radius: 0.3rem;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\ninput[bootstrap~=\"custom-control-input\"] {\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n}\n\n/* TODO */\n:host([bootstrap~=\"custom-control-input\"]):checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: #007bff;\n    background-color: #007bff;\n}\n  \n:host([bootstrap~=\"custom-control-input\"]):focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n:host([bootstrap~=\"custom-control-input\"]):focus:not(:checked) ~ .custom-control-label::before {\n    border-color: #80bdff;\n}\n\n:host(:not([disabled])[bootstrap~=\"custom-control-input\"]):active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff;\n    border-color: #b3d7ff;\n}\n\n:host([bootstrap~=\"custom-control-input\"][disabled]) ~ .custom-control-label {\n    color: #6c757d;\n}\n\n:host([bootstrap~=\"custom-control-input\"][disabled]) ~ .custom-control-label::before {\n    background-color: #e9ecef;\n}";
  styleInject(css);

  var template = document.createElement("template");
  template.innerHTML = "\n<style>\n".concat(css, "\n</style>\n<input id=\"input\" type=\"text\"></input>\n<div id=\"suggestionContainer\"></div>\n");
  var MeatInput =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatInput, _HTMLElement);

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
    function MeatInput() {
      var _this;

      _classCallCheck(this, MeatInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatInput).call(this));
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


    _createClass(MeatInput, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        console.log(this.textContent);
        this.input.value = this.textContent; // User may have attempted to set suggestions before element loaded in, set them now.

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

    }, {
      key: "_upgradeProperty",
      value: function _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
      /**
       * @param {event} evt
       * Allow user to use keyboard arrows to navigate up and down the list
       */

    }, {
      key: "_switchFocus",
      value: function _switchFocus(evt) {
        var OriginalFocus = this._currentFocus; // move focus up or down the list of suggestions

        if (evt.keyCode == 40) this._currentFocus++;else if (evt.keyCode == 38) this._currentFocus--; // focus 0 means focusing the input

        if (this._currentFocus == 0) {
          this.input.focus();
          return;
        } // get reference to suggestion item


        var suggestion = this.shadow.querySelector("#suggestion".concat(this._currentFocus)); // if no suggestion, reached end of list, undo operation and return;

        if (!suggestion) {
          this._currentFocus = OriginalFocus;
          return;
        } // focus the suggestion


        suggestion.focus(); // enter key pressed

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

    return MeatInput;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-input", MeatInput);

  exports.MeatInput = MeatInput;

  return exports;

}({}));
