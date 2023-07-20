import PageObject from '../PageObject';

class SearchPageObject extends PageObject {

  clickSearchBtn() {
    cy.get('.search-button')
        .eq(0)
        .click();
  }

  typeSearchField(product) {
    cy.get('#search-input')
        .type(product + '{enter}');
  }

  checkResultSearching(product) {
    cy.get('.info-product-wrapper')
        .find('.simple-slider-list__description')
        .should('contain', product);
  }
}

export default SearchPageObject;
