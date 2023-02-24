export class CheckoutCompletePage{
    btn_backtoproduct = '#back-to-products'

    assertPage(){
        cy.contains('Checkout: Complete!').should('be.visible')
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
    }

    clickBacktoproduct(){
        cy.get(this.btn_backtoproduct).click()
    }

    complete(){
        this.assertPage()
        this.clickBacktoproduct()
    }
}