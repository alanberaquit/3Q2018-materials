<?php 
	$json = file_get_contents('accounts.json');
	$accounts = json_decode($json, true);
	$flag = false;
	for($i = 0; $i < count($accounts); $i++){
		if($accounts[$i]["email"] == $_POST['email'] && $accounts[$i]["password"] == $_POST['password']){
			$flag = true;
			break;
		}	
	}
	if($flag){
		echo "Login successful";
	} else {
		echo "Wrong credentials";
	}
?>