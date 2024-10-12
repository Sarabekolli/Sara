<?php

	include_once('config.php');	


	if(isset($_POST['submit']))
	{
        $username= $_POST['username'];
		$name = $_POST['name'];
		$surname = $_POST['surname'];
		$email = $_POST['email'];

		
        $sql = "insert into user ( username,name, surname, email) values (:username , :name, :surname, :email)";
        $sqlQuery = $conn->prepare($sql);

        $sqlQuery->bindParam(':username', $username);
        $sqlQuery->bindParam(':name', $name); 
        $sqlQuery->bindParam(':surname', $surname); 
        $sqlQuery->bindParam(':email', $email);

        $sqlQuery->execute();

        echo "Data saved successfully ...";
	}
?>