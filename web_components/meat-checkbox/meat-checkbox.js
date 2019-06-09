import style from "./meat-checkbox.css";

const template = document.createElement("template");
template.innerHTML = `
  <style>
  ${style}
  </style>

  <label class="container">
    <input id="checkbox" type="checkbox">
    <span class="checkmark"></span>
    <label id="cblabel"></label>
  </label>
`;

export class MeatCheckboxElement extends HTMLElement {
  /**
   * meat-checkbox webcomponent
   * @customelement meat-checkbox
   * @description displays a stylized checkbox component
   * @see [Demo]{@link https://meat-space.org/web_components/meat-checkbox/meat-checkbox-demo.html} for working example.
   * @example <meat-checkbox></meat-checkbox>
   * @property {boolean} checked -Property for if a checkbox is checked or not.
   * @property {string} color -Changes the color of the checkbox.
   * @property {boolean} disabled -Disables checkbox usage.
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this._container = this.shadow.querySelector("label"); // Entire "Checkbox"
    this._input = this._container.querySelector("input"); // Native Checkbox
    this._checkmark = this._container.querySelector("span"); // Visible Checkmark
    this._cblabel = this._container.querySelector("label"); // Checkbox Label
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    const _label = this.textContent;
    this._cblabel.appendChild(document.createTextNode(_label));

    // Checks for instance properties and run them through setters
    this._upgradeProperty("checked");
    this._upgradeProperty("disabled");

    // Adds event listeners for key
    this.addEventListener("keyup", this._onKeyUp);
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
  }

  /**
   * Releases references and removes listeners when element removed from DOM.
   */
  disconnectedCallback() {
    this.removeEventListener("keyup", this._onKeyUp);
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return ["color", "disabled", "checked", "bootstrap"];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "checked":
        this._input.checked = "checked";
        break;
      case "disabled":
        if (newVal == "") this._input.disabled = true;
        else this._input.disabled = false;
        break;
      // Work in Progress
      case "bootstrap":
        this._input.className = "custom-control-input";
        this._checkmark.className = "custom-control-indicator";
        this._container.className = "custom-control custom-checkbox";
        this._cblabel.className = "custom-control-description";
        break;
    }
  }

  // Attribute Getters and Setters
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

  get checked() {
    return this.getAttribute("checked");
  }
  set checked(val) {
    if (val) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }
  }

  /**
   * @param {string} event
   * Triggers when 'space' key is pressed. Will check the checkbox.
   */
  _onKeyUp(event) {
    if (event.altKey) return;
    switch (event.keyCode) {
      case "32":
        event.preventDefault();
        this._toggleChecked();
        break;
      default:
        return;
    }
  }

  /**
   * Toggles "Checked" attribute of checkbox.
   */
  _toggleChecked() {
    if (this.disabled) return;
    this.checked = !this.checked;
  }
}
window.customElements.define("meat-checkbox", MeatCheckboxElement);
