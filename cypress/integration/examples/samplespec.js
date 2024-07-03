describe('Navigate to google and search amazon and click on iphone 15 pro max',function(){
 let searchresult =[]
   // it('navigate to google and perform amazon search',function(){
        // cy.visit('https://www.google.com/')
        // cy.get('.gLFyf').type('Amazon{enter}').then(function(then){cy.get('h3[class="LC20lb MBeuO DKV0Md"]').each(($e1,index,$list)=>{
        //     searchresult.push($e1.text())
        //     cy.log(searchresult[index])
        //     if(searchresult[index]==='Amazon.in'){
        //         cy.wrap($e1).click()
        //     }

        // })})
    
        // cy.origin('https://www.amazon.in/',()=>{
            
        //     cy.get('#twotabsearchtextbox').type('iphone 15 pro max{enter}')

        // })
       
   // })
    it('Search and select iphone 15 pro max from amazon website',function(){
        cy.Google_search_and_select_from_search_result('Amazon','Amazon.in')
        
            cy.origin('https://www.amazon.in/',()=>{
                cy.on('uncaught:exception', (err, runnable) => {
                    // Return false to prevent the error from failing the test
                    return false;
                });
                cy.get('#twotabsearchtextbox').type('iphone 15 pro max{enter}')
    
            })
        })
       
    })
//