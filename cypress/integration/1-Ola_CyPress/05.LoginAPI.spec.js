/// <reference types="cypress" />

const { system } = require("faker")


describe('Login De Usuario', () => {
  it("Login", () => {
    cy.request('POST', 'https://serverest.dev/login', { email: 'teste@teste.com', password: 'teste' }).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property('message', 'Login realizado com sucesso') // true
        //response.body.property('authorization')
      }
    )
  })
  it("Login password em branco", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false, 
      body: {email: 'teste@teste.com', password: '' }}).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property('password', 'password não pode ficar em branco') // true
        //response.body.property('authorization')
      }
    )
  })
  it("Login email em branco", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false, 
      body: {email: '', password: 'testeasda' }}).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property('email', 'email não pode ficar em branco') // true
        //response.body.property('authorization')
      }
    )
  })
  it("Login Email e/ou senha inválidos", () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false, 
      body: {email: 'teste@teste.com', password: 'testeasda' }}).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property('message', 'Email e/ou senha inválidos') // true
        //response.body.property('authorization')
      }
    )
  })
})



