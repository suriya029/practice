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

Cypress.Commands.add('Google_search_and_select_from_search_result',(searchquery,URLheading)=>{
    let searchresult = []
    cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type(searchquery+'{enter}').then(function(then){
            cy.get('h3[class="LC20lb MBeuO DKV0Md"]').each(($e1,index,$list)=>{
            searchresult.push($e1.text())
            cy.log(searchresult[index])
            if(searchresult[index]===URLheading){
                cy.wrap($e1).click()
            }

        })
    
    })
    //return searchresult;


}
)
   
 

//uncaught exception
cy.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent the error from failing the test
    return false;
});

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