<?php

require_once __DIR__ . '/Context.php';
require_once __DIR__ . '/ConcreteStrategyA.php';
require_once __DIR__ . '/ConcreteStrategyB.php';

$obj = new Context(new ConcreteStrategyA());

$result = $obj->business([3, 2, 4, 1, 5]);

echo "Ascending order: " . implode(",", $result) . PHP_EOL;

$obj = new Context(new ConcreteStrategyB());

$result = $obj->business([3, 2, 4, 1, 5]);

echo "Descending order: " . implode(",", $result) . PHP_EOL;
