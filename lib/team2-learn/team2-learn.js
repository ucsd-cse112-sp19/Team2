"use strict";

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

var Team2LearnElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Team2LearnElement, _HTMLElement);

  /**
   * team2-learn web component
   * @customelement team2-learn
   * @description A learning exercise to see how to interact with webcomponents dynamically via javascript; how to allow manipulation of a webcomponent's state for the user
   * @example
   * <body>
   *      <input/><button id="change-property"></button>
   *      <team2-learn id="team2-learn"></team2-learn>
   * </body>
   *  <script>
   *      const button = document.querySelector("#change-property");
   *      const input = document.querySelector("input");
   *      const team2Learn = document.querySelector("#team2-learn");
   *      button.addEventListener('click', () => {
   *          team2Learn.items = [...team2Learn.items, input.value];
   *  })
   * </script>
   * @see [Demo]{@link https://meat-space.org/web_components/team2-learn/team2-learn-demo.html} for working example.
   * @property {array} items -Array of elements to display as a vertical list.
   * */
  function Team2LearnElement() {
    var _this;

    _classCallCheck(this, Team2LearnElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Team2LearnElement).call(this)); // internal state, list of elements to display

    _this._items = [];

    var shadowRoot = _this.attachShadow({
      mode: "open"
    });

    _this._shadowRoot = shadowRoot; // create the base template

    _this.template = document.createElement("template");
    _this.template.innerHTML = "\n        <style>\n            #container {\n                background-color: lightgrey;\n                border: 1px solid black;\n                width: 300px;\n            }\n            span {\n                display: block;\n                overflow-wrap: break-word;\n            }\n        </style>\n        <div id=\"container\"></div>\n        ";

    _this._shadowRoot.appendChild(_this.template.content.cloneNode(true)); // render the list based on this._items


    _this._render();

    return _this;
  }
  /*
   * Fires when element is inserted into DOM.
   * Good place to set initial attributes, internal state, and install event listeners.
   */


  _createClass(Team2LearnElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {}
    /*
     * Re-render the element whenever a property gets changed.
     * Without litHtml, we have to re-render the entire thing.
     * litHTML is smart enough to figure out what parts changed and only re-render those.
     */

  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      var container = this._shadowRoot.querySelector("#container");

      container.innerHTML = ""; // for each "item" in the internal state this._items, create a new row

      this._items.forEach(function (item, index) {
        var row = document.createElement("span");
        row.id = index;
        row.innerHTML = item;
        row.addEventListener("click", function (evt) {
          _this2._items.splice(evt.target.id, 1);

          _this2._render();
        });
        container.appendChild(row);
      });
    }
    /*
     * allows user to set items
     * example: instance.items = ["val1", "val2"];
     */

  }, {
    key: "items",
    set: function set(items) {
      this._items = items;

      this._render();
    }
    /*
     * allows user to reference items
     * example: console.log(instance.items)
     */
    ,
    get: function get() {
      return this._items;
    } // question, how can we make this compatible with allowing users to hard code elements to the list in html and also allow them to add and remove dynamically with javascript?

  }]);

  return Team2LearnElement;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define("team2-learn", Team2LearnElement);