<?php

require_once __DIR__ . 
// '/vendor/autoload,php';
$settings = require_once __DIR__ . 
require_once __DIR__ .

$body = "<h1>Letter from site</h1>"

var_dump(send_mail($settings['mail_settings_prod'], ['aquarel@tut.by'], subject: 'From site', $body));