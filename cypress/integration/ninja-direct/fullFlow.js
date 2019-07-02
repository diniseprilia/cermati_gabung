describe('Login', function() {
    it('Buy a dress', function() {
        //LOGIN WITH VALID CREDS
        //cy.loginTest("audia.anjani@ninjavan.co", "password12")
        cy.visit('https://www-qa.ninjadirect.com').wait(2000)  

        //SELECT AN ITEM
        cy.get(':nth-child(2) > a > .ant-card > .ant-card-body > .Image__StyledWrapper-cJqLci > .Product__SquareImage-fzzjtM').click().wait(5000)
        //cy.click('[name="warna"] > .ant-radio-group > .ant-row-flex > :nth-child(1) > .ProductVariant__StyledButton-bmIlzL > :nth-child(2)')
        
        cy.getByText('Hitam').click().wait(5000)
        //cy.getByText('44').wait(500)
        cy.get('[name="ukuran"] > .ant-radio-group > .ant-row-flex > :nth-child(2) > .ProductVariant__StyledButton-bmIlzL > :nth-child(2)').click().wait(5000)
        cy.scrollTo(0, 500) 

        //BELI SEKARANG 
        //cy.getByText('BELI SEKARANG').click().wait(5000)
        cy.get('.ProductDetail__ButtonRow-iHdzfI > :nth-child(2) > .ant-btn').click().wait(5000)
        //cy.get('[data-icon= "shopping-cart"]').click()

        cy.get('[style="margin-bottom: 8px;"]').click().wait(5000)
        cy.get('.ant-card-body > .ant-row-flex-end > .ant-btn').click().wait(5000)

        //NAMA LENGKAP
        cy.scrollTo(500, 0)
        cy.get('#name').type('Audia Anjani').wait(500)

        //CONTACT
        cy.get('#phone').type('821271016790').wait(500)

        //EMAIL
        cy.get('#email').type('audia.anjani@ninjavan.co').wait(500)

        //ACEH
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-select-lg > .ant-select-selection > .ant-select-selection__rendered')
        .click({force:true})
        cy.getByText('Aceh').click({force:true}).wait(500)

        //Kab. Aceh Barat
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-select-lg > .ant-select-selection > .ant-select-selection__rendered')
        .click({force:true})
        cy.getByText('Kab. Aceh Barat', {force:true}).click().wait(500)

        // Kec: Arongan Lambalek
        cy.get(':nth-child(6) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-select-lg > .ant-select-selection > .ant-select-selection__rendered')
        .click({force:true})
        cy.getByText('Arongan Lambalek').click({force:true}).wait(500)

        //SKIP KODE POS

        //ALAMAT
        cy.get('#address').type('Jalan Aceh Raya', {force:true}).wait(500)

        //CLICK LANJUTKAN
        cy.get('.ant-form > .ant-row-flex-end > .ant-btn').click({force:true})
        .wait(500)

        cy.get('[style="flex: 1 1 0%;"] > .gNAzpM > .T__StyledWrapper-ZEWib > span')
        .should('have.text', 'Pengiriman Standard')
        cy.get('[style="height: auto;"] > .ReactCollapse--content > .ant-card > .ant-card-body > :nth-child(1) > .ant-radio-group > .Radio__StyledRadio-enXwHW > .ant-radio > .ant-radio-input')
        .should('be.checked')

        cy.get('[style="height: auto;"] > .ReactCollapse--content > .ant-card > .ant-card-body > :nth-child(1) > .ant-row-flex > .ant-btn')
        .click({force:true}).wait(500)

        cy.get('[style="height: auto;"] > .ReactCollapse--content > .ant-card > .ant-card-body > :nth-child(1) > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input')
        .should('be.checked')

        cy.get('[style="height: auto;"] > .ReactCollapse--content > .ant-card > .ant-card-body > :nth-child(1) > .ant-row-flex > .ant-btn')
        .click({force:true}).wait(2000)

        cy.get('.ileMSh').should('have.text', 'Terima kasih atas pembelian Anda!')

    
        //ant-btn Button__NjdButton-eqLXgs gWIcpH ant-btn-primary
        //cy.click('.ProductDetail__ButtonRow-iHdzfI > :nth-child(2) > .ant-btn')


    })
})