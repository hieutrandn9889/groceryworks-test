import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './pages/playwrightPage';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.gotoPage();
  await playwrightDev.getStarted();
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.gotoPage();
});
