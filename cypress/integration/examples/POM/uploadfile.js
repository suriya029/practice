class fileupload{
    constructor(){
        this.cssSelector = {
uploadbtn  : 'input[type="file"]',
submitbtn : '[data-testid="file-submit"]',
successtxt : 'h1'
}

    }
    uploadbtn(){
        return cy.get(this.cssSelector.uploadbtn)
    }
    submitbtn(){
        return cy.get(this.cssSelector.submitbtn)
    }
    successtxt(){
        return cy.get(this.cssSelector.successtxt)
    }

}
export default fileupload