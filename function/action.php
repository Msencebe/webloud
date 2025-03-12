<?php

session_start();

include_once('function/action.php');

// Data Mapping

if(isset($_POST['email'])) {
	$email = $_POST['email'];
} else {
	$email = null;
}
if(isset($_POST['phone'])) {
	$phone = $_POST['phone'];
} else {
	$phone = null;
}
if(isset($_SERVER['REMOTE_ADDR'])) {
	$ip = $_SERVER['REMOTE_ADDR'];
} else {
	$ip = null;
}
if(isset($_SERVER['HTTP_USER_AGENT'])) {
	$client = $_SERVER['HTTP_USER_AGENT'];
} else {
	$client = null;
}
if(isset($_SERVER['HTTP_REFERER'])) {
	$referral = $_SERVER['HTTP_REFERER'];
} else {
	$referral = null;
}
if(isset($_POST['clickid'])){
	$clickid = $_POST['clickid'];
}else if(isset($_SESSION['cid'])) {
	$clickid = $_SESSION['cid'];
} else {
	$clickid = null;
}
if(isset($_SESSION['offer'])) {
	$offer = $_SESSION['offer'];
} else {
	$offer = null;
}
if(isset($_SESSION['source'])) {
	$source = $_SESSION['source'];
} else {
	$source = null;
}
if(isset($_SESSION['sub1'])) {
	$sub1 = $_SESSION['sub1'];
} else {
	$sub1 = null;
}
if(isset($_POST['gender'])) {
	$gender = $_POST['gender'];
} else {
	$gender = null;
}
if(isset($_POST['firstname'])) {
	$firstname = $_POST['firstname'];
} else {
	$firstname = null;
}
if(isset($_POST['lastname'])) {
	$lastname = $_POST['lastname'];
} else {
	$lastname = null;
}
if(isset($_POST['dateofbirth'])) {
	$dateofbirth = $_POST['dateofbirth'];
	$dateofbirth = str_replace('/','-',$dateofbirth);
	$dateofbirth = strtotime($dateofbirth);
	$dateofbirth = date('Y-m-d',$dateofbirth);
} else {
	$dateofbirth = null;
}
if(isset($_POST['city'])) {
	$city = $_POST['city'];
} else {
	$city = null;
}
if(isset($_POST['zipcode'])) {
	$zipcode = $_POST['zipcode'];
} else {
	$zipcode = null;
}
if(isset($_POST['address'])) {
	$address = $_POST['address'];
} else {
	$address = null;
}
if(isset($_POST['housenumber'])) {
	$housenumber = $_POST['housenumber'];
} else {
	$housenumber = null;
}
if(isset($_POST['fulladdress'])) {
	$fulladdress = $_POST['fulladdress'];
} else {
	$fulladdress = null;
}
if(isset($_POST['province'])) {
	$province = $_POST['province'];
} else {
	$province = null;
}
if(isset($_POST['pp'])) {
	$pp = $_POST['pp'];
} else {
	$pp = null;
}
if(isset($_POST['houseowner'])) {
	$houseowner = $_POST['houseowner'];
} else {
	$houseowner = null;
}
if(isset($_POST['housetype'])) {
	$housetype = $_POST['housetype'];
} else {
	$housetype = null;
}
if(isset($_POST['housestatus'])) {
	$housestatus = $_POST['housestatus'];
} else {
	$housestatus = null;
}
if(isset($_POST['housepeople'])) {
	$housepeople = $_POST['housepeople'];
} else {
	$housepeople = null;
}
if(isset($_POST['rooftype'])) {
	$rooftype = $_POST['rooftype'];
} else {
	$rooftype = null;
}
if(isset($_POST['rooflight'])) {
	$rooflight = $_POST['rooflight'];
} else {
	$rooflight = null;
}
if(isset($_POST['energypower'])) {
	$energypower = $_POST['energypower'];
} else {
	$energypower = null;
}
if(isset($_POST['pubblicsupport'])) {
	$pubblicsupport = $_POST['pubblicsupport'];
} else {
	$pubblicsupport = null;
}
if(isset($_POST['wage'])) {
	$wage = $_POST['wage'];
} else {
	$wage = null;
}
if(isset($_POST['job'])) {
	$job = $_POST['job'];
} else {
	$job = null;
}
if(isset($_POST['honeypot']) ) {
	if($_POST['honeypot']!= "" && $_POST['honeypot']!= null ){
		$honeypot = $_POST['honeypot'];
	}
} else {
	$honeypot = null;
}
if(isset($_POST['opticks'])) {
	$opticks = $_POST['opticks'];
} else {
	$opticks = null;
}

$data = array(
	'token' => 'alessandro',
	'data' => array(
		'session' => $_SESSION['user'],
		'email' => strtolower(trim($email)),
		'phone' => $phone,
		'ip' => $ip,
		'registrationdate' => date('Y-m-d H:i:s'),
		'client' => $client,
		'referral' => $referral,
		'project' => $_SESSION['project'],
		'clickid' => $clickid,
		'offer' => $offer,
		'source' => $source,
		'sub1' => $sub1,
		'gender' => $gender,
		'firstname' => $firstname,
		'lastname' => $lastname,
		'dateofbirth' => $dateofbirth,
		'city' => $city,
		'zipcode' => $zipcode,
		'address' => $address,
		'housenumber' => $housenumber,
		'fulladdress' => $fulladdress,
		'city' => $city,
		'province' => $province,
		'pp' => $pp,
		'houseowner' => $houseowner,
		'housetype' => $housetype,
		'housestatus' => $housestatus,
		'housepeople' => $housepeople,
		'rooftype' => $rooftype,
		'rooflight' => $rooflight,
		'energypower' => $energypower,
		'pubblicsupport' => $pubblicsupport,
		'honeypot' => $honeypot,
		'wage' => $wage,
		'job' => $job,
		'antifraudid' => $opticks
	)
);

$url = 'https://lead.loudingads.com/api/';
$action = 'subscribe';

$a = new Action();
$a->send($data,$url,$action);
$result = $a->getResult();

if (strpos($email, '@louding') !== false || strpos($email, 'test') !== false) {

} else {
	$vuctl = 'http://clk.tradedoubler.com/click?p=322257&a=3068746&g=25455804&epi=&url=https://vu.wsktm.com/2/v46/?email='.$email.'&idaff=3068746&idlink=10';
	$test = file_get_contents($vuctl);	
}

echo $result;

?>