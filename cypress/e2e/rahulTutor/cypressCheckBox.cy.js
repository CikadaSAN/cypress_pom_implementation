describe('My Second Test Suite', function () {
    this.beforeEach('Visit site',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.wait(1000)
    })

    it('Check Radio Button', function () {
        cy.get('input[value="radio1"]')
        .check()
        .should('be.checked')
        .and('have.value',  'radio1')
    });

    it('Check Checkboxes Button', function () {
        cy.get('input[value="option1"]')
        .check()
        .should('be.checked')
        .and('have.value',  'option1')
    });

    it('Check Then Uncheck Checkboxes Button', function () {
        cy.get('input[value="option1"]')
        .check()
        .should('be.checked')
        .and('have.value',  'option1')

        cy.get('input[value="option1"]')
        .uncheck()
        .should('not.be.checked')
    });

    it('Check All Checnkboxed',function(){
        cy.get('input[type="checkbox"]')
        .check(['option1','option2','option3'])
    })
});