<?php
//连接mysql，选择数据库
$dbc=mysqli_connect('localhost','xiaoming','abc321');
mysqli_select_db($dbc,'mytest');

//执行查询放回结果集行数
$query="SELECT * FROM book";
$result=mysqli_query($dbc,$query);
echo mysqli_num_rows($result);

//关闭数据库连接
mysqli_close($dbc);

?>