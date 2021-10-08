/// <reference types="cypress" />

const faker = require('faker');
var contador = 0;
let idNovo;

describe('Cadastro De Usuario', () => {
    it("Cadastro realizado com sucesso", () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false, 
        body: {nome: faker.name.findName(), email: faker.internet.email(), password: faker.random.alphaNumeric(8), administrador: 'false' }}).then(
        (response) => { 
          idNovo = response.body._id;
           
          expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
          cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios?' + '_id=' + idNovo + '&administrador=false',  
            failOnStatusCode: false, 
          }          
            ).then(        
            (response) => {  
              cy.log('quantidade: ' + response.body.quantidade)   
              if (response.body.quantidade < 1){
                   expect(response.body).to.have.property('Error', 'Quantidade errada') 
                 } 
              expect(response.body).to.have.property('quantidade')     
            })
        }
      )
    })
        
        // cy.request(
         //   {
         //   method: 'GET',
         //   url: 'https://serverest.dev/usuarios?administrador=false',
         //   body: {id: idNovo }}        
         //   ).then(                  
         //   (response) => {cy.log('quantidade: ' + idNovo)    
         //     cy.log('quantidade: ' + response.body.quantidade)       
         //     expect(response.body).to.have.property('quantidade')   
         //       
         //     if (response.body.quantidade > 1){
         //       cy.log('quantidade: ' + response.body.quantidade) 
         //       expect(response.body).to.have.property('Error', 'Quantidade errada') 
         //     } 
         //   })          
         // cy.log('IdNovo: ' + idNovo)})        


  it("Cadastro email já utilizado", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {nome: faker.name.findName(), email: 'teste@teste.com', password: 'teste', administrador: 'false' }}).then(
      (response) => {
        
        expect(response.body).to.have.property('message', 'Este email já está sendo usado')
       
      }
    )
  })
  it("Cadastro email fora do padrão", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {nome: faker.name.findName(), email: 'teste', password: 'teste', administrador: 'false' }}).then(
      (response) => {
        expect(response.body).to.have.property('email', 'email deve ser um email válido')
      }
    )
  })
  it("Cadastro de usuario sem nome", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {email: 'teste@teste.com', password: 'testeasda', administrador: 'false' }}).then(
      (response) => {
        
        expect(response.body).to.have.property('nome', 'nome é obrigatório')
       
      }
    )
  })
  it("Cadastro de usuario sem email", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {nome: faker.name.findName(), password: 'teste', administrador: 'false'}}).then(
      (response) => {
        
        expect(response.body).to.have.property('email', 'email é obrigatório')
       
      }
    )
  })
  it("Cadastro de usuario sem senha", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {nome: faker.name.findName(),email: faker.internet.email(), administrador: 'false'}}).then(
      (response) => {
        
        expect(response.body).to.have.property('password', 'password é obrigatório')
       
      }
    )
  })

  it("Cadastro de usuario sem informar administrador", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false, 
      body: {nome: faker.name.findName(), email: faker.internet.email(), password: faker.random.alphaNumeric(8)}}).then(
      (response) => {        
        expect(response.body).to.have.property('administrador', 'administrador é obrigatório')       
      }
    )
  })
})



