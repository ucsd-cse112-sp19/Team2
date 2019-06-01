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

    this.drag_start = this.drag_start.bind(this);
    this.addEventListener('dragstart', this.drag_start, false);
    //this.drag_over = this.drag_over.bind(this);
    //this.drop = this.drop.bind(this);
    document.body.addEventListener('dragover', this.drag_over, false);
    document.body.addEventListener('drop', this.drop, false);
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
   * Makes the card element draggable
   */
  drag_start(event) {
    console.log("Drag started");
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",  (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
  }

  drop(event) {
    console.log("Drop started");
    var offset = event.dataTransfer.getData("text/plain").split(',');
    this.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    this.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
  }

  drag_over(event) {
    event.preventDefault();
    return false;
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
window.customElements.define("meat-card", MeatCardElement);
