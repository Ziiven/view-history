<?php

namespace Ziven\viewHistory\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

use Ziven\viewHistory\Model\viewHistory;
use Ziven\viewHistory\Api\Serializer\ViewHistorySerializer;

class ListHistoryController extends AbstractListController{
    public $serializer = ViewHistorySerializer::class;
    public $include = [
        'user',
        'discussion',
        'discussion.user',
    ];

    protected function data(ServerRequestInterface $request, Document $document){
        $actor = $request->getAttribute('actor');
        $include = $this->extractInclude($request);
        $viewHistory = viewHistory::whereVisibleTo($actor)->where('user_id', $actor->id)->orderBy("assigned_at","desc")->get();

        $this->loadRelations($viewHistory, $include);
        // app('log')->error(json_encode($viewHistory));

        return $viewHistory;
    }
}
