<?php

use Flarum\Extend;
use Flarum\Extend\ApiController;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Discussion\Discussion;

use Ziven\viewHistory\Listeners\DiscussionViewedHandler;
use Ziven\viewHistory\Api\Controller\ListHistoryController;
use Ziven\viewHistory\Api\Controller\DeleteAllHistoryController;
use Ziven\viewHistory\Api\Model\ViewHistory;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/viewHistory', 'viewHistory'),
    (new Extend\Locales(__DIR__ . '/locale')),

    (new ApiController(ShowDiscussionController::class))
        ->prepareDataForSerialization(DiscussionViewedHandler::class),

    (new Extend\Routes('api'))
        ->get('/viewHistory', 'viewHistory.index', ListHistoryController::class)
        ->delete('/viewHistory/deleteAll', 'viewHistory.delete.all', DeleteAllHistoryController::class),

    (new Extend\User())
        ->registerPreference('viewHistoryEnable', 'boolVal', true),
];

return $extend;