//Examples:
// Cypress.Commands.add('login', (email, password) => { ... })

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(nome, sobrenome, email, textArea) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(textArea)
    cy.get('button[type="submit"]').click()

})
