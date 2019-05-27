const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-link/meat-link.css"/>
<a></a>
`;

/**
 * meat-link webcomponent
 * @customelement meat-link
 * @description displays a stylized link
 * @example <meat-link></meat-link>
 */
export class MeatLinkElement extends HTMLElement {
  /**
   * Create an instance of MeatLinkElement
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
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
