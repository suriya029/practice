
describe('My first sample test', function(){
it('first testcase', function()
{
cy.visit('https://www.amazon.in/ref=nav_logo')
cy.get('div .nav-fill > div > form').type("hp elitebook g5")
cy.wait(2000)
cy.get('.left-pane-results-container').find('div[role="button"]').each(($e1,index,$list)=>{
    const prodsuggession=$e1.attr('aria-label')
    if(prodsuggession==='hp elitebook g5 i5 8th generation'){
$e1.click()
    }
})
cy.get('span[data-component-type="s-search-results"]').find('div[data-asin]')
.each(($e1,index,$list)=>{
//    const asin= $e1.attr('data-asin')
//    console.log(asin);
    if($e1.attr('data-asin')==='B0BW5VCVPF'){
        cy.log("asin found "+$e1.attr('data-asin'))
cy.wrap($e1).find('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').invoke('removeAttr','target').click()
    }
})
})
})