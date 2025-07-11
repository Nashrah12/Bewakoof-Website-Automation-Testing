class Signup{
    //Test sign up functionality with valid credentials
    signup(){
        //Enter name
        cy.get('[placeholder="    Enter your name"]').type('kashaf');
        //Enter Username
        cy.get('[placeholder="    Choose your username"]').type('kash');
        //Enter Password
        cy.get('[placeholder="    Choose your password"]').type('kas123@');
        // Enter e-mail
        cy.get('[placeholder="    Enter your email"]').type('zxc6@gmail.com');
        //Enter phone number
        cy.get('[placeholder="    Enter your Phone Number"]').type('8907654311');
        // click on sign up button
        cy.get('.signup-btn').click();
    }
    //Verify log in Functionality
    login(){
        //Click on Log in option
        cy.contains('Log In').click();
        //Enter Username
        cy.get('[placeholder="    Enter your username"]').type('kash');
        //Enter Password
        cy.get('[placeholder="    Enter your password"]').type('jklmnb123@');
        //Click on Log in button
        cy.get('.login-btn').click();
    }
}
export default Signup;