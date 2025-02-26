class Checkouttwo{
    cancel(){

    }
    finish(){
       cy.get('[data-test="finish"]').click()
    }
}

export default Checkouttwo;