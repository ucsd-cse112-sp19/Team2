const rainbow = `
    #main {
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;
        
        -webkit-animation: rainbow 18s ease infinite;
        -z-animation: rainbow 18s ease infinite;
        -o-animation: rainbow 18s ease infinite;
            animation: rainbow 18s ease infinite;}
        
        @-webkit-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-moz-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-o-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @keyframes rainbow { 
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
    }
`;

const tmpl = document.createElement("template");
tmpl.innerHTML = `
        <style></style>
        <link rel="stylesheet" href="core-hello.css">
        <div id="main">
            <span id="main-text">Hello world, </span>
            <slot></slot>
        </div>
    `;
/**
 * this is the HelloWorldElement web component description
 * @customelement CoreHelloElement
 * @description displays 'Hello Web Component World!'
 * */
class CoreHelloElement extends HTMLElement {
  /**
   * Create an instance of CoreHelloElement
   */
  constructor() {
    console.info("Constructing core-hello!");
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    /*
     * method attaches a shadow DOM tree to the specified element.
     */
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  /**
   * Some comment
   */
  static get observedAttributes() {
    return ["rainbow", "lang"];
  }

  /**
   * update styling with rainbow
   * @param {Object} elem
   */
  updateStyle(elem) {
    console.info("Updating style: applying rainbow.");
    const shadowRoot = elem.shadowRoot;
    shadowRoot.querySelector("style").textContent += rainbow;
  }

  /**
   * update language
   * @param {Object} elem
   * @param {string} lang
   */
  updateLang(elem, lang) {
    console.info(`Updating Language: applying ${lang}.`);
    const shadowRoot = elem.shadowRoot;
    let text;
    switch (lang) {
      case "en":
        text = "Hello world, ";
        break;
      case "sp":
        text = "Hola mundo, ";
        break;
      case "fr":
        text = "Bonjour le monde, ";
        break;
      default:
        text = "Hello world, ";
        break;
    }
    shadowRoot.querySelector("#main-text").textContent = text;
    /*
     * update the span inside the main div
     */
  }

  /**
   * Invoked when one of the custom element's attributes is added, removed, or changed.
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    console.info(`AttributeChangedCallback called for | ${name} |.`);
    switch (name) {
      case "rainbow":
        this.updateStyle(this);
        break;
      case "lang":
        this.updateLang(this, newVal);
        break;
    }
  }

  /**
   * rainbow effect
   * @param {string} val
   */
  set rainbow(val) {
    if (val) {
      this.setAttribute("rainbow", "");
    } else {
      this.removeAttribute("rainbow");
    }
  }
  /**
   * I have no idea what this does
   * add more comments
   */
  get rainbow() {
    return this.getAttribute("rainbow");
  }

  /**
   * language support
   * @param {string} val
   */
  set lang(val) {
    if (val) {
      this.setAttribute("lang", val);
    } else {
      this.removeAttribute("lang");
    }
  }
  /**
   * add comment
   */
  get lang() {
    return this.getAttribute("lang");
  }
}
window.customElements.define("core-hello", CoreHelloElement);
