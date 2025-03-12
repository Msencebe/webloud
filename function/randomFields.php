<?php

    function getRandomValue($field){
        $value = "";
        switch ($field) {
            case "electricbill":
                $randomNumber = rand(0,99);
                if ($randomNumber < 25){
                    $value = "50-100";
                }elseif($randomNumber < 75){
                    $value = "100-150";
                }elseif($randomNumber < 100){
                    $value = ">150";
                }
                break;
            case "energietype":
                $randomNumber = rand(0,99);

                if ($randomNumber < 22){
                    $value = "gaz";
                }elseif($randomNumber < 44){
                    $value = "mix";
                }elseif($randomNumber < 66){
                    $value = "electric";
                }elseif($randomNumber < 88){
                    $value = "wood";
                }elseif($randomNumber < 100){
                    $value = "autre";
                }
                break;
            case "homeorientation":
                $randomNumber = rand(0,99);

                if ($randomNumber < 25){
                    $value = "east";
                }elseif($randomNumber < 50){
                    $value = "north";
                }elseif($randomNumber < 75){
                    $value = "south";
                }elseif($randomNumber < 100){
                    $value = "west";
                }
                break;
                
        }
        return $value;
    }

?>