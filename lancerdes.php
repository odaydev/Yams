<?php


$tab_des = array();
$count = $_GET['nbdes'];

for($i=0;$i<$count;$i++){
	
	$tab_des[] = rand(1,6);
	echo $tab_des[$i];
}

