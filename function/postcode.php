<?php

if(isset($_POST['zipcode'])) {
    $zipcode = $_POST['zipcode'];
}
if(isset($_POST['housenumber'])) {
    $housenumber = $_POST['housenumber'];
}

$url = 'https://api.postcode.eu/nl/v1/addresses/postcode/'.$zipcode.'/'.$housenumber.'/';

$credentials = 'bliDkNMr8J1R9ME8ocT8lh6dWlkA1RKJQ0Q6K79n8Pm:GwYNsuidT7hjbBM8ILnp90hvoswPw2n60vUviJ819g2tQ8Fxu7';

$header = array(
	'Authorization: Basic '. base64_encode($credentials)
);

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url);
//curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_USERPWD, $credentials);
curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);

echo $response;

//$response = json_decode($response);

?>