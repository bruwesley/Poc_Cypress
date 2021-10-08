/// <reference types="cypress" />

const faker = require('faker');
let count = 0;

describe('Lista De Usuario', () => {
  it("Listar Todos Usuarios", () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios?administrador=false',
      failOnStatusCode: true}).then(
      (response) => {        
        expect(response.body).to.have.property('quantidade')     
        expect(response.body).to.have.property('usuarios')              
      }
    )
  })
  it("Listar Todos Usuarios Administradores", () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios?administrador=true',
      failOnStatusCode: true}).then(
      (response) => {        
        expect(response.body).to.have.property('quantidade')     
        expect(response.body).to.have.property('usuarios') 
        //const quantidadeUsuarios = response.body.quantidade;  
      })
  })
  it("Listar Usuarios Por ID", () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios?' + '_id=' + 'AcC4UEgFne9mvC67' + '&administrador=false',  
      failOnStatusCode: false, 
      //body: {id: 'AcC4UEgFne9mvC67' }
    }
    
      ).then(        
      (response) => {  
        cy.log('quantidade: ' + response.body.quantidade)   
        if (response.body.quantidade < 1){
             expect(response.body).to.have.property('Error', 'Quantidade errada') 
           } 
        expect(response.body).to.have.property('quantidade')     
      })
  })
})



