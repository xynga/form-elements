import { AppPage } from './app.po';

describe('testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should check all options for dropdown', () => {
    page.navigateTo();
    page.clickDropdownByNum(0);
    page.checkSelectedDropDown().getText().then(data =>
    {
      expect(data).toContain('Beef');
    });
    page.clickDropdownByNum(1);
    page.checkSelectedDropDown().getText().then(data =>
    {
      expect(data).toContain('Chicken');
    });
    page.clickDropdownByNum(2);
    page.checkSelectedDropDown().getText().then(data =>
    {
      expect(data).toContain('Pork');
    });
  });

  it('tests all the radio button options', () => {
    page.getRadioOption(0).click();
    page.getRadioButton().getAttribute('ng-reflect-selected').then(data => {
      expect(data).toEqual('0');
    });
    page.getRadioOption(1).click();
    page.getRadioButton().getAttribute('ng-reflect-selected').then(data => {
      expect(data).toEqual('1');
    });
    page.getRadioOption(2).click();
    page.getRadioButton().getAttribute('ng-reflect-selected').then(data => {
      expect(data).toEqual('2');
    });
  });
});
