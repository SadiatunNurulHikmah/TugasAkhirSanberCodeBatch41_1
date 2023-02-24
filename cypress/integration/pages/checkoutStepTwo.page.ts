export class CheckoutStepTwoPage{
    text_titlePage = 'Checkout: Overview'
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_finish = '#finish'

    assertPage(){
        cy.contains('Checkout: Overview').should('be.visible') 
    }

    assertSauceLabsBackpack(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    clickFinish(){
        cy.get(this.btn_finish).click()
    }

    confirmCheckout(){
        this.assertPage()
        this.assertSauceLabsBackpack()
        this.clickFinish()
    }

}