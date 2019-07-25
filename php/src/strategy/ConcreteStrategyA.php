<?php

require_once __DIR__ . '/Strategy.php';

class ConcreteStrategyA implements Strategy
{
    public function doAlgo(array $data)
    {
        sort($data);

        return $data;
    }
}
