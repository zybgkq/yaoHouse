<?php
	header("Access-Control-Allow-Origin: *");
	// 获取 POST 请求中提交的用户信息
	$username = $_POST["username"];
	$password = $_POST["password"];

	// 数据库连接
	$conn = mysql_connect("localhost:3306", "root", "");
	if (!$conn)
		die ("数据库连接失败");
	mysql_select_db("h51611");
	// 发送数据插入
	$sql = "SELECT * from users WHERE username='$username' AND password='$password'";
	$result = mysql_query($sql, $conn);  ///判断上面的语句是否执行成功
	// 处理结果
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC))    /// mysql_fetch_array中的第二个值可以是这但个数：MYSQL_ASSOC是只能用关联索引，MYSQL_NUM只能用数字索引，MYSQL_BOTH数字、关联都是可以的
		echo '{"status":1, "message":"success", "userinfo":'. json_encode($row) .'}';
	else
		echo '{"status":0, "message":"用户名或密码错误"}';

	// 关闭数据库连接
	mysql_close($conn);
?>