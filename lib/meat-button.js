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

  exports.MeatButton = MeatButton;

  return exports;

}({}));
