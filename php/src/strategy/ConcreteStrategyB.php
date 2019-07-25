<?php

require_once __DIR__ . '/Strategy.php';

class ConcreteStrategyB implements Strategy
{
    public function doAlgo(array $data)
    {
        rsort($data);

        return $data;
    }
}
