import { NojsPage } from './app.po';

describe('nojs App', function() {
  let page: NojsPage;

  beforeEach(() => {
    page = new NojsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
