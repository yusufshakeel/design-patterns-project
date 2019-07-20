<?php

require_once __DIR__ . '/ILaptop.php';

/**
 * Class MacBookAir2019
 *
 * This class implements the ILaptop interface.
 */
class MacBookAir2019 implements ILaptop
{
    protected $model = "MacBook Air 2019";

    protected $spec = [
        "processor" => "1.6GHz dual-core Intel Core i5, Turbo Boost up to 3.6GHz, with 4MB L3 cache",
        "storage" => [
            "128GB PCIe-based SSD",
            "256GB PCIe-based SSD"
        ],
        "display" => "13.3-inch (diagonal) LED-backlit display with IPS technology",
        "memory" => "8GB of 2133MHz LPDDR3 onboard memory",
        "dim" => [
            "h" => "0.41–1.56 cm",
            "w" => "30.41 cm",
            "d" => "21.24 cm"
        ],
        "weight" => "1.25 kg"
    ];

    public function getModel()
    {
        return $this->model;
    }

    public function getSpec()
    {
        return $this->spec;
    }
}