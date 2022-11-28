<?php

namespace Ziven\viewHistory\Model;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Discussion\Discussion;
use Flarum\User\User;

class ViewHistory extends AbstractModel{
    use ScopeVisibilityTrait;
    protected $table = 'ziven_view_history';
    protected $fillable = ['user_id','discussion_id','assigned_at'];

    public function discussion(){
        return $this->belongsTo(Discussion::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
