<?php

session_start();

include_once('function/function/action.php');
//include_once('function/project.php');
include_once('function/session.php');
//include_once('function/prefill.php');
include_once('function/tracking.php');
include_once('function/thankyoupage.php');

//include_once('function/thankyoupage.php');

$token = 'alessandro';

$url = 'https://lead.loudingads.com/api/';
//$action = 'project';
$domain = $_SERVER['HTTP_HOST'];
//$domain = 'zonnepanelen.verbouwingsadviseur.eu';
//$domain = 'floor.homerenewally.com';

$data = array(
	'token' => $token,
	'data' => array(
		'domain' => $domain
	)
);

// Get Project
$project = new Action();
$project->send($data,$url,'project');
$project = json_decode($project->getResult());

if($project->id == null) {
	echo '<span style="font-size: 32px; font-family: Arial; color:#000000; top: 20px; left: 20px; position: relative">Sorry, this page is not available</span>';
	$unable = true;
	return $unable;
} else {
	$unable = false;
}

// Set Tracking
$tracking = new Tracking();
$tracking->setTracking($_GET);
$tracking = $tracking->getTracking();
//$action = 'session';

$data = array(
	'token' => $token,
	'data' => array(
		'project' => $project->id,
		'session' => session_id(),
		'ip' => $_SERVER['REMOTE_ADDR'],
		'referral' => $_SERVER['HTTP_REFERER'],
		'client' => $_SERVER['HTTP_USER_AGENT'],
		'offer' => $tracking->offer,
		'source' => $tracking->source,
		'sub1' => $tracking->sub1,
		'sub2' => $tracking->sub2,
		'sub3' => $tracking->sub3,
		'sub4' => $tracking->sub4,
		'cid' => $tracking->cid,
		'uid' => $tracking->uid,
		'country' => $tracking->country,
		'geoip' => $_SERVER['GEOIP_COUNTRY_CODE']
	)
);
if($_GET["offer"]!=null){
	$_SESSION['offer']=$_GET["offer"];
}
// Set Session
$session = new Session();
$session->setSession($data,$url,'session');
$session = $session->getSession();
// Get Prefill
/*$prefill = new Prefill();
$prefill->setPrefill($_GET);
$prefill = $prefill->getPrefill();*/

//Get ThankYouPage

$data = array(
	'token' => 'alessandro',
	'data' => array(
		'project' => $project->id,
	)
);

$url = 'https://lead.loudingads.com/api/';
$action = 'getthankyoupage';
$a = new Action();
$a->send($data,$url,$action);
$thankpages = $a->getResult();

$a = new ThankYou();
$datathpg = $a->getThankYouPage($thankpages);
if($tracking->uuid != null){
	$data = array(
		'token' => 'alessandro',
		'data' => array(
			'uuid' => $tracking->uuid,
		)
	);
	
	$url = 'https://lead.loudingads.com/api/';
	$action = 'validatedoiemail';
	$a = new Action();
	$a->send($data,$url,$action);
	$validationemail = $a->getResult();
	
	}

?>