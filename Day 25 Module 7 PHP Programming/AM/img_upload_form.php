<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>This is the Add Item page</h1>
	<form action="upload.php" method="POST" enctype="multipart/form-data">
		Item Name:<input type="text" name="itemName" class = 'form-control'><br>
		Price:<input type="number" name="price" class="form-control"><br>
		Description:<input type="text" name="description" class="form-control"><br>
		Image:<input type="file" name="gameImg" class = "form-control"><br>
		<button type="submit">Save New Item</button>
	</form>
</body>
</html>