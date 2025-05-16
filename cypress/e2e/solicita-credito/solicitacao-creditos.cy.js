/// <reference types="cypress" />

context('Solicitacao de credito', () => {
    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
      })

      it('CT-OO1 - Validar os campos obrigatórios para solicitar crédito', () => {
        cy.get('#nome').type('Erika')
        cy.get('#email').type('erika@email.com')
        cy.get('#renda').type(2000)
        cy.get('#cpf').type('123.456.789-01')
        cy.get('#credito').type(1000)
        cy.get('[type="submit"]').click()
        cy.get('#result').should('be.visible')
      });

});