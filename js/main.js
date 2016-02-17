function form_joueur(){

	var nbj = $('#select option:selected').text();
	$.ajax({
		url:"form_joueur.php",
		type: "POST",
		data: "nbj="+nbj,
		success: function(response){

			$('#choix_joueurs').html(response);
		}

	});
}

$("#more").click(function(){

});