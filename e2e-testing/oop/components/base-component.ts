export abstract class BaseComponentPO {
  protected get base() {
    return this.getBase();
  }
  constructor(private getBase: () => Cypress<JQuery<HTMLElement>>) { }
}
