<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('ziven_view_history')) {
            $schema->create('ziven_view_history', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('discussion_id')->unsigned();
                $table->integer('user_id')->unsigned();
                $table->dateTime('assigned_at');
                
                $table->index('assigned_at');
                $table->unique(['discussion_id', 'user_id']);
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('discussion_id')->references('id')->on('discussions')->onDelete('cascade');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->drop('ziven_view_history');
    },
];
