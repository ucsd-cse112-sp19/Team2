// base class for all meat components
import { RELEASE } from "./environment.js";

export default class MeatBase extends HTMLElement {
  constructor() {
    super();
  }

  // simply truncates the href link in development so component references local css file rather than cdn's css file
  changeLinkHref(shadow) {
    if (!RELEASE) {
      const Link = shadow.querySelector("link");
      const link_href = Link.href.replace(
        "https://unpkg.com/@meatspace/webcomponents@latest",
        ""
      );
      Link.href = link_href;
    }
  }
}
