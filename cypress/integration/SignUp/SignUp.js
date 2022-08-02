import SignUp from '../../support/SignUp/SignUpPO'; 

const signUpPage = new SignUp();

describe('verify the Sign Up page',function () {
    it('SignUp With New User', function () {
        cy.visit('https://traxidy.com/')
        signUpPage.signUpWithNewUser();

    })
})



