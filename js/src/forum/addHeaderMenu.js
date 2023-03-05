import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import ViewHistoryDropdown from './components/ViewHistoryDropdown';

export default function () {
  extend(HeaderSecondary.prototype, 'items', function (items) {
    if(!app.session.user){
      return;
    }

    if(app.session.user.preferences().viewHistoryEnable){
      items.add('viewHistory', <ViewHistoryDropdown state={app.viewHistory} />, 20);
    }
  });
}
