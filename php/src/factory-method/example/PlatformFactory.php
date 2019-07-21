<?php

/**
 * Class PlatformFactory
 *
 * This is the abstract Creator class of the Factory Method design pattern.
 */
abstract class PlatformFactory
{
    /**
     * This is the factory method.
     *
     * Subclasses will define the body of this factory method.
     *
     * @return mixed
     */
    abstract public function getPlatformConnection();

    public function post($content)
    {
        $platform = $this->getPlatformConnection();

        $platform->login();
        $platform->createPost($content);
        $platform->logout();
    }
}