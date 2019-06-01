const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="/web_components/meat-card/meat-card.css"/>
<slot id="header" name="header"></slot>
<slot id="body" name="body"></slot>
`;

export class MeatCardElement extends HTMLElement {
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
    return ["shadow", "draggable"];
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
      case "draggable":
        dragElement(this);
        break;
    }
  }

  /**
   * Makes the card element draggable
   */
  dragElement(elem) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elem.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get mouse cursor position
      pos3 = e.clientX;
      pos4 = e.clientY;
      elem.onmouseup = closeDragElement;
      elem.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate new cursor position
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set element's new position
      elem.style.top = (elem.offsetTop - pos2) + "px";
      elem.style.left = (elem.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      //stop moving when mouse is released
      elem.onmouseup = null;
      elem.onmousemove = null;
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
window.customElements.define("meat-card", MeatCardElement);
