import style from "./meat-image.css";

const template = document.createElement("template");
template.innerHTML = `
<style>
${style}
</style>
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

export class MeatImage extends HTMLElement {
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

    this.image = this.shadow.querySelector("#imageElement");
    this.imageContainer = this.shadow.querySelector("#imageContainer");

    // Apply user's inline style to our custom component container
    this.imageContainer.style = this.style.cssText;
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // Create reference to the main image that is loading and the placeholder slot element
    const placeholderSlot = this.shadow.querySelector("#placeholder");
    const errorSlot = this.shadow.querySelector("#error");
    const mainImage = this.image;
    // Use _thisComponent reference instead of binding this for each event listener
    const _thisComponent = this;

    // If placeholder has content (via slotchange event) execute call back
    placeholderSlot.addEventListener("slotchange", function() {
      mainImage.classList.add("imageHide");
      // Remove diplay of placeholder loading element once main image loads
      mainImage.addEventListener("load", function() {
        placeholderSlot.classList.add("imageHide");
        mainImage.classList.remove("imageHide");

        _thisComponent.dispatchEvent(new CustomEvent("meat-load"), {
          bubbles: true,
          cancelable: false
        });
      });
    });

    // If error slot has content, execute call back
    errorSlot.addEventListener("slotchange", function() {
      // Do not show the error content until an error has occured with main image
      errorSlot.classList.add("imageHide");

      // Add listener to see if error occurs
      mainImage.addEventListener("error", function() {
        // Show error message upon main image error
        errorSlot.classList.remove("imageHide");
        // Hide native error display from main image element
        mainImage.classList.add("imageHide");

        _thisComponent.dispatchEvent(new CustomEvent("meat-error"), {
          bubbles: true,
          cancelable: false
        });
      });
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
window.customElements.define("meat-image", MeatImage);
