<?php

require_once __DIR__ . '/Facebook.php';

function postContent($creator)
{
    $creator->post('Hello World');
}

$obj = new Facebook("johndoe@facebook.com", "password");
postContent($obj);

