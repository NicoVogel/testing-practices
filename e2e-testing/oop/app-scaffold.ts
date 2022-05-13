import { ImprintPO } from "./imprint";
import { View1PO } from "./view1";

const contentBaseSelector = "main";

export class AppScaffoldPO {
  getNavigation() {
    return new NavigationPO();
  }
  getFooter() {
    return new FooterPO();
  }
}

class FooterPO {
  openImprint() {
    cy.get("footer").find('[data-test="footer.imprint"]').click();
    return new ImprintPO(contentBaseSelector);
  }
}

class NavigationPO {
  openView1() {
    cy.get("nav").find('[data-test="nav-item.view1"]').click();
    return new View1PO(contentBaseSelector);
  }
}
