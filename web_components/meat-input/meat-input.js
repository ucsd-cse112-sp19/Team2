const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    display: flex;

    /* special override-able css variables */

    /* TODO: Determine needed variables. */
    --border-radius: 10px;
    
    /* Colors */
    --background-color: #ffffff;
    --text-color: #444444;
    --border: 1px solid #cccccc;
    --placeholder-color: #add8e6

    --hover-background-color: #daeeff;
    --focus-background-color: #daeeff;

    --hover-text-color: #3388ff;
    --focus-text-color: #3388ff;
    
    --hover-border: 1px solid #daeeff;
    --focus-border: 1px solid #daeeff;
    --active-border: 1px solid #3388ff;
}

/* Default style if no type is specified */
input {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: var(--text-color);
    border: var(--border);
    padding: 5px;
    outline: hidden; /* This may not be needed */
}

placeholder {
    color: var(--placeholder-color);
}


/* Attributes: */
/* Size */
:host([size = "small"]) {
    width: 100px;
    height: inherit;
}
:host([size = "medium"]) {
    width: 200px;
    height: inherit;
}
:host([size = "large"]) {
    width: 300px;
    height: inherit;
}


/* Actions: */
/* Focus */

</style>
<input id="input"></input>
`;

/**
 * meat-input webcomponent
 * @customelement meat-input
 * @description displays a stylized input field
 * @example <meat-input></meat-input>
 * */
export class MeatInputElement extends HTMLElement {
  /**
   * Create an instance of MeatInputElement
   */
  constructor() {
    super();
    console.log('');
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.input = this.shadow.querySelector("input");
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {}

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    return ["disabled", "clearable", "size", "limit", "placeholder"];
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
                this.input.disabled = true;
            }
            break;
          case "clearable":
            break;
          case "placeholder":
            this.input.placeholder = newVal;
            break;
          case "limit":
            break;
      }
  }

}
window.customElements.define("meat-input", MeatInputElement);
