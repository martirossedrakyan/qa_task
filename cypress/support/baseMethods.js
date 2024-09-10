class Basemethods {

    static navigate_to_url(url) {
        cy.visit(url)
    }

    static check_page_url(url) {
        
    }

    static assert_page_has_title(selector,title) {
        cy.get(selector).should('have.text',title)
    }

    static click_on_element_when_visible(selector) {
        cy.get(selector).should('be.visible').click()
    }

    static click_on_element_when_enabled(selector) {
        cy.get(selector).should('be.enabled').click()
    }
} 
