import PageObject from '../PageObject';

class ProductCartPageObject extends PageObject {

  checkAddedProducts(product1, product2) {
    cy.get('.cart')
      .should('contain', product1)
      .and('contain', product2);
  }

  checkTotalPrice() {
    cy.get('.product__column')
      .find('.product__price-column')
      .find('.product__price')
      .then(($prices_item) => {
        const prices = $prices_item.toArray().map((price) => parseFloat(price.innerText))
        let totalPrice = 0;
        for (let i = 0; i < prices.length; i++) {
          totalPrice += prices[i];
        }

        cy.get('.total')
          .should('contain', `${totalPrice}`);;
      });
  }

  closeCartBtn() {
    cy.get('.popup-close.close-icon')
      .eq(4)
      .click();
  }

  deleteBtn() {
    cy.get('.product__button-remove')
      .eq(0)
      .click();
  }

  checkDeletedProduct(product) {
    cy.get('.cart')
      .should('not.have.value', product);
  }
}

export default ProductCartPageObject;
