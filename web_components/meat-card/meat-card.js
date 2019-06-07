const template = document.createElement("template");
template.innerHTML = `
<style>
:host(:not([bootstrap])) {
  display: inline-block;
  position: relative;
  width: 350px;
  min-height: 250px;
  border: 1px solid #AAAAAA;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
  background-color: white;
  font-family: sans-serif;
  vertical-align: top;
}

/* header default css */
:host(:not([bootstrap])) ::slotted([slot="header"])  {
  display: flex;
  position: relative;
  font-size: 20px;
  box-sizing: border-box;
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 1px solid #AAAAAA;
  overflow: auto;
  align-items: center;
  justify-content: space-between;
}

/* body default css */
:host(:not([bootstrap]))::slotted([slot="body"]) {
  padding: 15px;
}

/* box shadow */
:host([shadow="always"]) {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
}

:host([shadow="hover"]) {
  box-shadow: none;
}

:host([shadow="hover"]:hover) {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
  background-color: white;
}

:host([shadow="never"]) {
  box-shadow: none;
}

/* Experimental image support */ 
/*
:host([img]) {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: attr(img, 50%);
}

:host([img="cover"]) > #headerContainer  {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: inherit;
  object-fit: cover;
}

::slotted(img[slot="header"]) {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%
}

#headerContainer {
  margin: -1px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
*/
</style>
<slot id="header" name="header"></slot>
<slot id="body" name="body"></slot>
`;

export class MeatCard extends HTMLElement {
  /**
   * meat-card webcomponent
   * @customelement meat-card
   * @description A reusable card with replaceable markup.
   * @example <meat-card></meat-card>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-card/meat-card-demo.html} for working example.
   * @property {attribute} shadow -Specifies a "shadow" around the card.
   * */
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.shadowDOM.appendChild(template.content.cloneNode(true));
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {}

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return ["shadow"];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "shadow":
        break;
    }
  }

  /**
   * Getters and Setters
   */
  get shadow() {
    return this.getAttribute("shadow");
  }

  set shadow(val) {
    if (val) {
      this.setAttribute("shadow", val);
    } else {
      this.removeAttribute("shadow");
    }
  }
}
window.customElements.define("meat-card", MeatCard);
