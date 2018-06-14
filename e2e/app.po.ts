import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickDropdownByNum(num){
    let allOptions = element.all(by.tagName('option'));
    let currentOption = allOptions.get(num);
    currentOption.click();
  }

  checkSelectedDropDown(){
    return element(by.css('b'));
  }

  getRadioOption(num){
    let allOptions = element.all(by.css('au.option'));
    return allOptions.get(num);
  }

  getRadioButton(){
    return element(by.css('radio-button'));
  }
}
