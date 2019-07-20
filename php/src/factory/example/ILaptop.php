<?php

/**
 * Interface ILaptop
 *
 * This is the interface of the factory pattern.
 */
interface ILaptop
{
    // get laptop model
    public function getModel();

    // get laptop specification
    public function getSpec();
}