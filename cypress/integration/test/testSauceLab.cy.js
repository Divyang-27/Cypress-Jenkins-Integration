import Cart from "../../support/pageObject/cart";
import CheckoutOne from "../../support/pageObject/checkoutOne";
import CheckoutTwo from "../../support/pageObject/checkoutTwo";
import Login from "../../support/pageObject/login";
import Order from "../../support/pageObject/order";
import Product from "../../support/pageObject/product";
/**
 * Test steps:
 * Login to the website with the valid credential
 * Go to the homepage
 * Add one product to cart
 * Go to cart--> checkout
 * Go to Checkout page 1- fill the details
 * Go to Checkout page 2 -Click on finish
 * Go to the success -order page
 * Go to Home screen
 * logout 
 * 
 */
// lets build a automation pipeline 
describe("End-to-End E-commerce Testing", () => {
    const productPage = new Product();
    const loginPage = new Login();
    const cartPage = new Cart();
    const checkoutOne = new CheckoutOne();
    const checkoutTwo = new CheckoutTwo();
    const order = new Order();
    const url = "https://www.saucedemo.com/";

    before(() => {
        cy.visit(url);
        cy.log("Navigated to the application");
    });
    beforeEach(() => {
        cy.reload();
    });
    it("End-to-End Product Buying", () => {
        loginPage.login();
        cy.log("User logged in successfully"); // use cy.log to print what is happening

        productPage.addToCart();
        cy.log("Product added to cart");

        productPage.goToCart();
        cartPage.cartCheckOut();
        cy.log("Proceeded to checkout");

        checkoutOne.fillYourInfo();
        checkoutTwo.finish();
        cy.log("Checkout process completed");

        order.verifySuccess();
        order.goBackHome();
        cy.log("Order placed successfully and navigated back home");
      
      
    });
    after(() => {
        productPage.logout();
        cy.log("User logged out");
    });
});