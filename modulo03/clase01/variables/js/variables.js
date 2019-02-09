// variables de tipo Texto
var nombre="Juan Carlos ramos Torriccelli";

// el numero de caracteres que tiene la cadena
console.log(nombre.length);
console.log(nombre.indexOf("a"));
console.log(nombre.split(""))

// variables de tipo numero 
var num1=10;

console.log(Math.max(10,20,3,4,5,623,2234,234234,430));
console.log(Math.min(10,20,3,4,5,623,2234,234234,430));
console.log(Math.round(12.345))
console.log(Math.PI)

var numero_r=Math.random()*100;
var entero=Math.round(numero_r);
console.log(entero);


// variables de tipo bool

var estado=true;
var estado=false;
if(estado){

}

// variables de tipo fecha

var fecha="10/20/20";
var fecha_real=new Date();
console.log(fecha);

console.log(fecha_real.getFullYear());
console.log(fecha_real.getMonth());
console.log(fecha_real.getDate());

console.log(fecha_real.getDay());
console.log(fecha_real.getHours());
console.log(fecha_real.getMinutes());
console.log(fecha_real.getSeconds());




var meses=[
"enero",
"FEBRERO",
"marzo",
"Diciembre"
]
console.log(meses[fecha_real.getMonth()])

// variables de tipo arreglo
//var usuario=[nombre,apellido,edad,rango,codigoacceso,estadoensistema]

var usuario=["juan","Ramos",20,"Profesor","c019",true,[20,18,10]]

console.log(usuario);
//console.log(usuario.length)
//var indiceultimo=usuario.length-1
console.log(usuario[0]);
console.log(usuario[1]);
console.log(usuario[2]);
console.log(usuario[3]);
console.log(usuario[4]);
console.log(usuario[5]);
console.log(usuario[6][0]);
console.log(usuario[6][1]);


// variables de tipo objeto

var persona={
	nombre:"",
	apellido:"",
	edad:0,
	telefono:"",
	correo:"",
	profesion:"",
	estado:false
}


persona.nombre="Juan Carlos";
persona.apellido="Ramos T."
persona.edad=21;


console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);




 var telefono1={
 	marca:"samsung",
 	precio:2000,
 	anio:2010
 }
 var telefono2={
 	marca:"Huawei",
 	precio:1000,
 	anio:2009
 }
 var telefono3={
 	marca:"Apple",
 	precio:3000,
 	anio:2015
 }
 var telefono4={
 	marca:"Nokia",
 	precio:1800,
 	anio:2013
 }

var telefonos=[telefono1,telefono2,telefono3,telefono4];

console.log(telefonos)









