console.log("probando Jquery")
/*var elem1=document.getElementById('btn-cambiar')
elem1.addEventListener("click",tarea)
function tarea (){
	//
}*/

$("#btn-cambiar").click(function (){
		$("#title-site").html("Texto Cambiado")
		$("#title-site").removeClass("fondo-rojo");

		$("#title-site").addClass("fondo-azul");


});

$("#btn-regresar").click(function(){
		$("#title-site").html("Título Principal")
		$("#title-site").removeClass("fondo-azul");
		$("#title-site").addClass("fondo-rojo");
})

/*
$("#btn-cambiar").click(tarea_cambiar);
function tarea_cambiar(){
	console.log("click");
}*/
