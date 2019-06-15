import style from "./meat-button.css";

const template = document.createElement("template");
template.innerHTML = `
<style>
${style}
</style>
<button id="button" type="reset"></button>
`;

export class MeatButton extends HTMLElement {
  /**
   * meat-button webcomponent
   * @customelement meat-button
   * @description displays a stylized button
   * @example <meat-button></meat-button>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-button/meat-button-demo.html} for working example.
   * @property {attribute} autofocus -Enables button to automatically get focus when the page loads. Add a change to docs
   * @property {string} bootstrap -Enables bootstrap as styling of the button.
   * @property {attribute} circle -Enables a circle shaped button.
   * @property {attribute} disabled -Disables button from accepting events.
   * @property {attribute} round -Enables a round shaped button.
   * @property {string} size -Changes the size of the button.
   * @property {string} type -Enables the specified type of button.
   * */
  constructor() {
    super();
    this._submitButton;
    this._parentForm;
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.button = this.shadow.querySelector("#button");
    this.addEventListener("click", this._onClick);
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // Need to get the content inbetween the <meat-button> tags into the button so it renders
    this.button.textContent = this.textContent;

    // Look up dom tree for a parent form
    let parentNode = this.parentNode;
    while (parentNode) {
      if (parentNode && parentNode.nodeName == "FORM") {
        this._parentForm = parentNode;
        break;
      }
      parentNode = parentNode.parentNode;
    }

    this._submitButton = document.createElement("button");
    this._submitButton.type = "hidden";
    this.appendChild(this._submitButton);
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    /* <meat-button type="default" disabled></meat-button> */
    return [
      "autofocus",
      "color",
      "circle",
      "disabled",
      "round",
      "size",
      "type",
      "bootstrap"
    ];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "disabled":
        if (newVal == "") this.button.disabled = true;
        else this.button.disabled = false;
        break;
      case "autofocus":
        if (newVal == "") this.button.autofocus = true;
        else this.button.autofocus = false;
        break;
      case "type":
        this.button.type = newVal;
        break;
      case "bootstrap":
        this.button.className = newVal;
        break;
    }
  }

  // getters and setters for attributes
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

  get round() {
    return this.hasAttribute("round");
  }

  set round(val) {
    if (val) {
      this.setAttribute("round", "");
    } else {
      this.removeAttribute("round");
    }
  }

  get circle() {
    return this.hasAttribute("circle");
  }

  set circle(val) {
    if (val) {
      this.setAttribute("circle", "");
    } else {
      this.removeAttribute("circle");
    }
  }

  get size() {
    return this.getAttribute("size");
  }

  set size(val) {
    if (val) {
      this.setAttribute("size", val);
    } else {
      this.removeAttribute("size");
    }
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(val) {
    if (val) {
      this.setAttribute("type", val);
    } else {
      this.removeAttribute("type");
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

  /*
   * This is unnecessary for now, the user can just attach an event listener to <meat-button>
   * */
  _onClick(evt, thisComponent) {
    switch (this.getAttribute("type")) {
      case "reset":
        if (this._parentForm) {
          this._parentForm.reset();
        }
        break;
      case "submit":
        if (this._parentForm) {
          this._submitButton.click();
        }
        break;
    }
  }
}

window.customElements.define("meat-button", MeatButton);
