
function fechaActual(){

var fecha=new Date();
var dato_dia=fecha.getDay();
var dato_mes=fecha.getMonth();
var dato_dia_mes=fecha.getDate();
var dato_anio=fecha.getFullYear();


 var meses=[
 	"Enero",
 	"Febrero",
 	"Marzo",
 	"Abril",
 	"Mayo",
 	"Junio",
 	"Julio",
 	"Agosto",
 	"Septiembre",
 	"Octubre",
 	"Novimebre",
 	"Diciembre"
 ]


 var dias=[
 "Domingo",
"Lunes",
"Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sábado",
"Domingo"
 ]
 var nombre_mes=meses[dato_mes];
 var nombre_dia=dias[dato_dia]

return "hoy "+ nombre_dia + " " + dato_dia_mes+ " de " + nombre_mes + " del " +dato_anio;


}



function calcular(){
	
}







