<?php

class Tracking {

	private $result;

	function setTracking($data) {

		$tracking = new stdClass();

		if(isset($_GET['offer'])) {
			$offer = $_GET['offer'];
		} else {
			$offer = null;
		}
		$tracking->offer = $offer;

		if(isset($_GET['source'])) {
			$source = $_GET['source'];
		} else {
			$source = null;
		}
		$tracking->source = $source;

		if(isset($_GET['sub1'])) {
			$sub1 = $_GET['sub1'];
		} else {
			$sub1 = null;
		}
		$tracking->sub1 = $sub1;

		if(isset($_GET['sub2'])) {
			$sub2 = $_GET['sub2'];
		} else {
			$sub2 = null;
		}
		$tracking->sub2 = $sub2;

		if(isset($_GET['sub3'])) {
			$sub3 = $_GET['sub3'];
		} else {
			$sub3 = null;
		}
		$tracking->sub3 = $sub3;

		if(isset($_GET['sub4'])) {
			$sub4 = $_GET['sub4'];
		} else {
			$sub4 = null;
		}
		$tracking->sub4 = $sub4;

		if(isset($_GET['cid'])) {
			$cid = $_GET['cid'];
		} else {
			$cid = null;
		}
		$tracking->cid = $cid;

		if(isset($_GET['uid'])) {
			$uid = $_GET['uid'];
		} else {
			$uid = null;
		}
		$tracking->uid = $uid;

		if(isset($_GET['uuid'])) {
			$uuid = $_GET['uuid'];
		} else {
			$uuid = null;
		}
		$tracking->uuid = $uuid;

		if(isset($_GET['thpg'])) {
			$thpg = $_GET['thpg'];
		} else {
			$thpg = null;
		}
		$tracking->thpg = $thpg;


		return $this->result = $tracking;

	}

	function getTracking() {
        return $this->result;
    }
}

?>