import { expect, Locator, Page } from '@playwright/test';
export class CommonPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async gotoUrl(url: string) {
    await this.page.goto(url);
  }

  async clickLocatorElement(element: string) {
    await this.page.locator(element).click();
  }

  async fillLocatorElement(element: string, value: string) {
    await this.page.locator(element).fill(value);
  }

  async verifyToBeVisible(element: string) {
    await expect(this.page.locator(element)).toBeVisible();
  }
}
