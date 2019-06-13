var MeatLink = (function (exports) {
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

  var css = "/* host */\r\n\r\n:host {\r\n    display: inline-block;\r\n    position: relative;\r\n    color: black;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  \r\n  /* bootstrap doesn't use sans-serif */\r\n  :host:not([bootstrap]) {\r\n    font-family: sans-serif;\r\n  }\r\n  \r\n  a {\r\n    color: inherit;\r\n    text-decoration: inherit;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  /* if not disabled, display underline on hover */\r\n  a:not([disabled]):hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  /* if no color specified, turn blue on hover */\r\n  a:not([color]):not([disabled]):hover {\r\n    color: #40a5ff;\r\n  }\r\n  \r\n  /* lighten on hover */\r\n  a:not([disabled])[color]:hover {\r\n    opacity: .8;\r\n  }\r\n  \r\n  /* underline */\r\n  a[underline=\"never\"]:hover {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[underline=\"always\"] {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  a[underline=\"hover\"]:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  /* disabled */\r\n  a[disabled] {\r\n    opacity: 0.65;\r\n    cursor: not-allowed;\r\n  }\r\n  \r\n  a[color=\"white\"] {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  a[color=\"grey\"] {\r\n    color: #777777;\r\n  }\r\n  \r\n  a[color=\"red\"] {\r\n    color: #cc5050;\r\n  }\r\n  \r\n  a[color=\"orange\"] {\r\n    color: #df8a40;\r\n  }\r\n  \r\n  a[color=\"yellow\"] {\r\n    color: #ffe600;\r\n  }\r\n  \r\n  a[color=\"green\"] {\r\n    color: #59c040;\r\n  }\r\n  \r\n  a[color=\"blue\"] {\r\n    color: #40a5ff;\r\n  }\r\n  \r\n  a[color=\"purple\"] {\r\n    color: #aa55aa;\r\n  }\r\n  \r\n  /* ================ bootstrap =================== bootstrap ================== bootstrap ================= */\r\n  \r\n  a[bootstrap] {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  a[bootstrap]:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  a[bootstrap]:not([href]):not([tabindex]) {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[bootstrap]:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[bootstrap]:not([href]):not([tabindex]):focus {\r\n    outline: 0;\r\n  }\r\n  \r\n  a[bootstrap] > code {\r\n    color: inherit;\r\n  }\r\n  \r\n  a.nav-link {\r\n    display: block;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  \r\n  .nav-link:hover, .nav-link:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .nav-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: default;\r\n  }\r\n  \r\n  a[bootstrap~=\"navbar-brand\"] {\r\n  display: inline-block;\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n  }\r\n  \r\n  /* need to use attribute selector [bootstrap~=\"navbar-brand\"] because we use an attribute selector to toggle text-decoration earlier, attribute selectors take precedence */\r\n  a[bootstrap~=\"navbar-brand\"]:hover, a[bootstrap~=\"navbar-brand\"]:focus {\r\n  text-decoration: none;\r\n  }\r\n  \r\n  .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  \r\n  a[bootstrap~=\"nav-link\"]:hover, a[bootstrap~=\"nav-link\"]:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /* Unsure of these, reliant on parent, but issue with shadowDOM being isolated :(\r\n  .nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n    border-color: #e9ecef #e9ecef #dee2e6;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.active,\r\n  .nav-tabs .nav-item.show .nav-link {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n  }\r\n  */\r\n  \r\n  a[bootstrap~=\"navbar-brand\"] {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  a[bootstrap~=\"navbar-brand\"]:hover, a[bootstrap~=\"navbar-brand\"]:focus {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"] {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"]:hover, a[bootstrap~=\"dropdown-item\"]:focus {\r\n    color: #16181b;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"].active, a[bootstrap~=\"dropdown-item\"]:active {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-item\"].disabled, a[bootstrap~=\"dropdown-item\"]:disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  \r\n  a[bootstrap~=\"dropdown-toggle\"] {\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-toggle\"]::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0;\r\n    border-left: 0.3em solid transparent;\r\n  }\r\n  \r\n  a[bootstrap~=\"dropdown-toggle\"]:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropup .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0.3em solid;\r\n    border-left: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropup .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0;\r\n    border-bottom: 0.3em solid transparent;\r\n    border-left: 0.3em solid;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle::after {\r\n    vertical-align: 0;\r\n  }\r\n  \r\n  \r\n  .dropleft .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::after {\r\n    display: none;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::before {\r\n    display: inline-block;\r\n    margin-right: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0.3em solid;\r\n    border-bottom: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::before {\r\n    vertical-align: 0;\r\n  }";
  styleInject(css);

  var template = document.createElement("template");
  template.innerHTML = "\n<style>\n".concat(css, "\n</style>\n<a></a>\n");
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

      _this.shadow.appendChild(template.content.cloneNode(true));

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

  exports.MeatLink = MeatLink;

  return exports;

}({}));
