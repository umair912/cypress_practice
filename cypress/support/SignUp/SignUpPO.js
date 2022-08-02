
class SignUp {

    getFirstNameSelector(){
        return ['name="firstname"'];
    }

    getSurNameSelector(){

        return ['name="lastname"'];
    }

    getMobilenumberSelector(){

        return ['name="reg_email__"'];

    }

    getNewPasswordSelector(){

        return '#password_step_input'
    }

    signUpWithNewUser(){
        cy.get('[role="button"]').contains('Free Trial').click();
        cy.get('[type="text"]').click().type('test@gmail.com');
        cy.get('[type="password"]').click().type('Test@12345');
        cy.get('[role="checkbox"]').click({force:true});
        cy.get('.mainbtn ').contains('Sign Up For Free').click({force:true});
    }
} export default SignUp