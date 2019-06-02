"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveEditorElement = void 0;

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
template.innerHTML = "\n    <link rel=\"stylesheet\" href=\"live-editor.css\">\n    <style></style>\n    <slot id=\"src\" name=\"src\"></slot>\n    <div id=\"container\">\n        <iframe id=\"viewer\" name=\"viewer\"></iframe>\n        <textarea id=\"editor\" name=\"editor\" spellcheck=\"false\"></textarea>\n    </div>\n";

var LiveEditorElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(LiveEditorElement, _HTMLElement);

  /**
   * live-editor web component description
   * @customelement live-editor
   * @description displays whatever html is input into the editor; can specify an html file to load in at startup
   * @example <caption> Display a specified html document </caption>
   * <live-editor file="./src.html"></live-editor>
   * */
  function LiveEditorElement() {
    var _this;

    _classCallCheck(this, LiveEditorElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LiveEditorElement).call(this));
    _this._keyup = _this._keyup.bind(_assertThisInitialized(_this));
    _this._keydown = _this._keydown.bind(_assertThisInitialized(_this));

    _this.attachShadow({
      mode: "open"
    });
    /*
     * method attaches a shadow DOM tree to the specified element.
     */


    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    /*
     * get references to viewer and editor and add event listeners to editor
     */


    _this._viewer = _this.shadowRoot.querySelector("iframe[name=viewer]");
    _this._editor = _this.shadowRoot.querySelector("textarea[name=editor]");

    _this._editor.addEventListener("keyup", function (evt) {
      return _this._keyup(evt);
    });

    _this._editor.addEventListener("keydown", function (evt) {
      return _this._keydown(evt);
    });

    _this._editor.value = _this.innerHTML;
    return _this;
  }
  /**
   * tell component to call attributeChangedCallback method when the following attributes are found
   */


  _createClass(LiveEditorElement, [{
    key: "attributeChangedCallback",

    /**
     * Invoked when one of the custom element's attributes is added, removed, or changed.
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     */
    value: function attributeChangedCallback(name, oldVal, newVal) {
      var _this2 = this;

      console.info("AttributeChangedCallback called for | ".concat(name, " |."));

      switch (name) {
        case "file":
          fetch(newVal).then(function (response) {
            return response.text();
          }).then(function (text) {
            _this2._editor.value = text;

            _this2._keyup();
          });
          break;
      }
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._keyup();
    }
    /**
     * Editor "keyup" listener callback, populate viewer with html in the editor whenever a key is released
     * @param {object} evt
     */

  }, {
    key: "_keyup",
    value: function _keyup(evt) {
      console.info("_keyup: editor changed");
      console.log(evt);
      this._viewer.srcdoc = this._editor.value;
    }
    /**
     * Editor "keydown" listener callback, if key is tab, add a tab into the editor
     * @param {object} evt
     */

  }, {
    key: "_keydown",
    value: function _keydown(evt) {
      console.info("_keydown: editor changed");
      console.log(evt); // allow tab to be used in the text editor, blind users won't be able to use tab to unfocus the textarea without the mouse however

      if (evt) {
        if (evt.keyCode == 9 || evt.which == 9) {
          evt.preventDefault();
          var s = this._editor.selectionStart;
          this._editor.value = this._editor.value.substring(0, this._editor.selectionStart) + "\t" + this._editor.value.substring(this._editor.selectionStart, this.selectionEnd);
          this._editor.selectionEnd = s + 1;
        }
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["file"];
    }
  }]);

  return LiveEditorElement;
}(_wrapNativeSuper(HTMLElement));

exports.LiveEditorElement = LiveEditorElement;
window.customElements.define("live-editor", LiveEditorElement);