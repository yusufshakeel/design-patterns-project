<?php

require_once __DIR__ . '/MacBookAir2019.php';
require_once __DIR__ . '/MacBookPro2019.php';

/**
 * Class LaptopFactory
 *
 * This is the factory class and it created order object based on the model.
 */
class LaptopFactory
{
    protected $laptop;

    public function make($model)
    {
        switch ($model) {
            case 'MB_AIR_2019':
                $this->laptop = new MacBookAir2019();
                break;

            case 'MB_PRO_2019':
                $this->laptop = new MacBookPro2019();
        }

        return $this->laptop;
    }
}