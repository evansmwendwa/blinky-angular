import { BlinkPage } from './app.po';

describe('blink App', function() {
  let page: BlinkPage;

  beforeEach(() => {
    page = new BlinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
