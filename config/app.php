<?php 
    const SERVERURL="http://localhost/sistema/";
    
    const COMPANY = "Sistema prestamos";
   
    const MONEDA = "€";
    date_default_timezone_set("Europe/Madrid");

    function getServerUrl() {
        $url = 'http';
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
            $url .= 's';
        }
        $url .= '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        return $url;
    }