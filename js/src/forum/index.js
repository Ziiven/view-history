import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import addHeaderMenu from './addHeaderMenu';
import addPreferences from './addPreferences';
import ViewHistoryListState from './ViewHistoryListState';
import ViewHistory from './models/ViewHistory';
import ViewHistoryPage from './components/ViewHistoryPage';

app.initializers.add('ziven-view-history', () => {
  app.store.models.viewHistory = ViewHistory;
  app.routes.viewHistory = { path: '/viewHistory', component: ViewHistoryPage };
  app.viewHistory = new ViewHistoryListState(app);
  addHeaderMenu();
  addPreferences();
});