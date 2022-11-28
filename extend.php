<?php

use Flarum\Extend;
use Flarum\Extend\ApiController;
use Flarum\Api\Controller\ShowDiscussionController;

use Ziven\viewHistory\Listeners\DiscussionViewedHandler;
use Ziven\viewHistory\Api\Controller\ListHistoryController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/viewHistory', 'viewHistory'),
    (new Extend\Locales(__DIR__ . '/locale')),

    (new ApiController(ShowDiscussionController::class))
        ->prepareDataForSerialization(DiscussionViewedHandler::class),

    (new Extend\Routes('api'))
        ->get('/viewHistory', 'viewHistory.index', ListHistoryController::class),
];

return $extend;