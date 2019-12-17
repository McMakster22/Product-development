<?php 
$name = $_POST['name'];
$address=$_POST['address'];
$post = $_POST['post'];
$email = $_POST['email'];
$productNm = $_POST['productNm'];
$message = $_POST['message'];
$formcontent="From: $name \n Address: $address \n Post: $post \n Amount of Products: $productNm \n Message: $message";
$recipient = "hyggeligt@corp.dk";
$subject = "Order Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: http://localhost/test/orderComplete.html');

?>