import { extend, override } from 'flarum/common/extend';
import FieldSet from 'flarum/common/components/FieldSet';
import SettingsPage from 'flarum/common/components/SettingsPage';
import Switch from 'flarum/common/components/Switch';
import ItemList from 'flarum/common/utils/ItemList';

export default function () {
  extend(SettingsPage.prototype, 'settingsItems', function (items) {
    items.add(
      'viewHistory',
      FieldSet.component(
        {
          label: app.translator.trans('ziven-view-history.forum.view-history'),
          className: 'Settings-viewHistory',
        },
        this.viewHistoryItems().toArray()
      )
    );
  });

  SettingsPage.prototype['viewHistoryItems'] = function () {
    const items = new ItemList();

    items.add(
      'viewHistory-enable',
      Switch.component(
        {
          state: this.user.preferences().viewHistoryEnable,
          onchange: (value) => {
            this.viewHistoryEnableLoading = true;

            this.user.savePreferences({ viewHistoryEnable: value }).then(() => {
              this.viewHistoryEnableLoading = false;
              m.redraw();
            });
          },
          loading: this.viewHistoryEnableLoading,
        },
        app.translator.trans('ziven-view-history.forum.view-history-enable')
      )
    );

    return items;
  };
}
