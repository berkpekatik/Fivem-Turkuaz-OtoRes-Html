var text = "";
$(function() {
  // Configura o Timezone do Moment.js
  moment.locale('pt-BR');
  // Inicia o tick de horário
  function iniciarHorario() {
	  
    document.getElementById('horario').innerHTML = "<h3>" + moment().format(`HH:mm:ss`) +  "  </h3> "+text;
var restartSaatleri = ["23:55:30","12:55:30"]
	if(restartSaatleri[0] == moment().format("HH:mm:ss") || restartSaatleri[1] == moment().format("HH:mm:ss"))
	{
		
		var saniye = 300;
 
$.sayimiBaslat = function(){
if(saniye > 1){
saniye--;
text = ("<b><h2>" + saniye + " Saniye Sonra Günlük Restart. <br> Lütfen Çıkış Yapınız.<br>Yoksa Datalarınız Silinir.");
} else {
text ="<b><h2>Restart Atılıyor..... <br> Lütfen Çıkış Yapınız.... <br> Yoksa Datalarınız Silinir...";
}
}

setInterval("$.sayimiBaslat()", 1050);
	}   
   t = setTimeout(function() {
      iniciarHorario()
    }, 500);
  }
  iniciarHorario();

});

