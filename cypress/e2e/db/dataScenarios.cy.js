import { cityDto } from "../../main/database/dto/cityDto";
import { countryDto } from "../../main/database/dto/countryDto";

describe('Data Scenarios', () => {

    it('Test city table', () => {
      cy.task('queryDatabase', { query: "SELECT * FROM CITY WHERE name='Kabul'" })
        .then((result) => {
          let citiesList = result.rows.map((row) => {
            return new cityDto(row.id, row.name, row.country_code, row.district, row.population, row.local_name);
          });
          cy.log('Number of cities:' + citiesList.length);
          cy.wrap(citiesList[0].id).should('eq', 1);
          cy.wrap(citiesList[0].name).should('eq', 'Kabul');    
          cy.wrap(citiesList[0].countryCode).should('eq', 'AFG');
          cy.wrap(citiesList[0].district).should('eq', 'Kabol');
          cy.wrap(citiesList[0].population).should('eq', 1780000);
          cy.wrap(citiesList[0].localName).should('eq', null);
        });
    });

    it('Test nested queries', () => {
      cy.task('queryDatabase', { query: "SELECT * FROM CITY WHERE name='Kabul'" })
        .then((result) => {
          var citiesList = result.rows.map((row) => {
            return new cityDto(row.id, row.name, row.country_code, row.district, row.population, row.local_name);
          });
          return citiesList[0].countryCode;
        })
        .then((countryCode) => {
          cy.task('queryDatabase', { query: "SELECT * FROM COUNTRY WHERE code='" + countryCode + "'" })
            .then((result) => {
              var countriesList = result.rows.map((row) => {
                return new countryDto(row.code, row.name, row.continent, row.region, row.surface_area, row.indep_year, row.population, row.life_expectancy, row.gnp, row.gnp_old, row.local_name, row.government_form, row.head_of_state, row.capital, row.code2);
              });
              cy.log('Number of countries:' + countriesList.length);
              cy.wrap(countriesList[0].code).should('eq', 'AFG');
              cy.wrap(countriesList[0].name).should('eq', 'Afghanistan');
              cy.wrap(countriesList[0].continent).should('eq', 'Asia');
              cy.wrap(countriesList[0].region).should('eq', 'Southern and Central Asia');
              cy.wrap(countriesList[0].surfaceArea).should('eq', 652090);
              cy.wrap(countriesList[0].indepYear).should('eq', 1919);
              cy.wrap(countriesList[0].population).should('eq', 22720000);
              cy.wrap(countriesList[0].lifeExpectancy).should('eq', 45.9);
              cy.wrap(countriesList[0].gnp).should('eq', '5976.00');
              cy.wrap(countriesList[0].gnpOld).should('eq', null);
              cy.wrap(countriesList[0].localName).should('eq', 'Afganistan/Afqanestan');
              cy.wrap(countriesList[0].governmentForm).should('eq', 'Islamic Emirate');
              cy.wrap(countriesList[0].headOfState).should('eq', 'Mohammad Omar');
              cy.wrap(countriesList[0].capital).should('eq', 1);
              cy.wrap(countriesList[0].code2).should('eq', 'AF');
            });
        });
    });
  
  });