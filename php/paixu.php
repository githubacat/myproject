<?php
@require_once("config.php");
$paixu = $_GET["paixu"];
$str="select * from list  order by listprice $paixu";

$result = mysql_query($str);

$list = array(); //集合

while ($item = mysql_fetch_array($result)) {
    $temp = array();
    $temp["id"] = $item["id"];
    $temp["listimg"] = $item["listimg"];
    $temp["listname"] = $item["listname"];
    $temp["listprice"] = $item["listprice"];
    $temp["listnoprice"] = $item["listnoprice"];
    $list[] = $temp;
}
echo  json_encode($list);
?>