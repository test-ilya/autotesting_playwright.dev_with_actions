import { test, expect } from '@playwright/test';
import { InstallationPage } from '../pages/InstallationPage';

test('Viewing Installation page', async ({ page }) => {
    const installationPage = new InstallationPage(page);

    await installationPage.openMainPage();
    await installationPage.clickGetStartedBtn();

    await expect(
        page.locator(installationPage.isInstallationPageDisplayedSelector)
    ).toBeVisible();
})