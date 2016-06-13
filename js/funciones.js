jQuery( document ).ready(function( $ ) {
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
    	//calificar();
    	//enviarDatos();
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
    	var totales = "<div class=\"tabla\"><div class=\"fila prima\"><div class=\"celda\">Estrategias cubiertas</div><div class=\"celda\">Tu promedio</div></div><div class=\"fila\"><div class=\"celda\">Recordar de manera efectiva.</div><div class=\"celda\">" + memoria + "</div></div><div class=\"fila\"><div class=\"celda\">Usar todos tus procesos mentales.</div><div class=\"celda\">"	+ cognitiva + "	</div></div><div class=\"fila\"><div class=\"celda\">	Compensar la información faltante.</div><div class=\"celda\">"+ compensacion + "</div></div><div class=\"fila\"><div class=\"celda\">	Organizar y evaluar tu aprendizaje.</div><div class=\"celda\">"+metacognitiva + "</div></div><div class=\"fila\"><div class=\"celda\">	Regular tus emociones.</div><div class=\"celda\">"+afectiva + "</div></div><div class=\"fila\"><div class=\"celda\">	Aprender con otros.</div><div class=\"celda\">"+social + "</div></div><div class=\"fila\"><div class=\"celda\">	TOTAL GLOBAL</div><div class=\"celda\">"+overall + "</div></div></div>";
    	$("#promedios").html(totales);
    	$("#interpretacion").show();
	
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
	function revisarCampos() {
	  var completo = true;
	  $("input:text").
	  var value= $("#nombre").val();
	  if (value.length < 15) {
  		completo = false;
  		$("#nombre").css ({
  			"border":"2px solid red"
  		})
	  } else {
	  	$("#nombre").css ({
  			"border":""
  		})
	  }
	    var filtro = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	    if (filtro.test($("#correo").val())) {
	        $("#correo").css ({
  			"border":"2px solid red"
  		})
	    }
	    else {
	    	$("#correo").css ({
  			"border":""
  		})
	    }
	   value= $("#matricula").val();
	  if (value.length < 20) {
  		completo = false;
  		$("#matricula").css ({
  			"border":"2px solid red"
  		})
	  } else {
	  	$("#matricula").css ({
  			"border":""
  		})
	  }
	   value= $("#seccion").val();
	  if (value.length < 20) {
  		completo = false;
  		$("#seccion").css ({
  			"border":"2px solid red"
  		})
	  } else {
	  	$("#seccion").css ({
  			"border":""
  		})
	  }
	$("input:radio").each(function(){
	  var name = $(this).attr("name");
	  if($("input:radio[name="+name+"]:checked").length == 0)
	  {
	    completo = false;
	    $(this).parent().parent().css({
	    	"border": "1px solid red",
	    	"background" : "#FFCECE"
	    });
	  } else {
	  	$(this).parent().parent().css({
	    	"border": "",
	    	"background" : ""
	    })
	  }
	});
	//alert(completo);
	  /*for (i=1;i<=50;i++) {
	  	if ($.trim($("input:radio[name=\""+i+"i\"]").val()) == '') {
			completo = false;
			campoVacio = "R"+i;
			break;
		}
	  }
	  console.log(completo + "\nRespuesta vacía:" + campoVacio);
	  return completo;*/
}
});