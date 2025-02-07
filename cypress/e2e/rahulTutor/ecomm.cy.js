describe('My First Test Suite', function(){
    it('My First Test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART')

        cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg=$el.find('h4.product-name').text()
        cy.wrap($el).find('button').click()
        cy.get('.added').should('be.visible')
        cy.log('this is it boys',textVeg)
        })

        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })

    });
    
});