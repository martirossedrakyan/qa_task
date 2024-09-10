describe('visit page', () => {
    it('visit', () => {
      cy.visit('https://easydmarc.com/tools/spf-record-generator'); 
      Basemethods.assert_page_has_title(".spf-tool-user__title")
    });
  });