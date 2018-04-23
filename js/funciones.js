var ValorEvidencia = new Array(0, 0, 0, 0, 0);
var IdEvidencia = new Array("", "", "","","");



function evi(IdEvi,NEvi,ValEvi) {

	if (IdEvidencia[NEvi] != "") {
		$(IdEvidencia[NEvi]).removeClass("btn-success");
		$(IdEvidencia[NEvi]).addClass("btn-primary");
	}
	
	var id = "#"+IdEvi;
	$(id).removeClass("btn-primary");  
	$(id).addClass("btn-success");  

	ValorEvidencia[NEvi] = ValEvi;
	IdEvidencia[NEvi] = id;

}