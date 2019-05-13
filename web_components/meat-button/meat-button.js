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

/* define color scheme for default button */
:host([type="default"]) {
  /* colors */
  --background-color: #ffffff;
  --text-color: #444444;
  --border: 1px solid #cccccc;

  --hover-background-color: #daeeff;
  --focus-background-color: #daeeff;
  --active-background-color: #daeeff;

  --hover-text-color: #3388ff;
  --focus-text-color: #3388ff;

  --hover-border: 1px solid #daeeff;
  --focus-border: 1px solid #bbccff;
  --active-border: 1px solid #3388ff;
}

/* define color scheme for primary button */
:host([type="primary"]) {
  /* colors */
  --background-color: #40a5ff;
  --text-color: #ffffff;
  --border: 1px solid #40a5ff;

  --hover-background-color: #65b5ff;
  --focus-background-color: #65b5ff;
  --active-background-color: #2285dd;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #65b5ff;
  --focus-border: 1px solid #65b5ff;
  --active-border: 1px solid #2285dd;
}

:host([type="success"]) {
  /* colors */
  --background-color: #59c040;
  --text-color: #ffffff;
  --border: 1px solid #59c040;

  --hover-background-color: #79cc69;
  --focus-background-color: #79cc69;
  --active-background-color: #50a050;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #79cc69;
  --focus-border: 1px solid #79cc69;
  --active-border: 1px solid #50a050;
}

/* Default style if no type is specified */
button {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    color:  var(--text-color); /* text color */
    border: var(--border);
    outline: none; /* outline when focused, doesn't play nicely with round button/border-radius so hide it; instead we create our own focus */
    font-size: var(--font-size, 15px);
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

    /* default size for circle button */
    :host([circle]) {
      width: 40px;
      height: 40px;
    }

    /* if size specified, use the following dimensions */
    :host([circle][size="small"]) {
      width: 30px;
      height: 30px;
    }

    :host([circle][size="medium"]) {
        width: 40px;
        height: 40px;
    }

    :host([circle][size="large"]) {
      width: 50px;
      height: 50px;
  }

/* Actions: focus */

    /* Type = default */
    :host > button:focus {
        border: var(--focus-border);
        color: var(--focus-text-color);
        outline: none;
        background-color: var(--focus-background-color);
    }

/* Actions: hover */

    /* Type = default */
    :host > button:hover {
        -webkit-animation: hover .1s linear forwards;
        animation: hover .1s linear forwards;
    }

    @keyframes hover {
        100% { background-color: var(--hover-background-color) }
        100% { color: var(--hover-text-color) }
        100% { border: var(--hover-border) }
    }
    @-webkit-keyframes hover {
        100% { background-color: var(--hover-background-color) }
        100% { color: var(--hover-text-color) }
        100% { border: var(--hover-border) }
    }

/* Actions: active/click */

    /* Type = default */
    :host > button:active {
        -webkit-animation: active .1s linear forwards;
        animation: active .1s linear forwards;
    }
    @keyframes active {
        100% { border: var(--active-border)  }
        100% { background-color: var(--active-background-color)  }
    }
    @-webkit-keyframes default_active {
        100% { border: var(--active-border)  }
        100% { background-color: var(--active-background-color)  }
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
