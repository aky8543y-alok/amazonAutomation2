import { test, expect, type Page, type Locator } from '@playwright/test';
import { BasePage } from '../utils/BasePage';
import commonData from "../TestData/CommonData.json" with {type: 'json'};



export class HomePage extends BasePage {

    dismissBT: Locator;

    signIn: Locator;
    continueS: Locator;
    signInBT: Locator;
    mobileNumber: Locator;
    continueBT: Locator;
    selectCouteryCode: Locator;
    searchBox: Locator;
    counteryCode: Locator;
    passwordBox: Locator;

    clickOnSignBt: Locator;
    selectProductSugeSearch: Locator;
    clickOnSearchBT: Locator;



    constructor(page: Page) {
        super(page);

        this.dismissBT = page.locator("//input[@data-action-type='DISMISS']")


        this.signIn = page.locator("//span[@id='nav-link-accountList-nav-line-1']")
        this.continueS = page.locator("//button[contains(text(),'Continue')]");
        this.signInBT = page.locator("//span[@class='nav-action-inner']");
        this.mobileNumber = page.locator("//input[@id='ap_email_login']");
        this.continueBT = page.locator("//input[@class='a-button-input']");
        this.selectCouteryCode = page.locator("//span[@class='a-dropdown-prompt']");
        this.searchBox = page.locator("//input[@id='twotabsearchtextbox']");
        this.counteryCode = page.locator("//a[@id='claim-input-dropdown-select-element_107']");
        this.passwordBox = page.locator("//input[@id='ap_password']");
        this.clickOnSignBt = page.locator("//input[@id='signInSubmit']");
        this.selectProductSugeSearch = page.locator("//div[@id='sac-suggestion-row-2']");
        this.clickOnSearchBT = page.locator("//div[@class='nav-search-submit nav-sprite']");
    }


    // async clickOnContinueS() {
    //     await this.click(this.continueS);
    // }


 async clickOnContinueS(): Promise<void> {

        try {

            await this.continueBT.waitFor({
                state: "visible",
                timeout: 3000
            });

            await this.click(this.continueBT);

            console.log(
                "Continue button is visible and clicked."
            );

        } catch {

            console.log(
                "Continue button is not visible. Skipping Continue."
            );
        }
    }


    async hitBrowser() {
        await this.hitURl("https://www.amazon.com/");
    }

    // async clickOnDissmissBT(){
    //  await this.click(this.dismissBT);
    // }

    async signInProcess() {
        await this.mouseOver(this.signIn);
        await this.click(this.signInBT);
        await this.setValue(this.mobileNumber, commonData.signIn.mobileNumber);

        await this.page.waitForTimeout(10000);

        await this.click(this.selectCouteryCode);
        //await this.page.waitForTimeout(10000);
        await this.click(this.counteryCode);
        await this.click(this.continueBT);

        await this.setValue(this.passwordBox, commonData.signIn.password);
        await this.click(this.clickOnSignBt);

    }


    async SearchProduct() {
        await this.setValue(this.searchBox, commonData.searchBoxData.serchBoxValue);
        await this.click(this.selectProductSugeSearch);

        await this.click(this.clickOnSearchBT);
    }


    async clickOnDissmissBT(): Promise<void> {

        if (await this.dismissBT.isVisible()) {

            await this.dismissBT.click();

            console.log("Dismiss button was visible and clicked.");

        }
        else {

            console.log(
                "Dismiss button was not visible. Continuing test..."
            );
        }





    }
}