/*$("#item-nosotros").click(function(){
	limpiar();
	$("#item-nosotros").addClass("activo");
})

$("#item-servicios").click(function(){
	limpiar();
	$("#item-servicios").addClass("activo");
})
$("#item-contacto").click(function(){
	limpiar();
	$("#item-contacto").addClass("activo");
})

$("#item-blog").click(function(){
	limpiar();
	$("#item-blog").addClass("activo");
})
*/
$(".nav-site ul li").click(function(){
	limpiar();
	$(this).addClass("activo")
})


function limpiar(){
	$(".nav-site ul li").removeClass("activo");
	/*$("#item-inicio").removeClass("activo");
	$("#item-nosotros").removeClass("activo");
	$("#item-blog").removeClass("activo");
	$("#item-contacto").removeClass("activo");
	$("#item-servicios").removeClass("activo");*/

}