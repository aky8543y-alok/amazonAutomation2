import { test, expect, type Page, type Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";
import commonData from "../TestData/CommonData.json"


export class ProductPage extends BasePage {

    clickOnProduct: Locator;
    addToCart:Locator;




    constructor(page: Page) {
        super(page);


        this.clickOnProduct = page.locator("//span[contains(text(),'Pyle Marine Speakers, Boat Speakers, Waterproof Speakers,')]").first();
        this.addToCart=page.locator("//input[@id='add-to-cart-button']");




    }



     async clickOnBuyProduct() {

        await this.click(this.clickOnProduct);
    }

    async clickOnAddTOCart(){
        await this.click(this.addToCart);
    }

}