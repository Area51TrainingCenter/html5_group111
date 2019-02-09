// las funciones pueden ser :
// con parametros
// sin parametros
// con retorno 
// sin retorno
 // funcion sin parametros

 function resta(){
 	var n1=10;
 	var n2=5;
 	var resta=n1-n2;
 	console.log(resta);
 }

 function suma(valor1,valor2){
 	var suma=valor1+valor2;
 	console.log(suma);
 }

 resta();
 suma(10,50);
 suma(6,34);



function calcularIGV(monto){
	var igv=monto*0.18;
	console.log(igv);
}


calcularIGV(189.03);

function imprimir(valor){
	console.log(valor);
}



imprimir("bienvenido");





// function con retorno

var igvCalculado=calcularIGV(100);




function calcularIGV(monto){
	var igv=monto*0.18;
	return igv;
}

// funcion sin retorno 

function suma(valor){
	var n1;
	var n2;
	var suma=n1+n2;
	console.log(suma);

}


var fecha=new Date();
var dato_dia=fecha.getDay();
var dato_mes=fecha.getMonth();
var dato_dia_mes=fecha.getDate();
var dato_anio=fecha.getFullYear();

fechaActual(dato_mes,dato_dia,dato_dia_mes,dato_anio);

function fechaActual(mes,dia,dia_del_mes,anio){
 console.log(mes);
 console.log(dia);

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
 var nombre_mes=meses[mes];
 var nombre_dia=dias[dia]

console.log("hoy "+ nombre_dia + " " + dia_del_mes+ " de " + nombre_mes + " del " +anio);


}






