import { KidzQuiPage } from './app.po';

describe('kidz-qui App', () => {
  let page: KidzQuiPage;

  beforeEach(() => {
    page = new KidzQuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
