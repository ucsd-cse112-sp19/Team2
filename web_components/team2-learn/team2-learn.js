class Team2LearnElement extends HTMLElement {
  /**
   * team2-learn web component
   * @customelement team2-learn
   * @description A learning exercise to see how to interact with webcomponents dynamically via javascript; how to allow manipulation of a webcomponent's state for the user
   * @example
   * <body>
   *      <input/><button id="change-property"></button>
   *      <team2-learn id="team2-learn"></team2-learn>
   * </body>
   *  <script>
   *      const button = document.querySelector("#change-property");
   *      const input = document.querySelector("input");
   *      const team2Learn = document.querySelector("#team2-learn");
   *      button.addEventListener('click', () => {
   *          team2Learn.items = [...team2Learn.items, input.value];
   *  })
   * </script>
   * @see [Demo]{@link https://meat-space.org/web_components/team2-learn/team2-learn-demo.html} for working example.
   * @property {array} items -Array of elements to display as a vertical list.
   * */
  constructor() {
    super();

    // internal state, list of elements to display
    this._items = [];

    const shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot = shadowRoot;

    // create the base template
    this.template = document.createElement("template");
    this.template.innerHTML = `
        <style>
            #container {
                background-color: lightgrey;
                border: 1px solid black;
                width: 300px;
            }
            span {
                display: block;
                overflow-wrap: break-word;
            }
        </style>
        <div id="container"></div>
        `;
    this._shadowRoot.appendChild(this.template.content.cloneNode(true));

    // render the list based on this._items
    this._render();
  }

  /*
   * Fires when element is inserted into DOM.
   * Good place to set initial attributes, internal state, and install event listeners.
   */
  connectedCallback() {}

  /*
   * Re-render the element whenever a property gets changed.
   * Without litHtml, we have to re-render the entire thing.
   * litHTML is smart enough to figure out what parts changed and only re-render those.
   */
  _render() {
    const container = this._shadowRoot.querySelector("#container");
    container.innerHTML = "";

    // for each "item" in the internal state this._items, create a new row
    this._items.forEach((item, index) => {
      const row = document.createElement("span");
      row.id = index;
      row.innerHTML = item;
      row.addEventListener("click", evt => {
        this._items.splice(evt.target.id, 1);
        this._render();
      });
      container.appendChild(row);
    });
  }

  /*
   * allows user to set items
   * example: instance.items = ["val1", "val2"];
   */
  set items(items) {
    this._items = items;
    this._render();
  }

  /*
   * allows user to reference items
   * example: console.log(instance.items)
   */
  get items() {
    return this._items;
  }

  // question, how can we make this compatible with allowing users to hard code elements to the list in html and also allow them to add and remove dynamically with javascript?
}
window.customElements.define("team2-learn", Team2LearnElement);
