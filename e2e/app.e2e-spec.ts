import { MyvoicengPage } from './app.po';

describe('myvoiceng App', () => {
  let page: MyvoicengPage;

  beforeEach(() => {
    page = new MyvoicengPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
