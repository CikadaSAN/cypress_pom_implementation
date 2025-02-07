class LoginPage {
    visit() {
        cy.visit('/loginpagePractise');
    }

    inputUsername(email) {
        cy.get('#username').type(email);
    }

    inputPassword(password) {
        cy.get('#password').type(password);
    }

    submitLogin() {
        cy.get('#signInBtn').click();
    }
}

export default LoginPage;