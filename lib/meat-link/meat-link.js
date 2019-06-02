"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeatLinkElement = void 0;

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
template.innerHTML = "\n<style></style>\n<link rel=\"stylesheet\" href=\"/web_components/meat-link/meat-link.css\"/>\n<a></a>\n";

var MeatLinkElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MeatLinkElement, _HTMLElement);

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
  function MeatLinkElement() {
    var _this;

    _classCallCheck(this, MeatLinkElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatLinkElement).call(this));
    _this.shadow = _this.attachShadow({
      mode: "open"
    });

    _this.shadow.appendChild(template.content.cloneNode(true));

    _this.link = _this.shadow.querySelector("a");
    return _this;
  }
  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */


  _createClass(MeatLinkElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.link.textContent = this.textContent;
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

  }, {
    key: "color",
    get: function get() {
      return this.getAttribute("color");
    },
    set: function set(val) {
      if (val) this.setAttribute("color", val);else this.removeAttribute("color");
    }
  }, {
    key: "underline",
    get: function get() {
      return this.getAttribute("underline");
    },
    set: function set(val) {
      if (val) this.setAttribute("underline", val);else this.removeAttribute("underline");
    }
  }, {
    key: "type",
    get: function get() {
      return this.getAttribute("type");
    },
    set: function set(val) {
      if (val) this.setAttribute("type", val);else this.removeAttribute("type");
    }
  }, {
    key: "href",
    get: function get() {
      return this.getAttribute("href");
    },
    set: function set(val) {
      if (val) this.setAttribute("href", val);else this.removeAttribute("href");
    }
  }, {
    key: "bootstrap",
    get: function get() {
      return this.getAttribute("bootstrap");
    },
    set: function set(val) {
      if (val) this.setAttribute("bootstrap", val);else this.removeAttribute("bootstrap");
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.hasAttribute("disabled");
    },
    set: function set(val) {
      if (val) this.setAttribute("disabled", val);else this.removeAttribute("disabled");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["type", "color", "href", "disabled", "underline", "icon", "bootstrap"];
    }
  }]);

  return MeatLinkElement;
}(_wrapNativeSuper(HTMLElement));

exports.MeatLinkElement = MeatLinkElement;
window.customElements.define("meat-link", MeatLinkElement);