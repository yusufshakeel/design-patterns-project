<?php

require_once __DIR__ . '/LaptopOrder.php';

$obj = new LaptopOrder();

$obj->placeOrder("MB_AIR_2019");
var_dump($obj->getOrders());

$obj->placeOrder("MB_PRO_2019");
var_dump($obj->getOrders());
