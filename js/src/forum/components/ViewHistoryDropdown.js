import NotificationsDropdown from 'flarum/common/components/NotificationsDropdown';
import ViewHistoryList from './ViewHistoryList';

export default class ViewHistoryDropdown extends NotificationsDropdown {
  static initAttrs(attrs) {
    attrs.label = app.translator.trans('ziven-view-history.forum.view-history');
    attrs.icon = 'fas fa-history';
    super.initAttrs(attrs);
  }

  getMenu() {
    return (
      <div className={'Dropdown-menu ' + this.attrs.menuClassName} onclick={this.menuClick.bind(this)}>
        {this.showing ? ViewHistoryList.component({ state: this.attrs.state }) : ''}
      </div>
    );
  }

  goToRoute() {
    m.route.set(app.route('viewHistory'));
  }

  getUnreadCount() {
    return 0;
  }

  getNewCount() {
    return this.getUnreadCount();
  }
}
