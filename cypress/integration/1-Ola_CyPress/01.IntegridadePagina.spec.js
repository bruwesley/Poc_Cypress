/// <reference types="cypress" />

describe('Integridade da Pagina', () => {
    const faker = require("faker"); 
      beforeEach(() => {
        cy.visit('https://front.serverest.dev/')
      })
  
      it('Validar Integridade do campo email', () => {
        cy.get('[data-testid="email"]')
      })
  
      it('Validar Integridade do campo senha', () => {
        cy.get('[data-testid="senha"]')
      })
  
      it('Validar Integridade do botão entrar', () => {
        cy.get('[data-testid="entrar"]')
      })

  
      it('Validar Integridade do link Cadastre-se', () => {
        cy.get('[data-testid="cadastrar"]')
      })    
  })