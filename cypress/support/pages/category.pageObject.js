import PageObject from '../PageObject';

class CategoryPageObject extends PageObject {
  url = '/categorys';

  chooseFilter(numberFilter) {
    cy.get('.catalog-checkbox-list__item')
      .eq(numberFilter)
      .click();
  }

  sortByCost() {
    cy.get('.catalog-sort__list-title')
      .click();
  
    cy.contains('.catalog-sort-list__item', 'вартістю')
      .click();

    cy.wait(5000);
  }

  checkSortedPrices() {
    cy.get('.catalog-products')
      .find('.simple-slider-list__price')
      .find('.price_item')
      .then(($price_item) => {
        const prices = $price_item.toArray().map((price) => parseFloat(price.innerText))
        
        for (let i = 1; i < prices.length; i++) {
          expect(prices[i]).to.be.gte(prices[i - 1]);  
        }
      });
  }


  clickBuyBtn(product) {
    cy.contains('.simple-slider-list__name', product)
      .trigger('mouseover');
    cy.wait(1000);

    cy.get('.buy').should('be.visible')
      .eq(0)
      .click();
  }
}

export default CategoryPageObject;
