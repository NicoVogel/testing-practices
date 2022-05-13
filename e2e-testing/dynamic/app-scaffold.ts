import { imprintPO } from "./imprint";
import { view1PO } from "./view1";

export type ImprintPO = typeof imprintPO;
export type View1PO = typeof view1PO;

export const appScaffoldPO = {
  get navigation() {
    const navSelector = "nav";
    return {
      openView1(): View1PO {
        cy.get(navSelector).find('[data-test="nav-item.view1"]').click();
        return view1PO;
      },
    };
  },
  get footer() {
    const footerSelector = "footer";
    return {
      openImprint(): ImprintPO {
        cy.get(footerSelector).find('[data-test="footer.imprint"]').click();
        return imprintPO;
      }
    }
  },
  get content() {
    return cy.get("main");
  }
};
