jQuery(document).ready(function($) {
	//variables
    var request;
    $.ajaxSetup({ cache: false });
    var one = ["Siempre", "Casi siempre", "Regularmente", "Pocas veces", "Nunca"];
    var dos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; 
    var num=1;
    var completo=false;
    //campos
    $(".opt").each(function(i){
    	var celda = $(this), content = "", clase = celda.attr('class').split(' ')[1];
    	var grupo;
    	if (clase== "one") {
    		grupo = "opinion"+ num.toString();
    		$.each(one, function (x, c) {
    		var iden = num+"g"+x;
    		content += '<input type="radio" name="'+grupo+'" id="'+iden+'" value="'+one[x]+'" required> <label class="opcion" for="'+iden+'">'+one[x]+'</label>';
    	});
    	} else {
    		grupo = "desempeño"+ num.toString();
    		$.each(dos, function (x, c) {
    		var iden = num+"g"+x;
    		content += '<input type="radio" name="'+grupo+'" id="'+iden+'" value="'+dos[x]+'" required> <label class="opcion" for="'+iden+'">'+dos[x]+'</label>';
    	});
    	}
    	celda.html(content);
    	num++;
    	}
    );
    // IP
    var direccion;
     $.getJSON("http://jsonip.com/?callback=?", function (data) {
        direccion = data.ip;
    });
     var identificador = navigator.userAgent;
     var temporal="";
     $("#enviar").click(function(){
     	validar();
     	if (completo) {
     		enviar();
     	} else {
     		alerta();
     	}
     	/*temporal += direccion + "<br>";
     	temporal += identificador + "<br>";
     	temporal += $("#seccion").val() + "<br>";
     	temporal += $("#periodo").val() + "<br>";
     	temporal += $("#ee").val() + "<br>";
     	temporal += $("#maestro").val() + "<br>";
     	$("input:radio:checked").each(function(){
     		temporal += $(this).attr("name")+" is "+$(this).val();
     		temporal +="<br>";
     	})
     	temporal += $("#comentario").val() + "<br>";*/
     	$("#temporal").html(temporal);
     	
     });
     function validar() {
     	console.log(completo);
     	function invalido(field) { field.addClass("invalid"); }
        function valido(field) { field.removeClass("invalid"); }
     	var campos=["#seccion", "#periodo", "#ee", "#maestro"];
     	$.each(campos, function(x, y){
     		var nombre=y.toString();
     		var campo = $(nombre);
     		$(nombre).val() == "" ? invalido(campo) : valido(campo);
     	}); //datos
     	$("input:radio").each(function(){
     		var name = $(this).attr("name"),
                wrap = $(this).parent().parent();
            $("input:radio[name=" + name + "]:checked").length == 0 ? invalido(wrap) : valido(wrap);
        });
        completo = $(".invalid").length ? false : true;
     	}
    function enviar(event) {
        if (request) {
            request.abort();
        }
        var info = [];
        info = [{ name: "fecha y hora", value: new Date() }, { name: "direccion", value: direccion }, { name: "identificador", value: identificador }, { name: "seccion", value: $("#seccion").val() }, { name: "periodo", value: $("#periodo").val() }, { name: "experiencia", value: $("#ee").val() },  { name: "maestro", value: $("#maestro").val() }];
        $("input:radio:checked").each(function() {
                info.push({ name: this.name, value: this.value });
            })
        info.push({name: "comentario", value: $("#comentario").text()});
            //convertir el array en un url
        var serializedData = jQuery.param(info);
        // seleccionar todos los campos de tipo input
        var $inputs = $(":input");
        //desactivar los campos de tipo input y mandar el mensaje de carga
        $inputs.prop("disabled", true);
        $("body").append("<div id='fondo-opaco'><div class='alerta'><p id='carga'>Enviando datos...</p></div></div>");
        // enviar los datos con ajax a google
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyDCCidYy1Ykjvb5ib1DPd_1OKPPCW15U45gWwEnExNEpjEy9Y/exec",
            type: "post",
            data: serializedData
        });
        // se regresa cuando el envío fue exitoso
        request.done(function(response, textStatus, jqXHR) {
            // log a message to the console
            console.log("Se envió");
            $(".alerta").html("<p style='padding:0 1em;'>Tus resultados se enviaron correctamente.</p><p style='padding:0 1em;'>Tu diagnóstico se envió al correo "+$("#correo").val()+"</p><p class='acciones'>Clic para cerrar</p>");
            $("#fondo-opaco").click(function() {
            $(this).remove();
        })
        });
        // se regresa cuando no se pudo hacer la transferencia
        request.fail(function(jqXHR, textStatus, errorThrown) {
            // error mostrado en la consola
            console.error(
                "The following error occured: " +
                textStatus, errorThrown
            );
            $(".alerta").append("<p>Ha ocurrido el error "+textStatus+" "+errorThrown+"</p><p class='acciones'>Clic para cerrar</p>");
            $("#fondo-opaco").click(function() {
            $(this).remove();
        })
        });
        // regresa independientemente de si se logró o no el envío
        request.done(function(response, textStatus, jqXHR) {
            // log a message to the console
            console.log("Se envió");
            $(".alerta").html("<p style='padding:0 1em;'>Tus respuestas se enviaron correctamente.</p><p style='padding:0 1em;'>Muchas gracias por contestar este instrumento.</p><p class='acciones'>Clic para cerrar</p>");
            $("#fondo-opaco").click(function() {
            $(this).remove();
        })
            $("#enviar").remove();
        });
        // se regresa cuando no se pudo hacer la transferencia
        request.fail(function(jqXHR, textStatus, errorThrown) {
            // error mostrado en la consola
            console.error(
                "The following error occured: " +
                textStatus, errorThrown
            );
            $(".alerta").append("<p>Ha ocurrido el error "+textStatus+" "+errorThrown+"</p><p class='acciones'>Clic para cerrar</p>");
            $("#fondo-opaco").click(function() {
            $(this).remove();
        })
        });
        // regresa independientemente de si se logró o no el envío
        request.always(function() {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });
        // prevenir que se ejecute la función por default
        //event.preventDefault();
    };
    function alerta() {
        $("body").append("<div id='fondo-opaco'><div class='alerta'><img id='exclamation' src='../imgs/exclamation.png'/><p>Algunos de los campos no han sido llenados o están incompletos. Por favor, verifica cualquier campo que esté marcado con <span class='invalid'>rojo</span></p><p class='acciones'>Clic para cerrar</p></div></div>");
        $("#fondo-opaco").click(function() {
            $(this).remove();
        })
    }
}
)