<?php
	// var_dump($_POST);
	if(isset($_POST['firstName']) && isset($_POST['lastName'])){
		echo "Welcome " . $_POST['firstName'] . " " .$_POST['lastName'] . "<br>";
	} else {
		echo "Please provide complete name.<br>";
	}

	if(isset($_POST['email'])){
		echo "Your email is " . $_POST['email'] . "<br>";
	} else {
		echo "Please provide an email.<br>";
	}

	if(isset($_POST['password']) && isset($_POST['confirmPassword'])){
		if ($_POST['password'] == $_POST['confirmPassword']){
			echo "Passwords match. Storing to file.";
			$json = file_get_contents('accounts.json');
			$accounts = json_decode($json, true);
			array_push($accounts, $_POST);
			$to_write = fopen('accounts.json', 'w');
			fwrite($to_write, json_encode($accounts, JSON_PRETTY_PRINT));
			fclose($to_write);
		} else {
			echo "Passwords did not match.";
		}
	} else {
		echo "Please fill out the  password fields.<br>";
	}
?>