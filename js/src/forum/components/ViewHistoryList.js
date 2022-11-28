import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import humanTime from 'flarum/common/helpers/humanTime';
import avatar from 'flarum/common/helpers/avatar';

export default class ViewHistoryList extends Component {
  oncreate(vnode){
    super.oninit(vnode);
    this.state = this.attrs.state;
  }

  view(){
    if(!this.state){ return; }

    const viewHistoryList = this.state.cache || [];

    return (
      <div className="NotificationList">
        <div className="NotificationList-header">
          <h4 className="App-titleControl App-titleControl--text">{app.translator.trans('ziven-view-history.forum.view-history')}</h4>
        </div>
        <div className="NotificationList-content">
          <ul className="NotificationGroup-content">
            {viewHistoryList.length ? (
              viewHistoryList.map((viewHistory) => {
                // const tt = viewHistory.user();
                // const post = viewHistory.discussion();
                console.log(viewHistory.user());

                return (
                  <div>
                    {humanTime(viewHistory.attributes.assigned_at)}
                  </div>
                );
              })
            ) : !this.state.loading ? (
              <div className="NotificationList-empty">{app.translator.trans('ziven-view-history.forum.view-history-empty')}</div>
            ) : (
              LoadingIndicator.component({ className: 'LoadingIndicator--block' })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
