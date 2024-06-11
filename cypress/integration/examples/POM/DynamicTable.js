class dynamictble{
tablecolumns(){
    return cy.get('tbody tr')
}
chromeyellowpercent(){
    return cy.get('#chrome-cpu')
}
}
export default dynamictble