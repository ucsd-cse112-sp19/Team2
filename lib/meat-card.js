var MeatCard = (function (exports) {
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

  var css = "/* host */\n:host(:not([bootstrap])) {\n    display: inline-block;\n    position: relative;\n    width: 350px;\n    min-height: 250px;\n    border: 1px solid #AAAAAA;\n    border-radius: 5px;\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\n    background-color: white;\n    font-family: sans-serif;\n    vertical-align: top;\n  }\n  \n  /* header default css */\n  :host(:not([bootstrap])) ::slotted([slot=\"header\"])  {\n    display: flex;\n    position: relative;\n    font-size: 20px;\n    box-sizing: border-box;\n    padding: 15px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    border-bottom: 1px solid #AAAAAA;\n    overflow: auto;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  /* body default css */\n  :host(:not([bootstrap]))::slotted([slot=\"body\"]) {\n    padding: 15px;\n  }\n  \n  /* box shadow */\n  :host([shadow=\"always\"]) {\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\n  }\n  \n  :host([shadow=\"hover\"]) {\n    box-shadow: none;\n  }\n  \n  :host([shadow=\"hover\"]:hover) {\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\n    background-color: white;\n  }\n  \n  :host([shadow=\"never\"]) {\n    box-shadow: none;\n  }\n  \n  /* Experimental image support */ \n  /*\n  :host([img]) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    height: attr(img, 50%);\n  }\n  \n  :host([img=\"cover\"]) > #headerContainer  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    border-radius: inherit;\n    object-fit: cover;\n  }\n  \n  ::slotted(img[slot=\"header\"]) {\n    flex-shrink: 0;\n    min-width: 100%;\n    min-height: 100%\n  }\n  \n  #headerContainer {\n    margin: -1px;\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n  }\n  */";
  styleInject(css);

  var template = document.createElement("template");
  template.innerHTML = "\n<style>\n".concat(css, "\n</style>\n<slot id=\"header\" name=\"header\"></slot>\n<slot id=\"body\" name=\"body\"></slot>\n");
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

      _this.shadowDOM.appendChild(template.content.cloneNode(true));

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

  exports.MeatCard = MeatCard;

  return exports;

}({}));
