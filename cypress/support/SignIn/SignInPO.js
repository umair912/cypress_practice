class SignIn {
    signInWithNewUser(){
        cy.get('[placeholder="Email Address"]').type('aram.zahedi@247labs.com')
        cy.get('[type="password"]').type('123456')
        cy.get('[type="submit"]').click()
    }
} export default SignIn