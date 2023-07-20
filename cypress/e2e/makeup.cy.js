/// <reference types='cypress' />
/// <reference types="../support" />


import HomePageObject from '../support/pages/home.pageObject';
import CategoryPageObject from '../support/pages/category.pageObject';
import ProductCartPageObject from '../support/pages/productCart.pageObject';
import SearchPageObject from '../support/pages/search.pageObject';
import ProductDetailsPageObject from '../support/pages/productDetails.pageObject';
import CommentFormPageObject from '../support/pages/commentForm.pageObject';

const homePage = new HomePageObject();
const categoryPage = new CategoryPageObject();
const productCartPage = new ProductCartPageObject();
const searchPage = new SearchPageObject();
const productDetailsPage =  new ProductDetailsPageObject();
const commentForm = new CommentFormPageObject();

describe('Makeup', () => {
  let user;
  let product;
  let category;

  beforeEach(() => {
    homePage.visit();
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      });
    cy.task('categories')
      .then(categories => {
        category = categories;
      });
    cy.task('products')
      .then(products => {
        product = products;
      });
  });

  it('should provide an ability to price filter working correctly', () => {

    homePage.checkHomeUrl();

    homePage.clickOnCategory(category.title[0]);

    categoryPage.chooseFilter(5);
    categoryPage.chooseFilter(9);
    categoryPage.sortByCost();
    categoryPage.checkSortedPrices();
  });

  it('should provide an ability to add items to the basket', () => {

    homePage.checkHomeUrl();
    homePage.clickOnCategory(category.title[0]);

    categoryPage.clickBuyBtn(product.title[0]);

    productCartPage.closeCartBtn();

    homePage.clickOnCategory(category.title[1]);

    categoryPage.clickBuyBtn(product.title[1]);
    
    productCartPage.checkAddedProducts(product.title[0], product.title[1])
    productCartPage.checkTotalPrice();
    productCartPage.deleteBtn();
    productCartPage.checkDeletedProduct(product.title[1]);
  });

  it('should provide an ability to search the item', () => {

    homePage.checkHomeUrl();

    searchPage.clickSearchBtn();
    searchPage.typeSearchField(product.search);
    searchPage.checkResultSearching(product.search);
  });

  it('should provide the ability to add feedback to the product', () => {

    homePage.checkHomeUrl();
    homePage.clickOnProduct(product.title[2]);
    
    productDetailsPage.addCommentBtn();

    commentForm.clickOnStar();
    commentForm.typeName(user.name);
    commentForm.typeComment(user.comment);
    commentForm.clickSubmitCommentBtn();
    commentForm.checkAddingComment();
  });
});
