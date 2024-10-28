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
  