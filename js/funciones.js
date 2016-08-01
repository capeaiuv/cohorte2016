jQuery(document).ready(function($) {
    $.ajaxSetup({ cache: false });
    //All the variables
    var ID = $("#identi").html(),
        load = $('<div>'),
        TID = Number(ID.split('test')[1]),
        nav = $("<nav>"),
        con, length2,
        co, completo = true, DIAGNOS = 'prueba';
        lug = $("#interpretacion");
    //console logs
    console.log(ID);
    //NAVEGACION
    if (ID != "test00") {
            if (ID != "test99") {
                load.load('../pages/template.html #' + ID, function(result) {
                    con = $(load.html())[0].children;
                    length2 = con.length;
                })
                if (TID >= 6 && TID <= 10) {
                    var con2;
                    var load2 = $("<div>").load('../pages/template.html #TIP', function(result) {
                        con2 = $(load2.html())[0].children;
                    })
                }
                 
        } else {
            $("body").append("<div id='fondo-opaco'><div class='alerta'><img id='exclamation' src='../imgs/exclamation.png'/><p>Lo sentimos, pero los sitios recomendados aún no están listos (: regresa pronto.</p></div></div>");
            }

        nav.load('../pages/template.html #nav', function(result) {
            co = $(nav)[0].children;
            $("body").append(co);
            $('#nav a[href="../pages/' + location.pathname.split("pages/")[1] + '"]').addClass("active");
        })
    }
    $(generarInput);
    //FUNCIONES BASICAS
    function HC(place, number, string) {
        if (number == 3) {
            var h3 = $("<h3>").html(string);
            return place.append(h3);
        } else {
            var h4 = $("<h4>").html("Tu puntaje fue " + string);
            return place.append(h4);
        }
    }

    function add(num, num2, bool) {
        temp2 = [];
        if (bool) {
            for (i = 0; i <= length2; i++) {
                if (i >= num) { temp2.push(con.namedItem("" + i + "")); }
            }
            return lug.append(temp2);
        } else {
            if (num == num2) {
                return lug.append(con.namedItem("" + num + ""));
            } else {
                for (i = 0; i <= length2; i++) {
                    if (i >= num && i <= num2) { temp2.push(con.namedItem("" + i + "")); }
                }
                return lug.append(temp2);
            }
        }
    }

    function haTa(contenedor, datos, clases) {
        var tabla = $("<table/>");
        $.each(datos, function(rowIndex, r) {
            var fila = $("<tr/>");
            $.each(r, function(colIndex, c) { fila.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").html(c)); });
            tabla.append(fila);
        });
        tabla.addClass(clases);
        return contenedor.append(tabla);
    }

    function diag(di1, di2, bool) {
        var resp = {},
            var1 = 0,
            var2 = 0,
            M = '';
        $("input[type=radio]:checked").each(function() { resp[this.name] = Number(this.value); });
        for (i in resp) {
            num = Number(i.split("i")[0]);
            if (num <= 10) {
                var1 += resp[i];
            } else {
                var2 += resp[i];
            }
        }
        var temp = [var1, var2],
            x1 = Math.abs(var1 - var2),
            temp2 = {
                [var1]: di1,
                [var2]: di2
            };
        temp.sort(function(a, b) {
            return b - a
        });
        if (x1 > 2) { M = temp2[temp[0]]; } else {
            if (bool) { M = "" + di1 + " y " + di2 + ""; } else { M = "" + di2 + " y " + di1 + "" }
        }
        return [M, var1, var2];
    }

    function alerta() {
        $("body").append("<div id='fondo-opaco'><div class='alerta'><img id='exclamation' src='../imgs/exclamation.png'/><p>Algunos de los campos no han sido llenados o están incompletos. Por favor, verifica cualquier campo que esté marcado con un <span class='incompleto'>contorno rojo</span></p><p class='acciones'>Clic para cerrar</p></div></div>");
        $("#fondo-opaco").click(function() {
            $(this).remove();
        })
    }

    function generarInput() {
        var RG = { "RABCD": ["A", "B", "C", "D"], "R4321": [4, 3, 2, 1], "R12345": [1, 2, 3, 4, 5], "R1234": [1, 2, 3, 4], "R54321": [5, 4, 3, 2, 1], "radioBtns": [1, 2, 3, 4, 5], "R0123": [0, 1, 2, 3], "RCABCD": ["A", "B", "C", "D"] };
        var RAB = {
"0i": ["Trabajar con otras personas","Trabajar solo",],
"1i": ["Fácil de tratar","De alguna manera tímido(a)",],
"2i": ["Cuando estoy con otras personas","Cuando estoy solo",],
"3i": ["Comienzo conversaciones con personas que no conozco","Espero a que alguien converse conmigo",],
"4i": ["Hablando con otras personas acerca de ello","Analizando todo por mi cuenta",],
"5i": ["Salir con otras personas","Quedarme solo en casa ",],
"6i": ["Es emocionante e interesante","Es difícil y me es tedioso",],
"7i": ["Solo y ansioso","En paz y en calma",],
"8i": ["Trabajar en grupo con otros estudiantes","Trabajar de manera individual"]
        };
        var n = 0, n2=0;
        var RENG = { "0i" :["an", "the", "a", "one"], "1i" :["Does", "Has", "Is", "Do"], "2i" :["writing", "writes", "write", "is writes"], "3i" :["What", "Who’s", "Whose", "Which"], "4i" :["She does", "She", "She’ll", "She’s"], "5i" :["went", "goes", "has gone", "has been"], "6i" :["works", "has been working", "is working", "work"], "7i" :["any", "all", "some", "lots"], "8i" :["works", "is working", "has been working", "worked"], "9i" :["You hurry", "Be hurrying", "Hurry", "Hurry you"], "10i" :["more good", "most good", "better", "gooder"], "11i" :["doesn’t", "don’t smoke", "don’t", "am not smoking"], "12i" :["get", "got", "getting", "‘ve got"], "13i" :["your", "yours", "you", "a"], "14i" :["on", "in", "at", "into"], "15i" :["the", "a", "–", "an"], "16i" :["Is", "Do", "Are", "Be"], "17i" :["are starting", "starts", "have starting", "start"], "18i" :["Why", "Where", "What", "Who"], "19i" :["will rain", "is going to rain", "rains", "rain"], "20i" :["eat", "am eating", "ate", "eated"], "21i" :["trys", "am trying", "have been trying", "tried"], "22i" :["some", "any", "all", "few"], "23i" :["Had he", "Is he", "Has he", "Did he"], "24i" :["Stopping", "Stop", "Stops", "You stop"], "25i" :["bad", "badest", "worse", "worst"], "26i" :["Yes, I does", "Yes, I am a student too", "Yes, I am", "Yes I’m"], "27i" :["have you", "have you got", "got you", "do you"], "28i" :["their", "theirs", "them", "they"], "29i" :["by foot", "on foot", "with foot", "walk"], "30i" :["the", "an", "–", "a"], "31i" :["Have you been", "Be you", "Are you", "Went you"], "32i" :["are closing", "closes", "close", "closed"], "33i" :["Who’s", "What", "Whose", "Which"], "34i" :["flies", "am going to fly", "have flown", "am flying"], "35i" :["do", "have", "did", "are"], "36i" :["run", "have been running", "are running", "ran"], "37i" :["anything", "something", "neither", "either"], "38i" :["lost", "has lost", "has been losing", "loses"], "39i" :["Gets", "Be getting", "You get", "Get"], "40i" :["most", "much", "more", "–"], "41i" :["am happy", "‘m", "am", "be happy"], "42i" :["have got", "got", "have get", "gets"], "43i" :["he’s", "him", "his", "his’"], "44i" :["on, at", "with, on,", "at, on", "at, in"], "45i" :["May", "Would", "Could", "Will"], "46i" :["Do", "Have", "Did", "Are"], "47i" :["can", "might", "would", "could"], "48i" :["fastly", "fast", "quick", "hard"], "49i" :["have", "had", "will have", "would have"], "50i" :["have", "will have", "–", "am going to"], "51i" :["of", "from", "in", "–"], "52i" :["is made", "made", "are made", "make"], "53i" :["is gone", "be gone", "had gone", "was gone"], "54i" :["was to", "has been to", "had been to", "I don’t know"], "55i" :["for", "since", "now", "I don’t know"], "56i" :["what", "who", "which", "I don’t know"], "57i" :["myself", "mine", "me", "I don’t know"], "58i" :["To jog", "Jogging", "Jog", "I don’t know"], "59i" :["us", "each other", "ourselves", "I don’t know"], "60i" :["was cooking", "cooked", "has cooked", "I don’t know"], "61i" :["that", "what", "who", "I don’t know"], "62i" :["could", "would", "will", "I don’t know"], "63i" :["flied", "flew", "has flown", "I don’t know"], "64i" :["Will", "Can", "Could", "I don’t know"], "65i" :["hardily", "hard", "very much", "I don’t know"], "66i" :["will", "would", "should", "I don’t know"], "67i" :["be lying", "am lying", "will be lying", "I don’t know"], "68i" :["into", "onto", "at", "I don’t know"], "69i" :["is", "was", "has been", "I don’t know"], "70i" :["tell", "have told", "told", "I don’t know"], "71i" :["visits", "had visited", "was visiting", "I don’t know"], "72i" :["since...", "for...", "... years", "I don’t know"], "73i" :["who", "that", "what", "I don’t know"], "74i" :["Him", "Himself", "He", "I don’t know"], "75i" :["to like", "liking", "like", "I don’t know"], "76i" :["myself", "me", "I", "I don’t know"], "77i" :["did you do", "were you doing", "did you", "I don’t know"], "78i" :["That", "What", "Which", "I don’t know"], "79i" :["will", "would", "could", "I don’t know"], "80i" :["has written", "had written", "wrote", "I don’t know"], "81i" :["should", "could", "would", "I don’t know"], "82i" :["day", "daily", "everyday", "I don’t know"], "83i" :["would know", "know", "knew", "I don’t know"], "84i" :["will", "am going to", "-", "I don’t know"], "85i" :["in", "to", "into", "I don’t know"], "86i" :["gives", "is given", "has given", "I don’t know"], "87i" :["will", "would", "can", "I don’t know"], "88i" :["was swimming", "had been swimming", "swim", "I don’t know"], "89i" :["since", "during", "for", "I don’t know"], "90i" :["which", "who", "whose", "I don’t know"], "91i" :["them", "theirselves", "themselves", "I don’t know"], "92i" :["to introduce", "introducing", "to be introducing", "I don’t know"], "93i" :["she", "he", "it", "I don’t know"], "94i" :["was breaking, played", "broke, was playing", "breaks, is playing", "I don’t know"], "95i" :["whose", "that", "who", "which"], "96i" :["Might", "Could", "May", "I don’t know"], "97i" :["had stolen", "have stolen", "stole", "I don’t know"], "98i" :["could", "managed to", "Can", "I don’t know."]
        }
        $(".radio").each(function() {
            var clase = $(this).attr('class').split(' ')[1],
                interno = "";
                         if (clase == "RAB") {
                            for (i in RAB[n2+"i"]) {
                                interno += "<input type='radio' name='" + n + "i' id='" + n + "i" + i + "' value='" + i + "'><label style='display:block' for='" + n + "i" + i + "'>" + RAB[n2+"i"][i] + "</label>";
                            } n2++;
                        } else if (clase == "RENG") {
                                for (i in RENG[n+"i"]) {
                                    interno += "<input type='radio' name='" + n + "i' id='" + n + "i" + i + "' value='" + i + "'><label for='" + n + "i" + i + "'>" + RENG[n+"i"][i] + "</label>";
                                }
                        } else {for (i in RG[clase]) {
                            interno += "<input type='radio' name='" + n + "i' id='" + n + "i" + i + "' value='" + RG[clase][i] + "'><label for='" + n + "i" + i + "'>" + RG[clase][i] + "</label>";
                        }}
           /* if (clase != "RAB" || clase != "RENG") {for (i in RG[clase]) {
                            interno += "<input type='radio' name='" + n + "i' id='" + n + "i" + i + "' value='" + RG[clase][i] + "'><label for='" + n + "i" + i + "'>" + RG[clase][i] + "</label>";
                        }} else if (clase == "RENG") {
                        		for (i in RENG[n+"i"]) {
                        			interno += "<input type='radio' name='" + n + "i' id='" + n + "i" + i + "' value='" + RENG[n+"i"][i] + "'><label for='" + n + "i" + i + "'>" + RENG[n+"i"][i] + "</label>";
                        		}
                        } else {
                            console.log("success!");
                            for (i in RAB[n+"i"]) {
                                interno += "<input type='radio' name='" + n + "i' id='" + n + "i" + i + "' value='" + RAB[n+"i"][i] + "'><label for='" + n + "i" + i + "'>" + RAB[n+"i"][i] + "</label>";
                            }
                        }*/
            $(this).html(interno);
            n++;
        })
    }

    function revisarCampos() {
        function hacInc(field) { field.addClass("incompleto"); }

        function quiInc(field) { field.removeClass("incompleto"); }
        $("input[type=text]").each(function() {
            var campo = $(this),
                value = campo.val(),
                largo = campo.val().length,
                num = campo.index(),
                filtro = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                CE = {
                    "0": function() {
                        (largo < 12) ? hacInc(campo): quiInc(campo);
                    },
                    "1": function() {
                        (filtro.test(value)) ? quiInc(campo): hacInc(campo);
                    },
                    "2": function() {
                        (largo < 9) ? hacInc(campo): quiInc(campo);
                    },
                    "3": function() {
                        (largo < 3) ? hacInc(campo): quiInc(campo);
                    }
                }
            CE[num]();
        })
        $("input:radio").each(function() {
            var name = $(this).attr("name"),
                wrap = $(this).parent().parent();
            $("input:radio[name=" + name + "]:checked").length == 0 ? hacInc(wrap) : quiInc(wrap);
        });
        completo = $(".incompleto").length ? false : true;
    }

    function calificar() {
        $("#interpretacion").addClass("mostrar");
        $("#tab").hide();
        var funciones = {
            "test01": function() { calTest01(); },
            "test02": function() { calTest02(); },
            "test03": function() { calTest03(); },
            "test04": function() { calTest04(); },
            "test05": function() { calTest05(); },
            "test06": function() { calTest06(); },
            "test07": function() { calTest07(); },
            "test08": function() { calTest08(); },
            "test09": function() { calTest09(); },
            "test10": function() { calTest10(); },
            "test11": function() { calTest11(); }
        };
        funciones[ID]();
        //console.log(DIAGNOS);
    };
    //enitaim
    $('#enviar').click(function() {
        revisarCampos();
        if (completo) { calificar();
            enviarDatos(); } else { alerta(); }
    });
    $("input[type=text]").focus(function() {
        var campo = $(this);
        if (campo.hasClass("incompleto")) {
            var i = campo.index(),
                left = campo.position().left,
                top = campo.position().top + (campo.height()) * 1.5;
            var props = ["Escribe tu <b>nombre completo</b>, por favor (:", "Por favor, verifica que sea un <b>correo válido</b>.", "Por favor, verifica que tu <b>matrícula</b> esté correcta y completa (:", "Por favor, verifica que tu <b>sección</b> sea correcta (:"];
            $(".datos").append("<div id='advertencia'></div>");
            $("#advertencia").html(props[i]);
            $("#advertencia").css({
                "left": left,
                "top": top,
            })
        }
    })
    $("input[type=text]").blur(function() {
        $("#advertencia").remove();
    })
    $("ul#tabs li").click(function(e) {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("#tab section.active").removeClass("active");
            $("#tab section:nth-child(" + nthChild + ")").addClass("active");
        }
    });
    //variable para el request 
    var request;

    function enviarDatos(event) {
        // cancelar cualquier envío en proceso
        if (request) {
            request.abort();
        }
        //Hacer el array con el contenido de todos los campos.
        var info = [];
        info = [{ name: "Hoja", value: ID }, { name: "Hora", value: new Date() }, { name: "nombre", value: $("#nombre").val() }, { name: "correo", value: $("#correo").val() }, { name: "matricula", value: $("#matricula").val() }, { name: "seccion", value: $("#seccion").val() }, {name:"diagnóstico", value: DIAGNOS}];
        $("input:radio:checked").each(function() {
                info.push({ name: this.name, value: this.value });
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
        request.done(function(response, textStatus, jqXHR) {
            // log a message to the console
            console.log("Se envió");
        });
        // se regresa cuando no se pudo hacer la transferencia
        request.fail(function(jqXHR, textStatus, errorThrown) {
            // error mostrado en la consola
            console.error(
                "The following error occured: " +
                textStatus, errorThrown
            );
        });
        // regresa independientemente de si se logró o no el envío
        request.always(function() {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });
        // prevenir que se ejecute la función por default
        //event.preventDefault();
    };

    function calTest01() {
        var resp = {},
            t, D = { "overall": [0, 50], "memoria": [0, 9], "cognitiva": [0, 14], "compensacion": [0, 6], "metacognitiva": [0, 9], "afectiva": [0, 6], "social": [0, 6] };

        function fix1(num) {
            return Number(num.toFixed(1));
        }
        $("input[type=radio]:checked").each(function() { resp[this.name] = this.value; });
        for (i in resp) {
            var j = i.split("i"),
                k = Number(resp[i]),
                l = Number(j[0]);
            (l <= 8) ? t = "memoria": (l >= 9 && l <= 22) ? t = "cognitiva" : (l >= 23 && l <= 28) ? t = "compensacion" : (l >= 30 && l <= 37) ? t = "metacognitiva" : (l >= 38 && l <= 43) ? t = "afectiva" : t = "social";
            D[t][0] += k;
            D["overall"][0] += k;
        }
        for (i in D) { D[i][0] = fix1(D[i][0] / D[i][1]); }
        HC(lug, 3, "Cómo interpretar tus promedios");
        haTa(lug, datos = [
            ["Categoría", "Explicación", "Promedio"],
            ["Alto", "Se usa siempre o casi siempre<br>Se usa a menudo", "4.5 a 5.0<br>3.4 a 4.4"],
            ["Medio", "Se utiliza a veces", "2.4 a 3.4"],
            ["Bajo", "Por lo general no se usa<br>No se usa nunca o casi nunca", "1.0 a 1.4"]
        ], "center blue");
        lug.append("<br><br>");
        HC(lug, 3, "Qué significan estos promedios para ti");
        haTa(lug, datos1 = [
            ["Estrategias cubiertas", "Tus promedios"],
            ["Recordar de manera efectiva:", D["memoria"][0]],
            ["Usar todos tus procesos mentales:", D["cognitiva"][0]],
            ["Compensar la información faltante:", D["compensacion"][0]],
            ["Organizar y evaluar tu aprendizaje", D["metacognitiva"][0]],
            ["Regular tus emociones:", D["afectiva"][0]],
            ["Aprender con otros:", D["social"][0]],
            ["TOTAL GLOBAL:", D["overall"][0]]
        ], "center");
        lug.append("<br><br>");
        add(0, 1);
        lug.append("<div id='grafica'></div>");
        //gráfico
        var chart = new CanvasJS.Chart("grafica", {
            title: {
                text: "Promedios"
            },
            axisY: {
                interval: 0.5,
                minimum: 1,
                maximum: 5
            },
            data: [{
                type: "doughnut",
                dataPoints: [
                    { label: "Recordar de manera efectiva", y: D["memoria"][0] },
                    { label: "Usar todos tus procesos mentales", y: D["cognitiva"][0] },
                    { label: "Compensar la informacíón faltante", y: D["compensacion"][0] },
                    { label: "Organizar y evaluar tu aprendizaje", y: D["metacognitiva"][0] },
                    { label: "Regular tus emociones", y: D["afectiva"][0] },
                    { label: "Aprender con otros", y: D["social"][0] },
                    { label: "Promedio global", y: D["overall"][0] }
                ]
            }]
        });
        chart.render();
        DIAGNOS = "Así aprendo yo inglés, Memoria: " + D["memoria"][0] + ", Cognitiva: " +D["cognitiva"][0] + ", Compensación: "  + D["compensacion"][0] + ", Metacognitiva: "+ D["metacognitiva"][0] + ", Afectiva: " + D["afectiva"][0] + ", Social: " + D["social"][0] + ", Promedio global: " + D["overall"][0] ;
    }

    function calTest02() {
        var resp = {};
        $("input:checked").each(function() { resp[this.name] = this.value; });
        var datos = [
                ["Estrategias deseables:", "Estrategias que deberías cambiar:"]
            ],
            izq = [],
            der = [],
            suma = 0, di = '',
            suma2 = 0;
        //Sección 1
        for (i in resp) {
            var j = Number(i.split("i")[0]);
            if (j < 5) {
                var previo = $("input[name=" + i + "]").parent().prev().html();
                var sig = $("input[name=" + i + "]").parent().next().html();
                (resp[i] == "A" || resp[i] == "B") ? izq.push(previo): der.push(sig);
            } else if (j >= 5 && j < 15) { //Sección 2
                suma += Number(resp[i]);
            } else { //Sección 3
                suma2 += Number(resp[i]);
            }
        }
        if (izq.length > der.length) {
            for (i in izq) { datos.push([izq[i], der[i]]); }
        } else {
            for (i in der) { datos.push([izq[i], der[i]]); }
        }
        HC(lug, 3, "Preferencias del estudiante");
        add(lug, 0, 1);
        haTa(lug, datos, "center");
        lug.append("<br><br>");
        //Sección 2
        HC(lug, 3, "¿Rápido o lento?");
        HC(lug, 4, suma);
        add(lug, 2, 2);
        (suma >= 30) ? add(3, 3): add(4, 4);
        (suma >= 30) ? di="reflexivo": di="impulsivo";
        add(lug, 5, 7);
        haTa(lug, datos = [
            ["", "Estilo reflexivo", "Estilo impulsivo"],
            ["Ventajas", "Hablar de manera más precisa<br>Leer de manera más precisa<br>Piensan cuidadosamente lo que van a hacer", "Más dispuestos para hablar en clase<br>Ágiles lectores<br>Son más rápidos en las pruebas estandarizadas"],
            ["Desventajas", "Esperan demasiado para hablar<br>Leen mucho más lento<br>Son más lentos en las pruebas estandarizadas", "Menos precisos al hablar<br>Menos precisos al leer<br>Actúan sin pensar"]
        ], "center");
        lug.append("<br><br>");
        add(lug, 8, 9);
        //Sección 3
        HC(lug, 3, "Procesos hemisferio derecho y hemisferio izquierdo");
        HC(lug, 4, suma2);
        add(lug, 10, 0, 1);
        haTa(lug, datos = [
            ["Puntaje", ""],
            ["28-32", "Alta preferencia por el hemisferio derecho"],
            ["23-27", "Preferencia moderada por el hemisferio derecho"],
            ["18-22", "Ninguna preferencia particular para cada hemisferio"],
            ["13-17", "Preferencia moderada por el hemisferio izquierdo"],
            ["8-12", "Alta preferencia por el hemisferio izquierdo"]
        ], "center blue special");
        lug.append("<br><br>");
        $(".special tr:first th").attr('colspan', 2);
        $(".special tr td:first").css({ "width": "80px" });
        var h = 0;
        (suma2 <= 12) ? h = 6: (suma2 >= 13 && suma2 <= 17) ? h = 5 : (suma2 >= 18 && suma2 <= 22) ? h = 4 : (suma2 >= 23 && suma2 <= 27) ? h = 3 : h = 2;
        $(".special tr:nth-child(" + h + ")").css({ "background-color": "#2FB3F7" });
        var di2 = $(".special tr:nth-child(" + h + ") td:nth-child(2)").html();
        haTa(lug, datos = [
            ["Hemisferio Izquierdo", "Hemisferio Derecho"],
            ["Lente de acercamiento", "Lente panorámico"],
            ["Reglas y definiciones", "Reglas generales"],
            ["Lógico, sistemático, planeado", "Intuitivo, flexible, espontáneo"],
            ["Idioma, matemáticas", "Música, arte"],
            ["Enfocarse en los detalles", "Entiende la idea general"]
        ], "center green");
        lug.append("<br><br>");
        DIAGNOS = "Estrategias deseables: " + izq + ", Estrategias a cambiar: " + der + "; " + "Rápido o lento: " + di + ", " + suma + "; Procesos hemisferio derecho y hemisferio izquierdo: "+di2 + ", "+ suma2;
    }

    function calTest03() {
        var resp = {},
            suma = 0,
            suma2 = 0,
            suma3 = 0,
            suma4 = 0;
        $("input:checked").each(function() { resp[this.name] = this.value; });
        for (i in resp) {
            var j = Number(i.split("i")[0]);
            if (j < 5) {
                suma += Number(resp[i]);
            } else if (j >= 5 && j < 10) {
                suma2 += Number(resp[i]);
            } else if (j >= 10 && j < 18) { //Sección 2
                suma3 += Number(resp[i]);
            } else {
                suma4 += Number(resp[i]);
            }
        }
        HC(lug, 3, "Dos tipos de motivación");
        haTa(lug, datos = [
            ["Tu puntaje en la parte I:", "Tu puntaje en la parte II:"],
            [suma, suma2]
        ], "center");
        var h = 0, h2 = 0;
        (suma <= 12) ? h = 3 : h = 2;
        (suma2 <= 12) ? h2 = 3 : h2 = 2;
        lug.append("<h4>Posees una "+ (h == 2) ? "Alta automotivación" : "Baja automotivación"+" y una"+(h == 2) ? "Alta motivación de otros" : "Baja motivación de otros"+"</h4>");
        add(0, 2);
        haTa(lug, datos = [
            ["Puntaje", "Parte I", "Parte II"],
            ["13-20", "Alta automotivación", "Alta motivación de otros"],
            ["5-12", "Baja automotivación", "Baja motivación de otros"]
        ], "center green special");
        $(".special tr:nth-child(" + h + ") td:nth-child(2)").css({ "background-color": "#2FB3F7" });
        $(".special tr:nth-child(" + h2 + ") td:nth-child(3)").css({ "background-color": "#2FB3F7" });
        var di2 = $(".special tr:nth-child(" + h + ") td:nth-child(2)").html();
        var di3 = $(".special tr:nth-child(" + h2 + ") td:nth-child(3)").html();
        lug.append("<br><br>");
        //Sección 2
        HC(lug, 3, "Autoestima en general");
        HC(lug, 4, suma3);
        add(3, 7);
        haTa(lug, datos = [
            ["Puntaje", ""],
            ["26-32", "Tienes un alto nivel de autoconfianza en general."],
            ["20-25", "Tu nivel de autoconfianza en general es bastante fuerte."],
            ["14-19", "Tu nivel de autoconfianza en general es satisfactoria, pero debes mejorar algunos aspectos la perspectiva que tienes de ti mismo. "],
            ["8-13", "Tu nivel de autoconfianza es bastante bajo, deberías pensar seriamente en mejorar la perspectiva que tienes de ti mismo."]
        ], "center blue special2")
        $(".special2 tr:first th").attr('colspan', 2);
        $(".special2 tr td:first").css({ "width": "80px" });
        var h = 0;
        (suma3 <= 13) ? h = 5: (suma3 >= 14 && suma3 <= 19) ? h = 4 : (suma3 >= 20 && suma3 <= 25) ? h = 3 : h = 2;
        $(".special2 tr:nth-child(" + h + ")").css({ "background-color": "#2FB3F7" })
        var di4 = $(".special2 tr:nth-child(" + h + ") td:nth-child(2)").html();
        add(8, 8);
        lug.append("<br><br>");
        //Sección 3
        HC(lug, 3, "Ego del idioma");
        HC(lug, 4, suma4);
        add(9, 9);
        haTa(lug, datos = [
            ["Puntaje", ""],
            ["7-13", "Débil ego del lenguaje"],
            ["14-21", "Moderado ego del lenguaje"],
            ["22-28", "Fuerte ego del lenguaje"]
        ], "center blue special3");
        $(".special3 tr:first th").attr('colspan', 2);
        $(".special3 tr td:first").css({ "width": "80px" });
        var h2 = 0;
        (suma4 <= 13) ? h2 = 2: (suma4 >= 14 && suma4 <= 21) ? h2 = 3 : h2 = 4;
        $(".special3 tr:nth-child(" + h2 + ")").css({ "background-color": "#2FB3F7" });
        var di5 = $(".special3 tr:nth-child(" + h2 + ") td:nth-child(2)").html();
        add(lug, 10, 10);
        lug.append("<br><br>");
        DIAGNOS= "Dos tipos de motivación: "+ di2 +", " + di3 + ", " + suma + ", "+suma2+"; Autoestima en general: " + di4 + ", " + suma3 + "; Ego del idioma: " + di5 + ", " + suma4
    }

    function calTest04() {
        resp = {}, suma=[0,0,0,0,0,0,0], suma2=0, suma3=0;
        $("input:checked").each(function() {
            resp[this.name] = this.value;
        })
        for (i in resp) {
            var num = Number(i.split("i")[0]);
            if (num == 0 || num == 7) {suma[0]+= Number(resp[i]);}
                else if (num == 1 || num == 8) {suma[1]+= Number(resp[i]);}
                else if (num == 2 || num == 9) {suma[2]+= Number(resp[i]);}
                else if (num == 3 || num == 10) {suma[3]+= Number(resp[i]);}
                else if (num == 4 || num == 11) {suma[4]+= Number(resp[i]);}
                else if (num == 5 || num == 12) {suma[5]+= Number(resp[i]);}
                else if (num == 6 || num == 13) {suma[6]+= Number(resp[i]);}
                else if (num >= 14 && num <= 29){suma2+=Number(resp[i]);}
                else if (num >= 30){suma3+=Number(resp[i])};
        }
        HC(lug, 3, "Siete tipos de inteligencia");
        haTa(lug, datos=[["Puntaje",""], [suma[0], "inteligencia lingüística"], [suma[1], "inteligencia <br>lógico-matemático"], [suma[2], "inteligencia espacial"], [suma[3], "inteligencia kinestésica "], [suma[4], "inteligencia musical"], [suma[5], "inteligencia interpersonal"], [suma[6], "inteligencia intrapersonal"]], "center");
        add(0,0);
        haTa(lug, datos =[["Puntaje",""], ["1-2","Preferencia baja"], ["3-4","Preferencia moderada baja"], ["5-6","Preferencia alta moderada"], ["7-8","Preferencia muy alta"]], "center blue");
        add(1,2);
        haTa(lug, datos = [["",""], ["Inteligencia lingüística","Hablar, usar palabras, escribir, comunicarse en un idioma, resolviendo problemas con palabras."], ["Inteligencia lógico-matemático","Usar números, lógica, cálculos; aprender y entender reglas gramaticales."], ["Inteligencia espacial","Dibujar, pintar, usar colores, arte, gráficos, imágenes, mapas, etc."], ["Inteligencia kinestésica","Coordinación muscular, habilidad atlética, lenguaje corporal, pronunciar un idioma"], ["Inteligencia musical","Usar la música, tonos, escuchar, producir la entonación y ritmo de un idioma"], ["Inteligencia interpersonal","Hablar con otras personas, comprenderlas, usar el idioma para comunicarse bien con la gente"], ["Inteligencia intrapersonal","Autodidacta, seguro de sí mismo, usar el idioma para analizarse a sí mismo"]], "center green");
        HC(lug, 3, "Pronunciación");
        HC(lug, 4, suma2)
        add(3,3);
        haTa(lug, datos = [["Puntaje",""], ["55-64","¡Tú pronunciación es muy buena! Sólo tienes que trabajar a unos pocos sonidos del inglés."], ["45-54","Tu pronunciación es buena, pero tienes varias áreas en las cuales aún necesitas trabajar."], ["35-44","Tu pronunciación está bien, pero necesitas trabajar en los apartados donde obtuviste menor puntaje."], ["Por debajo de 35","Necesitas trabajar en muchas áreas de pronunciación. "]], "center special");
        $(".special tr:first th").attr('colspan', 2);
        $(".special tr td:first").css({ "width": "80px" });
        var h = 0;
        (suma2 < 35) ? h = 5: (suma2 >= 35 && suma2 <= 44) ? h = 4 : (suma2 >= 45 && suma2 <= 54) ? h = 3 : h = 2;
        $(".special tr:nth-child(" + h + ")").css({ "background-color": "#2FB3F7" })
        var di = $(".special tr:nth-child(" + h + ") td:nth-child(2)").html();
        HC(lug, 3, "Diferencias culturales");
        HC(lug, 4, suma3);
        add(4,4);
        haTa(lug, datos=[["Puntaje",""], ["0-10","Muy pocas diferencias"], ["11-20","Diferencias moderadas"], ["21-30","Grandes diferencias"]],"center special2");
        var h2 = 0;
        (suma3 < 35) ? h2 = 5: (suma3 >= 35 && suma3 <= 44) ? h2 = 4 : (suma3 >= 45 && suma3 <= 54) ? h2 = 3 : h2 = 2;
        $(".special2 tr:nth-child(" + h2 + ")").css({ "background-color": "#2FB3F7" })
        var di2 = $(".special2 tr:nth-child(" + h + ") td:nth-child(2)").html();
        DIAGNOS = "Siete tipos de inteligencia: " + suma + "; Pronunciación: " + di + ", "+ suma2 + "; Diferencias culturales: " + di2 +", " +suma3; 
    }
    function calTest05() {
        var resp ={}, suma=0, suma2=0, suma3=0;
        $("input:checked").each(function(){
            resp[this.name] = this.value;
        });
        for (i in resp) {
            var num= Number(i.split("i")[0]);
            //Sección 2
            if (num < 16) { 
                suma += Number(resp[i]);
            } else if (num >= 16 && num <= 24) {
                if (resp[i] == 0) {
                    suma2++;
                }
            } else if (num >= 25) { //Sección 3
                suma3+=Number(resp[i]);
            }
        }
        HC(lug, 3, "El aprendizaje individual");
        add(10,10);
        haTa(lug, datos = [["Puntaje",""], ["16-35","Rara vez usas estrategias individuales"], ["36-63","A veces usas estrategias individuales"], ["64-80","Frecuentemente usas estrategias individuales"]], "center special");
        var h = 0;
        (suma < 35) ? h = 2: (suma >= 36 && suma2 <= 63) ? h = 3 : h = 4;
        $(".special tr:nth-child(" + h + ") td:nth-child(2)").css({ "background-color": "#2FB3F7" });
        var di = $(".special tr:nth-child(" + h + ") td:nth-child(2)").html();
        HC(lug, 3, "Extroversión e introversión");
        HC(lug, 4, suma2);
        add(0, 1);
        haTa( lug, datos = [["Puntaje", ""],["8-9", "Muy extrovertido"],["6-7", "De alguna manera extrovertido"],["3-5", "De alguna manera introvertido"],["0-2", "Muy introvertido"]],"center special2");
        $(".special2 tr:first th").attr('colspan', 2);
        $(".special2 tr td:first").css({ "width": "80px" });
        var h2 = 0;
        (suma2 <= 2) ? h2 = 5: (suma2 >= 3 && suma2 <= 5) ? h2 = 4 : (suma2 >= 6 && suma2 <= 7) ? h2 = 3 : h2 = 2;
        $(".special2 tr:nth-child(" + h2 + ")").css({ "background-color": "#2FB3F7" });
        var di2 = $(".special2 tr:nth-child(" + h2 + ") td:nth-child(2)").html();
        add(2, 6);
        haTa(lug, [["", "Extrovertido",    "Introvertido"], 
        ["Ventajas", "<ul><li>Practicar el inglés con otras personas es natural y fácil para ti.</li> <li>Normalmente no te importa tomar riesgos.</li> <li>Te gusta el trabajo en grupo.</li></ul>","<ul><li>Disfrutas de resolver problemas por tu cuenta.</li> <li>Eres feliz por ti mismo.</li> <li>Tienes por lo regular buenos hábitos de estudio.</li></ul>"],
        ["Desventajas", "<ul><li>Puedes ser muy dependiente de otras personas.</li> <li>Es posible que no estudies lo suficiente por tu cuenta.</li> <li>No te gusta el trabajo individual.</li></ul>","<ul><li>Puede que evites conocer otras personas.</li> <li>Puede ser que tomes muy pocos riesgos.</li> <li>No te gusta el trabajo en equipo.</li></ul>"]], "center blue");
        add(7, 7);
        //Sección 3
        HC(lug, 3, "Exámenes");
        HC(lug, 4, suma3);
        add(8,8);
        haTa(lug, datos = [["Puntaje "], ["16-32",   "Uso bajo de estrategias al presentar exámenes"], ["33-48",   "Uso promedio de estrategias al presentar exámenes"], ["49-64",   "Uso moderado – alto de estrategias al presentar exámenes"], ["65-80",   "Uso alto de estrategias al presentar exámenes"]], "center blue special3");
        $(".special3 tr:first th").attr('colspan', 2);
        $(".special3 tr td:first").css({ "width": "80px" });
        var h3 = 0;
        (suma3 <= 32) ? h3 = 2: (suma3 >= 33 && suma3 <= 48) ? h3 = 3 : (suma3 >= 49 && suma3 <= 64) ? h3 = 4 : h3 = 5;
        $(".special3 tr:nth-child(" + h3 + ")").css({ "background-color": "#2FB3F7" });
        var di3 = $(".special3 tr:nth-child(" + h3 + ") td:nth-child(2)").html();
        add(9,9);
        DIAGNOS = "Aprendizaje individual: "+suma+", "+di+"Extroversión e introversión: "+ suma2 +", "+di2 + "; Exámenes: " +suma3 +", " +di3;
    } //End of calTest05
    function calTest06() {
        var V = 0,
            A = 0,
            H = 0,
            resp = {};
        $("input[type=radio]:checked").each(function() {
            resp[this.name] = Number(this.value);
        })
        for (i in resp) {
            var num = Number(i.split("i")[0]);
            (num <= 10) ? V += resp[i]: (num > 10 && num <= 20) ? A += resp[i] : H += resp[i];
        }
        var M, temp = [V, A, H];
        temp.sort(function(a, b) {
            return b - a
        });
        if ((temp[0] - temp[1]) > 3) {
            if (V > A) {
                M = "visual";
            } else if (A > H) {
                M = "auditivo";
            } else {
                M = "kinestésico";
            }
        } else {
            var x1 = Math.abs(V - A),
                x2 = Math.abs(A - H),
                x3 = Math.abs(V - H);
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
        lug.append("<h3>Eres " + M + "</h3>");
        add(0, 2);
        lug.append(con2);
        DIAGNOS = M + ", " + V + ", " + A +", " + H;
        //lug.append('<a href="#" onclick="return xepOnline.Formatter.Format("interpretacion");">            Click aquí para guardar como pdf.        </a>');
    }

    function calTest07() {
        var r = diag("extrovertido", "introvertido", false);
        lug.append("<h3>Eres " + r[0] + ".</h3>");
        haTa(lug, datos = [
            ["Extrovertido", "Introvertido"],
            [r[1], r[2]]
        ], "center green")
        add(0, 2);
        lug.append(con2);
        DIAGNOS = r[0] + ", " + r[1] + ", " + r[2];
    }

    function calTest08() {
        var r = diag("intuitivo", "secuencial concreto", true);
        lug.append("<h3>Eres " + r[0] + ".</h3>");
        haTa(lug, datos = [
            ["Intuitivo", "Secuencial concreto"],
            [r[1], r[2]]
        ], "center blue");
        add(0, 2);
        lug.append(con2);
        DIAGNOS = r[0] + ", " + r[1] + ", " + r[2];
    }

    function calTest09() {
        var r = diag("#cerrado", "#abierto", true);
        lug.append("<h3>Eres " + r[0] + ".</h3>");
        haTa(lug, datos = [
            ["#cerrado", "#abierto"],
            [r[1], r[2]]
        ], "center blue");
        add(0, 2);
        lug.append(con2);
        DIAGNOS = r[0] + ", " + r[1] + ", " + r[2];
    }

    function calTest10() {
        var r = diag("global", "analítico", true);
        lug.append("<h3>Eres " + r[0] + ".</h3>");
        haTa(lug, datos = [
            ["Global", "Analítico"],
            [r[1], r[2]]
        ], "center blue");
        add(0, 2);
        lug.append(con2);
        DIAGNOS = r[0] + ", " + r[1] + ", " + r[2]; 
    }

    function calTest11() {
        var resp = {}, clave = ["2", "0", "1", "2", "2", "0", "2", "2", "2", "2", "2", "2", "3", "0", "1", "2", "2", "3", "2", "1", "2", "1", "0", "2", "1", "3", "2", "1", "2", "1", "3", "0", "2", "2", "3", "2", "2", "1", "1", "3", "2", "2", "0", "2", "2", "2", "2", "3", "1", "1", "1", "0", "2", "2", "2", "1", "1", "1", "1", "1", "0", "0", "1", "1", "1", "1", "2", "2", "0", "2", "2", "1", "1", "1", "1", "1", "1", "1", "1", "0", "2", "0", "1", "2", "1", "2", "1", "1", "1", "2", "2", "2", "1", "2", "1", "2", "2", "2", "1"], suma=0, M='', bien=[], mal=[];
        $("input[type=radio]:checked").each(function(){
            resp[this.name] = Number(this.value);
        })
        for (i in resp) {
            num = Number(i.split("i")[0]);
            if (resp[i] == clave[num]) {
                suma++;
                bien.push(num+1);
            } else {
                mal.push(num+1);
            }
        }
        (suma <= 20) ? M="elementary" : (suma > 20 && suma <= 50) ? M="lower intermediate" : (suma > 50 && suma <= 60) ?  M="intermediate" : (suma > 60 && suma <= 80) ? M="upper intermediate": M="advanced";
        lug.append("<h2>Tu nivel es "+M+".</h2>");
        HC(lug, 4, suma);
        add(0,0);
        haTa(lug, datos = [["GRAMMAR POINT", "QUESTION", "QUESTION", "QUESTION", "QUESTION"], ["ARTICLES", "1", "16", "31",""], ["SHORT QUESTIONS", "2", "17", "32",""], ["PRESENT SIMPLE", "3", "18", "33",""], ["WH QUESTIONS", "4", "19", "34",""], ["FUTURE I", "5", "20", "35",""], ["PAST SIMPLE I", "6", "21", "36",""], ["PRESENT PROGRESSIVE", "7", "22", "37",""], ["SOME / ANY", "8", "23", "38",""], ["PRESENT PERFECT", "9", "24", "39",""], ["IMPERATIVE", "10", "25", "40",""], ["COMPARATIVES", "11", "26", "41",""], ["SHORT ANSWERS", "12", "27", "42",""], ["HAVE GOT", "13", "28", "43",""], ["PRONOUNS I", "14", "29", "44",""], ["PREPOSITIONS I", "15", "30", "45",""], ["MODALS FOR POLITENESS", "46", "63", "80", "96"], ["PAST SIMPLE II", "47", "64", "81", "97"], ["MODALS GENERAL", "48", "65", "82", "98"], ["ADJECTIVE / ADVERB", "49", "66", "83", "99"], ["CONDITIONALS", "50", "67", "84",""], ["FUTURE II", "51", "68", "85",""], ["PREPOSITIONS II", "52", "69", "86",""], ["PASSIVE", "53", "70", "87",""], ["REPORTED SPEECH", "54", "71", "88",""], ["PAST PERFECT", "55", "72", "89",""], ["FOR / SINCE", "56", "73", "90",""], ["RELATIVE CLAUSES", "57", "74", "91",""], ["PRONOUNS II", "58", "75", "92",""], ["INF / ING", "59", "76", "93",""], ["PRONOUNS II", "60", "77", "94",""], ["PAST PROGRESSIVE", "61", "78", "95",""]], "center blue");
        for (i in bien) {
            var contenido = bien[i].toString();
                $( "td" )
                  .filter(function( index ) {
                    return $(this).text() == contenido;
                  })
                   .css( "color", "green" )
                   .append(" &#x2714;");
        }
        var preguntas = $(".pregunta");
        $("td").hover(function(){
            var contenido = Number($(this).text().split(" ")[0])-1,  contenido2 = contenido+1;
            var marcado =  resp[contenido+"i"];
            var correcta, incorrecta;
            $("#info")
            .appendTo($(this))
            .text("")
            .append("<p>" +$(preguntas[contenido]).text()+"</p>");
            for (i in mal) {
            if ( contenido2 == mal[i]) {
                incorrecta = $("label[for='"+contenido+"i"+marcado+"'").text();
                correcta = $("label[for='"+contenido+"i"+clave[i]+"'").text();
                $("#info").append("<p>Tu respuesta fue: <span style='color:red'>"+incorrecta+"</span></p><p>La respuesta correcta era: <span style='color:green'>"+correcta+"</span></p>");
                }
            }
            $("#info").show();
                    }, function() {
                        $("#info").hide();
                    })
        DIAGNOS = "Nivel: "+ M + ", " + suma;
    }
    function calTest06B() {
        var resp = { "0i": {}, "1i": {}, "2i": {}, "3i": {}, "4i": {}, "5i": {}, "6i": {}, "7i": {}, "8i": {}, "9i": {}, "10i": {}, "11i": {}, "12i": {}, "13i": {}, "14i": {}, "15i": {} }
        $("input[type=checkbox]:checked").each(function() {
            var num = $(this).attr("name"),
                value = $(this).val();
            resp[this.name][this.value] = this.value;
        });
        var V = 0,
            A = 0,
            R = 0,
            K = 0;
        var claveVARK = {
            "0": { "A": function() { K++; }, "B": function() { A++; }, "C": function() { R++; }, "D": function() { V++; } },
            "1": { "A": function() { V++; }, "B": function() { A++; }, "C": function() { R++; }, "D": function() { K++; } },
            "2": { "A": function() { K++; }, "B": function() { V++; }, "C": function() { R++; }, "D": function() { A++; } },
            "3": { "A": function() { K++; }, "B": function() { A++; }, "C": function() { R++; }, "D": function() { V++; } },
            "4": { "A": function() { A++; }, "B": function() { V++; }, "C": function() { K++; }, "D": function() { R++; } },
            "5": { "A": function() { K++; }, "B": function() { R++; }, "C": function() { V++; }, "D": function() { A++; } },
            "6": { "A": function() { K++; }, "B": function() { A++; }, "C": function() { V++; }, "D": function() { R++; } },
            "7": { "A": function() { R++; }, "B": function() { K++; }, "C": function() { A++; }, "D": function() { V++; } },
            "8": { "A": function() { R++; }, "B": function() { A++; }, "C": function() { K++; }, "D": function() { V++; } },
            "9": { "A": function() { K++; }, "B": function() { V++; }, "C": function() { R++; }, "D": function() { A++; } },
            "10": { "A": function() { V++; }, "B": function() { R++; }, "C": function() { A++; }, "D": function() { K++; } },
            "11": { "A": function() { A++; }, "B": function() { R++; }, "C": function() { V++; }, "D": function() { K++; } },
            "12": { "A": function() { K++; }, "B": function() { A++; }, "C": function() { R++; }, "D": function() { V++; } },
            "13": { "A": function() { K++; }, "B": function() { R++; }, "C": function() { A++; }, "D": function() { V++; } },
            "14": { "A": function() { K++; }, "B": function() { A++; }, "C": function() { R++; }, "D": function() { V++; } },
            "15": { "A": function() { V++; }, "B": function() { A++; }, "C": function() { R++; }, "D": function() { K++; } },
        }
        var test = ["A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B", "A", "B"]
        for (i in claveVARK) {
            for (j in resp[i + "i"]) {
                claveVARK[i][resp[i + "i"][j]]();
            }
        }
    } //fin de calTest06
//Galería
var slideIndex = 0, modal = $("#myModal");
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  var i, x = $(".BigImgs"), dots = $(".mini");
  if (n > x.length-1) {slideIndex = 0}
  if (n < 0) {slideIndex = x.length-1}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex].style.display = "block";
  modal.show();
}
$(".close").click(function(){
  $("#myModal").hide();
});
$("#myModal").click(function(){
  $("#myModal").hide();
})
$("#myModal div").click(function(e) {
        e.stopPropagation();
   });
$(".mini").click(function(){
  var Mini = $(".mini").index(this);
  currentDiv(Mini);
})
$(".right").click(function(){
  currentDiv(slideIndex+1);
})
$(".left").click(function(){
  currentDiv(slideIndex-1);
})

$.fn.shuffle = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }
    //END OF THE DOCUMENT READY
});
