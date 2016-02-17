<?php

$dices = str_split($_POST['des']);

$cpt1 = 0;
$cpt2 = 0;
$cpt3 = 0;
$cpt4 = 0;
$cpt5 = 0;
$cpt6 = 0;
$p = 0;
$r = "";
$PS = 0;	
$GS = 0;	

// Analyse grille du haut
for($i=0;$i<5;$i++){

	if(intval($dices[$i]) == 1) $cpt1++;
	if(intval($dices[$i]) == 2) $cpt2 = $cpt2+2;
	if(intval($dices[$i]) == 3) $cpt3 = $cpt3+3;
	if(intval($dices[$i]) == 4) $cpt4 = $cpt4+4;
	if(intval($dices[$i]) == 5) $cpt5 = $cpt5+5;
	if(intval($dices[$i]) == 6) $cpt6 = $cpt6+6;
	
	//analyse grille du bas	/ renvoi un chiffre qui permet de correspondre avec les combinaisons		
	//9=>DP , 13=>full , 11=>brelan , 17=>carrée , 25=>yams 
	for($k=0;$k<5;$k++){
		if(intval($dices[$k]) == intval($dices[$i])) $p++;							 	
	}
}

	// Recherche la PS
	if(in_array(1,$dices)) $PS++;
	if(in_array(2,$dices)) $PS++;
	if(in_array(3,$dices)) $PS++;
	if(in_array(4,$dices)) $PS++;
	if(in_array(5,$dices)) $PS++;

	// Recherche la GS
	if(in_array(2,$dices)) $GS++;
	if(in_array(3,$dices)) $GS++;
	if(in_array(4,$dices)) $GS++;
	if(in_array(5,$dices)) $GS++;
	if(in_array(6,$dices)) $GS++;

	$response[] = $cpt1;
	$response[] = $cpt2;
	$response[] = $cpt3;
	$response[] = $cpt4;
	$response[] = $cpt5;
	$response[] = $cpt6;
	$response[] = $p;

	if($PS == 5){
		
		$r = "ps";
		$response[] = $r;
		var_dump($response);

	}else if($GS == 5){

		$r = "gs";
		$response[] = $r;
		var_dump($response);

	}else{
		$response[] = $r;
		echo json_encode($response);

		// foreach ($response as $key => $value) {
		//  	echo json_encode($value);
		//  } 
	}	

//showChoice(recupCpt, currentPlayer,currentPlayerScore);
//}