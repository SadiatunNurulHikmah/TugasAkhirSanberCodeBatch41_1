import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CartPage } from "./pages/cart.pages"
import { CheckoutStepOnePage } from "./pages/checkoutStepOne.page"
import { CheckoutStepTwoPage } from "./pages/checkoutStepTwo.page"
import { CheckoutCompletePage } from "./pages/checkoutComplete.page"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutStepOnePage  = new CheckoutStepOnePage()
let checkoutStepTwoPage = new CheckoutStepTwoPage()
let checkoutCompletePage = new CheckoutCompletePage()

const URL = 'https://www.saucedemo.com/'

beforeEach('User login and already in dashboard page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.assertSauceLabsBackpack
})

it('checkout Sauce Labs Backpack', () => {
    dashboardPage.addToCart_SauceLabsBackpack()
    dashboardPage.clickCartShopping()
    cartPage.checkoutProduct()
    checkoutStepOnePage.checkoutValid('Diah', 'Hikmah', '122345')
    checkoutStepTwoPage.confirmCheckout()
    checkoutCompletePage.complete()
})

it('checkout invalid', () => {
    dashboardPage.addToCart_SauceLabsBackpack()
    dashboardPage.clickCartShopping()
    cartPage.checkoutProduct()
    checkoutStepOnePage.checkoutInValid('Diah', 'Hikmah')
})
