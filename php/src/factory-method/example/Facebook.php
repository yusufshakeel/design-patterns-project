<?php

require_once __DIR__ . '/PlatformFactory.php';
require_once __DIR__ . '/FacebookPlatform.php';

class Facebook extends PlatformFactory
{
    private $email, $password;

    public function __construct($email, $password)
    {
        $this->email = $email;
        $this->password = $password;
    }

    public function getPlatformConnection()
    {
        return new FacebookPlatform(
            $this->email,
            $this->password
        );
    }
}