"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeatImageElement = void 0;

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
template.innerHTML = "\n<style></style>\n<link rel=\"stylesheet\" href=\"/web_components/meat-image/meat-image.css\"/>\n\n<div id=\"imageContainer\">\n  <img id=\"imageElement\" class=\"nativeImg\">\n  <slot id=\"placeholder\" name=\"placeholder\"></slot>\n  <slot id=\"error\" name=\"error\"></slot>\n</div>\n";
var referrerPolicies = ["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "unsafe-url"];
var fillStyles = ["fill", "contain", "cover", "none", "scale-down"];

var MeatImageElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MeatImageElement, _HTMLElement);

  /**
   * meat-boilerplate webcomponent
   * @customelement meat-boilerplate
   * @description A boilerplate for starting new webcomponents
   * @example <meat-boilerplate></meat-boilerplate>
   */
  function MeatImageElement() {
    var _this;

    _classCallCheck(this, MeatImageElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatImageElement).call(this));
    _this.shadow = _this.attachShadow({
      mode: "open"
    });

    _this.shadow.appendChild(template.content.cloneNode(true));

    _this.image = _this.shadow.querySelector("#imageElement");
    _this.imageContainer = _this.shadow.querySelector("#imageContainer"); // Apply user's inline style to our custom component container

    _this.imageContainer.style = _this.style.cssText;
    return _this;
  }
  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */


  _createClass(MeatImageElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // TODO: find a way to make placeholder disappear upon loading
      this.image.addEventListener("load", function () {
        // do not show placeholder slot
        console.log("loaded");
      }); // TODO: display error plcaeholder upon image error

      this.image.addEventListener("error", function () {// show only error slot
      });
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
        case "src":
          this.image.src = newVal;
          break;

        case "fit":
          if (fillStyles.includes(newVal)) {
            this.image.setAttribute("style", "object-fit: ".concat(newVal, ";"));
          }

          break;

        case "alt":
          this.image.alt = newVal;
          break;

        case "referrerpolicy":
          if (referrerPolicies.includes(newVal)) {
            this.image.setAttribute("referrerpolicy", newVal);
          }

          break;
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["src", "fit", "alt", "referrerpolicy", "lazy", "scrollcontainer"];
    }
  }]);

  return MeatImageElement;
}(_wrapNativeSuper(HTMLElement));

exports.MeatImageElement = MeatImageElement;
window.customElements.define("meat-image", MeatImageElement);