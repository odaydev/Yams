function showChoice(cpt,currentPlayer,currentPlayerScore){
	var cptTot = 0;
	var lg = cpt.length-2;
	var i = 0;
		
	for(i=0;i<lg;i++){
		cptTot += cpt[i];
	
		// dès 1
		if(cpt[i] != "" || cpt[i] != 0){

			currentPlayer[i].html(cpt[i]);
			currentPlayer[i].css("background-color","yellow");
			currentPlayer[i].css("color","red");

			$(currentPlayer[i]).on("click", function(){

				currentPlayerScore[numCurrentPlayer][i] = cpt[i];
				console.log(currentPlayerScore);
				currentPlayer[i].addClass("yep");
				currentPlayer[i].css("background-color","");
				currentPlayer[i].css("color","black");		
				console.log(currentPlayer);
				nextPlayer(currentPlayer);
			});
		}
	}

	//chance
	//console.log(currentPlayer[16]);
	currentPlayer[16].html(cptTot);
	currentPlayer[16].css("background-color","yellow");
	currentPlayer[16].css("color","red");
	$(currentPlayer[16]).on("click", function(){
		currentPlayer[16].addClass("yep");
		currentPlayerScore[numCurrentPlayer][16] = cptTot;
		console.log(currentPlayerScore);
		currentPlayer[16].css("background-color","");
		currentPlayer[16].css("color","black");
				console.log(currentPlayer);
		
		nextPlayer(currentPlayer);
	});
	//Petite Suite
	if(cpt[7] == "ps"){
		currentPlayer[12].html(cptTot);
		currentPlayer[12].css("background-color","yellow");
		currentPlayer[12].css("color","red");
		$(currentPlayer[12]).on("click", function(){
			currentPlayer[12].addClass("yep");
			currentPlayer[12].css("background-color","");
			currentPlayer[12].css("color","black");		
			nextPlayer(currentPlayer);
	});
	}else{/*currentPlayer[12].html("<div id='choiceMin12'></div>");*/}
	//Grande Suite
	if(cpt[7] == "gs"){
		currentPlayer[13].html(cptTot);
		currentPlayer[13].css("background-color","yellow");
		currentPlayer[13].css("color","red");
		$(currentPlayer[13]).on("click", function(){
			currentPlayer[13].addClass("yep");
			currentPlayer[13].css("background-color","");
			currentPlayer[13].css("color","black");
			nextPlayer(currentPlayer);
	});
	}else{/*currentPlayer[13].html("<div id='choiceMin13'></div>");*/}
	//Double Paire
	if(cpt[6] == 9){
		currentPlayer[9].html(cptTot);
		currentPlayer[9].css("background-color","yellow");
		currentPlayer[9].css("color","red");		
		$(currentPlayer[9]).on("click", function(){
			currentPlayer[9].addClass("yep");
			currentPlayer[9].css("background-color","");
			currentPlayer[9].css("color","black");
			nextPlayer(currentPlayer);
	});
	}else{/*currentPlayer[9].html("<div id='choiceMin9'></div>");*/}
	//brelan
	if(cpt[6] == 11){
		currentPlayer[10].html(cptTot);
		currentPlayer[10].css("background-color","yellow");
		currentPlayer[10].css("color","red");
		$(currentPlayer[10]).on("click", function(){
			currentPlayer[10].addClass("yep");
			currentPlayer[10].css("background-color","");
			currentPlayer[10].css("color","black");
	        nextPlayer(currentPlayer);
	});
	}else{/*currentPlayer[10].html("<div id='choiceMin10'></div>");*/}
	//full (+brelan+DP)
	if(cpt[6] == 13){
		currentPlayer[11].html(30);
		currentPlayer[11].css("background-color","yellow");
		currentPlayer[11].css("color","red");
		$(currentPlayer[11]).on("click", function(){
			currentPlayer[11].addClass("yep");
			currentPlayer[11].css("background-color","");
			currentPlayer[11].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[10].html(cptTot);
		currentPlayer[10].css("background-color","yellow");
		currentPlayer[10].css("color","red");
		$(currentPlayer[10]).on("click", function(){
			currentPlayer[10].addClass("yep");
			currentPlayer[10].css("background-color","");
			currentPlayer[10].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[9].html(cptTot);
		currentPlayer[9].css("background-color","yellow");
		currentPlayer[9].css("color","red");
		$(currentPlayer[9]).on("click", function(){
			currentPlayer[9].addClass("yep");
			currentPlayer[9].css("background-color","");
			currentPlayer[9].css("color","black");
			nextPlayer(currentPlayer);
	});
	}else{/*currentPlayer[11].html("<div id='choiceMin11'></div>");*/}
	//carrée (+brelan+DP)
	if(cpt[6] == 17){
		currentPlayer[14].html(40);
		currentPlayer[14].css("background-color","yellow");
		currentPlayer[14].css("color","red");
		$(currentPlayer[14]).on("click", function(){
			currentPlayer[14].addClass("yep");
			currentPlayer[14].css("background-color","");
			currentPlayer[14].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[10].html(cptTot);
		currentPlayer[10].css("background-color","yellow");
		currentPlayer[10].css("color","red");
		$(currentPlayer[10]).on("click", function(){
			currentPlayer[10].addClass("yep");
			currentPlayer[10].css("background-color","");
			currentPlayer[10].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[9].html(cptTot);
		currentPlayer[9].css("background-color","yellow");
		currentPlayer[9].css("color","red");
		$(currentPlayer[9]).on("click", function(){
			currentPlayer[9].addClass("yep");
			currentPlayer[9].css("background-color","");
			currentPlayer[9].css("color","black");
			nextPlayer(currentPlayer);
	});
	}else{/*currentPlayer[14].html("<div id='choiceMin14'></div>");*/}
	//Yams (+carrée+brelan+DP+full)
	if(cpt[6] == 25){ //if(cpt[6] == 25 && boolContent == true)
		currentPlayer[15].html(50);
		currentPlayer[15].css("background-color","yellow");
		currentPlayer[15].css("color","red");
		$(currentPlayer[15]).on("click", function(){
			currentPlayer[15].addClass("yep");
			currentPlayer[15].css("background-color","");
			currentPlayer[15].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[11].html(30);
		currentPlayer[11].css("background-color","yellow");
		currentPlayer[11].css("color","red");
		$(currentPlayer[11]).on("click", function(){
			currentPlayer[11].addClass("yep");
			currentPlayer[11].css("background-color","");
			currentPlayer[11].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[9].html(cptTot);
		currentPlayer[9].css("background-color","yellow");
		currentPlayer[9].css("color","red");
		$(currentPlayer[9]).on("click", function(){
			currentPlayer[9].addClass("yep");
			currentPlayer[9].css("background-color","");
			currentPlayer[9].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[10].html(cptTot);
		currentPlayer[10].css("background-color","yellow");
		currentPlayer[10].css("color","red");
		$(currentPlayer[10]).on("click", function(){
			currentPlayer[10].addClass("yep");
			currentPlayer[10].css("background-color","");
			currentPlayer[10].css("color","black");
			nextPlayer(currentPlayer);
	});
		currentPlayer[14].html(40);
		currentPlayer[14].css("background-color","yellow");
		currentPlayer[14].css("color","red");
		$(currentPlayer[14]).on("click", function(){
			currentPlayer[14].addClass("yep");
			currentPlayer[14].css("background-color","");
			currentPlayer[14].css("color","black");
			nextPlayer(currentPlayer,14);
	});
	}else{/*currentPlayer[15].html("<div id='choiceMin15'></div>");*/}
}

 function urlParam(name){
   
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
   
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

function fichePlayers(nbP){

	var p =[];
	for(i=1;i<=nbP;i++) p[i] = urlParam(['p'+i]); 

	numCurrentPlayer = 1;
	var a = []; 
	for(i=0;i<nbP;i++){a += i+1;} 
	var k = null;
	var tabPlayers = {};
	var tabP = [];
	var i = 0;
	//var playerScore = [];
	currentPlayerScore = [];
	var tabAttr = ["des1","des2","des3","des4","des5","des6","totC","bonus","tot1",
	"dp","brelan","full","ps","gs","carree","yams","chance","tot2","totT"];
	for (k in a){
		tabPlayers["p"+a[k]] = {
			"des1" : $("#p"+(a[k])+"c1"),
			"des2" : $("#p"+(a[k])+"c2"),
			"des3" : $("#p"+(a[k])+"c3"),
			"des4" : $("#p"+(a[k])+"c4"),
			"des5" : $("#p"+(a[k])+"c5"),
			"des6" : $("#p"+(a[k])+"c6"),
			"totC" : $("#p"+(a[k])+"TC"),
			"bonus" :$("#p"+(a[k])+"B"),
			"tot1" : $("#p"+(a[k])+"T1"),
			"dp" : $("#p"+(a[k])+"DP"),
			"brelan" : $("#p"+(a[k])+"Br"),
			"full" : $("#p"+(a[k])+"F"),
			"ps" : $("#p"+(a[k])+"PS"),
			"gs" : $("#p"+(a[k])+"GS"),
			"carree" : $("#p"+(a[k])+"C"),
			"yams" : $("#p"+(a[k])+"Y"),
			"chance" : $("#p"+(a[k])+"Ch"),
			"tot2" :  $("#p"+(a[k])+"T2"),
			"totT" : $("#p"+(a[k])+"TT")
	}};

	var bb = "p"+numCurrentPlayer;
 	currentPlayer = []; 

 	//playerScore(playerScore[numCP]);
 	for(i=0;i<19;i++){
 		currentPlayer[i] = tabPlayers[bb][tabAttr[i]];
 	}

 	for(i=0;i<nbP;i++){
		currentPlayerScore[(i+1)] = tabAttr;	
 	}

}