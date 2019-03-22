<?php
@require_once("config.php");

$key = $_GET["key"];
$str = "select count(*) as total FROM list where listname like '%$key%'";//as取名称
$result = mysql_query($str);

$item = mysql_fetch_array($result);

// if($item["total"]>0){}
    $obj  =array();

    $obj["count"]= $item["total"];

    echo  json_encode($obj);

?>