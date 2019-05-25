const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-link/meat-link.css"/>
<a id="a" type="reset"></a>
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
    this.link = this.shadow.querySelector("#a");
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
    return ["type", "href", "disabled", "underline", "icon", "bootstrap"];
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
        if (newVal == "") this.link.disabled = true;
        else this.link.disabled = false;
        break;
      case "href":
        this.link.href = newVal;
        break;
      case "type":
        this.link.type = newVal;
        break;
      case "bootstrap":
        this.link.className = newVal;
        break;
    }
  }
}
window.customElements.define("meat-link", MeatLinkElement);
