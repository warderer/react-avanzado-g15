/* eslint-disable no-undef */
describe('Mi primer test', () => {
  it('Lee Hola Mundo en /', () => {
    // 01. Setup del Estado de la App
    cy.visit('/')
    // 02. Ejecutaciones acciones
    cy.get('h1')
      .contains('Hola Mundo, soy el home') // 03. Espero un resultado
  })

  it('Login como CUSTOMER', () => {
    // 01. Setup del Estado de la App
    // Intercept lo uso para cuando hay una llamada a API
    // y va a esperar a que se resuelva
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')
    // 02. Ejecutaciones acciones
    cy.get('#exampleFormControlInput1').type('drstrange@marvel.com')
    cy.get('#inputPassword').type('multiverso')
    cy.get('button[type=button]').click()
    cy.wait('@loginApi')
    // 03. Espero un resultado
    cy.get('h1').should('have.text', 'Dashboard')
  })

  it('Probar el Logout', () => {
    // 01. Setup del Estado de la App
    // Intercept lo uso para cuando hay una llamada a API
    // y va a esperar a que se resuelva
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')
    // 02. Ejecutaciones acciones
    cy.get('#exampleFormControlInput1').type('drstrange@marvel.com')
    cy.get('#inputPassword').type('multiverso')
    cy.get('button[type=button]').click()
    cy.wait('@loginApi')
    // 03. Espero un resultado
    cy.get('nav > ul li:last').click()
    cy.contains('soy')
  })
})
