import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = 'https://makeup.com.ua/ua/';

  clickOnCategory(categoryName) {
    cy.contains('.menu-list__item', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.simple-slider-list__name', product)
      .click();
  }

  checkHomeUrl(){
    cy.url().should('include', 'makeup.com.ua');
  }
}

export default HomePageObject;
