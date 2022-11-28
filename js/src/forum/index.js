import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import addHeaderMenu from './addHeaderMenu';
import ViewHistoryListState from './ViewHistoryListState';
import ViewHistory from './models/ViewHistory';

app.initializers.add('ziven-view-history', () => {
  app.store.models.viewHistory = ViewHistory;
  app.viewHistory = new ViewHistoryListState(app);
  addHeaderMenu();
});