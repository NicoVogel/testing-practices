export const appScaffoldPO = {
  get navigation() {
    const navSelector = "nav";
    return {
      openView1() {
        cy.get(navSelector).find('[data-test="nav-item.view1"]').click();
      },
    };
  },
};
