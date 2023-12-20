<?php

include 'config.php';
session_start();

if(isset($_POST['submit'])){

   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = mysqli_real_escape_string($conn, md5($_POST['password']));

   $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE email = '$email' AND password = '$pass'") or die('query failed');

   if(mysqli_num_rows($select) > 0){
      $row = mysqli_fetch_assoc($select);
      $_SESSION['user_id'] = $row['id'];
      header('location:home.php');
   }else{
      $message[] = 'incorrect email or password!';
   }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>login</title>
   <link href="images/logo-removebg-preview.png" rel="icon">
   <!-- custom css file link  -->
   <link rel="stylesheet" href="login.css">
   <link href="img/logo.png" rel="icon">
</head>
<body>
<form action="" method="post" enctype="multipart/form-data">
<div class="login-container">

<div class="login-frame"></div>
   <div class="login-content">
   <h2>Login</h2>
      <?php
      if(isset($message)){
         foreach($message as $message){
            echo '<div class="message">'.$message.'</div>';
         }
      }
      ?>
       <div class="input-group">
                <label for="email">Email</label>
      <input type="email" name="email"  class="box" required>
    </div>
    <div class="input-group">
                <label for="password">Password</label>
      <input type="password" name="password"  class="box" required>
    </div> 
    <div class="input-group">
      <button type="submit" name="submit" value="login now" class="btn">Login</button>
      
    </div>
      <p class="login-register-text">Don't have an account?  <a href="register.php" class="register-link">Register</a></p> 
    </div>
      <div class="login-image">
            <img src="img/logo.png" alt="User Image">
        </div>
   
    </div>
    </form>
</div>
   
</body>
</html>