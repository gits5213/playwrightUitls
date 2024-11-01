/* global wd, ec, by */

const utils = {
    getAppUrl() {
      return process.env.QA_URL;
    },

    navigateToURL(url) {
      wd.get(url);
    },
  
    navigateToCurrentUrl() {
      return wd.getCurrentUrl();
    },
  
    getCurrentUrl() {
      return wd.getCurrentUrl().then(currentURL => {
        return currentURL;
      });
    },
  
    getTitle() {
       wd.getTitle().then(title => {
        return title;
      });
    },
  
    getText() {
      return wd.getText().then(text => {
        return text;
      });
    },
  
    getTitleContains(partialTitle) {
      wd.wait(ec.titleContains(partialTitle), 30000);
    },
  
    getURLContains(partialTitle) {
      wd.wait(ec.urlContains(partialURL), 30000);
    },
  
    waitForVisible(pageElement) {
      wd.wait(ec.visibilityOf(pageElement), 30000);
    },
  
    elementToBeClickable(pageElement) {
      wd.wait(ec.elementToBeClickable(pageElement), 30000);
    },
  
    presenceOf(webElement) {
      wd.wait(ec.presenceOf(webElement), 30000);
    },
  
    elementToBeSelected(webElement) {
      wd.wait(ec.elementToBeSelected(webElement), 30000);
    },
  
    getURLContains(partialURL) {
      wd.wait(ec.urlContains(partialURL), 30000);
    },
    switchToNewTab(indexNumber) {
        wd.getAllWindowHandles().then(handles => {
          const tabWindow = handles[indexNumber];
          wd.switchTo().window(tabWindow);
          wd.sleep(2000);
        });
      },
      
    getDropDownSelectedText: dropDownById => {
      var dataValue = wd
        .findElement(by.id(dropDownById))
        .getAttribute("data-value");
      return wd.findElement(by.id(dataValue)).getText();
    }
  };
  module.exports = utils;

import { expect } from '@playwright/test';
exports.utils = class utils {
    
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url){
        await this.page.goto(url)   
    }

    async clickOnElement(identifier){
        await this.page.locator(identifier).click();
    }

    async mouseHover(identifier){
        await this.page.locator(identifier).hover();
    }

    async fillInputBox(identifier, text){
        await this.page.locator(identifier).fill(text);
    }

    async dblClickOnElement(identifier){
        await this.page.locator(identifier).dblclick();
    }

    async focusOnElement(identifier){
        await this.page.locator(identifier).focus();
    }

    async verifyTitle(title){
        await expect(page).toHaveTitle(title);
    }

    async verifyContainsUrl(url){
        await expect(page).toHaveURL(url);
    }

    async verifyToHaveText(identifier, expectedText){
        await expect.soft(this.page.locator(identifier)).toHaveText(expectedText);
    }

    async verifyToHaveVlue(identifier, inputFieldText){
        await expect.soft(this.page.locator(identifier)).toHaveValue(inputFieldText);
    }

    async verifyContainText(identifier, expectedText){
        await expect.soft(this.page.locator(identifier)).toContainText(expectedText);
    }

    async verifyToHaveAttrbutes(attr, value){
        await expect.soft(this.page.locator(identifier)).toHaveAttribute(attr, value);
    }

    async verifyToHaveCss(key, value){  
        await expect.soft(this.page.locator(identifier)).toHaveCSS(key, value);
    }

    async verifyElementIsVisible(identifier){
        await expect.soft(this.page.locator(identifier)).isVisible();
    }

    async verifyRadioBtnChecked(identifier){
        await expect.soft(this.page.locator(identifier)).toBeChecked();
    }

    async verifyTextBoxEditable(identifier){
        await expect.soft(this.page.locator(identifier)).toBeEditable();
    }

    async verifyTextBoxEnabled(identifier){
        await expect.soft(this.page.locator(identifier)).toBeEnabled();
    }

    async verifyElementFocused(identifier){
        await expect.soft(this.page.locator(identifier)).toBeFocused();
    }


}
  
