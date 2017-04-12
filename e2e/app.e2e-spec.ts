import { MobxPipesPage } from './app.po';

describe('mobx-pipes App', () => {
  let page: MobxPipesPage;

  beforeEach(() => {
    page = new MobxPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
