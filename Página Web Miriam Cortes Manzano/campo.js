
	function validateForm(){
		
		
		var nombre = document.forms["formulario"]["nombre"].value;
		if (nombre == "") {
			alert ("el campo nombre debe ser rellenado");
			return false;
		}
	

		var emailusuario = document.forms["formulario"]["emailusuario"].value;
		if (emailusuario == "") {
			alert ("el campo e-mail debe ser rellenado");
			return false;
		}
	

	
		var comentario = document.forms["formulario"]["comentario"].value;
		if (comentario == "") {
			alert ("el campo comentario debe ser rellenado");
			return false;
		}
		
		
		var aceptar = document.forms["formulario"]["aceptar"].value;
		if (aceptar == "") {
			alert ("Debes aceptar las condiciones.");
			return false;
		}
	}
	
	//aleta de cookies
	
	$(document).ready(function(){
			$("p.cookies").click(function(){
			$(this).slideUp();
				});
			});