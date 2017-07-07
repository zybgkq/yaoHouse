<?php
	// 获取 POST
	
	$image = $_POST["image"];
	$name = $_POST["name"];
	$price = $_POST["price"];
	$num = $_POST["num"];
	$sale = $_POST["sale"];
	$amount = $_POST["amount"];
	$preferential = $_POST["preferential"];

	// 数据库连接
	$conn = mysql_connect("localhost:3306", "root", "");
	if (!$conn)
		die ("数据库连接失败");
	mysql_select_db("h51611");
	// 查询所有数据
	$sql = "SELECT * FROM  `products` ";
	$result = mysql_query($sql, $conn);
	// 处理结果
	if ($result) 
		echo '{"status":1, "message":"success"}';
	else
		echo '{"status":0, "message":"'. mysql_error() .'"}';

	// 关闭数据库连接
	mysql_close($conn);
?>