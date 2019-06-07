const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  display: inline-block;
  position: relative;
  color: black;
  text-decoration: none;
  
}

/* bootstrap doesn't use sans-serif */
:host:not([bootstrap]) {
  font-family: sans-serif;
}

a {
  color: inherit;
  text-decoration: inherit;
  font-family: inherit;
}

/* if not disabled, display underline on hover */
a:not([disabled]):hover {
  text-decoration: underline;
}

/* if no color specified, turn blue on hover */
a:not([color]):not([disabled]):hover {
  color: #40a5ff;
}

/* lighten on hover */
a:not([disabled])[color]:hover {
  opacity: .8;
}

/* underline */
a[underline="never"]:hover {
  text-decoration: none;
}

a[underline="always"] {
  text-decoration: underline;
}

a[underline="hover"]:hover {
  text-decoration: underline;
}

/* disabled */
a[disabled] {
  opacity: 0.65;
  cursor: not-allowed;
}

a[color="white"] {
  text-decoration: none;
  color: white;
}

a[color="grey"] {
  color: #777777;
}

a[color="red"] {
  color: #cc5050;
}

a[color="orange"] {
  color: #df8a40;
}

a[color="yellow"] {
  color: #ffe600;
}

a[color="green"] {
  color: #59c040;
}

a[color="blue"] {
  color: #40a5ff;
}

a[color="purple"] {
  color: #aa55aa;
}

/* ================ bootstrap =================== bootstrap ================== bootstrap ================= */

a[bootstrap] {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a[bootstrap]:hover {
  color: #0056b3;
  text-decoration: underline;
}

a[bootstrap]:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a[bootstrap]:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}

a[bootstrap]:not([href]):not([tabindex]):focus {
  outline: 0;
}

a[bootstrap] > code {
  color: inherit;
}

a.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

.nav-link:hover, .nav-link:focus {
  text-decoration: none;
}

.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

a[bootstrap~="navbar-brand"] {
display: inline-block;
padding-top: 0.3125rem;
padding-bottom: 0.3125rem;
margin-right: 1rem;
font-size: 1.25rem;
line-height: inherit;
white-space: nowrap;
}

/* need to use attribute selector [bootstrap~="navbar-brand"] because we use an attribute selector to toggle text-decoration earlier, attribute selectors take precedence */
a[bootstrap~="navbar-brand"]:hover, a[bootstrap~="navbar-brand"]:focus {
text-decoration: none;
}

.nav-link {
  padding-right: 0;
  padding-left: 0;
}

a[bootstrap~="nav-link"]:hover, a[bootstrap~="nav-link"]:focus {
  text-decoration: none;
}

/* Unsure of these, reliant on parent, but issue with shadowDOM being isolated :(
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
*/

a[bootstrap~="navbar-brand"] {
  color: rgba(0, 0, 0, 0.9);
}

a[bootstrap~="navbar-brand"]:hover, a[bootstrap~="navbar-brand"]:focus {
  color: rgba(0, 0, 0, 0.9);
}

a[bootstrap~="dropdown-item"] {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

a[bootstrap~="dropdown-item"]:hover, a[bootstrap~="dropdown-item"]:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

a[bootstrap~="dropdown-item"].active, a[bootstrap~="dropdown-item"]:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
}

a[bootstrap~="dropdown-item"].disabled, a[bootstrap~="dropdown-item"]:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}


a[bootstrap~="dropdown-toggle"] {
  white-space: nowrap;
}

a[bootstrap~="dropdown-toggle"]::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

a[bootstrap~="dropdown-toggle"]:empty::after {
  margin-left: 0;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}


.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}
</style>
<a></a>
`;

export class MeatLink extends HTMLElement {
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
    this.shadow.appendChild(template.content.cloneNode(true));
    this.link = this.shadow.querySelector("a");

    this._preventClick = this._preventClick.bind(this);
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
  _preventClick(evt) {
    evt.preventDefault();
    return false;
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
    else {
      this.removeAttribute("disabled");
      this.link.removeEventListener("click", this._preventClick);
    }
  }
}
window.customElements.define("meat-link", MeatLink);
