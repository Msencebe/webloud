<?php

class Project {

	private $result;

	function setProject($data,$url,$action) {

		$header = array(
        	'X-AUTH-TOKEN: ' . $data['token'],
            //'X-AUTH-TOKEN: alessandro'
            //'Content-Type: application/x-www-form-urlencoded'
    	);

    	$url = $url . $action . '/';

		// cURL call

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data['data']);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result = curl_exec($ch);

        curl_close($ch);

        // The call returns the result from the lead check

        return $this->result = json_decode($result);

	}

	function getProject() {
        return $this->result;
    }
}

?>