<?php

if($_POST){

	if(isset($_POST['nbj'])){

		if(!empty($_POST['nbj'])){

			$nbj = $_POST['nbj'];
		}
	}
}

$form = "<form method='GET' action='game.php'>";

for($i=0;$i<$nbj;$i++){

	$form .= "<label>J".($i+1).": </label>";
	$form .= "<input type='text' name='p".($i+1)."' placeholder='J".($i+1)." name's' />";

}

$form .= "<button type='submit'>Ok</button></form>";
$form .= "<span id='less'>-</span><span id='more'>+</span>";

echo $form;
