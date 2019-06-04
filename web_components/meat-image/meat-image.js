import { RELEASE } from "../environment.js";

let cssUrl = "/web_components/meat-image/meat-image.css";

if (RELEASE) {
  cssUrl =
    "https://unpkg.com/@meatspace/webcomponents@latest/web_components/meat-image/meat-image.css";
}

const template = document.createElement("template");

template.innerHTML = `
<style></style>
<link rel="stylesheet" href="${cssUrl}"/>

<div id="imageContainer">
  <img id="imageElement" class="nativeImg">
  <slot id="placeholder" name="placeholder"></slot>
  <slot id="error" name="error"></slot>
</div>
`;

const referrerPolicies = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "origin-when-cross-origin",
  "unsafe-url"
];

const fillStyles = ["fill", "contain", "cover", "none", "scale-down"];

export class MeatImageElement extends HTMLElement {
  /**
   * meat-boilerplate webcomponent
   * @customelement meat-boilerplate
   * @description A boilerplate for starting new webcomponents
   * @example <meat-boilerplate></meat-boilerplate>
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.changeLinkHref(this.shadow);

    this.image = this.shadow.querySelector("#imageElement");
    this.imageContainer = this.shadow.querySelector("#imageContainer");

    // Apply user's inline style to our custom component container
    this.imageContainer.style = this.style.cssText;
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // TODO: find a way to make placeholder disappear upon loading
    this.image.addEventListener("load", function() {
      // do not show placeholder slot
      console.log("loaded");
    });

    // TODO: display error plcaeholder upon image error
    this.image.addEventListener("error", function() {
      // show only error slot
    });
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return ["src", "fit", "alt", "referrerpolicy", "lazy", "scrollcontainer"];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "src":
        this.image.src = newVal;
        break;
      case "fit":
        if (fillStyles.includes(newVal)) {
          this.image.setAttribute("style", `object-fit: ${newVal};`);
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
}
window.customElements.define("meat-image", MeatImageElement);
