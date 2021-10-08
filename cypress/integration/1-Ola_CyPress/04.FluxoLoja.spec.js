/// <reference types="cypress" />

const { system } = require("faker")


describe('Login De Usuario', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="email"]').type("testeteste@teste.com")  
    cy.get('[data-testid="senha"]').type("teste")  
    cy.contains("Entrar").click()   
    cy.get('[data-testid="logout"]')
  })

  it('Adicionar item e limpar lista', () => {
    cy.get('[data-testid="pesquisar"]').type("tinta olive")
    cy.get('[data-testid="adicionarNaLista"]').first().click()
    //Pegar valor total de itens e validar se está incrementando       
    cy.get('[data-testid="product-increase-quantity"]').click() 
    cy.get('[data-testid="product-decrease-quantity"]').click()
    cy.get('[data-testid="limparLista"]').click()
    cy.wait(3)
    cy.contains("Seu carrinho está vazio")
    
  })  

  it('Adicionar item e enviar ao carrinho', () => {
    cy.get('[data-testid="pesquisar"]').type("tinta olive")
    cy.get('[data-testid="adicionarNaLista"]').first().click()
    cy.get('[data-testid="adicionar carrinho"]').click()
    cy.wait(3)
    cy.contains("Em construção aguarde")
  })  
})



