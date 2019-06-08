const template = document.createElement("template");
template.innerHTML = `
  <style></style>
  <link rel="stylesheet" href="/web_components/meat-checkbox/meat-checkbox.css"/>
  <label class="container">
    <input id="checkbox" type="checkbox">
    <span class="checkmark"></span>
    <label id="cblabel"></label>
  </label>
`;

/**
 * meat-checkbox webcomponent
 * @customelement meat-checkbox
 * @description displays a stylized checkbox component
 * @see [Demo]{@link https://meat-space.org/web_components/meat-checkbox/meat-checkbox-demo.html} for working example.
 * @example <meat-checkbox></meat-checkbox>
 * @property {boolean} checked -Property for if a checkbox is checked or not.
 * @property {string} color -Changes the color of the checkbox.
 * @property {boolean} disabled -Disabled checkbox usage.
 */
export class MeatCheckboxElement extends HTMLElement {
  /**
   * Create an instance of MeatButtonElement
   */
  constructor() {
    super();
    this._parentForm;
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
    var _label = this.textContent;
    this._cblabel.appendChild(document.createTextNode(_label));

    // if user specifies bootstrap, link style to bootstrap
    if (this.hasAttribute("bootstrap")) {
      const newLink = this.shadow.querySelector("link"); // link stylesheet to bootstrap's stylesheet
      newLink.rel = "stylesheet";
      newLink.href =
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
      newLink.integrity =
        "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
      newLink.crossOrigin = "anonymous";
    }

    // Look up dom tree for a parent form
    let parentNode = this.parentNode;
    while (parentNode) {
      if (parentNode && parentNode.nodeName == "FORM") {
        this._parentForm = parentNode;
        break;
      }
      parentNode = parentNode.parentNode;
    }
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return [
      "color",
      "disabled",
      "checked",
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
      case "checked":
          this._input.checked = "checked";
          break;
      case "disabled":
        if (newVal == "") this._input.disabled = true;
        else this._input.disabled = false;
        break;
      case "bootstrap":
        this._input.className = newVal;
        this._checkmark.className = newVal;
        this._container.className = newVal;
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
}
window.customElements.define("meat-checkbox", MeatCheckboxElement);
