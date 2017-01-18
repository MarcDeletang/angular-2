import { J2Page } from './app.po';

describe('j2 App', function() {
  let page: J2Page;

  beforeEach(() => {
    page = new J2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
