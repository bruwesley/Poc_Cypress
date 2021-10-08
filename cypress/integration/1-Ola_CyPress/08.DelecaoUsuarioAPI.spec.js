/// <reference types="cypress" />

const faker = require('faker');
var contador = 0;
let idNovo;

describe('Cadastro De Usuario', () => {
    it("Deleção de usuario realizado com sucesso", () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: true, 
        body: {nome: faker.name.findName(), email: faker.internet.email(), password: faker.random.alphaNumeric(8), administrador: 'false' }}).then(
        (response) => { 
          idNovo = response.body._id;
           
          expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
          cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/' + idNovo,
            failOnStatusCode: true, 
          }          
            ).then(        
            (response) => {  
              expect(response.body).to.have.property('message', 'Registro excluído com sucesso')    
          })
        }
      )
    })
        
})