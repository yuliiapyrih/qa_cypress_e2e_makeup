import PageObject from '../PageObject';

class ProductDetailsPageObject extends PageObject {

  addCommentBtn() {
    cy.get('.add-comment')
      .click();
  }
}

export default ProductDetailsPageObject;
