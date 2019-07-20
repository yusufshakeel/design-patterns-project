<?php

/**
 * Class DbConnection
 *
 * This is a singleton class.
 */
class DbConnection
{

    private static $instance = null;

    private $conn = null;

    // set db credentials here
    private $hostname = "localhost";
    private $dbname = "mydb";
    private $username = "root";
    private $password = "root123";
    private $charset = "utf8";

    private function __construct()
    {
        $dsn = "mysql:host=$this->hostname;dbname=$this->dbname;charset=$this->charset";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        try {
            $this->conn = new PDO(
                $dsn,
                $this->username,
                $this->password,
                $options
            );
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new DbConnection();
        }

        return self::$instance;
    }

    public function getConnection()
    {
        return $this->conn;
    }

}