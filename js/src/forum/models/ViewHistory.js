import Model from 'flarum/common/Model';
import Discussion from 'flarum/common/models/Discussion';
import User from 'flarum/common/models/User';

export default class ViewHistory extends Model {
  type() {
    return Model.attribute<string>('type').call(this);
  }

  createdAt() {
    return Model.attribute('createdAt', Model.transformDate).call(this);
  }

  discussion() {
    return Model.hasOne<Discussion>('discussion').call(this);
  }
  
  user() {
    return Model.hasOne<User | null>('user').call(this);
  }
  
  id() {
    console.log("eeeee");
  }
}
