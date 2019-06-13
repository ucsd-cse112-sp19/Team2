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

  var css = "/* Note, this CSS needs a lot of work */\r\n/* Default styling for the input */\r\n/* host */\r\n:host {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: sans-serif;\r\n    text-align: left;\r\n    color: #444444;\r\n    height: 38px;\r\n    font-size: 14px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n\r\n    /* CSS Variables */\r\n    --input-padding: 10px;\r\n    --input-background-color: white;\r\n    --input-border: 1px solid #CCCCCC;\r\n    --input-hover-border: 1px solid #888888;\r\n    --input-focus-border: 1px solid #3388ff;\r\n    --input-active-border: 1px solid #3388ff;\r\n}\r\n\r\n::placeholder {\r\n    color: #AAAAAA;\r\n}\r\n\r\ninput {\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    background-color: var(--input-background-color);\r\n    padding: var(--input-padding);\r\n    border: var(--input-border);\r\n\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    /* These 4 are incorporated from bootstrap */\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    overflow: visible;\r\n\r\n    color: inherit;\r\n    border-radius: inherit;\r\n    outline: inherit;\r\n    font-family: inherit;\r\n    text-align: inherit;\r\n    \r\n    transition: border .3s;\r\n\r\n    /* special override-able css variables */\r\n}\r\n\r\ninput:hover {\r\n    border: var(--input-hover-border);\r\n}\r\n\r\ninput:focus {\r\n    border: var(--input-focus-border);\r\n}\r\n\r\ninput:active {\r\n    border: var(--input-active-border);\r\n}\r\n\r\n/* Attributes: */\r\n/* Size */\r\ninput[size=\"small\"] {\r\n    width: 100px;\r\n    height: inherit;\r\n}\r\ninput[size=\"medium\"] {\r\n    width: 200px;\r\n    height: inherit;\r\n}\r\ninput[size=\"large\"] {\r\n    width: 300px;\r\n    height: inherit;\r\n}\r\n\r\n/* Disabled */\r\ninput[disabled] {\r\n    border: none;\r\n    background-color: #cccccc;\r\n    cursor: not-allowed;\r\n}\r\n  \r\n/* Suggestion Styling */\r\n#suggestionContainer {\r\n    position: absolute;\r\n    border: var(--input-border);\r\n    border-bottom: none;\r\n    border-top: none;\r\n    z-index: 99;\r\n    /*position the autocomplete items to be the same width as the container:*/\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n/* Suggestion Rows */\r\n.suggestion {\r\n    padding-left: 5px;\r\n    cursor: pointer;\r\n    background-color: #fff; \r\n    border-bottom: 1px solid #d4d4d4; \r\n    font-family: inherit;\r\n    font-size: 15px\r\n}\r\n\r\n.suggestion:hover {\r\n    border: var(--suggestion-hover-border);\r\n}\r\n\r\n.suggestion:focus {\r\n    background-color: var(--suggestion-focus-background-color, #daeeff);\r\n    border: var(--suggestion-focus-border);\r\n}\r\n\r\n/* Bootstrap integration */\r\ninput[bootstrap~=\"form-control\"] {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n  \r\n@media (prefers-reduced-motion: reduce) {\r\n    :host([bootstrap~=\"form-control\"]) > input {\r\n      transition: none;\r\n    }\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::-ms-expand {\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #80bdff;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::-webkit-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::-moz-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]:-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[boostrap~=\"form-control\"]::-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]:disabled, input[bootstrap~=\"form-control\"][readonly] {\r\n    background-color: #e9ecef;\r\n    opacity: 1;\r\n  }\r\n\r\ninput[bootstrap~=\"form-control-file\"], input[bootstrap~=\"form-control-range\"] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\ninput[bootstrap~=\"form-control-plaintext\"] {\r\n    display: block;\r\n    width: 100%;\r\n    padding-top: 0.375rem;\r\n    padding-bottom: 0.375rem;\r\n    margin-bottom: 0;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: transparent;\r\n    border: solid transparent;\r\n    border-width: 1px 0;\r\n}\r\n\r\n/* Unsure about this one */\r\ninput[bootstrap~=\"form-control-plaintext\"].form-control-sm, input[bootstrap~=\"form-control-plaintext\"].form-control-lg {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\ninput[bootstrap~=\"form-control-sm\"] {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\ninput[bootstrap~=\"form-control-lg\"] {\r\n    height: calc(1.5em + 1rem + 2px);\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n\r\ninput[bootstrap~=\"custom-control-input\"] {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\r\n}\r\n\r\n/* TODO */\r\n:host([bootstrap~=\"custom-control-input\"]):checked ~ .custom-control-label::before {\r\n    color: #fff;\r\n    border-color: #007bff;\r\n    background-color: #007bff;\r\n}\r\n  \r\n:host([bootstrap~=\"custom-control-input\"]):focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n:host([bootstrap~=\"custom-control-input\"]):focus:not(:checked) ~ .custom-control-label::before {\r\n    border-color: #80bdff;\r\n}\r\n\r\n:host(:not([disabled])[bootstrap~=\"custom-control-input\"]):active ~ .custom-control-label::before {\r\n    color: #fff;\r\n    background-color: #b3d7ff;\r\n    border-color: #b3d7ff;\r\n}\r\n\r\n:host([bootstrap~=\"custom-control-input\"][disabled]) ~ .custom-control-label {\r\n    color: #6c757d;\r\n}\r\n\r\n:host([bootstrap~=\"custom-control-input\"][disabled]) ~ .custom-control-label::before {\r\n    background-color: #e9ecef;\r\n}";
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
