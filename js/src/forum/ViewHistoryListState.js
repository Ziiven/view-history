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
        this.cache = viewHistory.sort((a, b) => b.id() - a.id());
      })
      .catch(() => {})
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
