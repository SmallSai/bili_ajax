<?php
$dbc=mysqli_connect('localhost','xiaoming','abc321');
mysqli_select_db($dbc,'mytest');

$query="SELECT * FROM book";
$result=mysqli_query($dbc,$query);
$resultNum=mysqli_num_rows($result); //结果集行数

for($num=0;$num<$resultNum;$num++){
	$row=mysqli_fetch_assoc($result);
	print_r(json_encode($row));
	
	if($num<($resultNum-1)){
		print ',';
	}
	
}

mysqli_close($dbc);

?>