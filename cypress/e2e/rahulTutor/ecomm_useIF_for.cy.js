describe('My First Test Suite', function () {
    it('My First Test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)

        // INi buat bikin variable
        cy.get('.products').as('prodItem')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('@prodItem').find('.product').eq(0).contains('ADD TO CART')


        // THIS IS A LOOP IN CYPRESS
        cy.get('@prodItem').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashew')) {
                cy.wrap($el).find('button').click()
                cy.get('.added').should('be.visible')
                $el.find('button').click()
            }
            cy.log('this is it boys', textVeg)

            // THIS IS A JQUERY METHOD
            cy.get('.brand').then(function (logoElement) {
                cy.log(logoElement.text())
            })
        })

    });

});