const template = document.createElement('template');
template.innerHTML = 
`<style><style/>
`;

/**
 * meat-button webcomponent
 * @customelement meat-button
 * @description displays a stylized button
 * @example <meat-button></meat-button>
 * */
export class MeatButtonElement extends HTMLElement {
    
    constructor(){
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    /**
     * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
    * call attributeChangedCallback(name, oldVal, newVal)
     * */
     static get observedAttributes() {
        return ['type', 'disabled', 'size', 'round', 'circle', 'autofocus'];
    }

    /*
     * Called whenever one of the attributes specified in observedAttributes() is changed
     * */
    attributeChangedCallback(name, oldVal, newVal) {

    }

}
window.customElements.define('meat-button', MeatButtonElement);