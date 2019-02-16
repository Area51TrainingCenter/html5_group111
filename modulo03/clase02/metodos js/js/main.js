$(".btn-modal").click(function(){
	//$(".modal").addClass("mostrar-modal");
	//$(".modal").show();
	$(".modal").fadeIn(1500);
})

$(".cerrar-modal").click(function(){
	//$(".modal").removeClass("mostrar-modal");	
	//$(".modal").hide();
	$(".modal").fadeOut(1500);
})

$(".tabs li").click(function(){
	var opcion=$(this).attr("data-opcion");
	$(".listado-trabajos article").hide();
	$("."+opcion).fadeIn();
	
	/*
	$(".listado-trabajos article").hide();

	var opcion=$(this).attr("data-op");
	if(opcion==1){
		$(".js-empresa").fadeIn();
	}
	else if(opcion==2){
			$(".js-educacion").fadeIn();
	}
	else if(){

	}
	*/

})
/*
$("#empresa").click(function(){
	$(".listado-trabajos article").hide();
	$(".js-empresa").fadeIn();
})
$("#educacion").click(function(){
	$(".listado-trabajos article").hide();
	$(".js-educacion").fadeIn();
})
$("#personal").click(function(){
	$(".listado-trabajos article").hide();
	$(".js-personal").fadeIn();
})
$("#paisajes").click(function(){
	$(".listado-trabajos article").hide();
	$(".js-paisajes").fadeIn();
})
$("#gamer").click(function(){
	$(".listado-trabajos article").hide();
	$(".js-gamer").fadeIn();
})


$("#todos").click(function(){
	$(".listado-trabajos article").hide();
	$(".listado-trabajos article").fadeIn();
	
})

*/