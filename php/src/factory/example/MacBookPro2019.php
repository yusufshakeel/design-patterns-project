<?php

require_once __DIR__ . '/ILaptop.php';

/**
 * Class MacBookPro2019
 *
 * This class implements the ILaptop interface.
 */
class MacBookPro2019 implements ILaptop
{
    protected $model = "MacBook Pro 2019";

    protected $spec = [
        "processor" => [
            "1.4GHz quad-core Intel Core i5, Turbo Boost up to 3.9GHz, with 128MB of eDRAM",
            "2.4GHz quad-core Intel Core i5, Turbo Boost up to 4.1GHz, with 128MB of eDRAM"
        ],
        "storage" => [
            ["128GB SSD", "256GB SSD"],
            ["256GB SSD", "512GB SSD"],
        ],
        "display" => "13.3-inch (diagonal) LED-backlit display with IPS technology",
        "memory" => "8GB of 2133MHz LPDDR3 onboard memory",
        "dim" => [
            "h" => "1.49 cm",
            "w" => "30.41 cm",
            "d" => "21.24 cm"
        ],
        "weight" => "1.37 kg"
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