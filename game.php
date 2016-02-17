<?php include 'inc/header.php'; ?>
<?php

	if($_GET){
		
		$keys = array_keys($_GET);
		
		for($i=0;$i<count($keys);$i++){
			if(!empty($_GET["$keys[$i]"])) $tab_joueur[] = $_GET["$keys[$i]"]; else header("Location:index.php?e=2");
		}
		
	}else{
		header("Location:index.php?e=1");
	}

?>

<h1>Simulation de lancer de dés (5)</h1>

<div id="plateau">
	<div id="des1" class="des" name="1"><img src="img/des.gif"></div>
	<div id="des2" class="des" name="2"><img src="img/des.gif"></div>
	<div id="des3" class="des" name="3"><img src="img/des.gif"></div>
	<div id="des4" class="des" name="4"><img src="img/des.gif"></div>
	<div id="des5" class="des" name="5"><img src="img/des.gif"></div>

	<form id="lancer" no activate>
		<button id="btnLancer" type="submit">Lancer</button>
	</form>
</div>
<div id="game">
	<table id="tab" border="0">
		<tr>
			<td><h1>Yams!</h1></td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1)?>"><?=$tab_joueur[$i];?></td>
			<?php } ?>
			
		</tr>		
		<tr>
			<td>1</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'c1'?>" name="1"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>2</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'c2'?>" name="2"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>3</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'c3'?>" name="3"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>4</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'c4'?>" name="4"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>5</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'c5'?>" name="5"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>6</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'c6'?>" name="6"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Total Colonne</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'TC'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>bonus</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'B'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>tot1</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'T1'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>DP</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'DP'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Brelan</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'Br'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Full</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'F'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Petite Suite</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'PS'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Grande Suite</td>
	<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'GS'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Carrée</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'C'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Yams</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'Y'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>Chance</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'Ch'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>tot2</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'T2'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>tot1</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'T1'?>"></td>
			<?php } ?>
		</tr>
		<tr>
			<td>totT</td>
			<?php
			for($i=0;$i<count($tab_joueur);$i++){ ?>
				<td id="<?='p'.($i+1).'TT'?>"></td>
			<?php } ?>
		</tr>
	</table>
</div>

<?php include 'inc/footer.php'; ?>

</body>
</html>