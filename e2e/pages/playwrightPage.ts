import PlaywrightUI from '../interfaces/playwrightUI';
import { CommonPage } from '../commons/common';
export class PlaywrightDevPage extends CommonPage {
  async gotoPage() {
    await this.gotoUrl('https://kitchen.applitools.com/ingredients/alert');
  }

  async getStarted() {
    await this.clickLocatorElement(PlaywrightUI.ALERT);
  }
}
