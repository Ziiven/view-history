import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import humanTime from 'flarum/common/helpers/humanTime';
import username from 'flarum/common/helpers/username';
import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';
import icon from 'flarum/common/helpers/icon';

export default class ViewHistoryList extends Component {
  oncreate(vnode){
    super.oninit(vnode);
    this.state = this.attrs.state;
  }

  deleteAll(e) {
    if (!confirm(app.translator.trans('ziven-view-history.forum.view-history-delete-all-confirmation'))){ return; }

    let viewHistoryList = app.store.all('viewHistory');

    if(viewHistoryList.length>0){
      app.request({
          method: 'DELETE',
          url: app.forum.attribute('apiUrl') + '/viewHistory/deleteAll',
        })
        .then(() => {
          app.store.data.viewHistory = [];
          m.redraw();
        });
    }
  }

  view(){
    if(!this.state){ return; }

    let viewHistoryList = app.store.all('viewHistory');
    viewHistoryList.sort((a, b) => new Date(b.assignedAt()) - new Date(a.assignedAt()));

    let avatarWithFrame,usernameWithColor;
    if('ziiven-decoration-store' in flarum.extensions){
      const { components } = require('@ziiven-decoration-store');
      avatarWithFrame = components.avatarWithFrame;
      usernameWithColor = components.usernameWithColor;
    }

    return (
      <div className="NotificationList">
        <div className="NotificationList-header">
          <h4 className="App-titleControl App-titleControl--text">{app.translator.trans('ziven-view-history.forum.view-history')}</h4>
          <div class="App-primaryControl">
            <Button
                data-container="body"
                icon="fas fa-trash-alt"
                className="Button Button--link Button--icon Alert-dismiss"
                onclick={this.deleteAll.bind(this)}
              />
          </div>
        </div>
        <div className="NotificationList-content">
          <ul className="NotificationGroup-content">
            {viewHistoryList.length ? (
              viewHistoryList.map((viewHistory) => {
                const post = viewHistory.post();
                const user = post.user();
                
                return (
                  <li>
                    <Link
                      href={app.route.post(post)}
                      className="Notification"
                      onclick={(e) => {
                        e.redraw = false;
                      }}
                    >
                      {avatarWithFrame?avatarWithFrame(user):avatar(user)}
                      {icon('fas', { className: 'Notification-icon' })}
                      <span className="Notification-content">
                        {app.translator.trans('flarum-flags.forum.flagged_posts.item_text', {
                          username: usernameWithColor?usernameWithColor(post.user()):username(post.user()),
                          em: <em />,
                          discussion: post.discussion().title(),
                        })}
                      </span>
                      {humanTime(viewHistory.assignedAt())}
                      <div className="Notification-excerpt">{post.contentPlain()}</div>
                    </Link>
                  </li>
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
