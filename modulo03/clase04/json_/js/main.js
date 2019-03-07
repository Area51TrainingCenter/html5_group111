
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
 		var lat;
 		var lng;
 		lat=data.address.geo.lat;
 		lng=data.address.geo.lng;


 		$(".detalle").html(`<li><strong>User Name:</strong>${data.name}</li>
					<li><strong>User Email:</strong>${data.email}</li>
					<li><strong>User Address:</strong>${data.address.street} ${data.address.suite}</li>
					<li><strong>User Phone:</strong>${data.phone}</li>
					<li><strong>User Company:</strong>${data.company.name}</li>`)

 		crearMapa(lng,lat);
 	})




}




function crearMapa(longitud,latitud){
	/*console.log(longitud)
	console.log(latitud);*/
	/*
	var opciones={
		center:{lat: latitud*1, lng: longitud*1},
		zoom:5
	}*/
	var centro_mapa=new google.maps.LatLng(latitud,longitud)
	var opciones={
		center:centro_mapa,
		zoom:10
	}

	//var mapa=new google.maps.Map(elemento, opciones)
	//var elemento_mapa=$("#box-mapa");
	var elemento_mapa=document.getElementById('box-mapa');

	var mapa=new google.maps.Map(elemento_mapa, opciones)


	var marker=new google.maps.Marker({
		position: centro_mapa,
	    map: mapa,
		animation: google.maps.Animation.BOUNCE
	})




}