<?php
//连接mysql，选择数据库
$dbc=mysqli_connect('localhost','xiaoming','abc321');
mysqli_select_db($dbc,'mytest');

$inpBook=$_POST['bookName'];

$query="SELECT * FROM book WHERE bookName='".$inpBook."';";
$result=mysqli_query($dbc,$query);

$row=mysqli_fetch_assoc($result);

print_r(json_encode($row));

//关闭数据库连接
mysqli_close($dbc);
?>