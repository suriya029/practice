class addorremove{
   
addelementbtn(){
    return cy.contains('Add Element')
}
deletebtngrp(){
return cy.get('.added-manually.btn.btn-info')
}

}
export default addorremove



