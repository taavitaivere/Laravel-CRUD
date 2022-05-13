describe('Test1', () => {
    it('kasutaja registreerimine', () => {
        cy.visit('/register'); // change URL to match your dev URL

        cy.get('input[name=password]').focus().type(
            'qweqweqwe'
        ).should('have.value', 'qweqweqwe');

        cy.get('input[name=password_confirmation]').focus().type(
            'qweqweqwe'
        ).should('have.value', 'qweqweqwe');

        cy.get('input[name=name]').type(
            'Madis'
        );

        cy.get('input[name=email]').type(
            'madis@example.com'
        );

        cy.get('button').should('contain', 'Register').click({position: 'center'}
        );

        cy.get("li").eq(0).should('contain.text', 'The email has already been taken.');

    })
})

describe('Test2', () => {
    it('Sisselogimine', () => {

        cy.get('svg').click();

        cy.contains('a', 'Log in').click();

        cy.get('input[name=email]').type(
            'madis@example.com').should('have.value', 'madis@example.com');

        cy.get('input[name=password]').type(
            'qweqweqwe').should('have.value', 'qweqweqwe');

        cy.contains("button", "Log in").click();

    })
})

    describe('Test3', () => {
        it('Kontakti loomine', () => {

            cy.contains("a", "Contacts").click();

            cy.contains("a", "Create").click();

            cy.get('input[name=name]').type(
                'Kes').should('have.value', 'Kes');

            cy.get('input[name=phone]').type(
                '5123223').should('have.value', '5123223');

            cy.contains("button", "Add").click();

            cy.get("li").eq(0).should('contain.text', 'The city field is required.');
            cy.get("li").eq(1).should('contain.text', 'The age field is required.');
            cy.get("li").eq(2).should('contain.text', 'The country field is required.');

            cy.get('input[name=age]').type(
                '11').should('have.value', '11');

            cy.get('input[name=city]').type(
                'Tartu').should('have.value', 'Tartu');

            cy.get('input[name=country]').type(
                'EST').should('have.value', 'EST');

            cy.get('input[name=employee]').not('[disabled]')
                .check().should('be.checked');

            cy.get('input[type="file"]').selectFile("cypress/fixtures/image.png");

            cy.contains("button", "Add").click();

            cy.get("div").should('contain.text', 'Tartu');

            cy.contains("a", "Contacts").click();

            cy.get("div[data-rowindex=0]").contains("a", "Edit").click();

            cy.get("input[name=name]").clear();

            cy.contains("button", "Submit").click();

            cy.get("li").eq(0).should('contain.text', 'The name field is required.');

            cy.get("input[name=name]").type('Kuskes').should('have.value', 'Kuskes');

            cy.contains("button", "Submit").click();

            cy.get("div").should('contain.text', 'Kuskes');

            cy.contains("a", "Contacts").click();

            cy.get("div[data-rowindex=0]").contains("div", "Kuskes");

            cy.get("div[data-rowindex=0]").contains("button", "Delete").click();

            cy.contains("a", "Deleted Contacts").click();

            cy.get("div[data-rowindex=0]").contains("button", "Delete Permanently").click();

            cy.get("div[data-rowindex=0]").should("not.exist");

            cy.get('.main-dropdown-container').click();

            cy.contains('button', "Log Out").click();

    })
})
