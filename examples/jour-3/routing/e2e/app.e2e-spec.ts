import { Jour3Page } from './app.po';

describe('jour3 App', function() {
  let page: Jour3Page;

  beforeEach(() => {
    page = new Jour3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
