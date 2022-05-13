describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/register'); // change URL to match your dev URL

        cy.get('label[for=name]').should(
        'contain',
        'Name'
        );
        cy.get('input[name=password]').focus().type(
            '123456789'
        ).should('have.value', '123456789');

        cy.get('input[name=password_confirmation]').focus().type(
            '123456789'
        ).should('have.value', '123456789');

        cy.get('input[name=name]').type(
            'Mt'
        );

        cy.get('input[name=email]').type(
            'm@e.com'
        );

        cy.get('button').should('contain','Register').click({ position: 'center' }
        );

        cy.get('main').should('contain', "You're logged in!" );

    })
})

