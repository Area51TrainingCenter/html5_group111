var elemento_titulo=document.getElementById('title');
var fecha_actual=document.getElementById('fecha_actual');

//elemento_titulo.innerHTML="Texto Modificado en JS";

var dato_fecha=fechaActual();


fecha_actual.innerHTML=dato_fecha;

var btn_actualizar=document.getElementById('accion-actualizar');

btn_actualizar.addEventListener("click",tarea)

function tarea(){
	//elemento_titulo.innerHTML="Texto Modificado en JS"
	elemento_titulo.classList.remove("desactivo")
	elemento_titulo.classList.add("activo")
}



var btn_regresar=document.getElementById('accion-regresar');
btn_regresar.addEventListener("click",tarea_regresar)

function tarea_regresar(){
	//elemento_titulo.innerHTML="texto Modificado"
	elemento_titulo.classList.remove("activo")
	elemento_titulo.classList.add("desactivo")
	
}


