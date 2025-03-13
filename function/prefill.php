<?php

class Prefill {

	private $result;

	function setPrefill($data) {

		$prefill = new stdClass();

		if(isset($_GET['email'])) {
			$email = $_GET['email'];
			if($email == '{email}') {
				$email = null;
			}
		} else {
			$email = null;
		}
		$prefill->email = $email;

		if(isset($_GET['firstname'])) {
			$firstname = $_GET['firstname'];
			if($firstname == '{firstname}') {
				$firstname = null;
			}
		} else {
			$firstname = null;
		}
		$prefill->firstname = $firstname;

		if(isset($_GET['lastname'])) {
			$lastname = $_GET['lastname'];
			if($lastname == '{lastname}') {
				$lastname = null;
			}
		} else {
			$lastname = null;
		}
		$prefill->lastname = $lastname;

		if(isset($_GET['address'])) {
			$address = $_GET['address'];
		} else {
			$address = null;
		}
		$prefill->address = $address;

		if(isset($_GET['zipcode'])) {
			$zipcode = $_GET['zipcode'];
		} else {
			$zipcode = null;
		}
		$prefill->zipcode = $zipcode;

		if(isset($_GET['city'])) {
			$city = $_GET['city'];
		} else {
			$city = null;
		}
		$prefill->city = $city;

		if(isset($_GET['phone'])) {
			$phone = $_GET['phone'];
		} else {
			$phone = null;
		}
		$prefill->phone = $phone;

		return $this->result = $prefill;

	}

	function getPrefill() {
        return $this->result;
    }
}

?>