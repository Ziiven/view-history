<?php
namespace Ziven\viewHistory\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\PostSerializer;

class ViewHistorySerializer extends AbstractSerializer{
    protected $type = 'viewHistory';

    protected function getDefaultAttributes($viewHistory){
        return [
            'id' => $viewHistory->id,
            'assigned_at' => $viewHistory->assigned_at,
            'discussion_id' => $viewHistory->discussion_id,
            'post_id' => $viewHistory->post_id,
            'user_id' => $viewHistory->user_id,
            'owner_id' => $viewHistory->discussion->user_id,
        ];
    }

    protected function discussion($viewHistory){
        return $this->hasOne($viewHistory, DiscussionSerializer::class);
    }

    protected function user($viewHistory){
        return $this->hasOne($viewHistory, BasicUserSerializer::class);
    }

    protected function post($viewHistory){
        return $this->hasOne($viewHistory, PostSerializer::class);
    }
}
