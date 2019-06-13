var MeatImage = (function (exports) {
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

  var css = "/* host */\r\n:host .container {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  /* Hides Native Checkbox */\r\n  :host .container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n\r\n  /* Visible Checkmark */\r\n  :host .checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 5px;\r\n    background-color: #eee;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  /* Aligns Label */\r\n  :host #cblabel {\r\n    vertical-align: middle;\r\n  }\r\n\r\n  /* Hover Background */\r\n  :host .container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n\r\n  /* Disabled Colors */\r\n  :host([disabled]) input ~ .checkmark {\r\n    background-color: #808080;\r\n    cursor: not-allowed;\r\n  }\r\n  :host([disabled]) .container:hover input ~ .checkmark {\r\n    background-color: #808080;\r\n    cursor: not-allowed;\r\n  }\r\n  :host([disabled]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #808080;\r\n    cursor: not-allowed;\r\n  }\r\n\r\n  /* Checked default */\r\n  :host .container input:checked ~ .checkmark {\r\n    background-color: #808080;\r\n  }\r\n  :host .container:hover input:checked ~ .checkmark {\r\n    background-color: #000000;\r\n  }\r\n\r\n  /* Checked Color */\r\n  :host([color=\"grey\"]) .container input:checked ~ .checkmark {\r\n    background-color: #777777;\r\n  }\r\n  :host([color=\"red\"]) .container input:checked ~ .checkmark {\r\n    background-color: #cc5050;\r\n  }\r\n  :host([color=\"orange\"]) .container input:checked ~ .checkmark {\r\n    background-color: #df8a40;\r\n  }\r\n  :host([color=\"yellow\"]) .container input:checked ~ .checkmark {\r\n    background-color: #eedd00;\r\n  }\r\n  :host([color=\"green\"]) .container input:checked ~ .checkmark {\r\n    background-color: #59c040;\r\n  }\r\n  :host([color=\"blue\"]) .container input:checked ~ .checkmark {\r\n    background-color: #40a5ff;\r\n  }\r\n  :host([color=\"purple\"]) .container input:checked ~ .checkmark {\r\n    background-color: #aa55aa;\r\n  }\r\n  \r\n  /* Hover color when checked */\r\n  :host([color=\"grey\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #999999;\r\n  }\r\n  :host([color=\"red\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #e46060;\r\n  }\r\n  :host([color=\"orange\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #dfaa70;\r\n  }\r\n  :host([color=\"yellow\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #f6e690;\r\n  }\r\n  :host([color=\"green\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #79cc69;\r\n  }\r\n  :host([color=\"blue\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #65b5ff;\r\n  }\r\n  :host([color=\"purple\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #cc66cc;\r\n  }\r\n\r\n  /* Shows Checkmark if checked or not */\r\n  :host .checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  :host .container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n\r\n  /* Draws Checkmark */\r\n  :host .container .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }";
  styleInject(css);

  var template = document.createElement("template");
  template.innerHTML = "\n  <style>\n  ".concat(css, "\n  </style>\n\n  <label class=\"container\">\n    <input id=\"checkbox\" type=\"checkbox\">\n    <span class=\"checkmark\"></span>\n    <label id=\"cblabel\"></label>\n  </label>\n");
  var MeatCheckboxElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatCheckboxElement, _HTMLElement);

    /**
     * meat-checkbox webcomponent
     * @customelement meat-checkbox
     * @description displays a stylized checkbox component
     * @see [Demo]{@link https://meat-space.org/web_components/meat-checkbox/meat-checkbox-demo.html} for working example.
     * @example <meat-checkbox></meat-checkbox>
     * @property {boolean} checked -Property for if a checkbox is checked or not.
     * @property {string} color -Changes the color of the checkbox.
     * @property {boolean} disabled -Disables checkbox usage.
     */
    function MeatCheckboxElement() {
      var _this;

      _classCallCheck(this, MeatCheckboxElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatCheckboxElement).call(this));
      _this.shadow = _this.attachShadow({
        mode: "open"
      });

      _this.shadow.appendChild(template.content.cloneNode(true));

      _this._container = _this.shadow.querySelector("label"); // Entire "Checkbox"

      _this._input = _this._container.querySelector("input"); // Native Checkbox

      _this._checkmark = _this._container.querySelector("span"); // Visible Checkmark

      _this._cblabel = _this._container.querySelector("label"); // Checkbox Label

      return _this;
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */


    _createClass(MeatCheckboxElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _label = this.textContent;

        this._cblabel.appendChild(document.createTextNode(_label)); // Checks for instance properties and run them through setters


        this._upgradeProperty("checked");

        this._upgradeProperty("disabled"); // Adds event listeners for key


        this.addEventListener("keyup", this._onKeyUp);
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
       * Releases references and removes listeners when element removed from DOM.
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener("keyup", this._onKeyUp);
      }
      /**
       * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
       * call attributeChangedCallback(name, oldVal, newVal)
       */

    }, {
      key: "attributeChangedCallback",

      /**
       * Called whenever one of the attributes specified in observedAttributes() is changed
       * @param {string} name
       * @param {string} oldVal
       * @param {string} newVal
       */
      value: function attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
          case "checked":
            this._input.checked = "checked";
            break;

          case "disabled":
            if (newVal == "") this._input.disabled = true;else this._input.disabled = false;
            break;
          // Work in Progress

          case "bootstrap":
            this._input.className = "custom-control-input";
            this._checkmark.className = "custom-control-indicator";
            this._container.className = "custom-control custom-checkbox";
            this._cblabel.className = "custom-control-description";
            break;
        }
      } // Attribute Getters and Setters

    }, {
      key: "_onKeyUp",

      /**
       * @param {string} event
       * Triggers when 'space' key is pressed. Will check the checkbox.
       */
      value: function _onKeyUp(event) {
        if (event.altKey) return;

        switch (event.keyCode) {
          case "32":
            event.preventDefault();

            this._toggleChecked();

            break;

          default:
            return;
        }
      }
      /**
       * Toggles "Checked" attribute of checkbox.
       */

    }, {
      key: "_toggleChecked",
      value: function _toggleChecked() {
        if (this.disabled) return;
        this.checked = !this.checked;
      }
    }, {
      key: "disabled",
      get: function get() {
        return this.hasAttribute("disabled");
      },
      set: function set(val) {
        if (val) {
          this.setAttribute("disabled", "");
        } else {
          this.removeAttribute("disabled");
        }
      }
    }, {
      key: "color",
      get: function get() {
        return this.getAttribute("color");
      },
      set: function set(val) {
        if (val) {
          this.setAttribute("color", val);
        } else {
          this.removeAttribute("color");
        }
      }
    }, {
      key: "checked",
      get: function get() {
        return this.getAttribute("checked");
      },
      set: function set(val) {
        if (val) {
          this.setAttribute("checked", "");
        } else {
          this.removeAttribute("checked");
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["color", "disabled", "checked", "bootstrap"];
      }
    }]);

    return MeatCheckboxElement;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-checkbox", MeatCheckboxElement);

  exports.MeatCheckboxElement = MeatCheckboxElement;

  return exports;

}({}));
