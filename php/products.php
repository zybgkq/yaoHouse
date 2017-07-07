<?php
	$id = $_GET["id"]; // 获取请求中传递的用户名

	// 数据库连接
	$conn = mysql_connect("localhost:3306", "root", "");
	if (!$conn)
		die("数据库连接出错");
	mysql_select_db("h51611");
	// 数据查询
	$sql = "SELECT COUNT(*) from products  WHERE id='$id'";
//	echo $sql;
	$result = mysql_query($sql, $conn);
	// 处理查询结果
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] >= 1) { // 已经有该用户存在
			echo '{"status":1, "message":"user exists"}';
		} else { // 不存在该注册用户
			echo '{"status":0, "message":"user not exists"}';
		}
	}
	// 数据库关闭
	mysql_close($conn);
?>