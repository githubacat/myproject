<?php
@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");

//mysql_connect("localhost:3306","root","root");
//mysql_select_db("315");    //执行数据库

mysql_connect("b-3v4qedypr2qc9n.bch.rds.gz.baidubce.com:3306","b_3v4qedypr2qc9n","gDSrNGPfA83pzpcd");
mysql_select_db("b_3v4qedypr2qc9n");    //执行数据库
mysql_query("set character set 'utf8'");    //防止中文乱码
?>