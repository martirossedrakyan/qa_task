import { Actions } from "../support/actions";
import { Factory } from "../factory/pageFactory";
import { Assertions } from "../support/assertions";

describe('visit page', () => {

    const valid_domain = "google.com"
    const redirect_domain = "example.com"
    const spf_options = Object.entries(Factory.spfGeneratorPage.get_spf_options());
    const valid_include_option = "_spf.google.com"

    beforeEach(() => {
      cy.visit(Factory.spfGeneratorPage.spfGenerator_URL); 
      Assertions.assert_page_has_title(".spf-tool-user__title","SPF Record Generator")
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_cookies_agree_button())
    })

    it('Check that Generate button is disabled when there is no input', () => {
      Assertions.assert_element_is_disabled(Factory.spfGeneratorPage.get_generate_button());
    });

    it("Check Domain input field with empty value", () => {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),"    ")
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_generate_button())
      Assertions.assert_text_is_displayed(Factory.spfGeneratorPage.get_value_is_required_text(),"This value is required.")
    })

    it("Check the Domain input with invalid Domain", () => {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),"Invalid Domain")
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_generate_button())
      Assertions.assert_text_is_displayed(Factory.spfGeneratorPage.get_provide_valid_value_text(),"Please provide a valid domain")
    }) 
    
    it("Check the Domain with valid Domain and check that status is Valid", ()=> {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),valid_domain)
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_generate_button())
      Assertions.assert_element_exists_by_text("Valid")
    })

    it("Check SPF Generator with empty redirect option", () => {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),valid_domain)
      Actions.click_on_element_when_visible(Factory.spfGeneratorPage.get_redirect_toggle())
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_generate_button())
      Assertions.assert_element_exists_by_text("Invalid")
    })

    it("Check SPF Generator with valid redirect option", () => {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),valid_domain)
      Actions.click_on_element_when_visible(Factory.spfGeneratorPage.get_redirect_toggle())
      Assertions.assert_element_exists(Factory.spfGeneratorPage.get_redirect_input())
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_redirect_input(),redirect_domain)
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_generate_button())
      Assertions.assert_element_exists_by_text("Valid")
    })

    it("Check add and delete SPF options", () => {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),valid_domain)
      Actions.click_on_element_when_visible(Factory.spfGeneratorPage.get_show_more_or_less_button())
      spf_options.forEach(([key, value]) => {
          Actions.click_on_first_element_with_same_selector(value)
      });
      Actions.click_on_all_elements_with_the_same_selector(Factory.spfGeneratorPage.get_option_delete_button())
      Assertions.assert_element_does_not_exist(Factory.spfGeneratorPage.get_option_delete_button())
    })

    it("Check SPF Generator with Include option", () => {
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_domain_input(),valid_domain)
      Assertions.assert_element_exists(Factory.spfGeneratorPage.get_include_option_input())
      Actions.click_and_type_text(Factory.spfGeneratorPage.get_include_option_input(),valid_include_option)
      Actions.click_on_element_when_enabled(Factory.spfGeneratorPage.get_generate_button())
      Assertions.assert_element_exists_by_text("Valid")
    })

  });
