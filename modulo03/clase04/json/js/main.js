
var ruta="https://jsonplaceholder.typicode.com/users";
//$.getJSON(url a consultar , funcion de callback)

$.getJSON(ruta,function (data){
	console.log(data);
	for (var i = 0; i < 10; i++) {
		//let nombre=data[i].name;
		$(".listado").append("<li onclick='verdetalle("+data[i].id+")' class='item'>"+data[i].name+" <a href='http://"+data[i].website+"' target='_blank'>Web</a></li>")
	}	
})


//var ruta="https://jsonplaceholder.typicode.com/users/id";

function verdetalle(valor){
 	var url="https://jsonplaceholder.typicode.com/users/"+valor

 	$.getJSON(url,function(data){
 		console.log(data.name);
 			console.log(data.username);
 			console.log(data.email);
 	})
}




/*
for(var i=0;i<10;i++){
	console.log(i)
}
*/