
import NewProject from '../../support/NewProject/NewProjectPO';
import SignIn from '../../support/SignIn/SignInPO';

 const newproject = new NewProject();
 const signInPage = new SignIn();
 //const verifyproject = new NewProject();

 describe('It should add the New Project',function(){
     before(function(){
        cy.visit('https://app-traxidy.thedemo.co/login/');
        signInPage.signInWithNewUser();
     })

        it('Add the New Project',function(){
            newproject.addTheNewProject()
            cy.wait(5000)
        
        })  
      
        it('Verify the New Project values',function(){

            newproject.verifyTheNewProjectValues();
        })
        
 })