class webinputs{

constructor(){
    this.cssSelector = {
        inputnumber: '#input-number',
        inputText:'#input-text',
        inputPassword:'#input-password',
        inputDate:'#input-date',
    }
}

    inputNumber(){
   return cy.get(this.cssSelector.inputnumber)
    }
    inputText(){
        return cy.get(this.cssSelector.inputText)
    }
    inputPassword(){
        return cy.get(this.cssSelector.inputPassword)
    }
    inputDate(){
        return cy.get(this.cssSelector.inputDate)
    }
}
export default webinputs