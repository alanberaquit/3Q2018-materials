<?php 
	$itemName = $_POST['itemName'];
	$price = $_POST['price'];
	$desc = $_POST['description'];
	
	$filename = $_FILES['gameImg']['name'];
	$filesize = $_FILES['gameImg']['size'];
	$file_tmpname = $_FILES['gameImg']['tmp_name'];
	// $file_type = $_FILES['gameImg']['type'];
	$file_type = strtolower(pathinfo($filename,PATHINFO_EXTENSION));
	//$_FILES[name in the form][property]
	//list of properties commonly used:
	//name, size, tmp_name, type
	$hasDetails = false;
	$isImg = false;
	if($itemName != "" && $price > 0 && $desc != ""){
		$hasDetails = true;
	}
	if($file_type == "jpg" || $file_type == "png" || $file_type == "jpeg" || $file_type == "gif"){
		$isImg = true;
	}
	if($filesize > 0 && $isImg && $hasDetails){
		$final_filepath = "images/" . $filename;
		move_uploaded_file($file_tmpname, $final_filepath);
		echo "Item: "  . $itemName . "<br>";
		echo "Price: " . $price . "<br>";
		echo "Desc: " . $desc . "<br>";
		echo "Your item image uploaded to database";
	} else {
		echo "Please upload an image";
	}	
	// var_dump(strtolower(pathinfo($filename,PATHINFO_EXTENSION)));
?>