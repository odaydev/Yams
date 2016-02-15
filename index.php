<?php include 'inc/header.php'; ?>

<div id="wrapper">

	<p>Vous allez maintenant avoir l'honneur immense de pouvoir participer
 à une expérience ludique qui vous laissera une intense sensation de bonheur et bien être!</p>

	<div id="choix_joueurs">
		<form action="game.php" method="POST">
			<label>J1: </label>
			<input type="text" name="j1" placeholder="J1 name's" />

			<label>J2: </label>
			<input type="text" name="j2" placeholder="J2 name's" />
			
			<button id="btn" type="submit">OK</button>
		</form>
		<a id="ajout" href="">Ajoutez un joueur</a>
	</div>
	
</div>


<?php include 'inc/footer.php'; ?>

</body>
</html>