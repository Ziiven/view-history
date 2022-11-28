export default class ViewHistoryListState {
  constructor(app) {
    this.app = app;
    this.loading = false;
    this.cache = [];
  }

  load() {
    this.loading = true;
    m.redraw();

    this.app.store
      .find('viewHistory')
      .then((response) => {
        this.cache = response.payload.data;
      })
      .catch(() => {})
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
