export class CheckoutStepOnePage{
    txt_firstname = '#first-name'
    txt_lastname = '#last-name'
    txt_postalcode = '#postal-code'
    btn_continue = '#continue'

    inpuFirstname(firstname: string){
        cy.get(this.txt_firstname).type(firstname)
    }

    inpuLastname(lastname: string){
        cy.get(this.txt_lastname).type(lastname)
    }

    inpuPostalcode(postalcode: string){
        cy.get(this.txt_postalcode).type(postalcode)
    }

    clickContinue(){
        cy.get(this.btn_continue).click()
    }

    assertCheckoutFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }

    checkoutValid(firstname : string,lastname : string, postalcode : string){
        this.inpuFirstname(firstname)
        this.inpuLastname(lastname)
        this.inpuPostalcode(postalcode)
        this.clickContinue()
    }

    checkoutInValid(firstname : string,lastname : string){
        this.inpuFirstname(firstname)
        this.inpuLastname(lastname)
        this.clickContinue()
        this.assertCheckoutFail()
    }
}