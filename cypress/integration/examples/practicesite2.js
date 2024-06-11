import { default as homepage } from "./POM/HomePage"
import webinputs from "./POM/WebInputs"
import addorremove from "./POM/addorremoveelements"
import dynamictble from "./POM/DynamicTable"

describe('Automation Testing Practice Website for UI',function(){

    var homepge
    var webinpts
    var addorrmw
    var dyntble

    before(function(){
        homepge = new homepage()
        webinpts = new webinputs()
        addorrmw = new addorremove()
        dyntble = new dynamictble()
        
//cy.visit('https://practice.expandtesting.com/')
    })

    
    beforeEach(function(){
        
        cy.visit(Cypress.env('url'))
        cy.fixture('values.json').then(function(data){
            this.data = data
            })
    })


it('click on Web Inputs page',()=>{
    cy.example_and_exptext(homepge.Getexamplename(),this.data.webInputs.tabName,homepge.Getexampleexptext(),this.data.webInputs.tabexplainertext)

      
     
    
webinpts.inputNumber().type(this.data.webInputs.inputNumber)
webinpts.inputText().type(this.data.webInputs.inputText)
webinpts.inputPassword().type(this.data.webInputs.inputpassword)
webinpts.inputDate().type(this.data.webInputs.inputdate)
cy.contains('Display Inputs').click()
webinpts.inputNumber().should('have.value',this.data.webInputs.inputNumber)
webinpts.inputText().should('have.value',this.data.webInputs.inputText)
webinpts.inputPassword().should('have.value',this.data.webInputs.inputpassword)
webinpts.inputDate().should('have.value',this.data.webInputs.inputdate)
})
 

it('Click on add/remove elements',function(){
    let count =0;
    cy.example_and_exptext(homepge.Getexamplename(),this.data.AddorRemoveElements.tabName,homepge.Getexampleexptext(),this.data.AddorRemoveElements.tabexplainertext)
    //var addcount = 6;
    for(let i=0;i<this.data.AddorRemoveElements.addcount;i++){
        addorrmw.addelementbtn().click()
    }
    //var deletecount = 3;
    if(this.data.AddorRemoveElements.deletecount > this.data.AddorRemoveElements.addcount){
        cy.log('Given number is incorrect please provide a number less than '+this.data.AddorRemoveElements.addcount)
                    }
                    else{
                        addorrmw.deletebtngrp().each(($e1,index,$list)=>{
        //for(let i = 0; i<deletecount; i++){
            if (index < this.data.AddorRemoveElements.deletecount) {
                cy.wrap($e1).click();
            }
        })
        addorrmw.deletebtngrp().then(function(count){
       cy.log(count.length)
       })
    }

})

it('Dynamic table',function(){
    let percentage;
    cy.example_and_exptext(homepge.Getexamplename(),this.data.dynamictable.tabName,homepge.Getexampleexptext(),this.data.dynamictable.tabexplainertext)
    dyntble.tablecolumns().each(($e1,index,$list),function(){
    if($e1.text().includes(this.data.dynamictable.BrowserName)){
      cy.log($e1.text())
    cy.wrap($e1).contains(this.data.dynamictable.valuetobefetched).then(function(a){
      percentage =  a.text();
        cy.log(percentage)
    })
      dyntble.chromeyellowpercent().then(function(a){
     let b =   a.text().match(/(\d+(\.\d+)?)%/)
     cy.log(b[0])
     expect(percentage).to.eq(b[0]);

      })
    }

})
})

it('Radio buttons',function(){
    cy.example_and_exptext(homepge.Getexamplename(),this.data.radiobutton.tabName,homepge.Getexampleexptext(),this.data.radiobutton.tabexplainertext)
cy.get('#blue').should('be.enabled')
cy.get('#tennis').should('be.enabled')
cy.get('#yellow').click().should('be.enabled')
})


})
