import { WebsocketPage } from './app.po';

describe('websocket App', function() {
  let page: WebsocketPage;

  beforeEach(() => {
    page = new WebsocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
