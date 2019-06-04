import { RELEASE } from "../environment.js";
// path to local css file for development
let cssUrl = "/web_components/meat-card/meat-card.css";
// replaces the href during the bundling process to point to production
if (RELEASE) {
  cssUrl =
    "https://unpkg.com/@meatspace/webcomponents@latest/web_components/meat-card/meat-card.css";
}

const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="${cssUrl}"/>
<slot id="header" name="header"></slot>
<slot id="body" name="body"></slot>
`;

export class MeatCard extends HTMLElement {
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
    this.shadowDOM.appendChild(template.content.cloneNode(true));
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
    switch (name) {
      case "shadow":
        break;
    }
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
window.customElements.define("meat-card", MeatCard);
