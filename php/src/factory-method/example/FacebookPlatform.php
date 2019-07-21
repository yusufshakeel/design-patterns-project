<?php

require_once __DIR__ . '/IPlatform.php';

class FacebookPlatform implements IPlatform
{
    private $email, $password;

    public function __construct($email, $password)
    {
        $this->email = $email;
        $this->password = $password;
    }

    public function login()
    {
        echo "FacebookPlatform: Login with email: {$this->email} using password: {$this->password}" . PHP_EOL;
    }

    public function logout()
    {
        echo "FacebookPlatform: Logout" . PHP_EOL;
    }

    public function createPost($content)
    {
        echo "FacebookPlatform: Creating post using the following content" . PHP_EOL . $content . PHP_EOL;
    }
}