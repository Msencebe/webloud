<?php 

include_once('function/action.php');

// Data Mapping

if(isset($_POST['project'])) {
	$project = $_POST['project'];
} else {
	$project = null;
}
if(isset($_POST['type'])) {
	$type = $_POST['type'];
} else {
	$type = null;
}

$data = array(
	'token' => 'alessandro',
	'data' => array(
		'project' => $project,
		'type' => $type,
	)
);
$url = 'https://lead.loudingads.com/api/';
$action = 'content';

$a = new Action();
$a->send($data,$url,$action);
$result = $a->getResult();

echo $result;

?>