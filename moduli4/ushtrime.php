<?php

function divisible($d){
    if(($d/2)==0){
        return "$d is devisible by 2";
    }
    else{
        return "$d is not devisible by 2";
    }
}

print_r(divisible(4));
?>
