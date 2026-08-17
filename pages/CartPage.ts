import { test, expect, type Page, type Locator } from '@playwright/test';
import { BasePage } from '../utils/BasePage';


export class CartPage extends BasePage {

    cartBT: Locator;
    productDecrease: Locator;
    checkOutPageBt:Locator;


    constructor(page: Page) {
        super(page);

        this.cartBT = page.locator("//span[@id='nav-cart-count']");
        this.productDecrease = page.locator("//span[@class='a-icon a-icon-small-remove']");
        this.checkOutPageBt=page.locator("//input[@name='proceedToRetailCheckout']");
    }

    async clickOnCartBT() {
        await this.click(this.cartBT);
    }

    async clickOnProductDecrease() {
        await this.click(this.productDecrease);
    }

    async clickOnCheckOutPageBt(){
       await  this.click(this.checkOutPageBt);

    }

}


/// mcp server , playwright agents, rag pipeline, self healing, claude , co-pilot , prompt engineering
/// write 30-30 words for each word
/// how to do payment testing in crm on qa envirenement
// paypal, strip -- payment getway === how to test as a qa tester
// splunk -- app-- devloper ke code ka log dikega 