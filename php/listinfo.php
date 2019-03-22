<?php
@require_once("config.php");

$str = "SELECT*from listinfo ";
$result = mysql_query($str);

$list = array();
while ($item = mysql_fetch_array($result)) {
    $temp  = array();
    $temp["img"] = $item["img"];
    $temp["name"] = $item["name"];
    $temp["price"] = $item["price"];
    $temp["noprice"] = $item["noprice"];
    $list[] = $temp;
}
echo  json_encode($list);
?>