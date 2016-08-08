jQuery(document).ready(function($) {
    $.ajaxSetup({ cache: false });
    //All the variables
    $(generarInput);
    var ID = $("#identi").html(),
        load = $('<div>'),
        TID = Number(ID.split('test')[1]),
        nav = $("<nav>"),
        con, length2,
        co, completo = true, DIAGNOS = 'prueba', resultadoHTML='';
        lug = $("#interpretacion");
        var preguntas;
    //console logs
    console.log(ID);
    //NAVEGACION
    if (ID != "test00") {
            if (TID < 97) {
                $('<img id="more-info" src="../imgs/info-white.png"></img>').appendTo("h1");
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
                var nombres = ["ABAD-GARCIA ADRIAN", "ACOSTA-GUILLEN BARBARA GISELLE", "ACOSTA-TORRES BERAME", "AGUILAR-CARCAMO DANIEL", "AGUILAR-MORALES JOSE ANGEL", "ALAVEZ-APARICIO CARLA SIMONE", "ALVAREZ-MAYO TANYA TRINIDAD", "AMBROCIO-GONZALEZ ROXETTE DEL CARMEN", "ANG-SANCHEZ AMAIRANI", "ANTUNEZ-PIÑA JACOBO", "ARAGON-CERVANTES STEFFANYA", "ARENAS-LOPEZ ERICK", "ARIAS-LANDA MONSERRAT", "ARTIGAS-SANCHEZ YELITZA GUADALUPE", "AYALA-FRANCESCHY ANGEL LUIS", "BAEZ-GUZMAN SONYA ALEXA", "BAHENA-SANTANDER SHARON CRISTINA", "BALTAZAR-PEÑA ABRIL DE JESUS", "BARRADAS-MORA LIZZETH", "BELLIDO-LANDA KAREN ANDREA", "BELLI-ZAPOT CINTHIA PATRICIA", "BLANCAS-RAMIREZ LIZETH", "BORJA-SANCHEZ JUAN LUIS", "BRISEÑO-AGUILAR SINTIQUE", "CABAÑAS-HERNANDEZ KARLA DANIELA", "CABRERA-SOLANO LUIS ANGEL DE JESUS", "CAMPOS-PALAFOX ISAAC", "CAMPOS-PEREZ KAREN GUADALUPE", "CANSECO-TIRADO RICARDO", "CARMONA-VAZQUEZ SERGIO", "CASTELLANOS-RAMIREZ EDUARDO", "CEBALLOS-SANCHEZ DIEGO ALEXIS", "CENTENO-MATUS EDGAR DANIEL", "CHACON-JIMENEZ VALERIA", "CID-ALVAREZ LILIANA", "CIENFUEGOS-ZAMUDIO MARIBEL", "CORTES-DIAZ IRAIS", "CORTES-GONZALEZ OLIVIA JANET", "CORTES-SANCHEZ LUIS ANDRES", "CRUZ-HERNANDEZ FERNANDO", "CUCURACHI-ORTEGA ITALO", "CUEVAS-CASTILLO YESENIA", "CUEVAS-CRUZ ROXANA", "DELGADO-SUAREZ GABRIELA GRISEL", "DIAZ-DIAZ QUETZALLI", "DOLORES-GARCIA PABLO", "DOMINGUEZ-CAMACHO ANTONIO DE JESUS", "DOMINGUEZ-DOMINGUEZ KAREN YAMILET", "DURAN-CASTILLO OMAR ESAU", "DURAN-GAMBOA IRVING", "DURAN-LUNA MARIA ELIZABETH", "ESPAÑA-FLORES ANGEL DE JESUS", "ESPINOSA-MARCELO SUSANA", "ESTUDILLO-CASTILLO PERLA MARINA", "FERNANDEZ-ESCOBAR JOSE ANTONY", "GALVAN-GALVAN MARIA DEL ROSARIO", "GARCIA-ESPINOBARRO JULIO EVER", "GARCIA-RAMIREZ KATIA LISSET", "GARCIA-RIVERA DANIELA", "GARCIA-SARMIENTO MARIA DE LA LUZ", "GARCIA-VELASQUEZ SAMUEL", "GOMEZ-DOMINGUEZ JOSUE", "GONZALEZ-BADILLO IRVIN ALBERTO", "GONZALEZ-CAMACHO MARIA FERNANDA", "GONZALEZ-GOMEZ LEONEL", "GONZALEZ-GONZALEZ JOSE ENRIQUE", "GONZALEZ-VALLEJO ALMA", "GRANADOS-BARRALES ERICK GABRIEL", "GUZMAN-VALENCIA PAULINA", "HERBERT-ALVARADO JOSE DE JESUS", "HEREDIA-ESTRADA BRYAN MISAEL", "HERNANDEZ-AGUIRRE JOSE DE JESUS", "HERNANDEZ-ALTAMIRANO MONSERRAT", "HERNANDEZ-ALVAREZ ALFREDO", "HERNANDEZ-BELTRAN ADOLFO DE JESUS", "HERNANDEZ-CASTILLO MIRIAM BRENDA", "HERNANDEZ-CERVANTES JORGE ARMANDO", "HERNANDEZ-GALVAN ANGEL DE JESUS", "HERNANDEZ-GONZALEZ OMAR", "HERNANDEZ-HERNANDEZ NICOLAS ALFONSO", "HERNANDEZ-JIMENEZ JANETH", "HERNANDEZ-LOPEZ RAUL URIEL", "HERNANDEZ-MERINO AYAX DE JESUS", "HERNANDEZ-ROMAN MARLENE", "IBARRA-CAPISTRAN MIGUEL ALFONSO", "IBARRA-ROJO JUAN JESUS", "JACOME-ORDOÑEZ LIA ITZEL", "JIMENEZ-HERNANDEZ ROSALIA ANGELICA", "JUAREZ-GONZALEZ EDNA MICHELLE", "LAGUNES-PRIETO JOSE ALFREDO", "LANDA-HERNANDEZ MARTHA PATRICIA", "LANDA-PEREZ YURIDIA ALEJANDRA", "LIMA-MARTINEZ GERARDO", "LIMA-RODRIGUEZ ANAHI", "LIMON-CASTILLO LISSETE", "LOPEZ-LOPEZ KARLA SILVINA", "LOPEZ-PARRA EDSON ALY", "LOPEZ-VILLATORO FATIMA ESTEFANI", "LORENZO-ESPINOSA CRUZ JANETT", "LORENZO-RIVERA DANIELA", "MACHORRO-GARCIA TANIA MARIBEL", "MARTINEZ-CABRERA DANIEL", "MARTINEZ-GUTIERREZ ALDO MICHEL", "MARTINEZ-MARIN SANDY SAMARA", "MARTINEZ-RAMIREZ ESTEFANIA BERENICE", "MARTINEZ-YEDRA JOSUE ISAI", "MEDRANO-FERRAL KEREN", "MENDEZ-HERNANDEZ KARLA MARIA", "MENDOZA-HERNANDEZ MAURICIO ANTONIO", "MENESES-BUSTAMANTE MARIA DE LOS SANTOS", "MERODIO-LOPEZ DEISY", "MEZA-HERNANDEZ OSIRIS LIZBETH", "MOLINA-CARBAJAL MARIA GUADALUPE", "MOLINA-RODRIGUEZ DANIEL", "MONFIL-CRUZ JOSE FRANCISCO", "MORALES-GERONIMO JULIANA", "MORALES-HERNANDEZ EDNA MONSERRAT", "MORALES-RODRIGUEZ DANIEL EDUARDO", "MORA-MENDOZA FABIAN", "MUÑOZ-MORALES ILEANA", "NIETO-SANCHEZ ROCIO LISSET", "NUÑEZ-GARCIA VICENTE", "OCHOA-MARTINEZ DANIEL", "OLMOS-CORTES JOSE MARCOS", "ORTEGA-ELOS EMELY YAMIL", "ORTEGA-VAZQUEZ GUADALUPE DE JESUS", "ORTIZ-ARGUIJO FRANCISCO JAVIER", "PACHECO-NAVARRETE VANESSA", "PALACIOS-MARCELO MILAGROS", "PALMA-MONCADA MARIBEL", "PANES-HERNANDEZ DAPHNE", "PAVA-PALMA DIANA YOSHIRA", "PEREDO-GONZALEZ JUAN JESUS", "PEREZ-CORZAS ROBERTO", "PEREZ-MARTINEZ ARMANDO", "PEREZ-MORAN JOSE MANASES", "PEREZ-PEREZ ALAN ADAIR", "PORTILLA-ORELLAN MARIELA YAMILET", "QUIÑONEZ-ARRIETA XIMENA ODEMARIS", "QUIROZ-GOMEZ SABRINHA MARIA", "RAMIREZ-BARBOSA JULIA LUCERO", "RAMIREZ-MARTINEZ METSTLI XIOMARA", "RAMIREZ-OCAMPO NANCY IOKEBETH", "RAMIREZ-RIVERA BRIAN ALBERTO", "RAMOS-ALVARADO ANA LAURA", "REBOLLEDO-MARTINEZ MARIA FERNANDA", "REYES-GALINDO CAROLINA", "REYES-LEZAMA MELANIE", "REYES-RAMIREZ SERGIO ALBERTO", "REYES-RUIZ YECSUBELI", "RIVERA-MARTINEZ CLAUDIA AMANKAY", "RODRIGUEZ-HERNANDEZ PAOLA", "RODRIGUEZ-VASQUEZ MARCO ANTONIO", "ROJAS-FUERTES MIRIAM LIZBETH", "ROJAS-VILLAR MARGARITA", "ROMAN-DURAN EDGAR", "RUIZ-GUILLEN MARIA ANNETTE", "RUIZ-HOYOS ALBERTO URIEL", "SALAS-VALDERRABANO SARAI", "SANCHEZ-FLORES QUETZALLI", "SANCHEZ-KU OSCAR", "SANCHEZ-SALDAÑA VICTOR ALBERTO", "SANCHEZ-SANCHEZ JESUS", "SAUCEDO-PORTILLA MISAEL", "SAYAGO-ORDUÑA MARCO ALONSO", "SOLORZANO-CONTRERAS MAXIMILIANO", "SOSA-CARREON MARTHA GUADALUPE", "SOSA-HERMENEGILDO NOEMI", "SOSA-RUIZ ANGELA JANAI", "SUAREZ-CORONA JUAN MANUEL", "SUAREZ-MESSA ANDREA CRISTINA", "TELLEZ-BRAVO GEORGETTE", "TORRES-SANCHEZ KUTZANDY", "VALERA-PORTILLA NURIA ITZEL", "VAZQUEZ-AGUIRRE HANNIA", "VAZQUEZ-ALONSO SERGI", "VAZQUEZ-DIAZ VIANEY", "VENANCIO-LOZANO ALEJANDRO", "VIDAL-CORTES CRISTHIAN DANIEL", "VILLANUEVA-ANGELES ANA LILIA", "VILLA-ROSAS EDUARDO DANIEL", "VILLEGAS-MORALES OSCAR"];
                var matriculas = ["S16012015", "S16012009", "S16011921", "S16012042", "S16011936", "S16011865", "S16011829", "S16011992", "S16011991", "S16011943", "S16011958", "S16011867", "S16011914", "S16011860", "S16011838", "S16011884", "S16012012", "S16012011", "S16011920", "S16011983", "S16011841", "S16011990", "S16011978", "S16011825", "S16011875", "S16011924", "S16011962", "S16011877", "S16011915", "S16012038", "S16011891", "S16011996", "S16011931", "S16011855", "S16011988", "S16011967", "S16011932", "S16012025", "S16011879", "S16011961", "S16012029", "S16011953", "S16011828", "S16011950", "S16011852", "S16011928", "S16011964", "S16012045", "S16012023", "S16011981", "S16011949", "S16011840", "S16012024", "S16011900", "S16012018", "S16012033", "S16011977", "S16012022", "S16011923", "S16011885", "S16011997", "S16012000", "S16011861", "S16011945", "S16011938", "S16012008", "S16011933", "S16011870", "S16011826", "S16011853", "S16012044", "S16012013", "S16012041", "S16011957", "S16012007", "S16011846", "S16011969", "S16012027", "S16011982", "S16012006", "S16012019", "S16011998", "S16011966", "S16011888", "S16012043", "S16011863", "S16011850", "S16011973", "S16011880", "S16012036", "S16011827", "S16011995", "S16011848", "S16011862", "S16011833", "S16011951", "S16012001", "S16011929", "S16011994", "S16012031", "S16011919", "S16012040", "S16012026", "S16011925", "S16011866", "S16011847", "S16011876", "S16011878", "S16011890", "S16011939", "S16011894", "S16011979", "S16011830", "S16011960", "S16011918", "S16011954", "S16011869", "S16011858", "S16011893", "S16011934", "S16011902", "S16011897", "S16011910", "S16011948", "S16011845", "S16011883", "S16011956", "S16011836", "S16011889", "S16011940", "S16011906", "S16011937", "S16011872", "S16011881", "S16011896", "S16011974", "S16011837", "S16011944", "S16011968", "S16011854", "S16012032", "S16011851", "S16011909", "S16011999", "S16012034", "S16011971", "S16011930", "S16011987", "S16012002", "S16011952", "S16011901", "S16011972", "S16011976", "S16012010", "S16011835", "S16012037", "S16011856", "S16011895", "S16012004", "S16012017", "S16011980", "S16012014", "S16011907", "S16011873", "S16011908", "S16011946", "S16011917", "S16011959", "S16011984", "S16011886", "S16011842", "S16011868", "S16011942", "S16011887", "S16011941", "S16011993", "S16011986", "S16011970", "S16011985", "S16011916", "S16011831", "S16012021"];
                var senombres = $("<datalist id='nombre-lista'></datalist>"), sematriculas = $("<datalist id='matricula-lista'></datalist>");
                for (i in nombres) {
                    senombres.append($("<option name='"+i+"'' value='"+nombres[i]+"'>"+nombres[i]+"</option>"))
                }
                for (i in matriculas) {
                    sematriculas.append($("<option name='"+i+"'' value='"+matriculas[i]+"'>"+matriculas[i]+"</option>"))
                }
                $("body").append(senombres)
                .append(sematriculas);
                $("#nombre").on("select",function(){
                    var matriculaIndex = $("#nombre-lista option[value='" + $('#nombre').val() + "']").attr('name');
                    $("#matricula").val($("#matricula-lista")[0].options[matriculaIndex].value);
                });
                $("#matricula").on("select",function(){
                    var nombreIndex = $("#matricula-lista option[value='" + $('#matricula').val() + "']").attr('name');
                    $("#nombre").val($("#nombre-lista")[0].options[nombreIndex].value);
                })
        } 
        nav.load('../pages/template.html #nav', function(result) {
            co = $(nav)[0].children;
            $("body").append(co);
            $('#nav a[href="../pages/' + location.pathname.split("pages/")[1] + '"]').addClass("active");
        })
    }
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
        var RAB = {"0i": ["Trabajar con otras personas","Trabajar solo",], "1i": ["Fácil de tratar","De alguna manera tímido(a)",], "2i": ["Cuando estoy con otras personas","Cuando estoy solo",], "3i": ["Comienzo conversaciones con personas que no conozco","Espero a que alguien converse conmigo",], "4i": ["Hablando con otras personas acerca de ello","Analizando todo por mi cuenta",], "5i": ["Salir con otras personas","Quedarme solo en casa ",], "6i": ["Es emocionante e interesante","Es difícil y me es tedioso",], "7i": ["Solo y ansioso","En paz y en calma",], "8i": ["Trabajar en grupo con otros estudiantes","Trabajar de manera individual"] }; var n = 0, n2=0;
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
            $(this).html(interno);
            n++;
        })
        if (TID == 11) {
            preguntas=$(".pregunta");
            function shuffle2() {
                var Preguntas = $(".pregunta").get();
                var Radios = $(".radio").get();
                var randoms = [];
                var revueltos = $.map(Preguntas, function() {
                    var random = Math.floor(Math.random() * Preguntas.length);
                    randoms.push(random);
                    var randomElemento = $(Preguntas[random]).clone(true)[0];
                    Preguntas.splice(random,1);
                    return randomElemento;
                });
                var i=0;
                var revueltos2 = $.map(Radios, function(){
                    var randomElemento = $(Radios[randoms[i]]).clone(true)[0];
                    Radios.splice(randoms[i],1);
                    i++;
                    return randomElemento;
                })
                $(".pregunta").each(function(i){
                    $(this).replaceWith($(revueltos[i]));
                })
                $(".radio").each(function(i){
                    $(this).replaceWith($(revueltos2[i]));
                })
            }
            shuffle2();
        }
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
            "test11": function() { calTest11(); },
            "test12": function() { calTest12(); }
        };
        funciones[ID]();
        //console.log(DIAGNOS);
    };
    $("#more-info").click(function(){
    var creditoTexto;
    if (TID == 1) {
        creditoTexto = '<p>Este instrumento es una adaptación al español del Strategy Inventory for Language Learning</p><p>Una copia de este instrumento puede encontrarse <a href="https://drive.google.com/file/d/0B08aswbBqBFFLWpDU0xfNUg4djl0TmtnSFBtWjAzSHRzcFA4/view?usp=sharing" target="_blank">aquí</a>.</p>'
    }
    if (TID >= 2 && TID <= 5) {
        creditoTexto = '<p>Estos instrumentos fueron tomados del libro <span id="titulo-libro">Strategies for Success: A Practical Guide to Learning English</span>.</p> <p id="referencia">Brown, H. D. (2002). <i>Strategies for success: A practical guide to learning English</i>. White Plains, NY: Longman.</p> <p>Traducidos y adaptados al español por <b>María Fernanda Rodríguez González</b></p> <p>Adaptación electrónica y base de datos por <b>Sara Ariadna Marcial León</b></p>'
    } else if (TID >= 6 && TID <= 10) {
        creditoTexto = '<p>Estos instrumentos fueron tomados del libro <span id="titulo-libro">Learning Styles in the ESL/EFL Classroom</span></p><p id="referencia">Reid J. M. (ed.). 1995 Learning Styles in the ESL/EFL Classroom. Boston, MA: Heinle & Heinle.</p><p>Traducción y adaptación al español por <b>Sara Ariadna Marcial León</b></p><p>Adaptación electrónica y base de datos por <b>Sara Ariadna Marcial León</b></p>'
    } else if (TID==11) {
        creditoTexto='<p>Este examen fue tomado del sitio de la <span id="titulo-libro">Universidad de Maastricht</span></p><p id="referencia">Maastricht University Language Centre, English Department. (2002). <i>English Diagnostic Test – version two (standard)</i>.</p><p>El test puede encontrarse <a href="https://www.maastrichtuniversity.nl/sites/default/files/englishtest.pdf">aquí</a>.</p><p>Adaptación electrónica y base de datos por <b>Sara Ariadna Marcial León</b></p>'
    }
    else if (TID == 12) {
        creditoTexto = '<p>Este instrumento fue tomado de <span id="titulo-libro">Técnicas de estudio y estrategias de aprendizaje para el estudiante universitario</span>.</p><p id="referencia">Campero N, Díaz GM, Díaz SH. <i>Diagnóstico de los hábitos de estudio en alumnos de la Unidad Académica Profesional AMECAMECA UAEM.</i> Documento del Congreso Internacional Retos y Expectativas de la Universidad; 2002 nov 6-9; Toluca, Estado de México.</p><p>Una copia del instrumento puede encontrarse <a href="http://fcf.unse.edu.ar/archivos/ingresantes/Tecnicas%20de%20estudio%20y%20estrategias%20de%20aprendizaje%20para%20el%20estudiante%20universitario.pdf">aquí</a></p><p>Adaptación electrónica y base de datos por <b>Sara Ariadna Marcial León</b></p>'
    } 
    $("body").append("<div id='fondo-opaco'><div class='alerta creditos'>"+creditoTexto+"<p></p><p class='acciones'>Clic para cerrar</p></div></div>");
    $(".creditos a").click(function(e){
        e.stopPropagation();
    })
        $("#titulo-libro").click(function(e){
            e.stopPropagation();
            $("#referencia").toggle();
        })
        $("#fondo-opaco").click(function() {
            $(this).remove();
        })
    });
    //enitaim
    $('#enviar').click(function() {
        calificar();
        enviarDatos();
        /*revisarCampos();
        if (completo) { calificar();
            enviarDatos(); } else { alerta(); }*/
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
        info = [{ name: "Hoja", value: ID }, { name: "Hora", value: new Date() }, { name: "nombre", value: $("#nombre").val() }, { name: "correo", value: $("#correo").val() }, { name: "matricula", value: $("#matricula").val() }, { name: "seccion", value: $("#seccion").val() }, {name:"diagnóstico", value: DIAGNOS},{name:"resultadoHTML", value:resultadoHTML}];
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
            ["Organizar y evaluar tu aprendizaje:", D["metacognitiva"][0]],
            ["Regular tus emociones:", D["afectiva"][0]],
            ["Aprender con otros:", D["social"][0]],
            ["TOTAL GLOBAL:", D["overall"][0]]
        ], "center");
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
        DIAGNOS = "Así aprendo yo inglés, Memoria: " + D["memoria"][0] + ", Cognitiva: " +D["cognitiva"][0] + ", Compensación: "  + D["compensacion"][0] + ", Metacognitiva: "+ D["metacognitiva"][0] + ", Afectiva: " + D["afectiva"][0] + ", Social: " + D["social"][0] + ", Promedio global: " + D["overall"][0];
        resultadoHTML = '<table><tr><th>Estrategias cubiertas</th><th>Tus promedios</th></tr> <tr><td>Recordar de manera efectiva:</td><td>'+D["memoria"][0]+'</td></tr> <tr><td>Usar todos tus procesos mentales:</td><td>'+D["cognitiva"][0]+'</td></tr> <tr><td>Compensar la información faltante:</td><td>'+D["compensacion"][0]+'</td></tr> <tr><td>Organizar y evaluar tu aprendizaje:</td><td>'+D["metacognitiva"][0]+'</td></tr> <tr><td>Regular tus emociones:</td><td>'+D["afectiva"][0]+'</td></tr> <tr><td>Aprender con otros:</td><td>'+D["social"][0]+'</td></tr> <tr><td>TOTAL GLOBAL:</td><td>'+D["overall"][0]+'</td></tr> </table>';
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
        add(0, 1);
        haTa(lug, datos, "center");
        lug.append("<br><br>");
        //Sección 2
        HC(lug, 3, "¿Rápido o lento?");
        HC(lug, 4, suma);
        add(2, 2);
        (suma >= 30) ? add(3, 3): add(4, 4);
        (suma >= 30) ? di="reflexivo": di="impulsivo";
        add(5, 7);
        haTa(lug, datos = [
            ["", "Estilo reflexivo", "Estilo impulsivo"],
            ["Ventajas", "Hablar de manera más precisa<br>Leer de manera más precisa<br>Piensan cuidadosamente lo que van a hacer", "Más dispuestos para hablar en clase<br>Ágiles lectores<br>Son más rápidos en las pruebas estandarizadas"],
            ["Desventajas", "Esperan demasiado para hablar<br>Leen mucho más lento<br>Son más lentos en las pruebas estandarizadas", "Menos precisos al hablar<br>Menos precisos al leer<br>Actúan sin pensar"]
        ], "center");
        lug.append("<br><br>");
        add(8, 9);
        //Sección 3
        HC(lug, 3, "Procesos hemisferio derecho y hemisferio izquierdo");
        HC(lug, 4, suma2);
        add(10, 12);
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
        DIAGNOS = "Preferencias del estudiante; estrategias deseables: " + izq + ", Estrategias a cambiar: " + der + "; " + "Rápido o lento: " + di + ", " + suma + "; Procesos hemisferio derecho y hemisferio izquierdo: "+di2 + ", "+ suma2;
        resultadoHTML = '<h1>Preferencias del estudiante</h1> <table> <tr><th>Estrategias deseables</th><th>Estrategias a cambiar</th></tr> <tr><td>'+izq+'</td><td>'+der+'</td></tr> </table> <h1>Rápido o lento</h1> <p>Eres <b>'+di+'</b>, y tu puntaje fue <b>'+suma+'</b></p> <h1>Procesos hemisferio derecho y hemisferio izquierdo</h1> <p>Tienes <b>'+di2+'</b>, y tu puntaje fue <b>'+suma2+'</b></p>'; }


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
        lug.append("<h4>Posees una " + ((h == 2) ? "Alta automotivación" : "Baja automotivación"+" y una"+(h == 2) ? "Alta motivación de otros" : "Baja motivación de otros")+ "</h4>");
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
        add(10, 10);
        lug.append("<br><br>");
        DIAGNOS= "Dos tipos de motivación: "+ di2 +", " + di3 + ", " + suma + ", "+suma2+"; Autoestima en general: " + di4 + ", " + suma3 + "; Ego del idioma: " + di5 + ", " + suma4;
        console.log(DIAGNOS)
        resultadoHTML = '<h1>Dos tipos de motivación</h1> <p>Posees una '+((h == 2) ? "Alta automotivación" : "Baja automotivación"+" y una "+(h == 2) ? "Alta motivación de otros" : "Baja motivación de otros")+'. Tus puntajes fueron <b>'+suma+'</b> en la parte I y <b>'+suma2+'</b> en la parte II.</p> <h1>Autoestima en general</h1> <p>Tu puntaje fue <b>'+suma3+'</b> y '+di4+'</p> <h1>Ego del idioma</h1> <p>Tu puntaje fue <b>'+suma4+'</b> y posees un '+di5+'</p>';
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
        haTa(lug, datos = [["Puntaje",""], ["55-64","¡Tu pronunciación es muy buena! Sólo tienes que trabajar en unos pocos sonidos del inglés."], ["45-54","Tu pronunciación es buena, pero tienes varias áreas en las cuales aún necesitas trabajar."], ["35-44","Tu pronunciación está bien, pero necesitas trabajar en los apartados donde obtuviste menor puntaje."], ["Por debajo de 35","Necesitas trabajar en muchas áreas de pronunciación. "]], "center special");
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
        (suma3 < 11) ? h2 = 2: (suma3 >= 11 && suma3 <= 20) ? h2 = 3 : h2 = 4;
        $(".special2 tr:nth-child(" + h2 + ")").css({ "background-color": "#2FB3F7" })
        var di2 = $(".special2 tr:nth-child(" + h2 + ") td:nth-child(2)").html();
        add(5,6);
        DIAGNOS = "Siete tipos de inteligencia: " + suma + "; Pronunciación: " + di + ", "+ suma2 + "; Diferencias culturales: " + di2 +", " +suma3; 
        resultadoHTML = '<h1>Siete tipos de inteligencia</h1> <table> <tr><th></th><th>Puntaje</th></tr> <tr><td>Inteligencia lingüística</td><td>'+suma[0]+'</td></tr> <tr><td>inteligencia lógico-matemático</td><td>'+suma[1]+'</td></tr> <tr><td>inteligencia espacial</td><td>'+suma[2]+'</td></tr> <tr><td>inteligencia kinestésica</td><td>'+suma[3]+'</td></tr> <tr><td>inteligencia musical</td><td>'+suma[4]+'</td></tr> <tr><td>inteligencia interpersonal</td><td>'+suma[5]+'</td></tr> <tr><td>inteligencia intrapersonal</td><td>'+suma[6]+'</td></tr> </table> <h1>Pronunciación</h1> <p>Tu puntaje fue <b>'+suma2+'</b>, por lo tanto '+di+'</p> <h1>Diferencias culturales</h1> <p>Tu puntaje fue <b>'+suma3+'</b>, así que entre tu cultura y la del país hablante de inglés que seleccionaste hay '+di2+'</p>';    }
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
        add(11,11);
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
        resultadoHTML = '<h1>Aprendizaje individual</h1> <p>Tu puntaje fue <b>'+suma+'</b>, por lo tanto '+di+'</p> <h1>Extroversión e introversión</h1> <p>Tu puntaje fue <b>'+suma2+'</b>, por lo tanto eres '+di2+'</p> <h1>Exámenes</h1> <p>Tu puntaje fue <b>'+suma3+'</b>, así que posees un '+di3+'</p>'; 
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
        resultadoHTML = '<p>Eres <b>'+M+'</b></p>';
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
        resultadoHTML = '<p>Eres <b>'+r[0]+'</b></p>';
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
        resultadoHTML = '<p>Eres <b>'+r[0]+'</b></p>';

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
        resultadoHTML = '<p>Eres <b>'+r[0]+'</b></p>';
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
        resultadoHTML = '<p>Eres <b>'+r[0]+'</b></p>';
