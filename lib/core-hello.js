var CoreHello = (function (exports) {
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

  var rainbow = "\n    :host {\n        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);\n        background-size: 1800% 1800%;\n        \n        -webkit-animation: rainbow 18s ease infinite;\n        -z-animation: rainbow 18s ease infinite;\n        -o-animation: rainbow 18s ease infinite;\n            animation: rainbow 18s ease infinite;}\n        \n        @-webkit-keyframes rainbow {\n            0%{background-position:0% 82%}\n            50%{background-position:100% 19%}\n            100%{background-position:0% 82%}\n        }\n        @-moz-keyframes rainbow {\n            0%{background-position:0% 82%}\n            50%{background-position:100% 19%}\n            100%{background-position:0% 82%}\n        }\n        @-o-keyframes rainbow {\n            0%{background-position:0% 82%}\n            50%{background-position:100% 19%}\n            100%{background-position:0% 82%}\n        }\n        @keyframes rainbow { \n            0%{background-position:0% 82%}\n            50%{background-position:100% 19%}\n            100%{background-position:0% 82%}\n    }\n";
  var tmpl = document.createElement("template");
  tmpl.innerHTML = "\n<style>\n:host {\n    font-family: var(--font-family, Helvetica);\n    font-size: var(--font-size, 50px);\n    background-color: var(--background-color, #9E9E9E);\n    width: var(--width);\n    height: var(--height);\n    margin: var(--margin, auto);\n    display: var(--display, block);\n    text-align: var(--text-align, center);\n}\n/* when \"hidden\" attribute applied, display nothing */\n:host([hidden]){\n    display: none;\n}\n</style>\n<span id=\"main-text\">Hello world, </span>\n<slot></slot>\n";
  var CoreHello =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(CoreHello, _HTMLElement);

    /**
     * core-hello web component
     * @customelement core-hello
     * @description displays 'Hello World, <input>!'
     * @example <caption> Hello World! </caption>
     * <core-hello rainbow lang="en">
     * Alex!
     * </core-hello>
     * @see [Demo]{@link https://meat-space.org/web_components/core-hello/core-hello-test.html} for working example.
     * @property {boolean} rainbow -Enables a background rainbow effect.
     * @property {string} lang -Set language (English, French, Spanish). Default is English.
     * */
    function CoreHello() {
      var _this;

      _classCallCheck(this, CoreHello);

      console.info("Constructing core-hello!");
      _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreHello).call(this));

      var shadowRoot = _this.attachShadow({
        mode: "open"
      });
      /*
       * method attaches a shadow DOM tree to the specified element.
       */


      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      return _this;
    }
    /**
     * tell component to call attributeChangedCallback method when the following attributes are found
     */


    _createClass(CoreHello, [{
      key: "attributeChangedCallback",

      /**
       * Invoked when one of the custom element's attributes is added, removed, or changed.
       * @param {string} name
       * @param {string} oldVal
       * @param {string} newVal
       */
      value: function attributeChangedCallback(name, oldVal, newVal) {
        console.info("AttributeChangedCallback called for | ".concat(name, " |."));

        switch (name) {
          case "rainbow":
            this.updateStyle(this);
            break;

          case "lang":
            this.updateLang(this, newVal);
            break;
        }
      }
      /**
       * update styling with rainbow
       * @param {Object} elem
       */

    }, {
      key: "updateStyle",
      value: function updateStyle(elem) {
        console.info("Updating style: applying rainbow.");
        var shadowRoot = elem.shadowRoot;
        shadowRoot.querySelector("style").textContent += rainbow;
      }
      /**
       * update language
       * @param {Object} elem
       * @param {string} lang
       */

    }, {
      key: "updateLang",
      value: function updateLang(elem, lang) {
        console.info("Updating Language: applying ".concat(lang, "."));
        var shadowRoot = elem.shadowRoot;
        var text;

        switch (lang) {
          case "en":
            text = "Hello world, ";
            break;

          case "sp":
            text = "Hola mundo, ";
            break;

          case "fr":
            text = "Bonjour le monde, ";
            break;

          default:
            text = "Hello world, ";
            break;
        }

        shadowRoot.querySelector("#main-text").textContent = text;
        /*
         * update the span inside the main div
         */
      }
      /**
       * rainbow effect
       * @param {string} val
       */

    }, {
      key: "rainbow",
      set: function set(val) {
        if (val) {
          this.setAttribute("rainbow", "");
        } else {
          this.removeAttribute("rainbow");
        }
      }
      /**
       * gets the rainbow attribute, might be useful when interacting with outside javascript?
       */
      ,
      get: function get() {
        return this.getAttribute("rainbow");
      }
      /**
       * language support
       * @param {string} val
       */

    }, {
      key: "lang",
      set: function set(val) {
        if (val) {
          this.setAttribute("lang", val);
        } else {
          this.removeAttribute("lang");
        }
      }
      /**
       * gets the lang attribute
       */
      ,
      get: function get() {
        return this.getAttribute("lang");
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["rainbow", "lang"];
      }
    }]);

    return CoreHello;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("core-hello", CoreHello);

  exports.CoreHello = CoreHello;

  return exports;

}({}));
