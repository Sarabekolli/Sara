<?php

include_once('config.php');

if(isset($_POST['update']))
{
    $id = $_POST['id']; 
    $id = $_POST['username']; 
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    
    $sql = "UPDATE user SET name=:name, surname=:surname, email=:email where id=:id";
    $prep = $conn->prepare($sql);
    $prep ->bindParam (':id', $id);
    $prep ->bindParam (':username', $username);
    $prep ->bindParam (':name', $name);
    $prep ->bindParam (':surname', $surname);
    $prep ->bindParam (':email', $email);

    $prep->execute();

    header("Location:dashboard.php");

}

?>
