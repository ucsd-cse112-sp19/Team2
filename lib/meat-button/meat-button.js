"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeatButtonElement = void 0;

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
template.innerHTML = "\n  <style></style>\n  <link rel=\"stylesheet\" href=\"/web_components/common.css\"/>\n  <link rel=\"stylesheet\" href=\"/web_components/meat-button/meat-button.css\"/>\n  <button id=\"button\" type=\"reset\"></button>\n";

var MeatButtonElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MeatButtonElement, _HTMLElement);

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
  function MeatButtonElement() {
    var _this;

    _classCallCheck(this, MeatButtonElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatButtonElement).call(this));
    _this._submitButton;
    _this._parentForm;
    _this.shadow = _this.attachShadow({
      mode: "open"
    });

    _this.shadow.appendChild(template.content.cloneNode(true));

    _this.button = _this.shadow.querySelector("#button");

    _this.addEventListener("click", _this._onClick);

    return _this;
  }
  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */


  _createClass(MeatButtonElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // Need to get the content inbetween the <meat-button> tags into the button so it renders
      this.button.textContent = this.textContent; // Look up dom tree for a parent form

      var parentNode = this.parentNode;

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

  }, {
    key: "attributeChangedCallback",

    /**
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     * */
    value: function attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case "disabled":
          if (newVal == "") this.button.disabled = true;else this.button.disabled = false;
          break;

        case "autofocus":
          if (newVal == "") this.button.autofocus = true;else this.button.autofocus = false;
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

  }, {
    key: "_onClick",

    /*
     * This is unnecessary for now, the user can just attach an event listener to <meat-button>
     * */
    value: function _onClick(evt, thisComponent) {
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
  }, {
    key: "disabled",
    // getters and setters for attributes
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
    key: "round",
    get: function get() {
      return this.hasAttribute("round");
    },
    set: function set(val) {
      if (val) {
        this.setAttribute("round", "");
      } else {
        this.removeAttribute("round");
      }
    }
  }, {
    key: "circle",
    get: function get() {
      return this.hasAttribute("circle");
    },
    set: function set(val) {
      if (val) {
        this.setAttribute("circle", "");
      } else {
        this.removeAttribute("circle");
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this.getAttribute("size");
    },
    set: function set(val) {
      if (val) {
        this.setAttribute("size", val);
      } else {
        this.removeAttribute("size");
      }
    }
  }, {
    key: "type",
    get: function get() {
      return this.getAttribute("type");
    },
    set: function set(val) {
      if (val) {
        this.setAttribute("type", val);
      } else {
        this.removeAttribute("type");
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
  }], [{
    key: "observedAttributes",
    get: function get() {
      /* <meat-button type="default" disabled></meat-button> */
      return ["autofocus", "color", "circle", "disabled", "round", "size", "type", "bootstrap"];
    }
  }]);

  return MeatButtonElement;
}(_wrapNativeSuper(HTMLElement));

exports.MeatButtonElement = MeatButtonElement;
window.customElements.define("meat-button", MeatButtonElement);