import { Page } from '@playwright/test';

export abstract class MainPage {
    private readonly getStartedBtnSelector = '//a[@class="getStarted_Sjon"][text()="Get started"]'

    constructor (readonly page: Page) {};

    public async openMainPage() {
        await this.page.goto('/');
    }

    public async clickGetStartedBtn() {
        await this.page.click(this.getStartedBtnSelector);
    }

}