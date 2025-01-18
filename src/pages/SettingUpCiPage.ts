import { MainPage } from './MainPage'

export class SettingUpCiPage extends MainPage {
    public readonly isSettingUpCiPageDisplayedSelector = '//header //h1[text()="Setting up CI"]';
    private readonly sectionSettingUpCiSelector = '//li //a[text()="Setting up CI"]';

    public async openSectionSettingUpCi() {
        await this.page.click(this.sectionSettingUpCiSelector);
    }

}