export default class ViewHistoryListState {
  constructor(app) {
    this.app = app;
    this.loading = false;
  }

  load() {
    this.loading = true;
    m.redraw();

    this.app.store
      .find('viewHistory')
      .then((viewHistory) => {
        this.loading = false;
        m.redraw();
      })
      .catch(() => {});
  }
}
