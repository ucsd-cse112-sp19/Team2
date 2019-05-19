const template = document.createElement("template");
template.innerHTML = `
  <style></style>
  <link rel="stylesheet" href="/web_components/meat-button/meat-button.css"/>
  <button id="button" type="reset"></button>
`;

/**
 * meat-button webcomponent
 * @customelement meat-button
 * @description displays a stylized button
 * @example <meat-button></meat-button>
 * @see [Demo]{@link https://meat-space.org/web_components/meat-button/meat-button-demo.html} for working example.
 * @property {boolean} autofocus -Enables button to automatically get focus when the page loads.
 * @property {string} circle -Enables a circle shaped button.
 * @property {boolean} disabled -Disables button from accepting events.
 * @property {boolean} round -Enables a round shaped button.
 * @property {string} size -Changes the size of the button.
 * @property {string} type -Enables the specified type of button.
 * */
export class MeatButtonElement extends HTMLElement {
  /**
   * Create an instance of MeatButtonElement
   */
  constructor() {
    super();
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

    // if user specifies bootstrap, link style to bootstrap
    if (this.hasAttribute("bootstrap")) {
      const newLink = this.shadow.querySelector('link'); // link stylesheet to bootstrap's stylesheet
      newLink.rel = "stylesheet";
      newLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
      newLink.integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
      newLink.crossOrigin = "anonymous";
    }
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
      "bootstrap",
    ];
  }

  /*
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

  /**
   * This is unnecessary for now, the user can just attach an event listener to <meat-button>
   * */
  _onClick(evt, thisComponent) {
    switch (this.getAttribute("type")) {
      case "reset":
        if (this.parentNode && this.parentNode.nodeName == "FORM") {
          this.parentNode.reset();
        }
        break;
      case "submit":
        if (this.parentNode && this.parentNode.nodeName == "FORM") {
          this.parentNode.submit();
        }
        break;
    }
  }
}

window.customElements.define("meat-button", MeatButtonElement);
