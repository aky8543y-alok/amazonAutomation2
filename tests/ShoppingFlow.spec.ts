import { expect } from "@playwright/test"
import { test } from '../Fixture/BaseFixture'


test("verify Shopping Flow ", async ({ page, homePage, productPage, cartPage }) => {


    await homePage.hitBrowser();
    

    await homePage.clickOnContinueS();

    await homePage.clickOnDissmissBT();

    await homePage.signInProcess();

    await homePage.SearchProduct();

    await productPage.clickOnBuyProduct();

    await productPage.clickOnAddTOCart();

    await cartPage.clickOnCartBT();

    await cartPage.clickOnProductDecrease();
    await cartPage.clickOnProductDecrease();

    await cartPage.clickOnCheckOutPageBt();

    page.close();

});