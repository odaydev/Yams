(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

Object.size = function(arr) 
{
    var size = 0;
    for (var key in arr) 
    {
        if (arr.hasOwnProperty(key)) size++;
    }
    return size;
};

i = 0;

rest_des = new Object();

rest_des.un = "1";
rest_des.deux = "2";
rest_des.trois = "3";
rest_des.quatre = "4";
rest_des.cinq = "5";

$("#des1").clickToggle(function(){	
	$('#des1').css('background-color','#FAE448');	
	i++;
	delete rest_des.un;	
},
function(){
	$('#des1').css('background-color','transparent');
	i--;	
	rest_des.un = "1";
});

$("#des2").clickToggle(function(){
	$('#des2').css('border','1px solid red');
	i++;
	delete rest_des.deux;		
},
function(){
	$('#des2').css('border','transparent');
	i--;	
	rest_des.deux = "2";
});

$("#des3").clickToggle(function(){
	$('#des3').css('border-color','red');
	i++;
	delete rest_des.trois;	
},
function(){
	$('#des3').css('border-color','black');
	i--;	
	rest_des.trois = "3";
});

$("#des4").clickToggle(function(){
	$('#des4').css('border-color','red');
	i++;
	delete rest_des.quatre;	
},
function(){
	$('#des4').css(border-'color','black');
	i--;	
	rest_des.quatre = "4";
});

$("#des5").clickToggle(function(){
	$('#des5').css('border-color','red');
	i++;
	delete rest_des.cinq;
},
function(){
	$('#des5').css('border-color','black');
	i--;	
	rest_des.cinq = "5";
});

countLap = 0;

$('#btnLancer').click(function(e){
	
	e.preventDefault();
	countLap++;

	$('img').css("display","initial");
	if(countLap == 4){

	}else{

		if(i != 5){

			nbdes = 5 - i;

			
			$.ajax({
				url : "lancerdes.php",
				type : "GET",
				data : "nbdes="+nbdes,
				success : function(response){
					
					var keys = Object.keys(rest_des);

					for (var i = 0; i < response.length; i++) {

						$('#des'+rest_des[keys[i]]).html('<img src="img/'+response[i]+'.png" name="'+response[i]+'" width="50px" height="50px">');	
					}

					var des = new Object;

					des.un = $('#des1 img').attr("name");
					des.deux = $('#des2 img').attr("name");
					des.trois = $('#des3 img').attr("name");
					des.quatre = $('#des4 img').attr("name");
					des.cinq = $('#des5 img').attr("name");

					$.ajax({
						url : "calculdes.php",
						type : "POST",
						data : "des="+des,
						success : function(response){
							
							// var keys = Object.keys(rest_des);

							// for (var i = 0; i < response.length; i++) {

							// 	//$('#des'+rest_des[keys[i]]).html('<img src="img/'+response[i]+'.png" name="'+response[i]+'" width="50px" height="50px">');	
							// }
						}
					});
					
				}

			});
		}
	}
});


