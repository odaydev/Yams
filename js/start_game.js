$("#wrapperIndex").css("display","none");
var nbP = 0;

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
var go = $.urlParam('go');
//console.log(go) ;
if(go == 'yes') $("#wrapperIndex").css("display","none"); else $("#wrapperIndex").css("display","block");

$( "#selectNbPlayers").on( "click",function(){
	nbP = $('#selectNbPlayers option:selected').text();
});



$("#startCard button").on("click",function() {
      if(nbP == ""){
      	$("#erreur").css("display","block");
      }else{
      	$("#startCard").css("display","none");
      	$("#erreur").css("display","none");      	
        $("#blocPlayerName").css("display","block");

        $("#blocPlayerName").append("<form id='formPlayerName'>");
        //$("#blocPlayerName form").append("<fieldset>");    
        $("#blocPlayerName form").append("<label>Entrez le nom des joueurs</label><br>");
        for(i=0;i<nbP;i++){ 
          $("#blocPlayerName label").after("<br>J"+(nbP-i)+"<br><input id='input"+(nbP-i)+"Name' type='text' /></br>");    
         }
        //$("#blocPlayerName input").append("</fieldset>");
        $("#blocPlayerName").append("</form>");      
        $("#blocPlayerName").append("<button id='goBtn'> C'est parti! </button>");     
        $("#blocPlayerName").append("<div id='erreur'>");
        $("#blocPlayerName #erreur").append("<p>Vous n'avez pas rempli correctement les champs du formulaire !</p>");
        $("#blocPlayerName").append("</div>");
      }
      });       


$("#blocPlayerName button").on("click",function() {
    var errorLog = 0;
      var input = [];
      var url = "";

        for(i=0;i<nbP;i++){
            
            input[i] = $('#input'+(i+1)+'Name').val();
            if(input[i] == "" || input[i] == null){
                  errorLog = 1;    console.log("ddd");               
            }
      }
     if(errorLog == 1){
          console.log("iii"); 
          $("#erreur").css("display","block");
             }else{
                 $("#erreur").css("display","none");
                 $("#wrapperIndex").css("display","none");
            url = 'game.php?go=yes&nbP='+nbP+'&p1='+input[0]+'&p2='+input[1]+'&p3='+input[2]+'&p4='+input[3]+'&p5='+input[4]+'&p6='+input[5];
            $(location).attr("href", url);
             }     
});	
	