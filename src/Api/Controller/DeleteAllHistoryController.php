<?php

namespace Ziven\viewHistory\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Psr\Http\Message\ServerRequestInterface;
use Ziven\viewHistory\Model\ViewHistory;

class DeleteAllHistoryController extends AbstractDeleteController{
    protected function delete(ServerRequestInterface $request){
        $actor = $request->getAttribute('actor');
        $currentUserID = $request->getAttribute('actor')->id;
        ViewHistory::where(["user_id"=>$currentUserID])->delete();
    }
}
