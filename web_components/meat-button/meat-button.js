const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    display: inline-block;
    
    /* special override-able css variables */

    /* round */
    --border-radius: 10px;

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

    @keyframes default-hover {
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
<button id="button"></button>
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
    this.button.textContent = this.textContent;
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    /* <meat-button type="default" disabled></meat-button> */
    return ["type", "disabled", "size", "round", "circle", "autofocus"];
  }

  /*
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    console.log(name, oldVal, newVal);

    switch (name) {
      case "disabled":
        if (newVal == "") {
          this.button.disabled = true;
        }
        break;
      case "autofocus":
        break;
    }
  }

  /**
   * This is unnecessary for now, the user can just attach an event listener to <meat-button>
   * */
  _onClick(evt) {
    console.log("Our click method");
  }
}
window.customElements.define("meat-button", MeatButtonElement);
