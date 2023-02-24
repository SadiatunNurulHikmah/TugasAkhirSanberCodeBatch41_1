export class CartPage{
    text_YourCart = 'Your Cart'
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_checkout = '#checkout'

    assertYourCart(){
        cy.contains('Your Cart').should('be.visible') 
    }

    assertSauceLabsBackpack(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }

    checkoutProduct(){
        this.assertYourCart()
        this.assertSauceLabsBackpack()
        this.clickCheckout()
        cy.wait(5000)
    }


}