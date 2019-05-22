const template = document.createElement("template");
template.innerHTML = `
  <style></style>
  <link rel="stylesheet" href="/web_components/meat-form/meat-form.css"/>
  <meat-form></meat-form>
`;

/**
 * meat-form webcomponent
 * @customelement meat-form
 * @description displays a stylized form
 * @example <meat-form></meat-form>
 * @see [Demo]{@link https://meat-space.org/web_components/meat-form/meat-form-demo.html} for working example.
 * */
export class MeatFormElement extends HTMLElement {
    /**
     * Create an instance of MeatFormElement
     */
    constructor() {
        super();
        this._parentForm;
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.appendChild(template.content.cloneNode(true));
        this.form = this.shadow.querySelector("form");
        this.addEventListener("click", this._onClick);
    }

    /**
     * Live-cycle method called when the custom element is loaded, often used for initialization
     */
    connectedCallback() {

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
    }

    /**
     * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
     * call attributeChangedCallback(name, oldVal, newVal)
     * */
    static get observedAttributes() {
        return [];
    }

    /**
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     */
    attributeChangedCallback(name, oldVal, newVal) {
        
    }
}

window.customElements.define("meat-form", MeatFormElement);
