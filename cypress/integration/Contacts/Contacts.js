
import Contacts from '../../support/Contacts/ContactsPO';
import SignIn from '../../support/SignIn/SignInPO';
import NewProject from '../../support/NewProject/NewProjectPO';

const contact = new Contacts();
const signInPage = new SignIn();
const verifyproject = new NewProject();

describe('It should add New Contact',function(){
  before(function(){

    cy.visit('https://app-traxidy.thedemo.co/login/');
    signInPage.signInWithNewUser();

  })

// it('Add the New Contact',function(){

//   contact.addTheNewContact();

// })

})