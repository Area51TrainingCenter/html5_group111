var grabarDatos=document.getElementById('btn-grabar');
grabarDatos.addEventListener("click",grabar)

function grabar(){
	event.preventDefault();
	var nombres_inp=document.getElementById('inp_nombres').value;
	var apellidos_inp=document.getElementById('inp_apellidos').value;
	var facebook_inp=document.getElementById('inp_facebook').value;

	var persona={
		nombres:nombres_inp,
		apellidos:apellidos_inp,
		facebook:facebook_inp	
	}

	var listado=document.getElementById('lista-registrados');
	var cotenido_temporal=listado.innerHTML;
	cotenido_temporal=cotenido_temporal+"<li>" + persona.nombres + " " + persona.apellidos+"<a target='_blank' href="+persona.facebook+"> (Ver Facebook) </a></li>"
	//listado.innerHTML="<li>" + persona.nombres + " " + persona.apellidos+"</li>";
		listado.innerHTML=cotenido_temporal;
}