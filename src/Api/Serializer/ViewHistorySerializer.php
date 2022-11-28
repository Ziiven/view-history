<?php
namespace Ziven\viewHistory\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;

class ViewHistorySerializer extends AbstractSerializer{
    protected $type = 'ziven_view_history';

    protected function getDefaultAttributes($viewHistory){
        return [
            'id' => $viewHistory->id,
            'assigned_at' => $viewHistory->assigned_at,
        ];
    }

    protected function discussion($viewHistory){
        return $this->hasOne($viewHistory, DiscussionSerializer::class);
    }

    protected function user($viewHistory){
        return $this->hasOne($viewHistory, BasicUserSerializer::class);
    }
}
