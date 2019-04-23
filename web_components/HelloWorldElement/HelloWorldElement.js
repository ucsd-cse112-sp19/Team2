/** A class representing a custom element*/
class HelloWorldElement extends HTMLElement {
    /**
     * Create an instance of HelloWorldElement
     */
    constructor() {
        /** Call super constructor of HTMLElement class */
        super();
        /** create shadow DOM for element and attach it to this instance */
        let shadowRoot = this.attachShadow({ mode: 'open' });
        let elementContent = `<h1>Hello Web Component World!</h1>`;

        /** set inner html of this instance of HelloWorldElement */
        shadowRoot.innerHTML = elementContent;
    }
}