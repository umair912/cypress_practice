class NewProject{


    addTheNewProject(){
    cy.get('[type="button"].mainbtn ').contains('New Project').click({force:true})
    cy.get('#project-name').type('Project 1',{force:true})
    cy.get('#project-company_name').type('Traxidy')
    cy.get('#project-department').type('Admin')
    cy.get('#project-cost_center').type('test')
    cy.get('#project-currency').click({force:true})
    cy.get('.v-list-item__title').contains('USD').click({forxe: true })
    cy.get('.v-btn__content').contains('Next').click()
    cy.get('#cp-skip').click()
    cy.get('#project-original_start_date').type('2022-01-12',{force:true})
    cy.get('#project-original_end_date').type('2022-01-26',{force:true})
    cy.get('#project-original_implementation_date').type('2022-02-12',{force:true})
    cy.get('#project-end_date_type').click({force:true})
    cy.get('.v-list-item__title').contains('Firm').click()
    cy.get('.v-btn__content').contains('Save Project').click()

    }
    verifyTheNewProjectValues(){
        cy.get('#name').should('have.value','Project 1')
        cy.get('#company_name').should('have.value','Traxidy')
      //  cy.get('[type="text"]').eq(2).should('have.value','Open')
        cy.get('#department').should('have.value','Admin')
         cy.get('[name="date"]').eq(0).should('have.value','2022-01-12')
       cy.get('[name="date"]').eq(1).should('have.value','2022-01-26')
    }

}export default NewProject