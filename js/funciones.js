jQuery( document ).ready(function( $ ) {
	//All the variables
	var ID = $("#identi").html(),load = $('<div>'), con,TID = Number(ID.split('test')[1]), nav = $("<nav>"), co, completo= true, lug = $("#interpretacion");
	//console logs
	console.log(ID);
	//NAVEGACION
	if (ID != "test00"){
		if (TID >= 3 && TID <= 5 ) {
		$("body").append("<div id='fondo-opaco'><div class='alerta'><img id='exclamation' src='../imgs/exclamation.png'/><p>Lo sentimos, pero este test no está disponible por el momento.</p></div></div>");
		}
		nav.load('../pages/template.html #nav', function(result){
		co = $(nav)[0].children;
		$("body").append(co);
	 	$('#nav a[href="../pages/' + location.pathname.split("pages/")[1] + '"]').addClass("active");
		})
		if (ID !="test99") {
		load.load('../pages/template.html #'+ID, function(result){
		con = $(load.html())[0].children;
		})
	 	if (TID >= 6 && TID <= 10) {
	 	var con2;
		var load2 = $("<div>").load('../pages/template.html #TIP', function(result) {
		con2 = $(load2.html())[0].children; })
	 	}
	 }
	}
	$(generarInput);
	//FUNCIONES BASICAS
	function add(num, bool, bool2) {
		temp2 = [];
		if (bool) {
			for (i in con) {
				if (i >= num) { temp2.push(con[i]);}
			} 
			if (bool2) {	temp2.push(con2); 	}
			return lug.append(temp2);
		} else {console.log(con[num]);
			return lug.append(con[num])};
	}
	function haTa(contenedor, datos, clases) {
    var tabla = $("<table/>");
    $.each(datos, function(rowIndex, r) {
        var fila = $("<tr/>");
        $.each(r, function(colIndex, c) {	fila.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").html(c));  });
        tabla.append(fila);
    });
    tabla.addClass(clases);
    return contenedor.append(tabla);
	}
	function diag(di1, di2, bool) {
	var resp = {}, var1, var2, M;
	$("input[type=radio]:checked").each(function(){		resp[this.name] = Number(this.value); 	});
	for (i in resp) {
		num = i.split("")[0];
		(num <= 10) ? var1+=resp[i] : var2+=resp[i];
	}
	var temp =[var1,var2], x1 = Math.abs(var1 - var2), temp2 ={[var1]:di1, [var2]:di2};
	temp.sort(function(a,b){return b-a});
	if (x1 > 2) { M = temp2[temp[0]]; } else { if (bool) { M = ""+di1+" y "+di2+""; } else {M = ""+di2+" y "+di1+""} }
	return [M, var1, var2];
	}
	function alerta() {
	$("body").append("<div id='fondo-opaco'><div class='alerta'><img id='exclamation' src='../imgs/exclamation.png'/><p>Algunos de los campos no han sido llenados o están incompletos. Por favor, verifica cualquier campo que esté marcado con un <span class='incompleto'>contorno rojo</span></p><p class='acciones'>Clic para cerrar</p></div></div>");
	$("#fondo-opaco").click(function(){
		$(this).remove();
	})
	}
	function generarInput() {
		var RG = {"RABCD": ["A", "B", "C", "D"],"R4321":[4, 3, 2, 1],"R12345":[1, 2, 3, 4, 5],"R1234":[1,2,3,4],"R54321":[5,4,3,2,1], "radioBtns":[1,2,3,4,5], "R0123": [0,1,2,3], "RCABCD": ["A", "B", "C", "D"]}, n=0;
		$(".radio").each(function(){
			var clase= $(this).attr('class').split(' ')[1],interno="";
			for (i in RG[clase]) {
			interno += "<input type='radio' name='"+n+"i' id='"+n+"i"+i+"' value='"+RG[clase][i]+"'><label for='"+n+"i"+i+"'>"+RG[clase][i]+"</label>";
			}
			$(this).html(interno);n++;
		})
	}
	function revisarCampos() {
		function hacInc(field) {	field.addClass("incompleto");}
		function quiInc(field) {	field.removeClass("incompleto");}
		$("input[type=text]").each(function(){
			var campo = $(this), value= campo.val(), largo = campo.val().length, num=campo.index(), filtro = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, CE = {"0": function() {(largo < 12) ? hacInc(campo) : quiInc(campo);}, "1": function(){(filtro.test(value)) ? quiInc(campo) : hacInc(campo);}, "2": function() {(largo < 9) ? hacInc(campo) : quiInc(campo);}, "3": function(){(largo < 3) ? hacInc(campo) : quiInc(campo);}}
			CE[num]();
		})
		$("input:radio").each(function(){
		var name = $(this).attr("name"), wrap = $(this).parent().parent();
		$("input:radio[name="+name+"]:checked").length == 0 ? hacInc(wrap) : quiInc(wrap);
		});
		completo = $(".incompleto").length ? false : true;
	}
	function calificar() {
    	$("#interpretacion").addClass("mostrar");
    	$("#tab").hide();
    	var funciones = {
    	"test01": function() {calTest01();},
    	 "test02": function () {calTest02();},
    	 "test06": function () {calTest06();},
    	 "test07": function () {calTest07();},
    	 "test08": function () {calTest08();},
    	 "test09": function () {calTest09();},
    	 "test10": function () {calTest10();}
    	}; 
    	funciones[ID]();
	};
	//enitaim
	$('#enviar').click(function () {
	revisarCampos();
	completo=true;
	if (completo) { calificar();enviarDatos(); } else { 	alerta(); }
	});
	$("input[type=text]").focus(function(){
		var campo = $(this);
		if (campo.hasClass("incompleto")) {	
		var i = campo.index(), left = campo.position().left, top = campo.position().top+(campo.height())*1.5;
		var props = ["Escribe tu <b>nombre completo</b>, por favor (:","Por favor, verifica que sea un <b>correo válido</b>.","Por favor, verifica que tu <b>matrícula</b> esté correcta y completa (:","Por favor, verifica que tu <b>sección</b> sea correcta (:"];
			$(".datos").append("<div id='advertencia'></div>");
			$("#advertencia").html(props[i]);
			$("#advertencia").css({
			"left": left,
			"top": top,
			})	
		}
		})
	$("input[type=text]").blur(function(){
		$("#advertencia").remove();
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
		//variable para el request 
		var request;
		function enviarDatos(event){
		// cancelar cualquier envío en proceso
		if (request) {
			request.abort();
		}
		//Hacer el array con el contenido de todos los campos.
		var info = [];
		info = [{name: "Hoja", value: ID},{name: "Hora", value: new Date()}, {name: "nombre", value: $("#nombre").val()}, {name: "correo", value: $("#correo").val()}, {name: "matricula", value: $("#matricula").val()}, {name: "seccion", value: $("#seccion").val()}];
		console.log(info);
		$("input:radio:checked").each(function(){
			info.push({name: this.name, value: this.value});
		})
		//convertir el array en un url
		var serializedData = jQuery.param(info);
		//console.log(serializedData);
		// seleccionar todos los campos de tipo input
		var $inputs = $(":input");
		//desactivar los campos de tipo input y mandar el mensaje de carga
		$inputs.prop("disabled", true);
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
	function calTest01() {
		var resp = {}, t, D = {"overall": [0,50], "memoria": [0,9], "cognitiva": [0,14], "compensacion":[0,6], "metacognitiva":[0,9], "afectiva": [0,6], "social":[0,6]};
		function fix1(num){		return Number(num.toFixed(1));}
		$("input[type=radio]:checked").each(function(){resp[this.name] = this.value;});
		for (i in resp) {
			var j = i.split("i"), k = Number(resp[i]), l = Number(j[0]);
			(l <= 8) ? t = "memoria" : (l >= 9 && l <= 22) ? t = "cognitiva": (l >= 23 && l <=28) ? t = "compensacion": (l >= 30 && l <= 37) ? t = "metacognitiva" : (l >= 38 && l <= 43) ? t = "afectiva": t = "social";
			D[t][0] += k;
			D["overall"][0] += k;
		}
		for (i in D) { 		D[i][0] = fix1(D[i][0]/D[i][1]); 		}
		add(0);
		haTa(lug, datos = [["Categoría", "Explicación", "Promedio"], ["Alto", "Se usa siempre o casi siempre<br>Se usa a menudo", "4.5 a 5.0<br>3.4 a 4.4"], ["Medio", "Se utiliza a veces", "2.4 a 3.4"], ["Bajo", "Por lo general no se usa<br>No se usa nunca o casi nunca", "1.0 a 1.4"]], "center blue");
		console.log("Tituloese");
    	add(1);
    	haTa(lug, datos1 = [["Estrategias cubiertas", "Tus promedios"],["Recordar de manera efectiva:", D["memoria"][0]],["Usar todos tus procesos mentales:", D["cognitiva"][0]],["Compensar la información faltante:", D["compensacion"][0]],	["Organizar y evaluar tu aprendizaje", D["metacognitiva"][0]],["Regular tus emociones:", D["afectiva"][0]],["Aprender con otros:", D["social"][0]],["TOTAL GLOBAL:", D["overall"][0]]], "center");
		add(2, 1);
	//gráfico
	var chart = new CanvasJS.Chart("grafica", {
		title:{
			text: "Promedios"              
		},
		axisY: {
			interval: 0.5, 			minimum: 1, 			maximum: 5 		},
		data: [              
		{	type: "bar",
			dataPoints: [
				{ label: "Recordar de manera efectiva",  y: D["memoria"][0]  },
				{ label: "Usar todos tus procesos mentales", y: D["cognitiva"][0]  },
				{ label: "Compensar la informacíón faltante", y: D["compensacion"][0]  },
				{ label: "Organizar y evaluar tu aprendizaje",  y: D["metacognitiva"][0]  },
				{ label: "Regular tus emociones",  y: D["afectiva"][0]  },
				{ label: "Aprender con otros",  y: D["social"][0]  },
				{ label: "Promedio global",  y: D["overall"][0]  }
			]
		}
		]
	});
	chart.render();
	}
	function calTest02(){
		var resp = {};
		$("input[type=radio]:checked").each(function(){ resp[this.name] = Number(this.value); });
		var datos = [["Estrategias deseables:", "Estrategias que deberías cambiar:"]], izq = [], der = [];
		var suma=0;
		//Sección 1
		for (i in resp) { 
			var j = Number(i.split("i")[0]);
			if (j < 5) {
				var previo = $("input[name="+i+"]").parent().prev().html();
				var sig = $("input[name="+i+"]").parent().next().html();
				(resp[i] === "A" || resp[i] === "B") ? izq.push(previo) : der.push(sig);
			} else if ( j >= 5 && j < 15) {
			suma += resp[i];
			}
		}
		if (izq.length > der.length) {
			for (i in izq) {	datos.push([izq[i], der[i]]); }
		} else { 
			for (i in der) {	datos.push([izq[i], der[i]]); }
		}
		haTa(lug, datos, "center");
		//Sección 2
		add(0);
		lug.append("<h3>Tu puntaje fue: "+suma+"</h3>");
		suma >= 30 ? add(1) : add(2);
		add(3, 1);
		haTa(lug, datos = [
		["","Estilo reflexivo","Estilo impulsivo"],
		["Ventajas", "Hablar de manera más precisa<br>Leer de manera más precisa<br>Piensan cuidadosamente lo que van a hacer", "Más dispuestos para hablar en clase<br>Ágiles lectores<br>Son más rápidos en las pruebas estandarizadas"],
		["Desventajas", "Esperan demasiado para hablar<br>Leen mucho más lento<br>Son más lentos en las pruebas estandarizadas","Menos precisos al hablar<br>Menos precisos al leer<br>Actúan sin pensar"]
		], "center");

	}
	function calTest06() {
		var V=0, A=0, H=0,resp = {};
		$("input[type=radio]:checked").each(function() {
			resp[this.name] = Number(this.value);
		})
		for (i in resp) {
			var num = i.split("")[0];
			(num <= 10) ? V+=resp[i] : (num > 10 && num<=20) ? A+=resp[i] : H+=resp[i];
		}
		var M, temp = [V, A, H];
		temp.sort(function(a, b){return b-a});
		if ((temp[0] - temp[1]) > 3) {
			if (V > A) {
			M = "visual";
			} else if (A > H){
			M = "auditivo";
			} else {
			M = "kinestésico";
			}
		} else {
			var x1 = Math.abs(V - A), x2 = Math.abs(A - H),x3 = Math.abs(V - H);
			if (x1 <= 2) {
				M = "visual y auditivo.";
			}
			if (x2 <= 2) {
				M = "auditivo y kinestésico.";
			}
			if (x3 <= 2) {
				M = "visual y kinestésico.";
			}
			if ((x1 <= 2 && x2 <= 2) || (x2 <= 2 && x3 <= 2) || (x3 <= 2 && x1 <= 2)) {
				M = "auditivo, visual y kinestésico."
			}
		}
		lug.append("<h3>Eres "+ M +"</h3>");
		add(0,1,1);
	}
	function calTest07() {
		var r = diag("extrovertido", "introvertido", false);
		lug.append("<h3>Eres "+r[0]+".</h3>");
		haTa(lug, datos = [["Extrovertido", "Introvertido"], [r[1], r[2]]], "center green")
		add(0,1,1);
	}
	function calTest08() {
		var r = diag("intuitivo", "secuencial concreto", true);
		lug.append("<h3>Eres "+r[0]+".</h3>");
		haTa(lug, datos = [["Intuitivo", "Secuencial concreto"], [r[1], r[2]]], "center blue");
		add(0,1,1);
	}
	function calTest09() {
		var r = diag("#cerrado", "#abierto", true);
		lug.append("<h3>Eres "+r[0]+".</h3>");
		haTa(lug, datos = [["#cerrado", "#abierto"], [r[1], r[2]]], "center blue");
		add(0,1,1);
	}
	function calTest10() {
		var r = diag("global", "analítico", true);
		lug.append("<h3>Eres "+r[0]+".</h3>");
		haTa(lug, datos = [["Global", "Analítico"], [r[1], r[2]]], "center blue");
		add(0,1,1);

	}
	function calTest06B() {
		var resp = {"0i":{}, "1i": {}, "2i":{}, "3i": {}, "4i": {}, "5i": {}, "6i":{}, "7i":{}, "8i":{}, "9i":{}, "10i":{}, "11i":{}, "12i":{}, "13i":{}, "14i":{}, "15i":{}}
		$("input[type=checkbox]:checked").each(function(){
			var num = $(this).attr("name"), value=$(this).val();
			resp[this.name][this.value] = this.value;
		});
		var V=0, A=0, R=0, K=0;
		var claveVARK = {
			"0": {"A": function() {K++;}, "B": function() {A++;}, "C": function() {R++;}, "D": function() {V++;}},
			"1": {"A": function() {V++;}, "B": function() {A++;}, "C": function() {R++;}, "D": function() {K++;}},
			"2": {"A": function() {K++;}, "B": function() {V++;}, "C": function() {R++;}, "D": function() {A++;}},
			"3": {"A": function() {K++;}, "B": function() {A++;}, "C": function() {R++;}, "D": function() {V++;}},
			"4": {"A": function() {A++;}, "B": function() {V++;}, "C": function() {K++;}, "D": function() {R++;}},
			"5": {"A": function() {K++;}, "B": function() {R++;}, "C": function() {V++;}, "D": function() {A++;}},
			"6": {"A": function() {K++;}, "B": function() {A++;}, "C": function() {V++;}, "D": function() {R++;}},
			"7": {"A": function() {R++;}, "B": function() {K++;}, "C": function() {A++;}, "D": function() {V++;}},
			"8": {"A": function() {R++;}, "B": function() {A++;}, "C": function() {K++;}, "D": function() {V++;}},
			"9": {"A": function() {K++;}, "B": function() {V++;}, "C": function() {R++;}, "D": function() {A++;}},
			"10": {"A": function() {V++;}, "B": function() {R++;}, "C": function() {A++;}, "D": function() {K++;}},
			"11": {"A": function() {A++;}, "B": function() {R++;}, "C": function() {V++;}, "D": function() {K++;}},
			"12": {"A": function() {K++;}, "B": function() {A++;}, "C": function() {R++;}, "D": function() {V++;}},
			"13": {"A": function() {K++;}, "B": function() {R++;}, "C": function() {A++;}, "D": function() {V++;}},
			"14": {"A": function() {K++;}, "B": function() {A++;}, "C": function() {R++;}, "D": function() {V++;}},
			"15": {"A": function() {V++;}, "B": function() {A++;}, "C": function() {R++;}, "D": function() {K++;}},
		}
		var test=["A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B"]
		for (i in claveVARK) {
			for (j in resp[i+"i"]) {
				claveVARK[i][resp[i+"i"][j]]();
			}
		}
		} //fin de calTest06

	//END OF THE DOCUMENT READY
	});