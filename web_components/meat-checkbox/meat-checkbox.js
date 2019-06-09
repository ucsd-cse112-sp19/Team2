const template = document.createElement("template");
template.innerHTML = `
  <style>
  :host .container {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    vertical-align: middle;
  }

  /* Hides Native Checkbox */
  :host .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Visible Checkmark */
  :host .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 5px;
    background-color: #eee;
    vertical-align: middle;
  }

  /* Aligns Label */
  :host #cblabel {
    vertical-align: middle;
  }

  /* Hover Background */
  :host .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* Disabled Colors */
  :host([disabled]) input ~ .checkmark {
    background-color: #808080;
    cursor: not-allowed;
  }
  :host([disabled]) .container:hover input ~ .checkmark {
    background-color: #808080;
    cursor: not-allowed;
  }
  :host([disabled]) .container:hover input:checked ~ .checkmark {
    background-color: #808080;
    cursor: not-allowed;
  }

  /* Checked default */
  :host .container input:checked ~ .checkmark {
    background-color: #808080;
  }
  :host .container:hover input:checked ~ .checkmark {
    background-color: #000000;
  }

  /* Checked Color */
  :host([color="grey"]) .container input:checked ~ .checkmark {
    background-color: #777777;
  }
  :host([color="red"]) .container input:checked ~ .checkmark {
    background-color: #cc5050;
  }
  :host([color="orange"]) .container input:checked ~ .checkmark {
    background-color: #df8a40;
  }
  :host([color="yellow"]) .container input:checked ~ .checkmark {
    background-color: #eedd00;
  }
  :host([color="green"]) .container input:checked ~ .checkmark {
    background-color: #59c040;
  }
  :host([color="blue"]) .container input:checked ~ .checkmark {
    background-color: #40a5ff;
  }
  :host([color="purple"]) .container input:checked ~ .checkmark {
    background-color: #aa55aa;
  }
  
  /* Hover color when checked */
  :host([color="grey"]) .container:hover input:checked ~ .checkmark {
    background-color: #999999;
  }
  :host([color="red"]) .container:hover input:checked ~ .checkmark {
    background-color: #e46060;
  }
  :host([color="orange"]) .container:hover input:checked ~ .checkmark {
    background-color: #dfaa70;
  }
  :host([color="yellow"]) .container:hover input:checked ~ .checkmark {
    background-color: #f6e690;
  }
  :host([color="green"]) .container:hover input:checked ~ .checkmark {
    background-color: #79cc69;
  }
  :host([color="blue"]) .container:hover input:checked ~ .checkmark {
    background-color: #65b5ff;
  }
  :host([color="purple"]) .container:hover input:checked ~ .checkmark {
    background-color: #cc66cc;
  }

  /* Shows Checkmark if checked or not */
  :host .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  :host .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Draws Checkmark */
  :host .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
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
