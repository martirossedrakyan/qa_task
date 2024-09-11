export class Actions {

    static navigate_to_url(url) {
        cy.visit(url)
    }

    static click_on_element_when_visible(selector) {
        cy.get(selector).should('be.visible').click()
    }

    static click_on_element_when_enabled(selector) {
        cy.get(selector).should('be.enabled').click()
    }

    static click_on_first_element_with_same_selector(selector) {
        cy.get(selector).first().click()
    }

    static click_and_type_text(selector,text) {
        cy.get(selector).click().type(text, {delay:500})
    }

    static click_on_all_elements_with_the_same_selector(selector) {
        cy.get(selector).each(($element) => {
            cy.wrap($element).click();
          });
    }
} 
