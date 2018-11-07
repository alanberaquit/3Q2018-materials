<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		$country_city = [
						"Japan" => "Tokyo",
						"Mexico" => "Mexico City",
						"USA" => "New York",
						"India" => "Mumbai",
						"Korea" => "Seoul",
						"China" => "Shanghai",
						"Nigeria" => "Lagos"
						];
		//add Argentina/Buenos Aires to array;
		$country_city["Argentina"] = "Buenos Aires";

		//change China's city to Beijing
		$country_city["China"] = "Beijing";

		//remove Korea and Seoul
		unset($country_city["Korea"]);

		//print all values using a foreach loop
		foreach ($country_city as $country => $city) {
			echo "<p>" . $city . " is in " . $country . "</p>";						
		}						
	?>
</body>
</html>