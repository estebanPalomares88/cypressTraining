import { LoginPage } from "./pom/LoginPage";

describe('Login scenarios', () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    cy.visit('https://www.saucedemo.com/v1/index.html');
    
  });

  it('Successful Login', () => {
    cy.get(loginPage.userInput).type('standard_user');
    cy.get(loginPage.passInput).type('secret_sauce');
    cy.get(loginPage.loginButton).click();
    cy.title().should('eq', 'Swag Labs');
  });
});