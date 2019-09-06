var MeatButton = (function (exports) {
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

  var css = "/* host */\n:host {\n    font-family: sans-serif;\n    color: #444444;\n    width: 90px;\n    height: 40px;\n    font-size: 16px;\n    font-weight: 500;\n    vertical-align: top;\n  \n    /* special css variables */\n    --hover-background-color: #daeeff;\n    --focus-background-color: #daeeff;\n    --active-background-color: #daeeff;\n  \n    --hover-color: #3388ff;\n    --focus-color: #3388ff;\n    --active-color: #3388ff;\n  \n    --hover-border: 1px solid #bbccff;\n    --focus-border: 1px solid #bbccff;\n    --active-border: 1px solid #3388ff;\n  }\n  \n  /* define color scheme for default button */\n  button {\n    /* css that button must have */\n    display: inline-block;\n    position: relative;\n    outline: none;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border 0.15s ease-in-out;\n  \n    /* css that can be safely defined on the host */\n    width: inherit;\n    height: inherit;\n    font-family: inherit;\n    color: var(--color, inherit);\n    font-size: inherit;\n    vertical-align: inherit;\n    font-weight: inherit;\n    \n    /* css that needs to be exposed through css variables */\n    background-color: var(--background-color, #ffffff);\n    border: var(--border, 1px solid #cccccc);\n  }\n  \n  /* Bootstrap Support */\n  \n  /* basic button styling */\n  :host([bootstrap~=\"btn\"]) > button {\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    /* padding: 0.375rem 0.75rem; */\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: 0.25rem;\n    cursor: pointer;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  }\n  \n  /* Bootstrap Basic Disable Button */\n  :host([disabled][bootstrap]) > button {\n    opacity: 0.65;\n    cursor: default;\n  }\n  \n  /* Primary Button */\n  :host([bootstrap~=\"btn-primary\"]) > button {\n    /* btn btn-primary styling */\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n  }\n  \n  /* Primary Hover */\n  :host([bootstrap~=\"btn-primary\"]) > button:hover {\n    /* btn btn-primary hover styling */\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n  }\n  \n  /* Primary Focus */\n  :host([bootstrap~=\"btn-primary\"]) > button:focus {\n    /* btn btn-primary focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n  }\n  \n  /* Primary Disable Button */\n  :host([disabled][bootstrap~=\"btn-primary\"]) > button {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n  }\n  \n  /* Primary Active */\n  :host(:not([disabled])[bootstrap~=\"btn-primary\"]) > button:active {\n    /* btn btn-primary active styling */\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf;\n  }\n    \n  /* Secondary Button */\n  :host([bootstrap~=\"btn-secondary\"]) > button {\n    /* btn btn-secondary styling */\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n    /* padding-right: 88px; */\n  }\n  \n  /* Secondary Hover */\n  :host([bootstrap~=\"btn-secondary\"]) > button:hover {\n    /* btn btn-secondary hover styling */\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62;\n  }\n  \n  /* Secondary Focus */\n  :host([bootstrap~=\"btn-secondary\"]) > button:focus {\n    /* btn btn-secondary focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n  }\n  \n  /* Secondary Disable Button */\n  :host([disabled][bootstrap~=\"btn-secondary\"]) > button {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n  }\n  \n  /* Secondary Active */\n  :host(:not([disabled])[bootstrap~=\"btn-secondary\"]) > button:active {\n    /* btn btn-secondary active styling */\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b;\n  }\n  \n  /* Success Button */\n  :host([bootstrap~=\"btn-success\"]) > button {\n    /* btn btn-success styling */\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n  }\n  \n  /* Success Hover */\n  :host([bootstrap~=\"btn-success\"]) > button:hover {\n    /* btn btn-success hover styling */\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n  }\n  \n  /* Success Focus */\n  :host([bootstrap~=\"btn-success\"]) > button:focus {\n    /* btn btn-success focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n  }\n  \n  /* Success Disable Button */\n  :host([disabled][bootstrap~=\"btn-success\"]) > button {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n  }\n  \n  /* Success Active */\n  :host(:not([disabled])[bootstrap~=\"btn-success\"]) > button:active {\n    /* btn btn-success active styling */\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n  }\n  \n  /* Info Button */\n  :host([bootstrap~=\"btn-info\"]) > button {\n    /* btn btn-info styling */\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n  }\n  \n  /* Info Hover */\n  :host([bootstrap~=\"btn-info\"]) > button:hover {\n    /* btn btn-info hover styling */\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b;\n  }\n  \n  /* Info Focus */\n  :host([bootstrap~=\"btn-info\"]) > button:focus {\n    /* btn btn-info focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n  }\n  \n  /* Info Disable Button */\n  :host([disabled][bootstrap~=\"btn-info\"]) > button {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n  }\n  \n  /* Info Active */\n  :host(:not([disabled])[bootstrap~=\"btn-info\"]) > button:active {\n    /* btn btn-info active styling */\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f;\n  }\n  \n  /* Warning Button */\n  :host([bootstrap~=\"btn-warning\"]) > button {\n    /* btn btn-warning styling */\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n  }\n  \n  /* Warning Hover */\n  :host([bootstrap~=\"btn-warning\"]) > button:hover {\n    /* btn btn-warning hover styling */\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00;\n  }\n  \n  /* Warning Focus */\n  :host([bootstrap~=\"btn-warning\"]) > button:focus {\n    /* btn btn-warning focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n  }\n  \n  /* Warning Disable Button */\n  :host([disabled][bootstrap~=\"btn-warning\"]) > button {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n  }\n  \n  /* Warning Active */\n  :host(:not([disabled])[bootstrap~=\"btn-warning\"]) > button:active {\n    /* btn btn-warning active styling */\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500;\n  }\n  \n  /* Danger Button */\n  :host([bootstrap~=\"btn-danger\"]) > button {\n    /* btn btn-danger styling */\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n  }\n  \n  /* Danger Hover */\n  :host([bootstrap~=\"btn-danger\"]) > button:hover {\n    /* btn btn-danger hover styling */\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130;\n  }\n  \n  /* Danger Focus */\n  :host([bootstrap~=\"btn-danger\"]) > button:focus {\n    /* btn btn-danger focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n  }\n  \n  /* Danger Disable Button */\n  :host([disabled][bootstrap~=\"btn-danger\"]) > button {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n  }\n  \n  /* Danger Active */\n  :host(:not([disabled])[bootstrap~=\"btn-danger\"]) > button:active {\n    /* btn btn-danger active styling */\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d;\n  }\n  \n  /* Light Button */\n  :host([bootstrap~=\"btn-light\"]) > button {\n    /* btn btn-light styling */\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n  }\n  \n  /* Light Hover */\n  :host([bootstrap~=\"btn-light\"]) > button:hover {\n    /* btn btn-light hover styling */\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5;\n  }\n  \n  /* Light Focus */\n  :host([bootstrap~=\"btn-light\"]) > button:focus {\n    /* btn btn-light focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n  }\n  \n  /* Light Disable Button */\n  :host([disabled][bootstrap~=\"btn-light\"]) > button {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n  }\n  \n  /* Light Active */\n  :host(:not([disabled])[bootstrap~=\"btn-light\"]) > button:active {\n    /* btn btn-light active styling */\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df;\n  }\n  \n  /* Dark Button */\n  :host([bootstrap~=\"btn-dark\"]) > button {\n    /* btn btn-dark styling */\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n  }\n  \n  /* Dark Hover */\n  :host([bootstrap~=\"btn-dark\"]) > button:hover {\n    /* btn btn-dark hover styling */\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124;\n  }\n  \n  /* Dark Focus */\n  :host([bootstrap~=\"btn-dark\"]) > button:focus {\n    /* btn btn-dark focus styling */\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n  }\n  \n  /* Dark Disable Button */\n  :host([disabled][bootstrap~=\"btn-dark\"]) > button {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n  }\n  \n  /* Dark Active */\n  :host(:not([disabled])[bootstrap~=\"btn-dark\"]) > button:active {\n    /* btn btn-dark active styling */\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d;\n  }\n  \n  /* Attribute: round */\n  /* if host element, i.e. <meat-button> has attribute round, apply this css to button*/\n  \n  :host([round]) > button {\n      border-radius: 100px;\n  }\n  \n  /* Attribute: circle */\n  :host([circle]) > button {\n      border-radius: 50%;\n      width: 40px;\n      height: 40px;\n  }\n  \n  /* Attribute: size */\n  /* if host element, i.e. <meat-button> has attribute size=\"small\", apply this css */\n  :host([size=\"small\"]) > button {\n      width: 80px;\n      height: 36px;\n  }\n  \n  :host([size=\"medium\"]) > button {\n      width: 90px;\n      height: 40px;\n  }\n  \n  :host([size=\"large\"]) > button {\n      width: 100px;\n      height: 44px;\n  }\n  \n  /* if size specified, use the following dimensions */\n  :host([circle][size=\"small\"]) > button {\n      width: 30px;\n      height: 30px;\n  }\n  \n  :host([circle][size=\"medium\"]) > button {\n      width: 40px;\n      height: 40px;\n  }\n  \n  :host([circle][size=\"large\"]) > button {\n      width: 50px;\n      height: 50px;\n  }\n  \n  /* define color scheme for white button */\n  :host([color=\"white\"]) {\n    /* colors */\n    --color: #444444;\n    --background-color: #ffffff;\n    --border: 1px solid #cccccc;\n  \n    --hover-background-color: #daeeff;\n    --focus-background-color: #daeeff;\n    --active-background-color: #daeeff;\n  \n    --hover-color: #3388ff;\n    --focus-color: #3388ff;\n    --active-color: #3388ff;\n  \n    --hover-border: 1px solid #bbccff;\n    --focus-border: 1px solid #bbccff;\n    --active-border: 1px solid #3388ff;\n  }\n  \n  :host([color=\"grey\"]) {\n    /* colors */\n    --color: #ffffff;\n    --background-color: #777777;\n    --border: 1px solid #777777;\n  \n    --hover-background-color: #999999;\n    --focus-background-color: #999999;\n    --active-background-color: #555555;\n  \n    --hover-color: #ffffff;\n    --focus-color: #ffffff;\n    --active-color: #ffffff;\n  \n    --hover-border: 1px solid #999999;\n    --focus-border: 1px solid #999999;\n    --active-border: 1px solid #555555;\n  }\n  \n  /* define color scheme for red button */\n  :host([color=\"red\"]) {\n    /* colors */\n    --color: #ffffff;\n    --background-color: #cc5050;\n    --border: 1px solid #cc5050;\n  \n    --hover-background-color: #e46060;\n    --focus-background-color: #e46060;\n    --active-background-color: #b03737;\n  \n    --hover-color: #ffffff;\n    --focus-color: #ffffff;\n    --active-color: #ffffff;\n  \n    --hover-border: 1px solid #e46060;\n    --focus-border: 1px solid #e46060;\n    --active-border: 1px solid #b03737;\n  }\n  \n  /* define color scheme for orange button */\n  :host([color=\"orange\"]) {\n    /* colors */\n    --color: #ffffff;\n    --background-color: #df8a40;\n    --border: 1px solid #df8a40;\n  \n    --hover-background-color: #dfaa70;\n    --focus-background-color: #dfaa70;\n    --active-background-color: #cf7a30;\n  \n    --hover-color: #ffffff;\n    --focus-color: #ffffff;\n    --active-color: #ffffff;\n  \n    --hover-border: 1px solid #dfaa70;\n    --focus-border: 1px solid #dfaa70;\n    --active-border: 1px solid #cf7a30;\n  }\n  \n  /* define color scheme for yellow button */\n  :host([color=\"yellow\"]) {\n    /* colors */\n    --color: #444444;\n    --background-color: #ffe600;\n    --border: 1px solid #ffe600;\n  \n    --hover-background-color: #ffed86;\n    --focus-background-color: #ffed86;\n    --active-background-color: #e9d200;\n  \n    --hover-color: #444444;\n    --focus-color: #444444;\n    --active-color: #444444;\n  \n    --hover-border: 1px solid #ffed86;\n    --focus-border: 1px solid #ffed86;\n    --active-border: 1px solid #e9d200;\n  }\n  \n  /* define color scheme for green button */\n  :host([color=\"green\"]) {\n    /* colors */\n    --color: #ffffff;\n    --background-color: #59c040;\n    --border: 1px solid #59c040;\n  \n    --hover-background-color: #79cc69;\n    --focus-background-color: #79cc69;\n    --active-background-color: #50a050;\n  \n    --hover-color: #ffffff;\n    --focus-color: #ffffff;\n    --active-color: #ffffff;\n  \n    --hover-border: 1px solid #79cc69;\n    --focus-border: 1px solid #79cc69;\n    --active-border: 1px solid #50a050;\n  }\n  \n  /* define color scheme for blue button */\n  :host([color=\"blue\"]) {\n    /* colors */\n    --color: #ffffff;\n    --background-color: #40a5ff;\n    --border: 1px solid #40a5ff;\n  \n    --hover-background-color: #65b5ff;\n    --focus-background-color: #65b5ff;\n    --active-background-color: #2285dd;\n  \n    --hover-color: #ffffff;\n    --focus-color: #ffffff;\n    --active-color: #ffffff;\n  \n    --hover-border: 1px solid #65b5ff;\n    --focus-border: 1px solid #65b5ff;\n    --active-border: 1px solid #2285dd;\n  }\n  \n  \n  /* define color scheme for blue button */\n  :host([color=\"purple\"]) {\n    /* colors */\n    --color: #ffffff;\n    --background-color: #aa55aa;\n    --border: 1px solid #aa55aa;\n  \n    --hover-background-color: #cc66cc;\n    --focus-background-color: #cc66cc;\n    --active-background-color: #994499;\n  \n    --hover-color: #ffffff;\n    --focus-color: #ffffff;\n    --active-color: #ffffff;\n  \n    --hover-border: 1px solid #cc66cc;\n    --focus-border: 1px solid #cc66cc;\n    --active-border: 1px solid #994499;\n  }\n  \n  /* hover focus active */\n  :host(:not([disabled]):not([bootstrap])) > button:hover {\n    background-color: var(--hover-background-color);\n    color: var(--hover-color);\n    border: var(--hover-border);\n  }\n  \n  :host(:not([disabled]):not([bootstrap])) > button:focus {\n    background-color: var(--focus-background-color);\n    color: var(--focus-color);\n    border: var(--focus-border);\n  }\n  \n  :host(:not([disabled]):not([bootstrap])) > button:active {\n    background-color: var(--active-background-color);\n    color: var(--active-color);\n    border: var(--active-border);\n  }\n  \n  /* Attribute: disabled */\n  :host(:not([bootstrap])[disabled]) > button {\n      opacity: 0.65;\n      cursor: not-allowed;\n  }";
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

  exports.MeatButton = MeatButton;

  return exports;

}({}));
