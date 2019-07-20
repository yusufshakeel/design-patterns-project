<?php

/**
 * Class Singleton
 */
class Singleton
{
    // this holds the instance of the class
    private static $instance = null;

    // this will create an instance of a class
    // note! it is private to prevent instance creation from outside the class
    private function __construct()
    {
        // some code...
    }

    private static function getInstance()
    {
        // if instance of the class doesn't exists then create one
        if (self::$instance == null) {
            self::$instance = new Singleton();
        }

        // return instance of the class
        return self::$instance;
    }
}