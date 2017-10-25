import { AppPage } from './app.po';

describe('tuto-contact-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message on home page', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Hello, welcome!');
  });

  it('should display contact list', () => {
    page.navigateTo('/contact/list');
    let contacts = page.countContactList();
    expect(contacts.count()).toEqual(4);
  })
});
