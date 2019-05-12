const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    display: inline-block;
}

/* Default style if no type is specified */
button {
    display: inline-block;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    color: #444444; /* text color */
    width: 100%;
    height: 100%;
    outline: hidden; /* outline when focused, doesn't play nicely with round button/border-radius so hide it */
}

/* Attribute: round */
    /* if host element, i.e. <meat-button> has attribute round, apply this css to button*/
    :host([round]) > button {
        border-radius: 10px;
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
        border: 1px solid #bbccff;
        color: #3388ff;
        outline: none;
        background-color: #daeeff;
    }

/* Actions: hover */

    /* Type = default */
    :host([type="default"]) > button:hover {
        -webkit-animation: default_hover .1s linear forwards;
        animation: default_hover .1s linear forwards;
    }

    @keyframes default-hover {
        100% { background-color: #daeeff; }
        100% { color: #3388ff; }
        100% { border: 1px solid #daeeff; }
    }
    @-webkit-keyframes default_hover {
        100% { background-color: #daeeff; }
        100% { color: #3388ff; }
        100% { border: 1.5px solid #daeeff; }
    }

/* Actions: active/click */

    /* Type = default */
    :host([type="default"]) > button:active {
        -webkit-animation: default_active .1s linear forwards;
        animation: default_active .1s linear forwards;
    }
    @keyframes default_active {
        100% { border: 1px solid #3388ff;  }
    }
    @-webkit-keyframes default_active {
        100% { border: 1px solid #3388ff;  }
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
    this.button = this.shadow.querySelector("button");

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
    return ["type", "disabled", "size", "round", "circle", "autofocus"];
  }

  /*
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "round":
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
