<?php


$tab_des = array();
//$place_des = $_GET['nbdes'];
$count = $_GET['nbdes'];

for($i=0;$i<$count;$i++){
	
	$tab_des[] = rand(1,6);
	echo $tab_des[$i];

}

//print_r(json_encode($tab_des));