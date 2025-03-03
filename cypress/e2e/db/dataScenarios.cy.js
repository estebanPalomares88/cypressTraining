describe('Data Scenarios', () => {

    it('Execute SELECT in CITY table', () => {
      cy.task('queryDatabase', { query: "SELECT * FROM CITY WHERE name='Kabul'" })
        .then((result) => {
            cy.log(JSON.stringify(result.rows));
        });
    });
  
  });