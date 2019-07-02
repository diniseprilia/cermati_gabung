import { getMaxListeners } from "cluster";

describe('Daftar Akun', function() {
    it('Daftar Akun', function() {
        //LOGIN WITH VALID CREDS
        cy.visit('https://www.cermati.com/gabung').wait(1000)  

        //Ignore pop up
        cy.get('.moe-btn-close').click()

        //Enter email
        cy.get('#email').click
        cy.get('#email').type('sample@mail.com').wait(1000)

        //Enter sandi
        cy.get('#password').click()
        cy.get('#password').type('Abc@12345').wait(1000)

        //Enter nama depan
        cy.get('#first-name').click()
        cy.get('#first-name').type('NamaDepan').wait(1000)


        //Enter nama belakang
        cy.get('#last-name').click()
        cy.get('#last-name').type('NamaBelakang').wait(1000)


         //Enter no telepon
         cy.get('#mobile-phone').click()
         cy.get('#mobile-phone').type('081211212121').wait(1000)

        //Enter no telepon
         cy.get('#residence-city').click()
         cy.get('#residence-city').type('Jakarta').wait(1000)

         //Click Daftar Akun button
         cy.get('#submit-join').click()
        
    })
})