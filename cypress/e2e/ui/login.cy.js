import { LoginPage } from "../main/E2E/pom/LoginPage";

describe('Login scenarios in gmail page',() => {

  var loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://www.gmail.com')
  })

  it('Succes Login', () => {
    cy.get(loginPage.userInput)
    .type('testUser8892@gmail.com')

    cy.get(loginPage.nextButton)
    .click()

    cy.get(loginPage.passInput,{timeout: 10000})
    //.type('Testing.2023')
  })
})
