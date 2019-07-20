<?php

require_once __DIR__ . '/LaptopFactory.php';

/**
 * Class LaptopOrder
 *
 * This class uses the factory class to create order.
 */
class LaptopOrder
{
    protected $laptopOrders = [];

    protected $laptop = null;

    public function __construct()
    {
        // make object of the factory
        $this->laptop = new LaptopFactory();
    }

    public function placeOrder($model)
    {
        $order = $this->laptop->make($model);

        array_push($this->laptopOrders, [
            $order->getModel(),
            $order->getSpec(),
        ]);
    }

    public function getOrders()
    {
        return $this->laptopOrders;
    }
}