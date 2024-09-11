export class Assertions {

    static assert_page_has_title(selector,title) {
        cy.get(selector).should('have.text',title)
    }

    static assert_element_is_disabled(selector) {
        cy.get(selector).should('be.disabled')
    }

    static assert_element_is_enabled(selector) {
        cy.get(selector).should('be.enabled')
    }

    static assert_text_is_displayed(selector,text) {
        cy.get(selector).should('have.text',text)
    }

    static assert_element_exists(selector) {
        cy.get(selector).should('exist')
    }

    static assert_element_exists_by_text(element_text) {
        cy.contains(element_text).should('exist')
    }

    static assert_element_does_not_exist(selector) {
        cy.get(selector).should('not.exist')
    }

}