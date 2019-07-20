<?php

require_once __DIR__ . '/DbConnection.php';

$dbInstance = DbConnection::getInstance();

// first db connection variable
$conn = $dbInstance->getConnection();

// same connection but stored in new variable
$anotherConn = $dbInstance->getConnection();

// keep the connection open for 5 seconds
sleep(5);