;    }

    function calTest11() {
        var resp = {}, clave = ["2", "0", "1", "2", "2", "0", "2", "2", "2", "2", "2", "2", "3", "0", "1", "2", "2", "3", "2", "1", "2", "1", "0", "2", "1", "3", "2", "1", "2", "1", "3", "0", "2", "2", "3", "2", "2", "1", "1", "3", "2", "2", "0", "2", "2", "2", "2", "3", "1", "1", "1", "0", "2", "2", "2", "1", "1", "1", "1", "1", "0", "0", "1", "1", "1", "1", "2", "2", "0", "2", "2", "1", "1", "1", "1", "1", "1", "1", "1", "0", "2", "0", "1", "2", "1", "2", "1", "1", "1", "2", "2", "2", "1", "2", "1", "2", "2", "2", "1"], suma=0, M='', bien={}, mal={},malas={};
        $("input[type=radio]:checked").each(function(){
            resp[this.name] = Number(this.value);
        })
        for (i in resp) {
            num = Number(i.split("i")[0]);
            if (resp[i] == clave[num]) {
                suma++;
                bien[i] = num+1;
            } else {
                mal[i] = num+1;
                malas[i] = $("label[for='"+num+"i"+clave[num]+"'").text();
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
                correcta = malas[i];
                $("#info").append("<p>Tu respuesta fue: <span style='color:red'>"+incorrecta+"</span></p><p>La respuesta correcta era: <span style='color:green'>"+correcta+"</span></p>");
                }
            }
            $("#info").show();
                    }, function() {
                        $("#info").hide();
                    })
        DIAGNOS = "Nivel: "+ M + ", " + suma;
        resultadoHTML = '<p>Tu nivel es '+M+', y tu puntaje fue <b>'+suma+'</b></p>'; 
        console.log(resultadoHTML);
        } //Fin de la función
    function calTest12() {
        var resp = {}, suma=[0,0,0,0,0,0,0], num2 = 0;
        $("input[type=radio]:checked").each(function(){
            resp[this.name] = Number(this.value);
        })
        for (i in resp) {
            num = Number(i.split("i")[0]);
            (num <= 10) ? num2 = 0 : (num > 10 && num <= 20) ? num2=1 :( num > 20 && num <= 30) ? num2=2 : (num > 30 && num <= 35) ? num2=3 : (num > 35 && num <= 39) ? num2=4 : num2=5;
            suma[num2] += resp[i];
            suma[6] += resp[i];
        }
        add(0,1);
        haTa(lug, datos = [["Categoría","Resultado","Puntaje ideal"], ["Estudio independiente", suma[0],"55"], ["Habilidades de lectura",suma[1], "50"], ["Administración de tiempo",suma[2], "50"], ["Concentración",suma[3], "25"], ["Lugar de estudio",suma[4], "20"], ["Habilidades para procesar la información",suma[5], "50"], ["Total",suma[6], "250"]],"center");
resultadoHTML = '<table> <tr><th>Categoría</th><th>Puntaje</th></tr> <tr><td>Estudio independiente</td><td>'+suma[0]+'</td></tr> <tr><td>Habilidades de lectura</td><td>'+suma[1]+'</td></tr> <tr><td>Administración de tiempo</td><td>'+suma[2]+'</td></tr> <tr><td>Concentración</td><td>'+suma[3]+'</td></tr> <tr><td>Lugar de estudio</td><td>'+suma[4]+'</td></tr> <tr><td>Habilidades para procesar la información</td><td>'+suma[5]+'</td></tr> <tr><td>Total</td><td>'+suma[6]+'</td></tr> </table>';

    } //Fin de la función
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
var diapositiva = 0, modal=0;
function currentDiv(n, m) {
  showDivs(diapositiva = n, modal = m);
}
function showDivs(n, m) {
  var i, x = $('.BigImgs'+m);
  if (n > x.length-1) {diapositiva = 0}
  if (n < 0) {diapositiva = x.length-1}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[diapositiva].style.display = "block";
  $(".modal"+m).show();
}
$(".close").click(function(){
  $(".modal").hide();
});
$(".modal").click(function(){
  $(".modal").hide();
})
$(".modal div").click(function(e) {
        e.stopPropagation();
   });
$(".mini").click(function(){
  var MiniV = Number($(this).attr('class').split(' ')[1].split('mini')[1]);
  var Mini = $(".mini"+MiniV).index(this);
  currentDiv(Mini, MiniV);
})
$(".right").click(function(){
  currentDiv(diapositiva+1, modal);
})
$(".left").click(function(){
  currentDiv(diapositiva-1, modal);
})
$(".escala-link").hover(function(){
    $(".escala").toggle();
}, function(){ $(".escala").toggle(); })
    //END OF THE DOCUMENT READY
});
