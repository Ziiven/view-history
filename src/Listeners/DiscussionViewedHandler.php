<?php

namespace Ziven\viewHistory\Listeners;

use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Discussion\Discussion;
use Flarum\Settings\SettingsRepositoryInterface;
use Carbon\Carbon;
use Illuminate\Contracts\Events\Dispatcher;
use Ziven\viewHistory\Model\ViewHistory;

class DiscussionViewedHandler
{
    private $settings;
    private $events;

    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events) {
        $this->settings = $settings;
        $this->events = $events;
    }

    public function __invoke(ShowDiscussionController $controller, Discussion $discussion, $request, $document){
        $viewHistoryEnable = $request->getAttribute('actor')->getPreference("viewHistoryEnable");

        if($viewHistoryEnable){
            $currentUserID = $request->getAttribute('actor')->id;
            $discussionID = $discussion->id;
            $postID = $discussion->first_post_id;
            $matchCondition = ['user_id'=>$currentUserID,'discussion_id'=>$discussionID];
            
            ViewHistory::updateOrCreate($matchCondition,['assigned_at'=>Carbon::now('Asia/Shanghai'),'post_id'=>$postID]);
        }
    }
}