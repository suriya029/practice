// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('example_and_exptext', (ExampleNamecss, tabHeadername,Egexptextcss,tabexplainertext ) => { 
    ExampleNamecss.find('a').each(($e1,index,$list)=>{
    if($e1.text()=== tabHeadername){
        Egexptextcss.eq(index).then(function(explainertext){
     explainertext.text().includes(tabexplainertext)
    })
    cy.wrap($e1).click()   
 }   
 }) })

 Cypress.Commands.add('addnum', (a,b) => {
    let result = parseInt(a)+parseInt(b)
return result
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })