<?php
//使用php链接数据库
@require_once("config.php");

$paixu = $_GET["paixu"];
$key = $_GET["key"];
$skipnum = $_GET["skipnum"];
$shownum = $_GET["shownum"];

$str = "select * from list where listname like '%$key%' order by listprice $paixu LIMIT $skipnum,$shownum";

$result = mysql_query($str);//执行
$list = array();//声明一个集合

while($item=mysql_fetch_array($result,MYSQL_ASSOC)){//循环赋值判断
    $temp= array();//声明一个对象
    $temp["id"] = $item["id"];
    $temp["listimg"] = $item["listimg"];
    $temp["listname"] = $item["listname"];
    $temp["listprice"] = $item["listprice"];
    $temp["listnoprice"] = $item["listnoprice"];
    //去除冗余 筛选指定的字段
    $list[] = $temp;
}
echo json_encode($list);

?>