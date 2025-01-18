import { test, expect } from '@playwright/test';
import { SettingUpCiPage } from '../pages/SettingUpCiPage';

test('Viewing Installation page', async ({ page }) => {
    const settingUpCiPage = new SettingUpCiPage(page);

    await settingUpCiPage.openMainPage();
    await settingUpCiPage.clickGetStartedBtn();
    await settingUpCiPage.openSectionSettingUpCi();

    await expect(
        page.locator(settingUpCiPage.isSettingUpCiPageDisplayedSelector)
    ).toBeVisible();
})