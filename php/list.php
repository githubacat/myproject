<?php
@require_once("config.php");

$str = "SELECT*from list";
$result = mysql_query($str);

$list = array();
while ($item = mysql_fetch_array($result)) {
    $temp  = array();
    $temp["listimg"] = $item["listimg"];
    $temp["listname"] = $item["listname"];
    $temp["listprice"] = $item["listprice"];
    $temp["listnoprice"] = $item["listnoprice"];
    $list[] = $temp;
}
echo  json_encode($list);
?>