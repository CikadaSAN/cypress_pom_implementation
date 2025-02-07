import LoginPage from '../pages/login.js';

describe('Test Login with POM', () => {

    const loginPage = new LoginPage();

    it('Visit RahulShetty Page', () => {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.fixture('variables').then((data) => {
            loginPage.inputUsername(data.validEmail)
            loginPage.inputPassword(data.validPassword)
        })

    })
})