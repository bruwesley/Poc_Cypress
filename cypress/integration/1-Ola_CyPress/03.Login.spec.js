/// <reference types="cypress" />
const faker = require('faker');


describe('Login De Usuario', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Login com sucesso', () => {
    //preenchendo campos da tela
    cy.get('[data-testid="email"]').type("testeteste@teste.com")  
    cy.get('[data-testid="senha"]').type("teste")  
    cy.contains("Entrar").click()   
    cy.get('[data-testid="logout"]')
  })  
})

describe('Login De Usuario email vazio', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Login sem sucesso', () => {
    //preenchendo campos da tela
    cy.get('[data-testid="email"]').type("testeteste")  
    cy.get('[data-testid="senha"]').type("teste")  
    cy.contains("Entrar").click()   
    cy.get('[data-testid="logout"]').should("not.exist")
  })  
})

describe('Login De Usuario senha vazia', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Login sem sucesso', () => {
    //preenchendo campos da tela
    cy.get('[data-testid="email"]').type("testeteste@teste.com")   
    cy.contains("Entrar").click()   
    cy.contains("password não pode ficar em branco") 
  })  
})

describe('Login De Usuario senha invalida', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Login sem sucesso', () => {
    //preenchendo campos da tela
    cy.get('[data-testid="email"]').type("testeteste@teste.com")  
    cy.get('[data-testid="senha"]').type("senhaerrada")   
    cy.contains("Entrar").click()   
    cy.contains("password não pode ficar em branco") 
  })  
})



