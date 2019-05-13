const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    display: inline-block;
    width: 90px;
    height: 40px;

    /* special override-able css variables */

    /* round */
    --border-radius: 100px;

    /* colors */
    --background-color: #ffffff;
    --text-color: #444444;
    --border: 1px solid #cccccc;

    --hover-background-color: #daeeff;
    --focus-background-color: #daeeff;

    --hover-text-color: #3388ff;
    --focus-text-color: #3388ff;

    --hover-border: 1px solid #daeeff;
    --focus-border: 1px solid #bbccff;
    --active-border: 1px solid #3388ff;
}

/* Default style if no type is specified */
button {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color:  var(--text-color); /* text color */
    border: var(--border);
    outline: hidden; /* outline when focused, doesn't play nicely with round button/border-radius so hide it */
}

/* Attribute: round */
    /* if host element, i.e. <meat-button> has attribute round, apply this css to button*/
    :host([round]) > button {
        border-radius: var(--border-radius);
    }

/* Attribute: size */

    /* if host element, i.e. <meat-button> has attribute size="small", apply this css */
    :host([size="small"]) {
        width: 80px;
        height: 36px;
    }

    :host([size="medium"]) {
        width: 90px;
        height: 40px;
    }

    :host([size="large"]) {
        width: 100px;
        height: 44px;
    }

  /* Attribute: circle */
    :host([circle]) > button {
      border-radius: 50%;
    }

    :host([circle][size="small"]) > button {
      width: 30px;
      height: 30px;
    }

    :host([circle][size="medium"]) > button {
        width: 40px;
        height: 40px;
    }

    :host([circle][size="large"]) > button {
      width: 50px;
      height: 50px;
  }

/* Actions: focus */

    /* Type = default */
    :host([type="default"]) > button:focus {
        border: var(--focus-border);
        color: var(--focus-text-color);
        outline: none;
        background-color: var(--focus-background-color);
    }

/* Actions: hover */

    /* Type = default */
    :host([type="default"]) > button:hover {
        -webkit-animation: default_hover .1s linear forwards;
        animation: default_hover .1s linear forwards;
    }

    @keyframes default_hover {
        100% { background-color: var(--hover-background-color) }
        100% { color: var(--hover-text-color) }
        100% { border: var(--hover-border) }
    }
    @-webkit-keyframes default_hover {
        100% { background-color: var(--hover-background-color) }
        100% { color: var(--hover-text-color) }
        100% { border: var(--hover-border) }
    }

/* Actions: active/click */

    /* Type = default */
    :host([type="default"]) > button:active {
        -webkit-animation: default_active .1s linear forwards;
        animation: default_active .1s linear forwards;
    }
    @keyframes default_active {
        100% { border: var(--active-border)  }
    }
    @-webkit-keyframes default_active {
        100% { border: var(--active-border)  }
    }

</style>
<button id="button" type="reset"></button>
`;

/**
 * meat-button webcomponent
 * @customelement meat-button
 * @description displays a stylized button
 * @example <meat-button></meat-button>
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
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    /* <meat-button type="default" disabled></meat-button> */
    return [
      "type",
      "disabled",
      "size",
      "round",
      "circle",
      "autofocus",
      "native-type"
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
      case "native-type":
        // doesn't actually work, need to figure out how to propogate event to form, but it's very complicated and I haven't found
        // and reasonable solutions yet
        // this.button.type = newVal;
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

  /**
   * This is unnecessary for now, the user can just attach an event listener to <meat-button>
   * */
  _onClick(evt, thisComponent) {}
}
window.customElements.define("meat-button", MeatButtonElement);
