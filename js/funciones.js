var TotalEvidencias = $('#Evidencias').val(); // cantidad total de evidencias que se calificaron 
var TotalAciertos = $('#Aciertos').val(); // cantidad total de aciertos del examen 

var ValorEvidencia = new Array(0, 0, 0, 0, 0); // en este array se almacenas las calificaciones de cada una de las evidencias 
var IdEvidencia = new Array("", "", "","",""); // y este almacena el Id de la calificion de cada una de las evidencias 

var AciertosExamen = 0; // guarda el numero de aciertos obtenidos en el axemen 
var IdAcierto = ""; // guarda el id de el btn del numero de aciertos



/*
	
	identificadores de los resultados finales 
	$('#NumeroEvidencias').text();
	$('#PorcentajeEvidencias').text();
	$('#CalificacionExamen').text();
	$('#PorcentajeExamen').text();
	$('#CalificacionFinal').text();
*/


function evi(IdEvi,NEvi,ValEvi) {
	// IdEvi -> es el Id del btn que se esta pulsando 
	// NEvi -> este el numero de la evidencia que nos sirve para saber si esta es la evidencia 1 2 3 4 5  
	// Val -> y este contiene la calificacion de la evidencia 

	/* 
		al crear esta funcion y usar arrays para el almacenamiento se evita repetir codigo
		evitando escribir un metodo para cada numero de evidencia, de esta manera sin importar cuantas 
		sean las evidencia a calificar funciona y almacena las calificaciones de cada una.
	*/

	/*
		Esta funcion se encarga de mostrar y guardar la calificacion de cada una de las evidencias 
		marca en un color verde la calificaion seleccionada y guarda dentro del array ValorEvidencia la calificion 
		Estos valores se ocupan para realizar los calculos de la calificaion final por el momento el porcentaje 
		de todas las evidencias es del 50% de la calificacion total es decir si son 3 evidencias y en todas se obtine
		una calificacion de 10 tiene ya un 50% de la calificaion total.

		Como el codigo es para mi papa y el ocupara siempre el valor 50% evidencias 50% examen no crei necesario 
		poner la opcion de dar un  valor en porcentaje a las evidencias y al examen
	*/

	if (IdEvidencia[NEvi] != "") {
		/*
			cada que se pulsa un boton este se debe poner en color verded para que el usuario sepa que 
			calificacion esta otorgando a cada evidencia, por lo que primero antes de poner de color verde el boton 
			pulsado comprueba si existe otro boton en color verde, esto lo hace viendo si existe un id de boton almacenado 
			en el array si esta es true toma ese id del boton para regresarlo a ser de color  azul y despues poner en verde el btn
			pulsado 
		*/
		$(IdEvidencia[NEvi]).removeClass("btn-success");
		$(IdEvidencia[NEvi]).addClass("btn-primary");
	}else{
		/*
			si no existe ningun id en array esto quiere decir que el btn que esta en el verde es el btn por default N/P
			por lo que se le quita a este el color verde para despues darle el color verde al btn pulsado
		*/
		var NN = NEvi + 1;
		var IdEvi0 = "#Var"+NN+"E0";
		$(IdEvi0).removeClass("btn-success");
		$(IdEvi0).addClass("btn-primary");
	}
	
	// en esta parte se pone de color verde el btn pulsado y se toma el valor del mismo para poder hacer calculos 
	var id = "#"+IdEvi; // primero tomamos de la funcion el parametro del Id el cual no sirve para saber que btn ser va a poner en verde
	$(id).removeClass("btn-primary"); // se le quita el color azul 
	$(id).addClass("btn-success");  // y despues se pasa a ponerlo en color verded

	ValorEvidencia[NEvi] = ValEvi; // se guarda en el arreglo el valor de la calificacion
	IdEvidencia[NEvi] = id; // y se guarda el Id de btn para quitarle el color verde cuando se pulse otro 
	calcular();
}

function Exa(IdExa,ValExam) {
	if (IdAcierto != "") {
		/*
			esto es lo mismo que con la funcion de la evidencia
		*/
		$(IdAcierto).removeClass("btn-success");
		$(IdAcierto).addClass("btn-primary");
	}

	var idExa = "#"+IdExa; // primero tomamos de la funcion el parametro del Id el cual no sirve para saber que btn ser va a poner en verde
	$(idExa).removeClass("btn-primary"); // se le quita el color azul 
	$(idExa).addClass("btn-success");  // y despues se pasa a ponerlo en color verded

	AciertosExamen = ValExam; // se guarda el numero de aciertos
	IdAcierto = idExa; // y se guarda el Id de btn para quitarle el color verde cuando se pulse otro 
	calcular();
	
}

function trunc (x, posiciones = 0) { // funcion para poner solo dos decimales 
	// esta funcion la tome de la siguiente pagina 
	// https://es.stackoverflow.com/questions/108268/c%C3%B3mo-truncar-un-numero-a-2-decimales-en-javascript
  var s = x.toString();
  var l = s.length;
  var decimalLength = s.indexOf('.') + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}

function calcular() {
	/*
		como se puede ver esta funcion no tienen parametros de entrada ya que va a realizar los calculos
		tomando en cuenta los valores de la variables globales que estan declaradas en las parte superior
		y que guadar valores otorgados por las dos funciones anteriores
	*/

	/**   parte que muestra el numero de evidencias entregadas */
	/**/  var EviEntregadas = 0;
	/**/  for (var i = 0; i < ValorEvidencia.length; i++) {
	/**/  	if (ValorEvidencia[i] != 0) {EviEntregadas++;}
	/**/  }
	/**/  var texto1 = EviEntregadas+"/"+TotalEvidencias;
	/**/  $('#NumeroEvidencias').text(texto1);
	/**   fin de la parte que muestra el numero de evidencias entregadas */

	/**  parte que calcula el porcentaje de las evidencias */
	/**/ var VEm = 50 / (TotalEvidencias * 10);
	/**/ var Vpor = 0;
	/**/ for (var j = 0; j < ValorEvidencia.length; j++) {
	/**/   if (ValorEvidencia[j] != 0) {
	/**/   	Vpor = Vpor + (ValorEvidencia[j]*VEm);
	/**/   }
	/**/ }
	/**/ var texto2 = Math.round(Vpor);
	/**/ $('#PorcentajeEvidencias').text(texto2+"%");
	/** fin de la parte que calcula el porcentaje de las evidencias */

	/** parte en donde se calcula la calificacion del examen y el porcentaje */
	/**/ var CE = Math.round(AciertosExamen * (100/TotalAciertos));
	/**/ var PE = AciertosExamen * (50/TotalAciertos);
	/**/ var texto3 = Math.round(PE) +"%";
	/**/ $('#CalificacionExamen').text(CE/10);
	/**/ $('#PorcentajeExamen').text(texto3);
	/** fin de la parte en donde se calcula la calificacion del examen y el porcentaje */

	// por ultimo la calificaion final 
	var calfin = Math.round(PE) + Math.round(Vpor);
	$('#CalificacionFinal').text(calfin/10);
}