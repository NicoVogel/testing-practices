export abstract class BaseContentPO {
  protected get base() {
    return cy.get(this.baseSelector);
  }
  constructor(private baseSelector: string) {}
}
