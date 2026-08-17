import { test as base } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';



type PageFixture = {

    homePage: HomePage;
    productPage: ProductPage;
    cartPage:CartPage;
    

}

export const test = base.extend<PageFixture>({

    homePage: async ({ page }, use) => {
        let hp: HomePage = new HomePage(page);
        await use(hp);
    },

    productPage: async ({ page }, use) => {
        let productPage: ProductPage = new ProductPage(page);
        await use(productPage);
    },

    cartPage: async ({ page }, use) => {
        let cartPage:CartPage  = new CartPage(page);
        await use(cartPage);
    },

    //  checkOutPage: async ({ page }, use) => {
    //     let checkOutPage:CheckoutPage  = new CheckoutPage(page);
    //     await use(cartPage);
    // }



})