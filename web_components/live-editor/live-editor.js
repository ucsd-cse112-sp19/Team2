const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="live-editor.css">
    <style></style>
    <slot id="src" name="src"></slot>
    <div id="container">
        <iframe id="viewer" name="viewer"></iframe>
        <textarea id="editor" name="editor" spellcheck="false"></textarea>
    </div>
`;

/**
 * live-editor web component description
 * @customelement live-editor
 * @description displays whatever html is input into the editor; can specify an html file to load in at startup
 * @example <caption> Display a specified html document </caption>
 * <live-editor file="./src.html"></live-editor>
 * */
class LiveEditorElement extends HTMLElement {
  /**
   * Create an instance of LiveEditorElement
   */
  constructor() {
    super();
    this._keyup = this._keyup.bind(this);
    this._keydown = this._keydown.bind(this);

    this.attachShadow({ mode: "open" });
    /*
     * method attaches a shadow DOM tree to the specified element.
     */
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    /*
     * get references to viewer and editor and add event listeners to editor
     */
    this._viewer = this.shadowRoot.querySelector("iframe[name=viewer]");
    this._editor = this.shadowRoot.querySelector("textarea[name=editor]");
    this._editor.addEventListener("keyup", evt => this._keyup(evt));
    this._editor.addEventListener("keydown", evt => this._keydown(evt));
    this._editor.value = this.innerHTML;
  }

  /**
   * tell component to call attributeChangedCallback method when the following attributes are found
   */
  static get observedAttributes() {
    return ["file"];
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
      case "file":
        fetch(newVal)
          .then(response => response.text())
          .then(text => {
            this._editor.value = text;
            this._keyup();
          });
        break;
    }
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    this._keyup();
  }

  /**
   * Editor "keyup" listener callback, populate viewer with html in the editor whenever a key is released
   * @param {object} evt
   */
  _keyup(evt) {
    console.info("_keyup: editor changed");
    console.log(evt);

    this._viewer.srcdoc = this._editor.value;
  }

  /**
   * Editor "keydown" listener callback, if key is tab, add a tab into the editor
   * @param {object} evt
   */
  _keydown(evt) {
    console.info("_keydown: editor changed");
    console.log(evt);
    // allow tab to be used in the text editor, blind users won't be able to use tab to unfocus the textarea without the mouse however
    if (evt) {
      if (evt.keyCode == 9 || evt.which == 9) {
        evt.preventDefault();
        const s = this._editor.selectionStart;
        this._editor.value =
          this._editor.value.substring(0, this._editor.selectionStart) +
          "\t" +
          this._editor.value.substring(
            this._editor.selectionStart,
            this.selectionEnd
          );
        this._editor.selectionEnd = s + 1;
      }
    }
  }
}
window.customElements.define("live-editor", LiveEditorElement);
