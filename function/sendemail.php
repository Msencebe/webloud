<?php

session_start();

include_once('function/action.php');
include_once('include/config.php');
$version = explode('?', $_SERVER['REQUEST_URI'])[0];
$version = dirname(dirname($version));
$version = str_replace('/', '', $version);

if(isset($_POST['email'])) {
	$email = $_POST['email'];
}

if(isset($_POST['text'])) {
	$text = $_POST['text'];
}

if(isset($_POST['name'])) {
	$name = $_POST['name'];
}

if(isset($_POST['project'])) {
	$project = $_POST['project'];
}

$data = array(
	'token' => 'alessandro',
	'data' => array(
		'project' => $project,
		'type' => 'contact'
	)
);

$url = 'https://lead.loudingads.com/api/';
$action = 'projectmail';

$a = new Action();
$a->send($data,$url,$action);
$result = $a->getResult();

$result = json_decode($result);
$to = $result->email;

$text = $name . ' sent you a message from '.$email.':<br />
<br />' . $text . '<br /><br />Source: '.$_SESSION['source'].
'<br /><br /> Version: '.$version;

$subject = 'Message from Panneaux Reco-Reno FR';
$headers .= 'From: '.$name.' <' . $result->email . '>' . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";

mail($to,$subject,$text,$headers);

?>