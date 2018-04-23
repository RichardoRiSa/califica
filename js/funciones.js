var TotalEvidencias = 3; // cantidad total de evidencias que se calificaron 
var TotalAciertos = 30; // cantidad total de aciertos del examen 

var ValorEvidencia = new Array(0, 0, 0, 0, 0); // en este array se almacenas las calificaciones de cada una de las evidencias 
var IdEvidencia = new Array("", "", "","",""); // y este almacena el Id de la calificion de cada una de las evidencias 



/*
	
	identificadores de los resultados finales 
	$('#NumeroEvidencias').text();
	$('#PorcentajeEvidencias').text();
	$('#CalificacionExamen').text();
	$('#PorcentajeExamen').text();
	$('#CalificacionFinal').text();
*/


function evi(IdEvi,NEvi,ValEvi) {
	/*
		Esta funcion de encarga de mostrar y guardar la calificacion de cada una de las evidencias 
		marca en un color verde la calificaion seleccionada y guarda dentro del array ValorEvidencia la calificion 
		Estos valores se ocupan para realizar los calculos de la calificaion final por el momento el el porcentaje 
		de todas las evidencias es del 50% de la calificacion total es decir si son 3 evidencias y en todas se obtine
		una calificacion de 10 tiene ya un 50% de la calificaion total.

		Como el codigo es para mi papa y el ocupara siempre el valor 50% evidencias 50% examen no crei necesario 
		poner la opcion de dar un  valor en porcentaje a las evidencias y al examen
	*/

	if (IdEvidencia[NEvi] != "") {
		$(IdEvidencia[NEvi]).removeClass("btn-success");
		$(IdEvidencia[NEvi]).addClass("btn-primary");
	}else{
		var NN = NEvi + 1;
		var IdEvi0 = "#Var"+NN+"E0";
		$(IdEvi0).removeClass("btn-success");
		$(IdEvi0).addClass("btn-primary");
	}
	$('#CalificacionExamen').text(ValEvi);
	var id = "#"+IdEvi;
	$(id).removeClass("btn-primary");  
	$(id).addClass("btn-success");  

	ValorEvidencia[NEvi] = ValEvi;
	IdEvidencia[NEvi] = id;

}