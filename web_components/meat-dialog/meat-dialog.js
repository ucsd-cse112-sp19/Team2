// import style from "./meat-dialog.css";

const template = document.createElement("template");
template.innerHTML = `
<style>

.dialog {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  transition: visibility .3s, opacity .3s;
}

.dialog-content {
  width: var(--width, 40%);
  padding: 10px;
  margin: auto;
  position: relative;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
}


.dialog[open=true] {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.dialog[open=false] {
  opacity: 0;
  visibility: hidden;
}


</style>
<div class="dialog" open=false>
  <div class="dialog-content">
    <slot></slot>
  </div>
</div>

`;

export class MeatDialog extends HTMLElement {
  /**
   * meat-dialog webcomponent
   * @customelement meat-dialog
   * @description A dialog for starting new webcomponents
   * @example <meat-dialog></meat-dialog>
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this._open = this._open.bind(this);
    this._dispatchOpenEvent = this._dispatchOpenEvent.bind(this);
    this._dialog = this.shadow.querySelector(".dialog");
    this.addEventListener("click", this._open);
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
    return ["open"];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "open":
        if (newVal) this._dialog.setAttribute("open", true);
        else this._dialog.setAttribute("open", false);
        this._dispatchOpenEvent();
        break;
      case "default":
        break;
    }
  }

  get open() {
    return this.hasAttribute("open");
  }

  set open(val) {
    if (val) {
      this.setAttribute("open", val);
    } else {
      this.removeAttribute("open");
    }
  }

  /**
   * If clicking on dialog background, close and dispatch event
   * @param {*} evt
   */
  _open(evt) {
    // if clicking on background, close modal
    if (evt.target == this) {
      this.open = false;
    }
  }

  /**
   * Dispatch an event to tell user when the modal has been opened or closed
   */
  _dispatchOpenEvent() {
    this.dispatchEvent(
      new CustomEvent("open", {
        detail: {
          open: this._dialog.getAttribute("open") == "true" // returns a boolean rather than string
        },
        bubbles: true
      })
    );
  }
}
window.customElements.define("meat-dialog", MeatDialog);
