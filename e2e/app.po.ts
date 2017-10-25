import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.css('app-root .jumbotron h1')).getText();
  }

  countContactList() {

    let contacts = element.all(by.css("app-contact-list .table-striped tbody tr"));
    return contacts;
  }
}
