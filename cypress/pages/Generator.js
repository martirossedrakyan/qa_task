export class SPFGenerator {

    spfGenerator_URL = "https://easydmarc.com/tools/spf-record-generator"
    domain_input = ".spf-tool__form [id='domain']"
    redirect_toggle = '.spf-tool__form .eas-toggle-switcher__slider'
    redirect_input = "[data-name='redirect']"
    show_more_or_less_button = ".js-options-show-hide-btn"
    select_failur_policy_dropdown = ".spf-tool__form #dropdownMenuButton"
    generate_button = ".spf-tool__form .js-spf-generator-submit-form-btn"
    value_is_required_text = ".parsley-required"
    provide_valid_value_text = ".parsley-extractDomain"
    cookies_agree_button = ".cookie-consent-button"
    option_delete_button = ".js-delete-option-btn"
    include_option_input = "[data-name='include']"
    spf_options = {
        include_option_button : ".spf-tool__form [data-option='include']",
        ipv4_option_button : ".spf-tool__form [data-option='ip4']",
        ipv6_option_button : ".spf-tool__form [data-option='ip6']",
        A_record_option_button : ".spf-tool__form [data-option='a']",
        MX_record_option_button : ".spf-tool__form [data-option='mx']",
        exists_option_button : ".spf-tool__form [data-option='exists']",
    }

    get_spfGenerator_URL() {
        return this.spfGenerator_URL
    }

    get_domain_input() {
        return this.domain_input
    }

    get_redirect_toggle() {
        return this.redirect_toggle
    }

    get_redirect_input() {
        return this.redirect_input
    }

    get_include_option_button() {
        return this.spf_options.include_option_button
    }

    get_show_more_or_less_button() {
        return this.show_more_or_less_button
    }

    get_select_failur_policy_dropdown() {
        return this.select_failur_policy_dropdown
    }

    get_generate_button() {
        return this.generate_button
    }

    get_value_is_required_text() {
        return this.value_is_required_text
    }

    get_provide_valid_value_text() {
        return this.provide_valid_value_text
    }

    get_cookies_agree_button() {
        return this.cookies_agree_button
    }

    get_option_delete_button() {
        return this.option_delete_button
    }

    get_spf_options() {
        return this.spf_options
    }

    get_include_option_input() {
        return this.include_option_input
    }
} 

export const spfGenerator = new SPFGenerator()