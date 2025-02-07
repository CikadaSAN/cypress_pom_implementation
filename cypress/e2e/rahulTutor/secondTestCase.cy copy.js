describe('My Second Test Suite', function () {
    it('My First Test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)

        cy.get('.products').as('prodItem')
        cy.get('@prodItem').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            cy.log(textVeg)
            cy.wrap($el).find('button').click()
            cy.get('.added').should('be.visible')
            $el.find('button').click()
        })
        cy.get('img[alt="Cart"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').should('be.visible').click()
    });

});