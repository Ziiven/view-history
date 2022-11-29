import Page from 'flarum/common/components/Page';
import ViewHistoryList from './ViewHistoryList';

export default class ViewHistoryPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.history.push('viewHistory');
    app.viewHistory.load();

    this.bodyClass = 'App--viewHistory';
  }

  view() {
    return (
      <div className="ViewHistoryPage">
        <ViewHistoryList state={app.viewHistory}></ViewHistoryList>
      </div>
    );
  }
}
