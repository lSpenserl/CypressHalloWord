describe('Página de Cadastrpo', () => {
  it('Deve cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Ana de jesus');
    cy.get('[data-test="input-email"]').type('ana@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    //cy.contains('button','Cadastrar').click(); procura pa pagina se tem esse elemento com esse nome.
    cy.get('[data-test="submit-button"]').click();
  })
})