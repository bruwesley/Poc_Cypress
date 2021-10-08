/// <reference types="cypress" />
const faker = require('faker');


describe('Cadastro De Usuario', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Cadastro de Usuario', () => {
    cy.get('[data-testid="cadastrar"]').click()  

    //preenchendo campos da tela
    cy.get('[data-testid="nome"]').type(faker.name.findName())  
    cy.get('[data-testid="email"]').type(faker.internet.email())   
    cy.get('[data-testid="senha"]').type(faker.random.alphaNumeric(8))  
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert-link')    
  })  
})

describe('Cadastro De Usuario Administrador', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Cadastro de Usuario', () => {
    cy.get('[data-testid="cadastrar"]').click()  

    //preenchendo campos da tela
    cy.get('[data-testid="nome"]').type(faker.name.findName())  
    cy.get('[data-testid="email"]').type(faker.internet.email())   
    cy.get('[data-testid="senha"]').type(faker.random.alphaNumeric(8)) 
    cy.get('[data-testid="checkbox"]').click() 
 
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert-link')    
  })  
})

describe('Cadastro De Usuario sem nome', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Cadastro de Usuario', () => {
    cy.get('[data-testid="cadastrar"]').click()  

    //preenchendo campos da tela
    cy.get('[data-testid="email"]').type(faker.internet.email())   
    cy.get('[data-testid="senha"]').type(faker.random.alphaNumeric(8)) 
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains("nome não pode ficar em branco") 
  })  
})

describe('Cadastro De Usuario sem email', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Cadastro de Usuario', () => {
    cy.get('[data-testid="cadastrar"]').click()  

    //preenchendo campos da tela
    cy.get('[data-testid="nome"]').type(faker.name.findName()) 
    cy.get('[data-testid="senha"]').type(faker.random.alphaNumeric(8)) 
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains("email não pode ficar em branco")  
    
  })  
})

describe('Cadastro De Usuario sem senha', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Cadastro de Usuario', () => {
    cy.get('[data-testid="cadastrar"]').click()  

    //preenchendo campos da tela
    cy.get('[data-testid="nome"]').type(faker.name.findName())  
    cy.get('[data-testid="email"]').type(faker.internet.email())   
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains("password não pode ficar em branco") 
  })  
})

describe('Cadastro De Usuario email invalido', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })

  it('Cadastro de Usuario', () => {
    cy.get('[data-testid="cadastrar"]').click()  

    //preenchendo campos da tela
    cy.get('[data-testid="nome"]').type(faker.name.findName())  
    cy.get('[data-testid="email"]').type(faker.name.findName())   
    cy.get('[data-testid="senha"]').type(faker.random.alphaNumeric(8)) 
    cy.get('[data-testid="cadastrar"]').click()
    cy.wait(3)
    cy.get('[data-testid="logout"]').should("not.exist") 
  })  
})


