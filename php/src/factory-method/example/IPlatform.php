<?php

/**
 * Interface IPlatform
 *
 * This is the Product interface of the Factory Method design pattern.
 *
 * It declares different type of behaviours for any classes (concrete products)
 * that will implement this interface.
 */
interface IPlatform
{
    public function login();

    public function logout();

    public function createPost($content);
}