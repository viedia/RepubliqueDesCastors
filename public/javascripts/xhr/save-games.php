<?php

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($_POST)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents('localhost:3000/javascripts/xhr/save-games.php', false, $context);

if ($result === FALSE) 
    die('error');
else
    echo json_encode(array('success' => true, 'message' => $result));
