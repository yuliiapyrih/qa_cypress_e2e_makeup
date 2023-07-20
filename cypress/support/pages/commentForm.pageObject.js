import PageObject from '../PageObject';

class CommentFormPageObject extends PageObject {

  clickOnStar() {
    cy.get('.stars__item')
      .eq(5)
      .click();
  }

  typeName(name) {
    cy.get('#comments-name')
      .type(name);
  }

  typeComment(comment) {
    cy.get('#comments-message')
      .type(comment);
  }

  clickSubmitCommentBtn() {
    cy.contains('[type="submit"]', 'Додати повідомлення')
      .click();
    cy.wait(2000);
  };

  checkAddingComment() {
    cy.get('.popup-content')
      .should('contain', 'Ваш відгук успішно додано!');
  }
}

export default CommentFormPageObject;
