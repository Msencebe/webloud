<?php

session_start();

class Session {

    private $result;

    function setSession($data,$url,$action) {

        $header = array(
            'X-AUTH-TOKEN: ' . $data['token'],
            //'Content-Type: application/json; charset=utf-8',
            //'Content-Type: application/x-www-form-urlencoded; charset=utf-8',
            //'Content-Type: multipart/form-data; charset=utf-8',            
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

        $result = json_decode($result);

        $_SESSION['project'] = $data['data']['project'];
        $_SESSION['session'] = $data['data']['session'];
        $_SESSION['user'] = $result->id;
        $_SESSION['ip'] = $data['data']['ip'];
        $_SESSION['referral'] = $data['data']['referral'];
        $_SESSION['client'] = $data['data']['client'];
        $_SESSION['offer'] = $data['data']['offer'];
        $_SESSION['source'] = $data['data']['source'];
        $_SESSION['sub1'] = $data['data']['sub1'];
        $_SESSION['sub2'] = $data['data']['sub2'];
        $_SESSION['sub3'] = $data['data']['sub3'];
        $_SESSION['sub4'] = $data['data']['sub4'];
        $_SESSION['cid'] = $data['data']['cid'];
        $_SESSION['uid'] = $data['data']['uid'];

        // The call returns the result from the lead check

        return $this->result = $_SESSION;

    }

    function getSession() {
        return $this->result;
    }
}

?>