export function dateTimePickerPOFactory(getBase: () => Cypress<JQuery<HTMLElement>>) {
  return {
    open() {
      getBase().click();
    }
  }
}
