class Cart{
    cartCheckOut(){
        cy.contains('Checkout').click()
    }
}
export default Cart;

// for each page 
// we are declaring the classess 
// we are initiating it into our test spec