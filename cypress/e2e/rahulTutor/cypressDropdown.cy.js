describe('My Second Test Suite', function () {
    this.beforeEach('Visit site', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.wait(1000)
    })

    it('Select Dropdown Static', function () {
        cy.get('select[name$="dropdown-class-example"]')
            .select('option1')
            .should('have.value', 'option1')
    })

    it('Dynamic Dropdown', function () {
        cy.get('#autocomplete')
            .type('India')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India") {
                $el.click()
                cy.log('this is', $el)
            }
        })
        cy.get('#autocomplete')
        .should('have.value', 'India')
    })
});