const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/common.css"/>
<link rel="stylesheet" href="/web_components/meat-dropdown/meat-dropdown.css"/>
<select><slot id="dropdown" name="dropdown"></slot></select>
`;

export class MeatDropdownElement extends HTMLElement {
  /**
   * meat-dropdown webcomponent
   * @customelement meat-dropdown
   * @description A dropdown for starting new webcomponents
   * @example <meat-dropdown></meat-dropdown>
   */
  constructor() {
    super();
    // this._onSlotChange = this._onSlotChange.bind(this);
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    // this._dropdownSlot = this.shadowRoot.querySelector('slot[name=dropdown]');

    // this._dropdownSlot.addEventListener('slotchange', this._onSlotChange);
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // Need to get the content inbetween the <meat-dropdown> tags into the button so it renders
    this.dropdown.textContent = this.textContent;
    this.addEventListener("keydown", this._onKeyDown);
    this.addEventListener("click", this._onClick);
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return ["value", "disabled"];
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
        if (newVal == "") this.dropdown.disabled = true;
        else this.dropdown.disabled = false;
        break;
      case "value":
        this.dropdown.className = newVal;
        break;
    }
  }
}
window.customElements.define("meat-dropdown", MeatDropdownElement);
