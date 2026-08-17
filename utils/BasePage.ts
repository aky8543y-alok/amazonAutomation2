import { test, expect, type Page, type Locator,type BrowserContext } from '@playwright/test';


export class BasePage {


    page: Page;



    constructor(page: Page) {
        this.page = page;

    }



    async click(locator: Locator): Promise<void> {
        return await locator.click();
    }

    /**
     * This method is used to perform a double click on a web element.
    
    * @param element - Locator of the element to be double clicked.
    * @returns Nothing.
    */
    async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }


    async rightClick(locator: Locator): Promise<void> {
        await locator.click({ button: 'right' });
    }


    async forceClick(locator: Locator): Promise<void> {
        await locator.click({ force: true });
    }

    async clickByIndex(locator: Locator, index: number): Promise<void> {
        await locator.nth(index).click();
    }

    // =================================================================
    // TextBox Actions
    //==================================================================


    async setValue(locator: Locator, value: string): Promise<void> {
        //await locator.click();
        return await locator.fill(value);
    }


    //this type method can type or append value in textbox and text area
    async typeValue(locator: Locator, value: string): Promise<void> {
        return await locator.pressSequentially(value);
    }

    async clearValue(locator: Locator): Promise<void> {
        await locator.clear();
    }

    async appendText(locator: Locator, value: string): Promise<void> {
        await locator
    }


    //================================================================    
    //KEYBoard Actions
    //================================================================


    async press(locator: Locator, key: string): Promise<void> {
        await locator.press(key);
    }

    async pressEnter(locator: Locator): Promise<void> {
        await locator.press('Enter');
    }

    async pressTab(locator: Locator): Promise<void> {
        await locator.press('Tab');
    }


    //===================================================================
    //Element Info
    //===================================================================

    async getVisibleText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }


    async getText(locator: Locator): Promise<string | null> {
        return await locator.textContent();
    }


    async getAllVisibleInnerTexts(locator: Locator): Promise<string[]> {
        return await locator.allInnerTexts();
    }

    /*
        async getAllText(element: Locator): Promise<string[]> {
            let elementArray: Locator[] = await element.all();
            for (let element of elementArray) {
                let text: string | null = await element.textContent();
            }
            return await element.allTextContents();
    
        }
    */

    async getAllTexts(locator: Locator): Promise<string[]> {
        return await locator.allTextContents();

    }







    async getInputValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }



    async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
        return await locator.getAttribute(attribute);
    }


    async getElementsCount(locator: Locator): Promise<number> {
        return await locator.count();
    }


    //========================================================================
    //DropDown
    //========================================================================


    async selectByValue(locator: Locator, value: string): Promise<void> {
        await locator.selectOption({ value: value });
    }


    ///select tag > option tag- value attribute ,innerText
    async selectByLabel(locator: Locator, levelValue: string) {
        await locator.selectOption({ label: levelValue });
    }


    async selectByIndex(locator: Locator, indexNumber: number): Promise<void> {
        await locator.selectOption({ index: indexNumber });
    }


    //===============================================================
    //CheckBox & Radio
    //===============================================================

    async check(locator: Locator): Promise<void> {
        await locator.check();

    }


    async uncheck(locator: Locator): Promise<void> {
        await locator.uncheck();
    }




    async selectRadio(locator: Locator): Promise<void> {
        await locator.check();
    }


    //==================================================================
    //Mouse Action
    //====================================================================


    async mouseOver(locator: Locator): Promise<void> {
        await locator.hover();
    }


    //Drag and Drop
    async dragAndDrop(source: string, target: string): Promise<void> {
        await this.page.locator(source).dragTo(this.page.locator(target));

    }

    //==========================================================================
    //Multiple Element
    //===================================================================


    async clickAll(locator: Locator): Promise<void> {
        const element = locator;
        const count = await element.count();

        for (let i = 0; i < count; i++) {
            await element.nth(i).click();
        }
    }


    async getTextByIndex(locator: Locator, index: number): Promise<string> {
        return await locator.nth(index).innerText();
    }


    async getAttributeByIndex(locator: Locator, index: number, attribute: string): Promise<string | null> {
        return await locator.nth(index).getAttribute(attribute);

    }





    //=================================================================
    //Windows Tab
    //=================================================================

    async getallPages(): Promise<Page[]> {
        let context: BrowserContext = this.page.context();
        let allPages: Page[] = context.pages();
        return allPages;
    }


    async getPageCount(): Promise<number> {
        let pageCount: number = this.page.context().pages().length;
        return pageCount;
    }


    async switchToTab(index: number): Promise<Page | undefined> {
        const pages: Page[] = this.page.context().pages();
        let newPage: Page | undefined = pages[index];
        return newPage;
    }

    async getLatestTab(): Promise<Page> {
        const pages: Page[] = this.page.context().pages();
        let latestPage: Page = pages[pages.length - 1]!;
        return latestPage;
    }


    async closeCurrentTabWindow(): Promise<void> {
        await this.page.close();
    }


    //=============================================================
    //ALARTS
    //==============================================================

    async acceptAlart(): Promise<void> {
        this.page.on('dialog', async dialog => {
            await dialog.accept();

        })
    }


    async dismissAlart(): Promise<void> {
        this.page.on('dialog', async dialog => {
            await dialog.dismiss();

        })
    }


    async acceptPrompt(text: string): Promise<void> {
        this.page.on('dialog', async dialog => {
            await dialog.accept(text);
        })
    }


    async getAlertMessage(text: string): Promise<string> {
        this.page.on('dialog', async dialog => {
            return await dialog.message();
        })
        return "";
    }


    //===============================================================
    //Scrolling
    //================================================================


    async scrollToElement(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();

    }

    async scrollToTop(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }


    async scrollToBottom(): Promise<void> {
        await this.page.evaluate(() =>
            window.scrollTo(0, document.body.scrollHeight));
    }




    async scrollBy(x: number, y: number): Promise<void> {
        await this.page.evaluate(
            ({ x, y }) => window.scrollBy(x, y),
            { x, y }
        );
    }



    //==========================<BROWSER METHODS>========================
    // Navigate URL
    //async hitURl(url: string) {
       // await this.page.goto(url);
    //}

    async hitURl(url: string) {
    await this.page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
}

    // Refresh Page
    async refreshPage() {
        await this.page.reload();
    }

    // Go Back
    async goBack() {
        await this.page.goBack();
    }

    // Go Forward
    async goForward() {
        await this.page.goForward();
    }

    // Get Page Title
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    // Get Current URL
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }


    //=======================<SCREENSHORT>=======================
    // Screenshot
    async takeElementScreenshot(locator: Locator, path: string) {
        await locator.screenshot({ path: path });
    }

    // Take Page Screenshot
    async takePageScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path: path, fullPage: true });
    }







    //==================================================================
    //File uplaoads Methods
    //==========================================================

    /**
     *single file upload
     * @param element -locator
     * @param filePath -string
     */
    async uploadFile(element: Locator, filePath: string) {
        await element.setInputFiles(filePath);
    }


    async uploadMultipleFile(element: Locator, filePath: string[]) {
        await element.setInputFiles(filePath);
    }





}



 



