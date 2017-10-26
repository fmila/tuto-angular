import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('tuto-contact-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message on home page', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Hello, welcome!');
  });

  it('should display contact list and can navigate to edit page', () => {
    page.navigateTo('/contact/list');
    let contacts = page.countContactList();
    expect(contacts.count()).toBeGreaterThan(1);
    let tr = element.all(by.css("app-contact-list .table-striped tbody tr")).first();
    let td = tr.all(by.css("td a")).first();
    td.click().then(v => {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/contact/edit');
      }
    );
  });
});
