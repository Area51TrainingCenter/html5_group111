$(".thumb li").click(function(){
	$(".thumb li").removeClass("activo");
	$(this).addClass("activo");
	var ruta=$(this).attr("data-ruta");
	//$(".principal").find("img").attr("src",ruta);
	$(".foto-principal").attr("src",ruta);

})

$(".nav-left").click(function(){
	var anterior=$(".activo").prev();
	console.log(anterior.length)
	if(anterior.length==0){

	}
	else{
		$(".thumb li").removeClass("activo");
		anterior.addClass("activo")
		var ruta=anterior.attr("data-ruta");
		console.log(ruta);
		$(".foto-principal").attr("src",ruta);
	}
})

$(".nav-right").click(function(){

	var siguiente=$(".activo").next();
	console.log(siguiente.length)
	if(siguiente.length==0){

	}else{
		$(".thumb li").removeClass("activo");
		siguiente.addClass("activo")
		var ruta=siguiente.attr("data-ruta");
		console.log(ruta);
		$(".foto-principal").attr("src",ruta);
		//console.log(siguiente);
	}
/*


	
	*/
})