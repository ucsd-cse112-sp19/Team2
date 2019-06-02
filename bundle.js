var MeatSpaceElements = (function () {
  'use strict';

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

  var css = ":host {\n    --white: #ffffff;\n    --grey: #777777;\n    --dark-grey: #444444;\n    --red: #cc5050;\n    --orange: #df8a40;\n    --yellow: #ffe600;\n    --green: #59c040;\n    --blue: #40a5ff;\n    --purple: #aa55aa;\n}";
  styleInject(css);

  var css$1 = "/* host */\n:host {\n  font-family: sans-serif;\n  color: var(--dark-grey);\n  width: 90px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 500;\n  vertical-align: top;\n\n  /* special css variables */\n  --hover-background-color: #daeeff;\n  --focus-background-color: #daeeff;\n  --active-background-color: #daeeff;\n\n  --hover-color: #3388ff;\n  --focus-color: #3388ff;\n  --active-color: #3388ff;\n\n  --hover-border: 1px solid #bbccff;\n  --focus-border: 1px solid #bbccff;\n  --active-border: 1px solid #3388ff;\n}\n\n/* define color scheme for default button */\nbutton {\n  /* css that button must have */\n  display: inline-block;\n  position: relative;\n  outline: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border 0.15s ease-in-out;\n\n  /* css that can be safely defined on the host */\n  width: inherit;\n  height: inherit;\n  font-family: inherit;\n  color: var(--color, inherit);\n  font-size: inherit;\n  vertical-align: inherit;\n  font-weight: inherit;\n  \n  /* css that needs to be exposed through css variables */\n  background-color: var(--background-color, var(--white));\n  border: var(--border, 1px solid #cccccc);\n}\n\n/* Bootstrap Support */\n\n/* basic button styling */\n:host([bootstrap~=\"btn\"]) > button {\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  /* padding: 0.375rem 0.75rem; */\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n/* Bootstrap Basic Disable Button */\n:host([disabled][bootstrap]) > button {\n  opacity: 0.65;\n  cursor: default;\n}\n\n/* Primary Button */\n:host([bootstrap~=\"btn-primary\"]) > button {\n  /* btn btn-primary styling */\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n/* Primary Hover */\n:host([bootstrap~=\"btn-primary\"]) > button:hover {\n  /* btn btn-primary hover styling */\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n/* Primary Focus */\n:host([bootstrap~=\"btn-primary\"]) > button:focus {\n  /* btn btn-primary focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n\n/* Primary Disable Button */\n:host([disabled][bootstrap~=\"btn-primary\"]) > button {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n/* Primary Active */\n:host(:not([disabled])[bootstrap~=\"btn-primary\"]) > button:active {\n  /* btn btn-primary active styling */\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n  \n/* Secondary Button */\n:host([bootstrap~=\"btn-secondary\"]) > button {\n  /* btn btn-secondary styling */\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n  /* padding-right: 88px; */\n}\n\n/* Secondary Hover */\n:host([bootstrap~=\"btn-secondary\"]) > button:hover {\n  /* btn btn-secondary hover styling */\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n/* Secondary Focus */\n:host([bootstrap~=\"btn-secondary\"]) > button:focus {\n  /* btn btn-secondary focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n/* Secondary Disable Button */\n:host([disabled][bootstrap~=\"btn-secondary\"]) > button {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n/* Secondary Active */\n:host(:not([disabled])[bootstrap~=\"btn-secondary\"]) > button:active {\n  /* btn btn-secondary active styling */\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n/* Success Button */\n:host([bootstrap~=\"btn-success\"]) > button {\n  /* btn btn-success styling */\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n/* Success Hover */\n:host([bootstrap~=\"btn-success\"]) > button:hover {\n  /* btn btn-success hover styling */\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n/* Success Focus */\n:host([bootstrap~=\"btn-success\"]) > button:focus {\n  /* btn btn-success focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n/* Success Disable Button */\n:host([disabled][bootstrap~=\"btn-success\"]) > button {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n/* Success Active */\n:host(:not([disabled])[bootstrap~=\"btn-success\"]) > button:active {\n  /* btn btn-success active styling */\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n/* Info Button */\n:host([bootstrap~=\"btn-info\"]) > button {\n  /* btn btn-info styling */\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n/* Info Hover */\n:host([bootstrap~=\"btn-info\"]) > button:hover {\n  /* btn btn-info hover styling */\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n/* Info Focus */\n:host([bootstrap~=\"btn-info\"]) > button:focus {\n  /* btn btn-info focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n/* Info Disable Button */\n:host([disabled][bootstrap~=\"btn-info\"]) > button {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n/* Info Active */\n:host(:not([disabled])[bootstrap~=\"btn-info\"]) > button:active {\n  /* btn btn-info active styling */\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n/* Warning Button */\n:host([bootstrap~=\"btn-warning\"]) > button {\n  /* btn btn-warning styling */\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n/* Warning Hover */\n:host([bootstrap~=\"btn-warning\"]) > button:hover {\n  /* btn btn-warning hover styling */\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n/* Warning Focus */\n:host([bootstrap~=\"btn-warning\"]) > button:focus {\n  /* btn btn-warning focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n/* Warning Disable Button */\n:host([disabled][bootstrap~=\"btn-warning\"]) > button {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n/* Warning Active */\n:host(:not([disabled])[bootstrap~=\"btn-warning\"]) > button:active {\n  /* btn btn-warning active styling */\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n/* Danger Button */\n:host([bootstrap~=\"btn-danger\"]) > button {\n  /* btn btn-danger styling */\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n/* Danger Hover */\n:host([bootstrap~=\"btn-danger\"]) > button:hover {\n  /* btn btn-danger hover styling */\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n/* Danger Focus */\n:host([bootstrap~=\"btn-danger\"]) > button:focus {\n  /* btn btn-danger focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n/* Danger Disable Button */\n:host([disabled][bootstrap~=\"btn-danger\"]) > button {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n/* Danger Active */\n:host(:not([disabled])[bootstrap~=\"btn-danger\"]) > button:active {\n  /* btn btn-danger active styling */\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n/* Light Button */\n:host([bootstrap~=\"btn-light\"]) > button {\n  /* btn btn-light styling */\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n/* Light Hover */\n:host([bootstrap~=\"btn-light\"]) > button:hover {\n  /* btn btn-light hover styling */\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n/* Light Focus */\n:host([bootstrap~=\"btn-light\"]) > button:focus {\n  /* btn btn-light focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n/* Light Disable Button */\n:host([disabled][bootstrap~=\"btn-light\"]) > button {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n/* Light Active */\n:host(:not([disabled])[bootstrap~=\"btn-light\"]) > button:active {\n  /* btn btn-light active styling */\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n/* Dark Button */\n:host([bootstrap~=\"btn-dark\"]) > button {\n  /* btn btn-dark styling */\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n/* Dark Hover */\n:host([bootstrap~=\"btn-dark\"]) > button:hover {\n  /* btn btn-dark hover styling */\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n/* Dark Focus */\n:host([bootstrap~=\"btn-dark\"]) > button:focus {\n  /* btn btn-dark focus styling */\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n/* Dark Disable Button */\n:host([disabled][bootstrap~=\"btn-dark\"]) > button {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n/* Dark Active */\n:host(:not([disabled])[bootstrap~=\"btn-dark\"]) > button:active {\n  /* btn btn-dark active styling */\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n/* Attribute: round */\n/* if host element, i.e. <meat-button> has attribute round, apply this css to button*/\n\n:host([round]) > button {\n    border-radius: 100px;\n}\n\n/* Attribute: circle */\n:host([circle]) > button {\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n}\n\n/* Attribute: size */\n/* if host element, i.e. <meat-button> has attribute size=\"small\", apply this css */\n:host([size=\"small\"]) > button {\n    width: 80px;\n    height: 36px;\n}\n\n:host([size=\"medium\"]) > button {\n    width: 90px;\n    height: 40px;\n}\n\n:host([size=\"large\"]) > button {\n    width: 100px;\n    height: 44px;\n}\n\n/* if size specified, use the following dimensions */\n:host([circle][size=\"small\"]) > button {\n    width: 30px;\n    height: 30px;\n}\n\n:host([circle][size=\"medium\"]) > button {\n    width: 40px;\n    height: 40px;\n}\n\n:host([circle][size=\"large\"]) > button {\n    width: 50px;\n    height: 50px;\n}\n\n/* define color scheme for white button */\n:host([color=\"white\"]) {\n  /* colors */\n  --color: var(--dark-grey);\n  --background-color: var(--white);\n  --border: 1px solid #cccccc;\n\n  --hover-background-color: #daeeff;\n  --focus-background-color: #daeeff;\n  --active-background-color: #daeeff;\n\n  --hover-color: #3388ff;\n  --focus-color: #3388ff;\n  --active-color: #3388ff;\n\n  --hover-border: 1px solid #bbccff;\n  --focus-border: 1px solid #bbccff;\n  --active-border: 1px solid #3388ff;\n}\n\n:host([color=\"grey\"]) {\n  /* colors */\n  --color: var(--white);\n  --background-color: var(--grey);\n  --border: 1px solid var(--grey);\n\n  --hover-background-color: #999999;\n  --focus-background-color: #999999;\n  --active-background-color: #555555;\n\n  --hover-color: var(--white);\n  --focus-color: var(--white);\n  --active-color: var(--white);\n\n  --hover-border: 1px solid #999999;\n  --focus-border: 1px solid #999999;\n  --active-border: 1px solid #555555;\n}\n\n/* define color scheme for red button */\n:host([color=\"red\"]) {\n  /* colors */\n  --color: var(--white);\n  --background-color: var(--red);\n  --border: 1px solid var(--red);\n\n  --hover-background-color: #e46060;\n  --focus-background-color: #e46060;\n  --active-background-color: #b03737;\n\n  --hover-color: var(--white);\n  --focus-color: var(--white);\n  --active-color: var(--white);\n\n  --hover-border: 1px solid #e46060;\n  --focus-border: 1px solid #e46060;\n  --active-border: 1px solid #b03737;\n}\n\n/* define color scheme for orange button */\n:host([color=\"orange\"]) {\n  /* colors */\n  --color: var(--white);\n  --background-color: var(--orange);\n  --border: 1px solid var(--orange);\n\n  --hover-background-color: #dfaa70;\n  --focus-background-color: #dfaa70;\n  --active-background-color: #cf7a30;\n\n  --hover-color: var(--white);\n  --focus-color: var(--white);\n  --active-color: var(--white);\n\n  --hover-border: 1px solid #dfaa70;\n  --focus-border: 1px solid #dfaa70;\n  --active-border: 1px solid #cf7a30;\n}\n\n/* define color scheme for yellow button */\n:host([color=\"yellow\"]) {\n  /* colors */\n  --color: var(--dark-grey);\n  --background-color: var(--yellow);\n  --border: 1px solid var(--yellow);\n\n  --hover-background-color: #ffed86;\n  --focus-background-color: #ffed86;\n  --active-background-color: #e9d200;\n\n  --hover-color: var(--dark-grey);\n  --focus-color: var(--dark-grey);\n  --active-color: var(--dark-grey);\n\n  --hover-border: 1px solid #ffed86;\n  --focus-border: 1px solid #ffed86;\n  --active-border: 1px solid #e9d200;\n}\n\n/* define color scheme for green button */\n:host([color=\"green\"]) {\n  /* colors */\n  --color: var(--white);\n  --background-color: var(--green);\n  --border: 1px solid var(--green);\n\n  --hover-background-color: #79cc69;\n  --focus-background-color: #79cc69;\n  --active-background-color: #50a050;\n\n  --hover-color: var(--white);\n  --focus-color: var(--white);\n  --active-color: var(--white);\n\n  --hover-border: 1px solid #79cc69;\n  --focus-border: 1px solid #79cc69;\n  --active-border: 1px solid #50a050;\n}\n\n/* define color scheme for blue button */\n:host([color=\"blue\"]) {\n  /* colors */\n  --color: var(--white);\n  --background-color: var(--blue);\n  --border: 1px solid var(--blue);\n\n  --hover-background-color: #65b5ff;\n  --focus-background-color: #65b5ff;\n  --active-background-color: #2285dd;\n\n  --hover-color: var(--white);\n  --focus-color: var(--white);\n  --active-color: var(--white);\n\n  --hover-border: 1px solid #65b5ff;\n  --focus-border: 1px solid #65b5ff;\n  --active-border: 1px solid #2285dd;\n}\n\n\n/* define color scheme for blue button */\n:host([color=\"purple\"]) {\n  /* colors */\n  --color: var(--white);\n  --background-color: var(--purple);\n  --border: 1px solid var(--purple);\n\n  --hover-background-color: #cc66cc;\n  --focus-background-color: #cc66cc;\n  --active-background-color: #994499;\n\n  --hover-color: var(--white);\n  --focus-color: var(--white);\n  --active-color: var(--white);\n\n  --hover-border: 1px solid #cc66cc;\n  --focus-border: 1px solid #cc66cc;\n  --active-border: 1px solid #994499;\n}\n\n/* hover focus active */\n:host(:not([disabled]):not([bootstrap])) > button:hover {\n  background-color: var(--hover-background-color);\n  color: var(--hover-color);\n  border: var(--hover-border);\n}\n\n:host(:not([disabled]):not([bootstrap])) > button:focus {\n  background-color: var(--focus-background-color);\n  color: var(--focus-color);\n  border: var(--focus-border);\n}\n\n:host(:not([disabled]):not([bootstrap])) > button:active {\n  background-color: var(--active-background-color);\n  color: var(--active-color);\n  border: var(--active-border);\n}\n\n/* Attribute: disabled */\n:host(:not([bootstrap])[disabled]) > button {\n    opacity: 0.65;\n    cursor: not-allowed;\n}\n\n";
  styleInject(css$1);

  var css$2 = ":host(:not([bootstrap])) {\n    display: inline-block;\n    position: relative;\n    width: 350px;\n    min-height: 250px;\n    border: 1px solid #AAAAAA;\n    border-radius: 5px;\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\n    background-color: white;\n    font-family: sans-serif;\n    vertical-align: top;\n}\n\n/* header default css */\n:host(:not([bootstrap])) ::slotted([slot=\"header\"])  {\n    display: flex;\n    position: relative;\n    font-size: 20px;\n    box-sizing: border-box;\n    padding: 15px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    border-bottom: 1px solid #AAAAAA;\n    overflow: auto;\n    align-items: center;\n    justify-content: space-between;\n}\n\n/* body default css */\n:host(:not([bootstrap]))::slotted([slot=\"body\"]) {\n    padding: 15px;\n}\n\n/* box shadow */\n:host([shadow=\"always\"]) {\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\n}\n\n:host([shadow=\"hover\"]) {\n    box-shadow: none;\n}\n\n:host([shadow=\"hover\"]:hover) {\n    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);\n    background-color: white;\n}\n\n:host([shadow=\"never\"]) {\n    box-shadow: none;\n}\n\n/* Experimental image support */ \n/*\n:host([img]) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    height: attr(img, 50%);\n}\n\n:host([img=\"cover\"]) > #headerContainer  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    border-radius: inherit;\n    object-fit: cover;\n}\n\n::slotted(img[slot=\"header\"]) {\n    flex-shrink: 0;\n    min-width: 100%;\n    min-height: 100%\n}\n \n#headerContainer {\n    margin: -1px;\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n}\n*/\n";
  styleInject(css$2);

  var css$3 = ":host {\n    display: inline-block;\n    position: relative;\n    color: black;\n    text-decoration: none;\n    \n}\n\n/* bootstrap doesn't use sans-serif */\n:host:not([bootstrap]) {\n    font-family: sans-serif;\n}\n\na {\n    color: inherit;\n    text-decoration: inherit;\n    font-family: inherit;\n}\n\n/* if not disabled, display underline on hover */\na:not([disabled]):hover {\n    text-decoration: underline;\n}\n\n/* if no color specified, turn blue on hover */\na:not([color]):hover {\n    color: #40a5ff;\n}\n\n/* lighten on hover */\na:not([disabled])[color]:hover {\n    opacity: .8;\n}\n\n/* underline */\na[underline=\"never\"]:hover {\n    text-decoration: none;\n}\n\na[underline=\"always\"] {\n    text-decoration: underline;\n}\n\na[underline=\"hover\"]:hover {\n    text-decoration: underline;\n}\n\n/* disabled */\na[disabled] {\n    opacity: 0.65;\n    cursor: not-allowed;\n}\n\na[color=\"white\"] {\n    text-decoration: none;\n    color: white;\n}\n\na[color=\"grey\"] {\n    color: #777777;\n}\n\na[color=\"red\"] {\n    color: #cc5050;\n}\n\na[color=\"orange\"] {\n    color: #df8a40;\n}\n\na[color=\"yellow\"] {\n    color: #ffe600;\n}\n\na[color=\"green\"] {\n    color: #59c040;\n}\n\na[color=\"blue\"] {\n    color: #40a5ff;\n}\n\na[color=\"purple\"] {\n    color: #aa55aa;\n}\n\n/* ================ bootstrap =================== bootstrap ================== bootstrap ================= */\n\na[bootstrap] {\n    color: #007bff;\n    text-decoration: none;\n    background-color: transparent;\n}\n\na[bootstrap]:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\na[bootstrap]:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n}\n\na[bootstrap]:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none;\n}\n\na[bootstrap]:not([href]):not([tabindex]):focus {\n    outline: 0;\n}\n\na[bootstrap] > code {\n    color: inherit;\n}\n\na.nav-link {\n    display: block;\n    padding: 0.5rem 1rem;\n}\n\n.nav-link:hover, .nav-link:focus {\n    text-decoration: none;\n}\n\n.nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default;\n}\n\n\na[bootstrap~=\"navbar-brand\"] {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n/* need to use attribute selector [bootstrap~=\"navbar-brand\"] because we use an attribute selector to toggle text-decoration earlier, attribute selectors take precedence */\na[bootstrap~=\"navbar-brand\"]:hover, a[bootstrap~=\"navbar-brand\"]:focus {\n  text-decoration: none;\n}\n\n.nav-link {\n    padding-right: 0;\n    padding-left: 0;\n}\n\na[bootstrap~=\"nav-link\"]:hover, a[bootstrap~=\"nav-link\"]:focus {\n    text-decoration: none;\n}\n\n/* Unsure of these, reliant on parent, but issue with shadowDOM being isolated :(\n.nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n    border-color: #e9ecef #e9ecef #dee2e6;\n}\n\n.nav-tabs .nav-link.disabled {\n    color: #6c757d;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff;\n}\n*/\n\na[bootstrap~=\"navbar-brand\"] {\n    color: rgba(0, 0, 0, 0.9);\n}\n\na[bootstrap~=\"navbar-brand\"]:hover, a[bootstrap~=\"navbar-brand\"]:focus {\n    color: rgba(0, 0, 0, 0.9);\n}\n\na[bootstrap~=\"dropdown-item\"] {\n    display: block;\n    width: 100%;\n    padding: 0.25rem 1.5rem;\n    clear: both;\n    font-weight: 400;\n    color: #212529;\n    text-align: inherit;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n  }\n  \n  a[bootstrap~=\"dropdown-item\"]:hover, a[bootstrap~=\"dropdown-item\"]:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa;\n}\n\na[bootstrap~=\"dropdown-item\"].active, a[bootstrap~=\"dropdown-item\"]:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff;\n}\n\na[bootstrap~=\"dropdown-item\"].disabled, a[bootstrap~=\"dropdown-item\"]:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: transparent;\n}\n\n  \na[bootstrap~=\"dropdown-toggle\"] {\n    white-space: nowrap;\n}\n\na[bootstrap~=\"dropdown-toggle\"]::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent;\n}\n\na[bootstrap~=\"dropdown-toggle\"]:empty::after {\n    margin-left: 0;\n}\n\n.dropup .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0.3em solid;\n    border-left: 0.3em solid transparent;\n}\n  \n.dropup .dropdown-toggle:empty::after {\n    margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid transparent;\n    border-right: 0;\n    border-bottom: 0.3em solid transparent;\n    border-left: 0.3em solid;\n  }\n  \n.dropright .dropdown-toggle:empty::after {\n    margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n    vertical-align: 0;\n}\n\n\n.dropleft .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n}\n\n.dropleft .dropdown-toggle::after {\n    display: none;\n}\n\n.dropleft .dropdown-toggle::before {\n    display: inline-block;\n    margin-right: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid transparent;\n    border-right: 0.3em solid;\n    border-bottom: 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n    margin-left: 0;\n}\n\n.dropleft .dropdown-toggle::before {\n    vertical-align: 0;\n}\n  ";
  styleInject(css$3);

  var css$4 = "/* Note, this CSS needs a lot of work */\n/* Default styling for the input */\n:host {\n    position: relative;\n    display: inline-block;\n    font-family: sans-serif;\n    text-align: left;\n    color: #444444;\n    height: 38px;\n    font-size: 14px;\n    --padding: 10px;\n    --background-color: white;\n    --border: 1px solid #CCCCCC;\n    border-radius: 3px;\n    outline: none;\n}\n\n::placeholder {\n    color: #AAAAAA;\n}\n\ninput {\n    position: relative;\n    display: inline-block;\n\n    background-color: var(--background-color);\n    padding: var(--padding);\n    border: var(--border);\n\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n\n    /* These 4 are incorporated from bootstrap */\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    overflow: visible;\n\n    color: inherit;\n    border-radius: inherit;\n    outline: inherit;\n    font-family: inherit;\n    text-align: inherit;\n    \n\n    /* special override-able css variables */\n    /*\n    --border: 1px solid #cccccc;\n    \n    --hover-background-color: #daeeff;\n    --focus-background-color: #daeeff;\n\n    --hover-text-color: #3388ff;\n    --focus-text-color: #3388ff;\n\n    --hover-border: 1px solid #daeeff;\n    --focus-border: 1px solid #daeeff;\n    --active-border: 1px solid #3388ff;\n\n    --focus-box-shadow: 0 0 0px 3px #b1dcff;\n    */\n    transition: border .3s;\n}\n\ninput:hover {\n    border: 1px solid #888888;\n}\n\ninput:focus {\n    border: 1px solid #3388ff;\n}\n\ninput:active {\n    border: 1px solid #3388ff;\n}\n\n/* Attributes: */\n/* Size */\ninput[size=\"small\"] {\n    width: 100px;\n    height: inherit;\n}\ninput[size=\"medium\"] {\n    width: 200px;\n    height: inherit;\n}\ninput[size=\"large\"] {\n    width: 300px;\n    height: inherit;\n}\n\n/* Disabled */\ninput[disable] {\n    border: none;\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n  \n/* Suggestion Styling */\n#suggestionContainer {\n    position: absolute;\n    border: var(--border);\n    border-bottom: none;\n    border-top: none;\n    z-index: 99;\n    /*position the autocomplete items to be the same width as the container:*/\n    top: 100%;\n    left: 0;\n    right: 0;\n}\n\n/* Suggestion Rows */\n.suggestion {\n    padding-left: 5px;\n    cursor: pointer;\n    background-color: #fff; \n    border-bottom: 1px solid #d4d4d4; \n    font-family: inherit;\n    font-size: 15px\n}\n\n.suggestion:hover {\n    border: var(--active-border);\n}\n\n.suggestion:focus {\n    background-color: var(--hover-background-color, #daeeff);\n    border: var(--active-border);\n}\n\n/* Bootstrap integration */\ninput[bootstrap~=\"form-control\"] {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n  \n@media (prefers-reduced-motion: reduce) {\n    :host([bootstrap~=\"form-control\"]) > input {\n      transition: none;\n    }\n}\n\ninput[bootstrap~=\"form-control\"]::-ms-expand {\n    background-color: transparent;\n    border: 0;\n}\n\ninput[bootstrap~=\"form-control\"]:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\ninput[bootstrap~=\"form-control\"]::-webkit-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]::-moz-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[boostrap~=\"form-control\"]::-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]::placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n\ninput[bootstrap~=\"form-control\"]:disabled, input[bootstrap~=\"form-control\"][readonly] {\n    background-color: #e9ecef;\n    opacity: 1;\n  }\n\ninput[bootstrap~=\"form-control-file\"], input[bootstrap~=\"form-control-range\"] {\n    display: block;\n    width: 100%;\n}\n\ninput[bootstrap~=\"form-control-plaintext\"] {\n    display: block;\n    width: 100%;\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem;\n    margin-bottom: 0;\n    line-height: 1.5;\n    color: #212529;\n    background-color: transparent;\n    border: solid transparent;\n    border-width: 1px 0;\n}\n\n/* Unsure about this one */\ninput[bootstrap~=\"form-control-plaintext\"].form-control-sm, input[bootstrap~=\"form-control-plaintext\"].form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n}\n\ninput[bootstrap~=\"form-control-sm\"] {\n    height: calc(1.5em + 0.5rem + 2px);\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n}\n\ninput[bootstrap~=\"form-control-lg\"] {\n    height: calc(1.5em + 1rem + 2px);\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    border-radius: 0.3rem;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\ninput[bootstrap~=\"custom-control-input\"] {\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n}\n\n/* TODO */\n.custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: #007bff;\n    background-color: #007bff;\n  }\n  \n  .custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n  \n  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: #80bdff;\n  }\n  \n  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff;\n    border-color: #b3d7ff;\n  }\n  \n  .custom-control-input[disabled] ~ .custom-control-label {\n    color: #6c757d;\n  }\n  \n  .custom-control-input[disabled] ~ .custom-control-label::before {\n    background-color: #e9ecef;\n  }\n\n";
  styleInject(css$4);

  const template = document.createElement("template");
  template.innerHTML = `
  <style></style>
  <link rel="stylesheet" href="/web_components/common.css"/>
  <link rel="stylesheet" href="/web_components/meat-button/meat-button.css"/>
  <button id="button" type="reset"></button>
`;

  class MeatButtonElement extends HTMLElement {
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
    constructor() {
      super();
      this._submitButton;
      this._parentForm;
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.appendChild(template.content.cloneNode(true));
      this.button = this.shadow.querySelector("#button");
      this.addEventListener("click", this._onClick);
    }

    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */
    connectedCallback() {
      // Need to get the content inbetween the <meat-button> tags into the button so it renders
      this.button.textContent = this.textContent;

      // Look up dom tree for a parent form
      let parentNode = this.parentNode;
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
    static get observedAttributes() {
      /* <meat-button type="default" disabled></meat-button> */
      return [
        "autofocus",
        "color",
        "circle",
        "disabled",
        "round",
        "size",
        "type",
        "bootstrap"
      ];
    }

    /**
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     * */
    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case "disabled":
          if (newVal == "") this.button.disabled = true;
          else this.button.disabled = false;
          break;
        case "autofocus":
          if (newVal == "") this.button.autofocus = true;
          else this.button.autofocus = false;
          break;
        case "type":
          this.button.type = newVal;
          break;
        case "bootstrap":
          this.button.className = newVal;
          break;
      }
    }

    /**
     * getters and setters for attributes
     */
    get disabled() {
      return this.hasAttribute("disabled");
    }

    set disabled(val) {
      if (val) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }

    get round() {
      return this.hasAttribute("round");
    }

    set round(val) {
      if (val) {
        this.setAttribute("round", "");
      } else {
        this.removeAttribute("round");
      }
    }

    get circle() {
      return this.hasAttribute("circle");
    }

    set circle(val) {
      if (val) {
        this.setAttribute("circle", "");
      } else {
        this.removeAttribute("circle");
      }
    }

    get size() {
      return this.getAttribute("size");
    }

    set size(val) {
      if (val) {
        this.setAttribute("size", val);
      } else {
        this.removeAttribute("size");
      }
    }

    get type() {
      return this.getAttribute("type");
    }

    set type(val) {
      if (val) {
        this.setAttribute("type", val);
      } else {
        this.removeAttribute("type");
      }
    }

    // getters and setters for attributes
    get disabled() {
      return this.hasAttribute("disabled");
    }

    set disabled(val) {
      if (val) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }

    get round() {
      return this.hasAttribute("round");
    }

    set round(val) {
      if (val) {
        this.setAttribute("round", "");
      } else {
        this.removeAttribute("round");
      }
    }

    get circle() {
      return this.hasAttribute("circle");
    }

    set circle(val) {
      if (val) {
        this.setAttribute("circle", "");
      } else {
        this.removeAttribute("circle");
      }
    }

    get size() {
      return this.getAttribute("size");
    }

    set size(val) {
      if (val) {
        this.setAttribute("size", val);
      } else {
        this.removeAttribute("size");
      }
    }

    get type() {
      return this.getAttribute("type");
    }

    set type(val) {
      if (val) {
        this.setAttribute("type", val);
      } else {
        this.removeAttribute("type");
      }
    }

    get color() {
      return this.getAttribute("color");
    }

    set color(val) {
      if (val) {
        this.setAttribute("color", val);
      } else {
        this.removeAttribute("color");
      }
    }

    /*
     * This is unnecessary for now, the user can just attach an event listener to <meat-button>
     * */
    _onClick(evt, thisComponent) {
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
  }

  window.customElements.define("meat-button", MeatButtonElement);

  const rainbow = `
    :host {
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;
        
        -webkit-animation: rainbow 18s ease infinite;
        -z-animation: rainbow 18s ease infinite;
        -o-animation: rainbow 18s ease infinite;
            animation: rainbow 18s ease infinite;}
        
        @-webkit-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-moz-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-o-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @keyframes rainbow { 
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
    }
`;

  const tmpl = document.createElement("template");
  tmpl.innerHTML = `
<style>
:host {
    font-family: var(--font-family, Helvetica);
    font-size: var(--font-size, 50px);
    background-color: var(--background-color, #9E9E9E);
    width: var(--width);
    height: var(--height);
    margin: var(--margin, auto);
    display: var(--display, block);
    text-align: var(--text-align, center);
}
/* when "hidden" attribute applied, display nothing */
:host([hidden]){
    display: none;
}
</style>
<span id="main-text">Hello world, </span>
<slot></slot>
`;

  class CoreHelloElement extends HTMLElement {
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
    constructor() {
      console.info("Constructing core-hello!");
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      /*
       * method attaches a shadow DOM tree to the specified element.
       */
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    /**
     * tell component to call attributeChangedCallback method when the following attributes are found
     */
    static get observedAttributes() {
      return ["rainbow", "lang"];
    }

    /**
     * Invoked when one of the custom element's attributes is added, removed, or changed.
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     */
    attributeChangedCallback(name, oldVal, newVal) {
      console.info(`AttributeChangedCallback called for | ${name} |.`);
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
    updateStyle(elem) {
      console.info("Updating style: applying rainbow.");
      const shadowRoot = elem.shadowRoot;
      shadowRoot.querySelector("style").textContent += rainbow;
    }

    /**
     * update language
     * @param {Object} elem
     * @param {string} lang
     */
    updateLang(elem, lang) {
      console.info(`Updating Language: applying ${lang}.`);
      const shadowRoot = elem.shadowRoot;
      let text;
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
    set rainbow(val) {
      if (val) {
        this.setAttribute("rainbow", "");
      } else {
        this.removeAttribute("rainbow");
      }
    }
    /**
     * gets the rainbow attribute, might be useful when interacting with outside javascript?
     */
    get rainbow() {
      return this.getAttribute("rainbow");
    }

    /**
     * language support
     * @param {string} val
     */
    set lang(val) {
      if (val) {
        this.setAttribute("lang", val);
      } else {
        this.removeAttribute("lang");
      }
    }
    /**
     * gets the lang attribute
     */
    get lang() {
      return this.getAttribute("lang");
    }
  }
  window.customElements.define("core-hello", CoreHelloElement);

  const template$1 = document.createElement("template");
  template$1.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-card/meat-card.css"/>
<slot id="header" name="header"></slot>
<slot id="body" name="body"></slot>
`;

  class MeatCardElement extends HTMLElement {
    /**
     * meat-card webcomponent
     * @customelement meat-card
     * @description A reusable card with replaceable markup.
     * @example <meat-card></meat-card>
     * @see [Demo]{@link https://meat-space.org/web_components/meat-card/meat-card-demo.html} for working example.
     * @property {attribute} shadow -Specifies a "shadow" around the card.
     * */
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
      this.shadowDOM.appendChild(template$1.content.cloneNode(true));
    }

    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */
    connectedCallback() {}

    /**
     * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
     * call attributeChangedCallback(name, oldVal, newVal)
     */
    static get observedAttributes() {
      return ["shadow"];
    }

    /**
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     */
    attributeChangedCallback(name, oldVal, newVal) {
    }

    /**
     * Getters and Setters
     */
    get shadow() {
      return this.getAttribute("shadow");
    }

    set shadow(val) {
      if (val) {
        this.setAttribute("shadow", val);
      } else {
        this.removeAttribute("shadow");
      }
    }
  }
  window.customElements.define("meat-card", MeatCardElement);

  const template$2 = document.createElement("template");
  template$2.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-input/meat-input.css"/>
<input id="input" type="text"></input>
<div id="suggestionContainer"></div>
`;

  class MeatInputElement extends HTMLElement {
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
    constructor() {
      super();
      this._sortSuggestions = this._sortSuggestions.bind(this);
      this._switchFocus = this._switchFocus.bind(this);
      this._onInputChange = this._onInputChange.bind(this);

      this._suggestions = [];
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.appendChild(template$2.content.cloneNode(true));
      this.input = this.shadow.querySelector("input");
      this.suggestionContainer = this.shadow.querySelector(
        "#suggestionContainer"
      );

      this._currentFocus = 0; // 0 means focusing input, 1 would be the first autocomplete suggestion, 2 would be the second...

      // when user types into the input, update internal state
      this.input.addEventListener("input", this._onInputChange);
      // when user presses any keys while input is focused, call _switchFocus
      this.input.addEventListener("keydown", this._switchFocus);
      // if you click inside the input, you focus it, therefore should reflect that internally
      this.input.addEventListener("mousedown", () => {
        this._currentFocus = 0;
      });

      /* Close the suggestion list whenever a click occurs */
      document.addEventListener("click", () => {
        this.suggestionContainer.innerHTML = "";
      });
    }

    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */
    connectedCallback() {
      // User may have attempted to set suggestions before element loaded in, set them now.
      this._upgradeProperty("suggestions");

      // if this input is within a form, find the form and connect to it
      let parentNode = this.parentNode;
      while (parentNode) {
        if (parentNode && parentNode.nodeName == "FORM") {
          // form reset
          parentNode.addEventListener("reset", () => {
            // Shouldn't change value of a readonly input
            if (this.hasAttribute("readonly")) return;
            this.input.value = "";
            this.value = "";
          });

          // form submit
          parentNode.addEventListener("submit", evt => {
            parentNode.append(this.input);
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
    static get observedAttributes() {
      return [
        "disabled",
        "size",
        "limit",
        "placeholder",
        "password",
        "value",
        "readonly",
        "suggest",
        "autocomplete",
        "bootstrap",
        "type"
      ];
    }

    /*
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     * */
    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case "disabled":
          if (newVal == "") {
            this.input.disabled = true;
          }
          break;
        case "readonly":
          if (newVal == "") {
            this.input.readOnly = true;
          }
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
    _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        const value = this[prop];
        delete this[prop];
        this[prop] = value;
      }

      // sort suggestions alphanumerically
      if (prop == "suggestions") {
        this._sortSuggestions();
      }
    }

    /**
     * Sort suggestions alphanumerically for user convenience, make toggleable via attribute?
     */
    // _sortSuggestions = () => {
    _sortSuggestions() {
      this._suggestions = this._suggestions.sort(function(a, b) {
        // If characters get matched to the regular expression \D+\, push [infinity, "the first char"]
        // If numbers get matched to the regular expression \d+\, push [the numbers, ""]
        const aMatches = [];
        const bMatches = [];
        a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
          aMatches.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
          bMatches.push([$1 || Infinity, $2 || ""]);
        });

        // Go through the array and compare either the number or the character depending on what got matched earlier, if we end up comparing chracters and numbers, number
        // takes priority because the chararacter group's first element in its array is infinity, similarly, the second element in the number group's array is ""
        let index = 0;
        let aGroup = null;
        let bGroup = null;
        let result = null;
        while (aMatches[index] != null && bMatches[index] != null) {
          aGroup = aMatches[index];
          bGroup = bMatches[index];
          // compare each group
          result = aGroup[0] - bGroup[0] || aGroup[1].localeCompare(bGroup[1]);
          // if the comparison is unequal, then just return the result
          index++;
          if (result != 0) {
            return result;
          }
        }

        // otherwise, decide by the length
        return aMatches.length - bMatches.length;
      });
    }

    /**
     * @param {event} evt
     * Allow user to use keyboard arrows to navigate up and down the list
     */
    // _switchFocus = (evt) => {
    _switchFocus(evt) {
      // move focus up or down the list of suggestions
      if (evt.keyCode == 40) {
        // down
        this._currentFocus++;
      } else if (evt.keyCode == 38) {
        // up
        this._currentFocus--;
      }

      // focus 0 means focusing the input
      if (this._currentFocus == 0) {
        this.input.focus();
        return;
      }

      // get reference to suggestion item
      const suggestion = this.shadow.querySelector(
        `#suggestion${this._currentFocus}`
      );

      // if no suggestion, reached end of list, undo operation and return;
      if (!suggestion) {
        if (evt.keyCode == 40) {
          // down
          this._currentFocus--;
        } else if (evt.keyCode == 38) {
          // up
          this._currentFocus++;
        }
        return;
      }

      // focus the suggestion
      suggestion.focus();

      // enter key pressed
      if (evt.keyCode == 13) {
        evt.preventDefault(); /* If the ENTER key is pressed, prevent the form from being submitted,*/
        if (this._currentFocus > -1) {
          this.value = suggestion.value; // set host value to the suggestion so user can use the value in their event listener
          this.input.value = suggestion.value; // set input value to the suggestion to reflect back visually
          this.suggestionContainer.innerHTML = "";
          this._currentFocus = 0;
          this.input.focus();
        }
      }
    }

    /**
     * @param {object} evt
     * Suggest terms for user to select whenever they input characters.
     */
    // _onInputChange = (evt) => {
    _onInputChange(evt) {
      if (!evt.target.value) {
        this._renderSuggestions([]);
        return;
      }

      // match all suggestions where the beginning is the same as the input and render
      const regex = new RegExp(`^${evt.target.value}(.*?)`, "i");
      const matchedSuggestions = this._suggestions.filter(suggestion =>
        suggestion.match(regex)
      );
      this._renderSuggestions(matchedSuggestions);
      this.value = evt.target.value;
    }

    /**
     * @param {array} suggestions
     * Render list of suggestions as dropdown list under input
     */
    _renderSuggestions(suggestions) {
      // if autocomplete is on or suggest is not on, don't render the suggestions list
      if (
        !this.getAttribute("suggest") == "on" ||
        this.getAttribute("autocomplete") == "on"
      ) {
        return;
      }

      this.suggestionContainer.innerHTML = "";

      // const container = this.shadow.querySelector("#suggestionContainer");
      // container.innerHTML = "";
      suggestions.forEach((suggestion, index) => {
        const row = document.createElement("div");
        row.id = "suggestion" + (index + 1);
        row.setAttribute("tabindex", index + 1);
        row.className = "suggestion";
        row.value = suggestion;
        row.innerHTML =
          "<strong>" +
          suggestion.substr(0, this.input.value.length) +
          "</strong>"; // bold the matching part
        row.innerHTML += suggestion.substr(this.input.value.length);
        row.addEventListener("click", () => {
          this.input.value = row.textContent;
          this._currentFocus = index + 1;
        });
        row.addEventListener("keydown", this._switchFocus);
        this.suggestionContainer.appendChild(row);
      });
    }

    /**
     * Allow user to get list of autocomplete suggestions
     */
    get suggestions() {
      return this._suggestions;
    }

    /**
     * @param {array} val
     * Allow user to set list of autocomplete suggestions
     */
    set suggestions(val) {
      this._suggestions = val;
      this._sortSuggestions();
    }

    /**
     * The following methods are the usual get and set
     * Get - allow user to retrieve value of the attribute
     * Set - Allows uer to assign the value of the attribute
     */
    get size() {
      return this.getAttribute("size");
    }

    set size(val) {
      if (val) this.setAttribute("size", val);
      else this.removeAttribute("size");
    }

    get limit() {
      return this.getAttribute("limit");
    }

    set limit(val) {
      if (val) this.setAttribute("limit", val);
      else this.removeAttribute("limit");
    }

    get placeholder() {
      return this.getAttribute("placeholder");
    }

    set placeholder(val) {
      if (val) this.setAttribute("placeholder", val);
      else this.removeAttribute("placeholder");
    }

    get password() {
      return this.hasAttribute("password");
    }

    set password(val) {
      if (val) this.setAttribute("password", "");
      else this.removeAttribute("password");
    }

    get suggest() {
      return this.hasAttribute("suggest");
    }

    set suggest(val) {
      if (val) this.setAttribute("suggest", val);
      else this.removeAttribute("suggest");
    }
  }

  window.customElements.define("meat-input", MeatInputElement);

  const template$3 = document.createElement("template");
  template$3.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-link/meat-link.css"/>
<a></a>
`;

  class MeatLinkElement extends HTMLElement {
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
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.appendChild(template$3.content.cloneNode(true));
      this.link = this.shadow.querySelector("a");
    }

    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */
    connectedCallback() {
      this.link.textContent = this.textContent;
    }

    /**
     * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
     * call attributeChangedCallback(name, oldVal, newVal)
     */
    static get observedAttributes() {
      return [
        "type",
        "color",
        "href",
        "disabled",
        "underline",
        "icon",
        "bootstrap"
      ];
    }

    /**
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     */
    attributeChangedCallback(name, oldVal, newVal) {
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
    get color() {
      return this.getAttribute("color");
    }

    set color(val) {
      if (val) this.setAttribute("color", val);
      else this.removeAttribute("color");
    }

    get underline() {
      return this.getAttribute("underline");
    }

    set underline(val) {
      if (val) this.setAttribute("underline", val);
      else this.removeAttribute("underline");
    }

    get type() {
      return this.getAttribute("type");
    }

    set type(val) {
      if (val) this.setAttribute("type", val);
      else this.removeAttribute("type");
    }

    get href() {
      return this.getAttribute("href");
    }

    set href(val) {
      if (val) this.setAttribute("href", val);
      else this.removeAttribute("href");
    }

    get bootstrap() {
      return this.getAttribute("bootstrap");
    }

    set bootstrap(val) {
      if (val) this.setAttribute("bootstrap", val);
      else this.removeAttribute("bootstrap");
    }

    get disabled() {
      return this.hasAttribute("disabled");
    }

    set disabled(val) {
      if (val) this.setAttribute("disabled", val);
      else this.removeAttribute("disabled");
    }
  }
  window.customElements.define("meat-link", MeatLinkElement);

  var index = {
      MeatButtonElement,
      CoreHelloElement,
      MeatCardElement,
      MeatInputElement,
      MeatLinkElement
  };

  return index;

}());
