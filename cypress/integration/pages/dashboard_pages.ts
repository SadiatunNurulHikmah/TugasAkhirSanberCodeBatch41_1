export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_cart = '#shopping_cart_container > a > span'

    assertSauceLabsBackpack(){
        cy.contains('Products').should('be.visible') 
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addToCart_SauceLabsBackpack(){
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }

    clickCartShopping(){
        cy.get(this.btn_cart).click()
    }

    

}