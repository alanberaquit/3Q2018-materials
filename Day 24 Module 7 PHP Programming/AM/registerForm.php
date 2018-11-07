<form action="processReg.php" method="POST">
	<div class="form-group">
		<label>First Name</label>
		<input type="text" name="firstName" class="form-control">
		<label>Last Name</label>
		<input type="text" name="lastName" class="form-control">
	</div>
	<div class="form-group">
		<label>Email</label>
		<input type="email" name="email" class="form-control">
	</div>
	<div class="form-group">
		<label>Password</label>
		<input type="password" name="password" class="form-control">
	</div>
	<div class="form-group">
		<label>Confirm Password</label>
		<input type="password" name="confirmPassword" class="form-control">
	</div>
	<button type="submit" class='btn btn-primary'>Submit</button>
</form>