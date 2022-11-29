import Model from 'flarum/common/Model';
import type Discussion from 'flarum/common/models/Discussion';
import type User from 'flarum/common/models/User';
import type Post from 'flarum/common/models/Post';

export default class ViewHistory extends Model {
  assignedAt() {
    return Model.attribute<string>('assigned_at').call(this);
  }
  discussion() {
    return Model.hasOne<Discussion>('discussion').call(this);
  }
  post() {
    return Model.hasOne<Post>('post').call(this);
  }
  user() {
    return Model.hasOne<User | null>('user').call(this);
  }
}
