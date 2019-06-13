var MeatComponents = (function (exports) {
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

  var css = "/* host */\r\n:host {\r\n    font-family: sans-serif;\r\n    color: #444444;\r\n    width: 90px;\r\n    height: 40px;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    vertical-align: top;\r\n  \r\n    /* special css variables */\r\n    --hover-background-color: #daeeff;\r\n    --focus-background-color: #daeeff;\r\n    --active-background-color: #daeeff;\r\n  \r\n    --hover-color: #3388ff;\r\n    --focus-color: #3388ff;\r\n    --active-color: #3388ff;\r\n  \r\n    --hover-border: 1px solid #bbccff;\r\n    --focus-border: 1px solid #bbccff;\r\n    --active-border: 1px solid #3388ff;\r\n  }\r\n  \r\n  /* define color scheme for default button */\r\n  button {\r\n    /* css that button must have */\r\n    display: inline-block;\r\n    position: relative;\r\n    outline: none;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border 0.15s ease-in-out;\r\n  \r\n    /* css that can be safely defined on the host */\r\n    width: inherit;\r\n    height: inherit;\r\n    font-family: inherit;\r\n    color: var(--color, inherit);\r\n    font-size: inherit;\r\n    vertical-align: inherit;\r\n    font-weight: inherit;\r\n    \r\n    /* css that needs to be exposed through css variables */\r\n    background-color: var(--background-color, #ffffff);\r\n    border: var(--border, 1px solid #cccccc);\r\n  }\r\n  \r\n  /* Bootstrap Support */\r\n  \r\n  /* basic button styling */\r\n  :host([bootstrap~=\"btn\"]) > button {\r\n    font-weight: 400;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: 1px solid transparent;\r\n    /* padding: 0.375rem 0.75rem; */\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n  \r\n  /* Bootstrap Basic Disable Button */\r\n  :host([disabled][bootstrap]) > button {\r\n    opacity: 0.65;\r\n    cursor: default;\r\n  }\r\n  \r\n  /* Primary Button */\r\n  :host([bootstrap~=\"btn-primary\"]) > button {\r\n    /* btn btn-primary styling */\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  /* Primary Hover */\r\n  :host([bootstrap~=\"btn-primary\"]) > button:hover {\r\n    /* btn btn-primary hover styling */\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n  }\r\n  \r\n  /* Primary Focus */\r\n  :host([bootstrap~=\"btn-primary\"]) > button:focus {\r\n    /* btn btn-primary focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\r\n  }\r\n  \r\n  /* Primary Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-primary\"]) > button {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  /* Primary Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-primary\"]) > button:active {\r\n    /* btn btn-primary active styling */\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border-color: #005cbf;\r\n  }\r\n    \r\n  /* Secondary Button */\r\n  :host([bootstrap~=\"btn-secondary\"]) > button {\r\n    /* btn btn-secondary styling */\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n    /* padding-right: 88px; */\r\n  }\r\n  \r\n  /* Secondary Hover */\r\n  :host([bootstrap~=\"btn-secondary\"]) > button:hover {\r\n    /* btn btn-secondary hover styling */\r\n    color: #fff;\r\n    background-color: #5a6268;\r\n    border-color: #545b62;\r\n  }\r\n  \r\n  /* Secondary Focus */\r\n  :host([bootstrap~=\"btn-secondary\"]) > button:focus {\r\n    /* btn btn-secondary focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\r\n  }\r\n  \r\n  /* Secondary Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-secondary\"]) > button {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n  }\r\n  \r\n  /* Secondary Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-secondary\"]) > button:active {\r\n    /* btn btn-secondary active styling */\r\n    color: #fff;\r\n    background-color: #545b62;\r\n    border-color: #4e555b;\r\n  }\r\n  \r\n  /* Success Button */\r\n  :host([bootstrap~=\"btn-success\"]) > button {\r\n    /* btn btn-success styling */\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  /* Success Hover */\r\n  :host([bootstrap~=\"btn-success\"]) > button:hover {\r\n    /* btn btn-success hover styling */\r\n    color: #fff;\r\n    background-color: #218838;\r\n    border-color: #1e7e34;\r\n  }\r\n  \r\n  /* Success Focus */\r\n  :host([bootstrap~=\"btn-success\"]) > button:focus {\r\n    /* btn btn-success focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\r\n  }\r\n  \r\n  /* Success Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-success\"]) > button {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  /* Success Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-success\"]) > button:active {\r\n    /* btn btn-success active styling */\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n  }\r\n  \r\n  /* Info Button */\r\n  :host([bootstrap~=\"btn-info\"]) > button {\r\n    /* btn btn-info styling */\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  /* Info Hover */\r\n  :host([bootstrap~=\"btn-info\"]) > button:hover {\r\n    /* btn btn-info hover styling */\r\n    color: #fff;\r\n    background-color: #138496;\r\n    border-color: #117a8b;\r\n  }\r\n  \r\n  /* Info Focus */\r\n  :host([bootstrap~=\"btn-info\"]) > button:focus {\r\n    /* btn btn-info focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\r\n  }\r\n  \r\n  /* Info Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-info\"]) > button {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  /* Info Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-info\"]) > button:active {\r\n    /* btn btn-info active styling */\r\n    color: #fff;\r\n    background-color: #117a8b;\r\n    border-color: #10707f;\r\n  }\r\n  \r\n  /* Warning Button */\r\n  :host([bootstrap~=\"btn-warning\"]) > button {\r\n    /* btn btn-warning styling */\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  /* Warning Hover */\r\n  :host([bootstrap~=\"btn-warning\"]) > button:hover {\r\n    /* btn btn-warning hover styling */\r\n    color: #212529;\r\n    background-color: #e0a800;\r\n    border-color: #d39e00;\r\n  }\r\n  \r\n  /* Warning Focus */\r\n  :host([bootstrap~=\"btn-warning\"]) > button:focus {\r\n    /* btn btn-warning focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\r\n  }\r\n  \r\n  /* Warning Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-warning\"]) > button {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  /* Warning Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-warning\"]) > button:active {\r\n    /* btn btn-warning active styling */\r\n    color: #212529;\r\n    background-color: #d39e00;\r\n    border-color: #c69500;\r\n  }\r\n  \r\n  /* Danger Button */\r\n  :host([bootstrap~=\"btn-danger\"]) > button {\r\n    /* btn btn-danger styling */\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  /* Danger Hover */\r\n  :host([bootstrap~=\"btn-danger\"]) > button:hover {\r\n    /* btn btn-danger hover styling */\r\n    color: #fff;\r\n    background-color: #c82333;\r\n    border-color: #bd2130;\r\n  }\r\n  \r\n  /* Danger Focus */\r\n  :host([bootstrap~=\"btn-danger\"]) > button:focus {\r\n    /* btn btn-danger focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\r\n  }\r\n  \r\n  /* Danger Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-danger\"]) > button {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  /* Danger Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-danger\"]) > button:active {\r\n    /* btn btn-danger active styling */\r\n    color: #fff;\r\n    background-color: #bd2130;\r\n    border-color: #b21f2d;\r\n  }\r\n  \r\n  /* Light Button */\r\n  :host([bootstrap~=\"btn-light\"]) > button {\r\n    /* btn btn-light styling */\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  /* Light Hover */\r\n  :host([bootstrap~=\"btn-light\"]) > button:hover {\r\n    /* btn btn-light hover styling */\r\n    color: #212529;\r\n    background-color: #e2e6ea;\r\n    border-color: #dae0e5;\r\n  }\r\n  \r\n  /* Light Focus */\r\n  :host([bootstrap~=\"btn-light\"]) > button:focus {\r\n    /* btn btn-light focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\r\n  }\r\n  \r\n  /* Light Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-light\"]) > button {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  /* Light Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-light\"]) > button:active {\r\n    /* btn btn-light active styling */\r\n    color: #212529;\r\n    background-color: #dae0e5;\r\n    border-color: #d3d9df;\r\n  }\r\n  \r\n  /* Dark Button */\r\n  :host([bootstrap~=\"btn-dark\"]) > button {\r\n    /* btn btn-dark styling */\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  /* Dark Hover */\r\n  :host([bootstrap~=\"btn-dark\"]) > button:hover {\r\n    /* btn btn-dark hover styling */\r\n    color: #fff;\r\n    background-color: #23272b;\r\n    border-color: #1d2124;\r\n  }\r\n  \r\n  /* Dark Focus */\r\n  :host([bootstrap~=\"btn-dark\"]) > button:focus {\r\n    /* btn btn-dark focus styling */\r\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\r\n  }\r\n  \r\n  /* Dark Disable Button */\r\n  :host([disabled][bootstrap~=\"btn-dark\"]) > button {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  /* Dark Active */\r\n  :host(:not([disabled])[bootstrap~=\"btn-dark\"]) > button:active {\r\n    /* btn btn-dark active styling */\r\n    color: #fff;\r\n    background-color: #1d2124;\r\n    border-color: #171a1d;\r\n  }\r\n  \r\n  /* Attribute: round */\r\n  /* if host element, i.e. <meat-button> has attribute round, apply this css to button*/\r\n  \r\n  :host([round]) > button {\r\n      border-radius: 100px;\r\n  }\r\n  \r\n  /* Attribute: circle */\r\n  :host([circle]) > button {\r\n      border-radius: 50%;\r\n      width: 40px;\r\n      height: 40px;\r\n  }\r\n  \r\n  /* Attribute: size */\r\n  /* if host element, i.e. <meat-button> has attribute size=\"small\", apply this css */\r\n  :host([size=\"small\"]) > button {\r\n      width: 80px;\r\n      height: 36px;\r\n  }\r\n  \r\n  :host([size=\"medium\"]) > button {\r\n      width: 90px;\r\n      height: 40px;\r\n  }\r\n  \r\n  :host([size=\"large\"]) > button {\r\n      width: 100px;\r\n      height: 44px;\r\n  }\r\n  \r\n  /* if size specified, use the following dimensions */\r\n  :host([circle][size=\"small\"]) > button {\r\n      width: 30px;\r\n      height: 30px;\r\n  }\r\n  \r\n  :host([circle][size=\"medium\"]) > button {\r\n      width: 40px;\r\n      height: 40px;\r\n  }\r\n  \r\n  :host([circle][size=\"large\"]) > button {\r\n      width: 50px;\r\n      height: 50px;\r\n  }\r\n  \r\n  /* define color scheme for white button */\r\n  :host([color=\"white\"]) {\r\n    /* colors */\r\n    --color: #444444;\r\n    --background-color: #ffffff;\r\n    --border: 1px solid #cccccc;\r\n  \r\n    --hover-background-color: #daeeff;\r\n    --focus-background-color: #daeeff;\r\n    --active-background-color: #daeeff;\r\n  \r\n    --hover-color: #3388ff;\r\n    --focus-color: #3388ff;\r\n    --active-color: #3388ff;\r\n  \r\n    --hover-border: 1px solid #bbccff;\r\n    --focus-border: 1px solid #bbccff;\r\n    --active-border: 1px solid #3388ff;\r\n  }\r\n  \r\n  :host([color=\"grey\"]) {\r\n    /* colors */\r\n    --color: #ffffff;\r\n    --background-color: #777777;\r\n    --border: 1px solid #777777;\r\n  \r\n    --hover-background-color: #999999;\r\n    --focus-background-color: #999999;\r\n    --active-background-color: #555555;\r\n  \r\n    --hover-color: #ffffff;\r\n    --focus-color: #ffffff;\r\n    --active-color: #ffffff;\r\n  \r\n    --hover-border: 1px solid #999999;\r\n    --focus-border: 1px solid #999999;\r\n    --active-border: 1px solid #555555;\r\n  }\r\n  \r\n  /* define color scheme for red button */\r\n  :host([color=\"red\"]) {\r\n    /* colors */\r\n    --color: #ffffff;\r\n    --background-color: #cc5050;\r\n    --border: 1px solid #cc5050;\r\n  \r\n    --hover-background-color: #e46060;\r\n    --focus-background-color: #e46060;\r\n    --active-background-color: #b03737;\r\n  \r\n    --hover-color: #ffffff;\r\n    --focus-color: #ffffff;\r\n    --active-color: #ffffff;\r\n  \r\n    --hover-border: 1px solid #e46060;\r\n    --focus-border: 1px solid #e46060;\r\n    --active-border: 1px solid #b03737;\r\n  }\r\n  \r\n  /* define color scheme for orange button */\r\n  :host([color=\"orange\"]) {\r\n    /* colors */\r\n    --color: #ffffff;\r\n    --background-color: #df8a40;\r\n    --border: 1px solid #df8a40;\r\n  \r\n    --hover-background-color: #dfaa70;\r\n    --focus-background-color: #dfaa70;\r\n    --active-background-color: #cf7a30;\r\n  \r\n    --hover-color: #ffffff;\r\n    --focus-color: #ffffff;\r\n    --active-color: #ffffff;\r\n  \r\n    --hover-border: 1px solid #dfaa70;\r\n    --focus-border: 1px solid #dfaa70;\r\n    --active-border: 1px solid #cf7a30;\r\n  }\r\n  \r\n  /* define color scheme for yellow button */\r\n  :host([color=\"yellow\"]) {\r\n    /* colors */\r\n    --color: #444444;\r\n    --background-color: #ffe600;\r\n    --border: 1px solid #ffe600;\r\n  \r\n    --hover-background-color: #ffed86;\r\n    --focus-background-color: #ffed86;\r\n    --active-background-color: #e9d200;\r\n  \r\n    --hover-color: #444444;\r\n    --focus-color: #444444;\r\n    --active-color: #444444;\r\n  \r\n    --hover-border: 1px solid #ffed86;\r\n    --focus-border: 1px solid #ffed86;\r\n    --active-border: 1px solid #e9d200;\r\n  }\r\n  \r\n  /* define color scheme for green button */\r\n  :host([color=\"green\"]) {\r\n    /* colors */\r\n    --color: #ffffff;\r\n    --background-color: #59c040;\r\n    --border: 1px solid #59c040;\r\n  \r\n    --hover-background-color: #79cc69;\r\n    --focus-background-color: #79cc69;\r\n    --active-background-color: #50a050;\r\n  \r\n    --hover-color: #ffffff;\r\n    --focus-color: #ffffff;\r\n    --active-color: #ffffff;\r\n  \r\n    --hover-border: 1px solid #79cc69;\r\n    --focus-border: 1px solid #79cc69;\r\n    --active-border: 1px solid #50a050;\r\n  }\r\n  \r\n  /* define color scheme for blue button */\r\n  :host([color=\"blue\"]) {\r\n    /* colors */\r\n    --color: #ffffff;\r\n    --background-color: #40a5ff;\r\n    --border: 1px solid #40a5ff;\r\n  \r\n    --hover-background-color: #65b5ff;\r\n    --focus-background-color: #65b5ff;\r\n    --active-background-color: #2285dd;\r\n  \r\n    --hover-color: #ffffff;\r\n    --focus-color: #ffffff;\r\n    --active-color: #ffffff;\r\n  \r\n    --hover-border: 1px solid #65b5ff;\r\n    --focus-border: 1px solid #65b5ff;\r\n    --active-border: 1px solid #2285dd;\r\n  }\r\n  \r\n  \r\n  /* define color scheme for blue button */\r\n  :host([color=\"purple\"]) {\r\n    /* colors */\r\n    --color: #ffffff;\r\n    --background-color: #aa55aa;\r\n    --border: 1px solid #aa55aa;\r\n  \r\n    --hover-background-color: #cc66cc;\r\n    --focus-background-color: #cc66cc;\r\n    --active-background-color: #994499;\r\n  \r\n    --hover-color: #ffffff;\r\n    --focus-color: #ffffff;\r\n    --active-color: #ffffff;\r\n  \r\n    --hover-border: 1px solid #cc66cc;\r\n    --focus-border: 1px solid #cc66cc;\r\n    --active-border: 1px solid #994499;\r\n  }\r\n  \r\n  /* hover focus active */\r\n  :host(:not([disabled]):not([bootstrap])) > button:hover {\r\n    background-color: var(--hover-background-color);\r\n    color: var(--hover-color);\r\n    border: var(--hover-border);\r\n  }\r\n  \r\n  :host(:not([disabled]):not([bootstrap])) > button:focus {\r\n    background-color: var(--focus-background-color);\r\n    color: var(--focus-color);\r\n    border: var(--focus-border);\r\n  }\r\n  \r\n  :host(:not([disabled]):not([bootstrap])) > button:active {\r\n    background-color: var(--active-background-color);\r\n    color: var(--active-color);\r\n    border: var(--active-border);\r\n  }\r\n  \r\n  /* Attribute: disabled */\r\n  :host(:not([bootstrap])[disabled]) > button {\r\n      opacity: 0.65;\r\n      cursor: not-allowed;\r\n  }";
  styleInject(css);

  var template = document.createElement("template");
  template.innerHTML = "\n<style>\n".concat(css, "\n</style>\n<button id=\"button\" type=\"reset\"></button>\n");
  var MeatButton =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatButton, _HTMLElement);

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
    function MeatButton() {
      var _this;

      _classCallCheck(this, MeatButton);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatButton).call(this));
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


    _createClass(MeatButton, [{
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
      } // getters and setters for attributes

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

    return MeatButton;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-button", MeatButton);

  var css$1 = "/* Note, this CSS needs a lot of work */\r\n/* Default styling for the input */\r\n/* host */\r\n:host {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: sans-serif;\r\n    text-align: left;\r\n    color: #444444;\r\n    height: 38px;\r\n    font-size: 14px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n\r\n    /* CSS Variables */\r\n    --input-padding: 10px;\r\n    --input-background-color: white;\r\n    --input-border: 1px solid #CCCCCC;\r\n    --input-hover-border: 1px solid #888888;\r\n    --input-focus-border: 1px solid #3388ff;\r\n    --input-active-border: 1px solid #3388ff;\r\n}\r\n\r\n::placeholder {\r\n    color: #AAAAAA;\r\n}\r\n\r\ninput {\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    background-color: var(--input-background-color);\r\n    padding: var(--input-padding);\r\n    border: var(--input-border);\r\n\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    /* These 4 are incorporated from bootstrap */\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    overflow: visible;\r\n\r\n    color: inherit;\r\n    border-radius: inherit;\r\n    outline: inherit;\r\n    font-family: inherit;\r\n    text-align: inherit;\r\n    \r\n    transition: border .3s;\r\n\r\n    /* special override-able css variables */\r\n}\r\n\r\ninput:hover {\r\n    border: var(--input-hover-border);\r\n}\r\n\r\ninput:focus {\r\n    border: var(--input-focus-border);\r\n}\r\n\r\ninput:active {\r\n    border: var(--input-active-border);\r\n}\r\n\r\n/* Attributes: */\r\n/* Size */\r\ninput[size=\"small\"] {\r\n    width: 100px;\r\n    height: inherit;\r\n}\r\ninput[size=\"medium\"] {\r\n    width: 200px;\r\n    height: inherit;\r\n}\r\ninput[size=\"large\"] {\r\n    width: 300px;\r\n    height: inherit;\r\n}\r\n\r\n/* Disabled */\r\ninput[disabled] {\r\n    border: none;\r\n    background-color: #cccccc;\r\n    cursor: not-allowed;\r\n}\r\n  \r\n/* Suggestion Styling */\r\n#suggestionContainer {\r\n    position: absolute;\r\n    border: var(--input-border);\r\n    border-bottom: none;\r\n    border-top: none;\r\n    z-index: 99;\r\n    /*position the autocomplete items to be the same width as the container:*/\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n/* Suggestion Rows */\r\n.suggestion {\r\n    padding-left: 5px;\r\n    cursor: pointer;\r\n    background-color: #fff; \r\n    border-bottom: 1px solid #d4d4d4; \r\n    font-family: inherit;\r\n    font-size: 15px\r\n}\r\n\r\n.suggestion:hover {\r\n    border: var(--suggestion-hover-border);\r\n}\r\n\r\n.suggestion:focus {\r\n    background-color: var(--suggestion-focus-background-color, #daeeff);\r\n    border: var(--suggestion-focus-border);\r\n}\r\n\r\n/* Bootstrap integration */\r\ninput[bootstrap~=\"form-control\"] {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n  \r\n@media (prefers-reduced-motion: reduce) {\r\n    :host([bootstrap~=\"form-control\"]) > input {\r\n      transition: none;\r\n    }\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::-ms-expand {\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #80bdff;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::-webkit-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::-moz-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]:-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[boostrap~=\"form-control\"]::-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]::placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n}\r\n\r\ninput[bootstrap~=\"form-control\"]:disabled, input[bootstrap~=\"form-control\"][readonly] {\r\n    background-color: #e9ecef;\r\n    opacity: 1;\r\n  }\r\n\r\ninput[bootstrap~=\"form-control-file\"], input[bootstrap~=\"form-control-range\"] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\ninput[bootstrap~=\"form-control-plaintext\"] {\r\n    display: block;\r\n    width: 100%;\r\n    padding-top: 0.375rem;\r\n    padding-bottom: 0.375rem;\r\n    margin-bottom: 0;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: transparent;\r\n    border: solid transparent;\r\n    border-width: 1px 0;\r\n}\r\n\r\n/* Unsure about this one */\r\ninput[bootstrap~=\"form-control-plaintext\"].form-control-sm, input[bootstrap~=\"form-control-plaintext\"].form-control-lg {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\ninput[bootstrap~=\"form-control-sm\"] {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\ninput[bootstrap~=\"form-control-lg\"] {\r\n    height: calc(1.5em + 1rem + 2px);\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n\r\ninput[bootstrap~=\"custom-control-input\"] {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\r\n}\r\n\r\n/* TODO */\r\n:host([bootstrap~=\"custom-control-input\"]):checked ~ .custom-control-label::before {\r\n    color: #fff;\r\n    border-color: #007bff;\r\n    background-color: #007bff;\r\n}\r\n  \r\n:host([bootstrap~=\"custom-control-input\"]):focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n:host([bootstrap~=\"custom-control-input\"]):focus:not(:checked) ~ .custom-control-label::before {\r\n    border-color: #80bdff;\r\n}\r\n\r\n:host(:not([disabled])[bootstrap~=\"custom-control-input\"]):active ~ .custom-control-label::before {\r\n    color: #fff;\r\n    background-color: #b3d7ff;\r\n    border-color: #b3d7ff;\r\n}\r\n\r\n:host([bootstrap~=\"custom-control-input\"][disabled]) ~ .custom-control-label {\r\n    color: #6c757d;\r\n}\r\n\r\n:host([bootstrap~=\"custom-control-input\"][disabled]) ~ .custom-control-label::before {\r\n    background-color: #e9ecef;\r\n}";
  styleInject(css$1);

  var template$1 = document.createElement("template");
  template$1.innerHTML = "\n<style>\n".concat(css$1, "\n</style>\n<input id=\"input\" type=\"text\"></input>\n<div id=\"suggestionContainer\"></div>\n");
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

      _this.shadow.appendChild(template$1.content.cloneNode(true));

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

  var css$2 = "/* host */\r\n\r\n:host {\r\n    display: inline-block;\r\n    position: relative;\r\n    color: black;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  \r\n  /* bootstrap doesn't use sans-serif */\r\n  :host:not([bootstrap]) {\r\n    font-family: sans-serif;\r\n  }\r\n  \r\n  a {\r\n    color: inherit;\r\n    text-decoration: inherit;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  /* if not disabled, display underline on hover */\r\n  a:not([disabled]):hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  /* if no color specified, turn blue on hover */\r\n  a:not([color]):not([disabled]):hover {\r\n    color: #40a5ff;\r\n  }\r\n  \r\n  /* lighten on hover */\r\n  a:not([disabled])[color]:hover {\r\n    opacity: .8;\r\n  }\r\n  \r\n  /* underline */\r\n  a[underline=\"never\"]:hover {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[underline=\"always\"] {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  a[underline=\"hover\"]:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  /* disabled */\r\n  a[disabled] {\r\n    opacity: 0.65;\r\n    cursor: not-allowed;\r\n  }\r\n  \r\n  a[color=\"white\"] {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  a[color=\"grey\"] {\r\n    color: #777777;\r\n  }\r\n  \r\n  a[color=\"red\"] {\r\n    color: #cc5050;\r\n  }\r\n  \r\n  a[color=\"orange\"] {\r\n    color: #df8a40;\r\n  }\r\n  \r\n  a[color=\"yellow\"] {\r\n    color: #ffe600;\r\n  }\r\n  \r\n  a[color=\"green\"] {\r\n    color: #59c040;\r\n  }\r\n  \r\n  a[color=\"blue\"] {\r\n    color: #40a5ff;\r\n  }\r\n  \r\n  a[color=\"purple\"] {\r\n    color: #aa55aa;\r\n  }\r\n  \r\n  /* ================ bootstrap =================== bootstrap ================== bootstrap ================= */\r\n  \r\n  a[bootstrap] {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  a[bootstrap]:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  a[bootstrap]:not([href]):not([tabindex]) {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[bootstrap]:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[bootstrap]:not([href]):not([tabindex]):focus {\r\n    outline: 0;\r\n  }\r\n  \r\n  a[bootstrap] > code {\r\n    color: inherit;\r\n  }\r\n  \r\n  a.nav-link {\r\n    display: block;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  \r\n  .nav-link:hover, .nav-link:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .nav-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: default;\r\n  }\r\n  \r\n  a[bootstrap~=\"navbar-brand\"] {\r\n  display: inline-block;\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n  }\r\n  \r\n  /* need to use attribute selector [bootstrap~=\"navbar-brand\"] because we use an attribute selector to toggle text-decoration earlier, attribute selectors take precedence */\r\n  a[bootstrap~=\"navbar-brand\"]:hover, a[bootstrap~=\"navbar-brand\"]:focus {\r\n  text-decoration: none;\r\n  }\r\n  \r\n  .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  \r\n  a[bootstrap~=\"nav-link\"]:hover, a[bootstrap~=\"nav-link\"]:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /* Unsure of these, reliant on parent, but issue with shadowDOM being isolated :(\r\n  .nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n    border-color: #e9ecef #e9ecef #dee2e6;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.active,\r\n  .nav-tabs .nav-item.show .nav-link {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n  }\r\n  */\r\n  \r\n  a[bootstrap~=\"navbar-brand\"] {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  a[bootstrap~=\"navbar-brand\"]:hover, a[bootstrap~=\"navbar-brand\"]:focus {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"] {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"]:hover, a[bootstrap~=\"dropdown-item\"]:focus {\r\n    color: #16181b;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"].active, a[bootstrap~=\"dropdown-item\"]:active {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"].disabled, a[bootstrap~=\"dropdown-item\"]:disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  \r\n  a[bootstrap~=\"dropdown-toggle\"] {\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-toggle\"]::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0;\r\n    border-left: 0.3em solid transparent;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-toggle\"]:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropup .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0.3em solid;\r\n    border-left: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropup .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0;\r\n    border-bottom: 0.3em solid transparent;\r\n    border-left: 0.3em solid;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle::after {\r\n    vertical-align: 0;\r\n  }\r\n  \r\n  \r\n  .dropleft .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::after {\r\n    display: none;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::before {\r\n    display: inline-block;\r\n    margin-right: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0.3em solid;\r\n    border-bottom: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::before {\r\n    vertical-align: 0;\r\n  }";
  styleInject(css$2);

  var template$2 = document.createElement("template");
  template$2.innerHTML = "\n<style>\n".concat(css$2, "\n</style>\n<a></a>\n");
  var MeatLink =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatLink, _HTMLElement);

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
    function MeatLink() {
      var _this;

      _classCallCheck(this, MeatLink);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatLink).call(this));
      _this.shadow = _this.attachShadow({
        mode: "open"
      });

      _this.shadow.appendChild(template$2.content.cloneNode(true));

      _this.link = _this.shadow.querySelector("a");
      _this._preventClick = _this._preventClick.bind(_assertThisInitialized(_this));
      return _this;
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */


    _createClass(MeatLink, [{
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
            this.link.addEventListener("click", this._preventClick);
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
       * Click event callback that prevents following the link if link is disabled
       * @param {*} evt
       * @return {boolean}
       */

    }, {
      key: "_preventClick",
      value: function _preventClick(evt) {
        evt.preventDefault();
        return false;
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
        if (val) this.setAttribute("disabled", val);else {
          this.removeAttribute("disabled");
          this.link.removeEventListener("click", this._preventClick);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["type", "color", "href", "disabled", "underline", "icon", "bootstrap"];
      }
    }]);

    return MeatLink;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-link", MeatLink);

  var css$3 = "/* host */\r\n:host(:not([bootstrap])) {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 350px;\r\n    min-height: 250px;\r\n    border: 1px solid #AAAAAA;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\r\n    background-color: white;\r\n    font-family: sans-serif;\r\n    vertical-align: top;\r\n  }\r\n  \r\n  /* header default css */\r\n  :host(:not([bootstrap])) ::slotted([slot=\"header\"])  {\r\n    display: flex;\r\n    position: relative;\r\n    font-size: 20px;\r\n    box-sizing: border-box;\r\n    padding: 15px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom: 1px solid #AAAAAA;\r\n    overflow: auto;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  /* body default css */\r\n  :host(:not([bootstrap]))::slotted([slot=\"body\"]) {\r\n    padding: 15px;\r\n  }\r\n  \r\n  /* box shadow */\r\n  :host([shadow=\"always\"]) {\r\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\r\n  }\r\n  \r\n  :host([shadow=\"hover\"]) {\r\n    box-shadow: none;\r\n  }\r\n  \r\n  :host([shadow=\"hover\"]:hover) {\r\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\r\n    background-color: white;\r\n  }\r\n  \r\n  :host([shadow=\"never\"]) {\r\n    box-shadow: none;\r\n  }\r\n  \r\n  /* Experimental image support */ \r\n  /*\r\n  :host([img]) {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    height: attr(img, 50%);\r\n  }\r\n  \r\n  :host([img=\"cover\"]) > #headerContainer  {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    border-radius: inherit;\r\n    object-fit: cover;\r\n  }\r\n  \r\n  ::slotted(img[slot=\"header\"]) {\r\n    flex-shrink: 0;\r\n    min-width: 100%;\r\n    min-height: 100%\r\n  }\r\n  \r\n  #headerContainer {\r\n    margin: -1px;\r\n    border-top-left-radius: inherit;\r\n    border-top-right-radius: inherit;\r\n  }\r\n  */";
  styleInject(css$3);

  var template$3 = document.createElement("template");
  template$3.innerHTML = "\n<style>\n".concat(css$3, "\n</style>\n<slot id=\"header\" name=\"header\"></slot>\n<slot id=\"body\" name=\"body\"></slot>\n");
  var MeatCard =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatCard, _HTMLElement);

    /**
     * meat-card webcomponent
     * @customelement meat-card
     * @description A reusable card with replaceable markup.
     * @example <meat-card></meat-card>
     * @see [Demo]{@link https://meat-space.org/web_components/meat-card/meat-card-demo.html} for working example.
     * @property {attribute} shadow -Specifies a "shadow" around the card.
     * */
    function MeatCard() {
      var _this;

      _classCallCheck(this, MeatCard);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatCard).call(this));
      _this.shadowDOM = _this.attachShadow({
        mode: "open"
      });

      _this.shadowDOM.appendChild(template$3.content.cloneNode(true));

      return _this;
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */


    _createClass(MeatCard, [{
      key: "connectedCallback",
      value: function connectedCallback() {}
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
      }
      /**
       * Getters and Setters
       */

    }, {
      key: "shadow",
      get: function get() {
        return this.getAttribute("shadow");
      },
      set: function set(val) {
        if (val) {
          this.setAttribute("shadow", val);
        } else {
          this.removeAttribute("shadow");
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["shadow"];
      }
    }]);

    return MeatCard;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-card", MeatCard);

  var css$4 = "";
  styleInject(css$4);

  var template$4 = document.createElement("template");
  template$4.innerHTML = "\n<style>\n".concat(css$4, "\n</style>\n");
  var MeatBoilerplate =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatBoilerplate, _HTMLElement);

    /**
     * meat-boilerplate webcomponent
     * @customelement meat-boilerplate
     * @description A boilerplate for starting new webcomponents
     * @example <meat-boilerplate></meat-boilerplate>
     */
    function MeatBoilerplate() {
      var _this;

      _classCallCheck(this, MeatBoilerplate);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatBoilerplate).call(this));
      _this.shadow = _this.attachShadow({
        mode: "open"
      });

      _this.shadow.appendChild(template$4.content.cloneNode(true));

      return _this;
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */


    _createClass(MeatBoilerplate, [{
      key: "connectedCallback",
      value: function connectedCallback() {}
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
      value: function attributeChangedCallback(name, oldVal, newVal) {}
    }], [{
      key: "observedAttributes",
      get: function get() {
        return [];
      }
    }]);

    return MeatBoilerplate;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-boilerplate", MeatBoilerplate);

  var css$5 = "/* host */\r\n:host .container {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  /* Hides Native Checkbox */\r\n  :host .container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n\r\n  /* Visible Checkmark */\r\n  :host .checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 5px;\r\n    background-color: #eee;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  /* Aligns Label */\r\n  :host #cblabel {\r\n    vertical-align: middle;\r\n  }\r\n\r\n  /* Hover Background */\r\n  :host .container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n\r\n  /* Disabled Colors */\r\n  :host([disabled]) input ~ .checkmark {\r\n    background-color: #808080;\r\n    cursor: not-allowed;\r\n  }\r\n  :host([disabled]) .container:hover input ~ .checkmark {\r\n    background-color: #808080;\r\n    cursor: not-allowed;\r\n  }\r\n  :host([disabled]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #808080;\r\n    cursor: not-allowed;\r\n  }\r\n\r\n  /* Checked default */\r\n  :host .container input:checked ~ .checkmark {\r\n    background-color: #808080;\r\n  }\r\n  :host .container:hover input:checked ~ .checkmark {\r\n    background-color: #000000;\r\n  }\r\n\r\n  /* Checked Color */\r\n  :host([color=\"grey\"]) .container input:checked ~ .checkmark {\r\n    background-color: #777777;\r\n  }\r\n  :host([color=\"red\"]) .container input:checked ~ .checkmark {\r\n    background-color: #cc5050;\r\n  }\r\n  :host([color=\"orange\"]) .container input:checked ~ .checkmark {\r\n    background-color: #df8a40;\r\n  }\r\n  :host([color=\"yellow\"]) .container input:checked ~ .checkmark {\r\n    background-color: #eedd00;\r\n  }\r\n  :host([color=\"green\"]) .container input:checked ~ .checkmark {\r\n    background-color: #59c040;\r\n  }\r\n  :host([color=\"blue\"]) .container input:checked ~ .checkmark {\r\n    background-color: #40a5ff;\r\n  }\r\n  :host([color=\"purple\"]) .container input:checked ~ .checkmark {\r\n    background-color: #aa55aa;\r\n  }\r\n  \r\n  /* Hover color when checked */\r\n  :host([color=\"grey\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #999999;\r\n  }\r\n  :host([color=\"red\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #e46060;\r\n  }\r\n  :host([color=\"orange\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #dfaa70;\r\n  }\r\n  :host([color=\"yellow\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #f6e690;\r\n  }\r\n  :host([color=\"green\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #79cc69;\r\n  }\r\n  :host([color=\"blue\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #65b5ff;\r\n  }\r\n  :host([color=\"purple\"]) .container:hover input:checked ~ .checkmark {\r\n    background-color: #cc66cc;\r\n  }\r\n\r\n  /* Shows Checkmark if checked or not */\r\n  :host .checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  :host .container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n\r\n  /* Draws Checkmark */\r\n  :host .container .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }";
  styleInject(css$5);

  var template$5 = document.createElement("template");
  template$5.innerHTML = "\n  <style>\n  ".concat(css$5, "\n  </style>\n\n  <label class=\"container\">\n    <input id=\"checkbox\" type=\"checkbox\">\n    <span class=\"checkmark\"></span>\n    <label id=\"cblabel\"></label>\n  </label>\n");
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

      _this.shadow.appendChild(template$5.content.cloneNode(true));

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

  // import style from "./meat-dialog.css";
  var template$6 = document.createElement("template");
  template$6.innerHTML = "\n<style>\n\n.dialog {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  pointer-events: none;\n  transition: visibility .3s, opacity .3s;\n}\n\n.dialog-content {\n  width: var(--width, 40%);\n  padding: 10px;\n  margin: auto;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n\n\n.dialog[open=true] {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.dialog[open=false] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n\n</style>\n<div class=\"dialog\" open=false>\n  <div class=\"dialog-content\">\n    <slot></slot>\n  </div>\n</div>\n\n";
  var MeatDialog =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatDialog, _HTMLElement);

    /**
     * meat-dialog webcomponent
     * @customelement meat-dialog
     * @description A dialog for starting new webcomponents
     * @example <meat-dialog></meat-dialog>
     */
    function MeatDialog() {
      var _this;

      _classCallCheck(this, MeatDialog);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatDialog).call(this));
      _this.shadow = _this.attachShadow({
        mode: "open"
      });

      _this.shadow.appendChild(template$6.content.cloneNode(true));

      _this._open = _this._open.bind(_assertThisInitialized(_this));
      _this._dispatchOpenEvent = _this._dispatchOpenEvent.bind(_assertThisInitialized(_this));
      _this._dialog = _this.shadow.querySelector(".dialog");

      _this.addEventListener("click", _this._open);

      return _this;
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */


    _createClass(MeatDialog, [{
      key: "connectedCallback",
      value: function connectedCallback() {}
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
          case "open":
            if (newVal) this._dialog.setAttribute("open", true);else this._dialog.setAttribute("open", false);

            this._dispatchOpenEvent();

            break;

          case "default":
            break;
        }
      }
    }, {
      key: "_open",

      /**
       * If clicking on dialog background, close and dispatch event
       * @param {*} evt
       */
      value: function _open(evt) {
        // if clicking on background, close modal
        if (evt.target == this) {
          this.open = false;
        }
      }
      /**
       * Dispatch an event to tell user when the modal has been opened or closed
       */

    }, {
      key: "_dispatchOpenEvent",
      value: function _dispatchOpenEvent() {
        this.dispatchEvent(new CustomEvent("open", {
          detail: {
            open: this._dialog.getAttribute("open") == "true" // returns a boolean rather than string

          },
          bubbles: true
        }));
      }
    }, {
      key: "open",
      get: function get() {
        return this.hasAttribute("open");
      },
      set: function set(val) {
        if (val) {
          this.setAttribute("open", val);
        } else {
          this.removeAttribute("open");
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["open"];
      }
    }]);

    return MeatDialog;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-dialog", MeatDialog);

  var css$6 = "/* host */\r\n:host(:not([bootstrap]))  {\r\n    font-family: sans-serif;\r\n    vertical-align: top;\r\n    overflow: auto;\r\n  }\r\n  \r\n  :host(:not([bootstrap])) #imageElement {\r\n    width: inherit;\r\n    height: inherit;\r\n  }\r\n  \r\n  .imageHide {\r\n    display: none;\r\n  }";
  styleInject(css$6);

  var template$7 = document.createElement("template");
  template$7.innerHTML = "\n<style>\n".concat(css$6, "\n</style>\n<div id=\"imageContainer\">\n  <img id=\"imageElement\" class=\"nativeImg\">\n  <slot id=\"placeholder\" name=\"placeholder\"></slot> \n  <slot id=\"error\" name=\"error\"></slot>\n</div>\n");
  var referrerPolicies = ["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "unsafe-url"];
  var fillStyles = ["fill", "contain", "cover", "none", "scale-down"];
  var MeatImage =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MeatImage, _HTMLElement);

    /**
     * meat-boilerplate webcomponent
     * @customelement meat-boilerplate
     * @description A boilerplate for starting new webcomponents
     * @example <meat-boilerplate></meat-boilerplate>
     */
    function MeatImage() {
      var _this;

      _classCallCheck(this, MeatImage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MeatImage).call(this));
      _this.shadow = _this.attachShadow({
        mode: "open"
      });

      _this.shadow.appendChild(template$7.content.cloneNode(true));

      _this.image = _this.shadow.querySelector("#imageElement");
      _this.imageContainer = _this.shadow.querySelector("#imageContainer"); // Apply user's inline style to our custom component container

      _this.imageContainer.style = _this.style.cssText;
      return _this;
    }
    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */


    _createClass(MeatImage, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        // Create reference to the main image that is loading and the placeholder slot element
        var placeholderSlot = this.shadow.querySelector("#placeholder");
        var errorSlot = this.shadow.querySelector("#error");
        var mainImage = this.image; // Use _thisComponent reference instead of binding this for each event listener

        var _thisComponent = this; // If placeholder has content (via slotchange event) execute call back


        placeholderSlot.addEventListener("slotchange", function () {
          mainImage.classList.add("imageHide"); // Remove diplay of placeholder loading element once main image loads

          mainImage.addEventListener("load", function () {
            placeholderSlot.classList.add("imageHide");
            mainImage.classList.remove("imageHide");

            _thisComponent.dispatchEvent(new CustomEvent("meat-load"), {
              bubbles: true,
              cancelable: false
            });
          });
        }); // If error slot has content, execute call back

        errorSlot.addEventListener("slotchange", function () {
          // Do not show the error content until an error has occured with main image
          errorSlot.classList.add("imageHide"); // Add listener to see if error occurs

          mainImage.addEventListener("error", function () {
            // Show error message upon main image error
            errorSlot.classList.remove("imageHide"); // Hide native error display from main image element

            mainImage.classList.add("imageHide");

            _thisComponent.dispatchEvent(new CustomEvent("meat-error"), {
              bubbles: true,
              cancelable: false
            });
          });
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

    return MeatImage;
  }(_wrapNativeSuper(HTMLElement));
  window.customElements.define("meat-image", MeatImage);

  exports.CoreHello = CoreHello;
  exports.MeatBoilerplate = MeatBoilerplate;
  exports.MeatButton = MeatButton;
  exports.MeatCard = MeatCard;
  exports.MeatCheckboxElement = MeatCheckboxElement;
  exports.MeatDialog = MeatDialog;
  exports.MeatImage = MeatImage;
  exports.MeatInput = MeatInput;
  exports.MeatLink = MeatLink;

  return exports;

}({}));
