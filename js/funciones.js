jQuery( document ).ready(function( $ ) {
	var completo=0, incompleto=0;;
	$(generarRadios);
	function generarRadios() {
		var i=1;
	$(".radioBtns").each(function(){
		var radioCodigo =" ";
		for (var j=1; j<=5; j++) {
			radioCodigo += "<input type=\"radio\" name=\""+i+"i\" value=\""+j+"\" id=\""+i+"i"+j+"\"><label for=\""+i+"i"+j+"\">"+j+"</label>\n";
		}
		$(this).html(radioCodigo);
		i++;
		});
	}
	$('#enviar').click(function () {
		revisarCampos();
		if (completo < 54) {
			$("#fondo-opaco").show();
		} else {
			calificar();
			enviarDatos();
		}
    	
    });
	//variable para el request
	var request;
		function enviarDatos(event){
		// cancelar cualquier envío en proceso
		if (request) {
			request.abort();
		}
		//Hacer el array con el contenido de todos los campos.
		var info = [];
		info = [{name: "Hora", value: new Date()}, {name: "nombre", value: $("#nombre").val()}, {name: "correo", value: $("#correo").val()}, {name: "matricula", value: $("#matricula").val()}, {name: "seccion", value: $("#seccion").val()}];
		console.log(info);
		for (i=1; i <= 50; i++) {
			//NO OLVIDAR AÑADIR ":CHECKED" AL FINAL DE INPUT:RADIO
			info.push({name: "R"+i, value: $("input:radio[name=\""+i+"i\"]:checked").val() });
		}
		//convertir el array en un url
		var serializedData = jQuery.param(info);
		//console.log(serializedData);
		// seleccionar todos los campos de tipo input
		var $inputs = $(":input");
		//desactivar los campos de tipo input y mandar el mensaje de carga
		$inputs.prop("disabled", true);
		$('#result').text('Enviando datos...');
		// enviar los datos con ajax a google
		request = $.ajax({
			//SAML
			url: "https://script.google.com/macros/s/AKfycbz9cHz0KBecOI35E6q5NUOxTINdMaKfRKzuGtDdq7vdTQ0Wdg/exec",
			//CAPEAI
			//url: "https://script.google.com/macros/s/AKfycby35-KwuG6kmaoARn2vLYr5cGSsysgMxuDWRo9wGlF-Cdb0LNhT/exec",
			type: "post",
			data: serializedData
		});
		// se regresa cuando el envío fue exitoso
		request.done(function (response, textStatus, jqXHR){
			// log a message to the console
			$('#result').text("¡Gracias por contestar!");
			console.log("Se envió");
		});
		// se regresa cuando no se pudo hacer la transferencia
		request.fail(function (jqXHR, textStatus, errorThrown){
			// error mostrado en la consola
			console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
		});
		// regresa independientemente de si se logró o no el envío
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});
		// prevenir que se ejecute la función por default
		//event.preventDefault();
	};
    function calificar() {
    	//For testing purposes
    	//cálculo de resultados
    	var overall = 0, memoria = 0, cognitiva = 0, compensacion = 0, metacognitiva = 0, afectiva = 0, social = 0;
		for (var i=1; i<= 50; i++) {
			//NO OLVIDAR AÑADIR ":CHECKED" PARA CADA INPUT:RADIO
			if($("input:radio[name=\""+i+"i\"]:checked").length == 0)
	  		{break;}
			overall += Number($("input:radio[name=\""+i+"i\"]:checked").val()); 
			(i >= 1 && i <=9) ? memoria += Number($("input:radio[name=\""+i+"i\"]:checked").val()) : (i >= 10 && i <= 23) ? cognitiva += Number($("input:radio[name=\""+i+"i\"]:checked").val()) : (i >= 24 && i <=29) ? compensacion += Number($("input:radio[name=\""+i+"i\"]:checked").val()) : (i >= 31 && i <= 38) ? metacognitiva += Number($("input:radio[name=\""+i+"i\"]:checked").val()) : (i >= 39 && i <= 44) ? afectiva += Number($("input:radio[name=\""+i+"i\"]:checked").val()) : social += Number($("input:radio[name=\""+i+"i\"]:checked").val());
		}
		memoria /= 9, cognitiva/=14, compensacion/=6,metacognitiva/=9,afectiva/=6,social/=6,overall/=50;
    	memoria= Number(memoria.toFixed(1)),cognitiva= Number(cognitiva.toFixed(1)),compensacion= Number(compensacion.toFixed(1)),metacognitiva= Number(metacognitiva.toFixed(1)),afectiva= Number(afectiva.toFixed(1)),social= Number(social.toFixed(1)),overall= Number(overall.toFixed(1));
    	console.log("memoria:" + memoria + "\n" +"cognitiva:" + cognitiva + "\n" + "compensacion:" + compensacion + "\n" +"metacognitiva:" + metacognitiva + "\n" +"afectiva:" + afectiva + "\n" +"social:" + social + "\n" +"overall:" + overall + "\n");
    	var totales = "<div class=\"tabla\"><div class=\"fila prima\"><div class=\"celda\">Estrategias cubiertas</div><div class=\"celda\">Tu promedio</div></div><div class=\"fila\"><div class=\"celda\">Recordar de manera efectiva.</div><div class=\"celda\">" + memoria + "</div></div><div class=\"fila\"><div class=\"celda\">Usar todos tus procesos mentales.</div><div class=\"celda\">"	+ cognitiva + "	</div></div><div class=\"fila\"><div class=\"celda\">	Compensar la información faltante.</div><div class=\"celda\">"+ compensacion + "</div></div><div class=\"fila\"><div class=\"celda\">	Organizar y evaluar tu aprendizaje.</div><div class=\"celda\">"+metacognitiva + "</div></div><div class=\"fila\"><div class=\"celda\">	Regular tus emociones.</div><div class=\"celda\">"+afectiva + "</div></div><div class=\"fila\"><div class=\"celda\">	Aprender con otros.</div><div class=\"celda\">"+social + "</div></div><div class=\"fila blue\"><div class=\"celda\">	TOTAL GLOBAL</div><div class=\"celda\">"+overall + "</div></div></div>";
    	$("#promedios").html(totales);
    	$("#interpretacion").addClass("mostrar");
	
	//gráfico
	var chart = new CanvasJS.Chart("grafica", {
		title:{
			text: "Promedios"              
		},
		axisY: {
			interval: 0.5,
			minimum: 1,
			maximum: 5
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "bar",
			dataPoints: [
				{ label: "Recordar de manera efectiva",  y: memoria  },
				{ label: "Usar todos tus procesos mentales", y: cognitiva  },
				{ label: "Compensar la informacíón faltante", y: compensacion  },
				{ label: "Organizar y evaluar tu aprendizaje",  y: metacognitiva  },
				{ label: "Regular tus emociones",  y: afectiva  },
				{ label: "Aprender con otros",  y: social  },
				{ label: "Promedio global",  y: overall  }
			]
		}
		]
	});
	chart.render();
	};
	$("input:text").focus(function(){
		var campo = $(this), izq, adv;
		if (campo.hasClass("incompleto")) {
		switch (campo.index()) {
			case 0:
			izq="300px";
			adv="Escribe tu <b>nombre completo</b>, por favor (:";
			break;
			case 1:
			izq="480px";
			adv="Por favor, verifica que sea un <b>correo válido</b>.";
			break;
			case 2:
			izq="660px";
			adv="Por favor, verifica que tu <b>matrícula</b> esté correcta y completa (:";
			break;
			case 3:
			izq="840px";
			adv="Por favor, verifica que tu <b>sección</b> sea correcta (:";
			break;
		}
		$("#advertencia").html(adv);
		$("#advertencia").css({
			"display": "inline-block",
			"left": izq,
			"z-index": "10",
		})
	}
	})
	$("input:text").blur(function(){
		$("#advertencia").css({
			"display": "none",
			"left": "",
			"z-index": "",
		})
	})
	$("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("#tab section.active").removeClass("active");
            $("#tab section:nth-child("+nthChild+")").addClass("active");
        }
    });
    function hacerIncompleto(field){
	  		field.addClass("incompleto");
	  	}
	  	function quitarIncompleto(field) {
	  		field.removeClass("incompleto");
	  	}
	function revisarCampos() {
	  $("input:text").each(function(){
	  	var campo = $(this);
	  	var value= campo.val(), largo = campo.val().length, num=campo.index(), filtro = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	  	switch (num) {
	  		case 0:
	  		(largo < 12) ? hacerIncompleto(campo) : quitarIncompleto(campo);
	  		break;
	  		case 1:
	  		(filtro.test(value)) ? quitarIncompleto(campo) : hacerIncompleto(campo);
	  		break;
	  		case 2:
	  		(largo < 9) ? hacerIncompleto(campo) : quitarIncompleto(campo);
	  		break;
	  		case 3:
			(largo < 3) ? hacerIncompleto(campo) : quitarIncompleto(campo);
	  	}
	  })
	$("input:radio").each(function(){
		var radio = $(this), name = radio.attr("name"), wrapper = radio.parent().parent();
	  if($("input:radio[name="+name+"]:checked").length == 0)
	  {
	  	hacerIncompleto(wrapper);
	  } else {
	  	quitarIncompleto(wrapper);
	  }
	});
	completo=55;
	$(".incompleto").each(function(){
		completo--;
	})
}
$("#fondo-opaco").click(function(){
		$(this).hide();
	})
});