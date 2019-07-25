<?php

class Context
{
    private $strategy;

    public function __construct(Strategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function __setStrategy(Strategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function business(array $data)
    {
        $result = $this->strategy->doAlgo($data);
        return $result;
    }
}
