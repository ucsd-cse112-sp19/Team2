/**
 * this is the HelloWorldElement web component description
 * @customelement hello-world
 * @description displays 'Hello Web Component World!'
 * @example <caption> Hello World! </caption>
 * <hello-world>
 *   <h1>Hello Web Component World!</h1>
 * </hello-world>
 * */
class HelloWorldElement extends HTMLElement {
  /**
   * Create an instance of HelloWorldElement
   */
  constructor() {
    /** Call super constructor of HTMLElement class */
    super();
    /** create shadow DOM for element and attach it to this instance */
    const shadowRoot = this.attachShadow({ mode: "open" });
    const elementContent = `<h1>Hello Web Component World!</h1>`;

    /** set inner html of this instance of HelloWorldElement */
    shadowRoot.innerHTML = elementContent;
  }
}

window.customElements.define("hello-world", HelloWorldElement);
