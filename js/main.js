var c = 3;
$('#ajout').click(function(){
	//e.preventDefault();
	$('#btn').before('<label>J'+c+': </label><input type="text" name="j'+c+'" placeholder="J'+c+' name\'s" />');
	c++;
});
