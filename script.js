var c=0;
function cambiaImg(){
    $("#imagen").attr("src",imgArr[c]);
    if (!document.images)
    return;
    document.getElementById('imagen').src = imgArr[c].src;
    if(c<2){
	    c++;
	    }
  	  else{
    	c = 0;
	    }
    setTimeout("cambiaImg()", 3000);
}
/*var $Menor=$('<h3 id="Contacto" id="algo">Contacto</h3><div align="center"><p align="center">Dr. Pedro de Alba #122 Fracc. Modelo CP.20080 Aguascalientes, Ags, México.</p><div id="gmap"></div></div>');
var $Mayor=$('<div id="Contacto" class="estilo"><h3>Contacto</h3><div align="center"><div id="gmap"></div></div><p align="center"> Dr. Pedro de Alba #122 Fracc. Modelo CP.20080 Aguascalientes, Ags, México.</p></div>');*/
/*function initMap() {
  var myLatLng = {lat: 21.876599, lng: -102.308505};
  map = new google.maps.Map(document.getElementById('gmap'), {
    zoom: 15,
    center: myLatLng
  });*/
var map;
function initMap() {
  var mapOptions = {
   center: new google.maps.LatLng(21.876599,-102.308505),
   zoom: 15,
   mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("gmap"),
            mapOptions);
  $("#gmap").append(map);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(21.876599,-102.308505),
    map: map,
    draggable:false,
    title: 'Papelería y Regalos Clarissa'
  });          
}
google.maps.event.addDomListener(window, 'resize', initMap);
google.maps.event.addDomListener(window, 'load', initMap)
  
var imgArr = new Array();
imgArr[0]=new Image();
imgArr[0].src="Images/Slide/Image1.png";
imgArr[1]=new Image();
imgArr[1].src="Images/Slide/Image2.png";
imgArr[2]=new Image();
imgArr[2].src="Images/Slide/Image3.png";

$(document).ready(function(){
    cambiaImg();
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
    $("#bContacto").click(function(){
        $('#bContacto').addClass('active');
        $('#bInicio').removeClass('active');
    });
    $("#bInicio").click(function(){
        $(window).scrollTop($('#Inicio').offset().top);
        $('#bInicio').addClass('active');
        $('#bContacto').removeClass('active');
    });
    $(window).resize(function(){
       if ($(window).width() <= 580) {  

              $("#imagen").height(135.75);
              $("#imagen").width(241.875);
              /*$("#gmap").height(135.75);
              $("#gmap").width(241.875);*/
              $("#logo").height(53.4);
              $("#logo").width(177.6);
              if($("#bContacto").hasClass("active"))
              {
              	/*if($("#Contacto").hasClass("estilo"))
              	{
              		$Mayor.empty();
              	}
		$('#ultimoDiv').after($Menor);*/
		var active = $( "#accordion" ).accordion( "option", "active" );
		$( "#accordion" ).accordion( "option", "active", 3 );
              }
       } else if ($(window).width() <= 942) {  

              $("#imagen").height(253.4);
              $("#imagen").width(451.5);
              /*$("#gmap").height(253.4);
              $("#gmap").width(451.5);*/
              if($("#bContacto").hasClass("active"))
              {
              	/*if($("#Contacto").hasClass("estilo"))
              	{
              		$Mayor.empty();
              	}
              	$('#ultimoDiv').after($Menor);*/
              	var active = $( "#accordion" ).accordion( "option", "active" );
		$( "#accordion" ).accordion( "option", "active", 3 );
              }
       } else {
	           $("#imagen").height(362);
	           $("#imagen").width(645);
	           /*$("#gmap").height(0);
	           $("#gmap").width(0);*/
	           $("#logo").height(106.8);
	           $("#logo").width(355.2);
	           /*if($("#Contacto").attr("algo"))
	              	{
	              		$Menor.empty();
	              	}
	           $('#accordion').after("<div id="gmap"></div>");*/
	           if($("#bContacto").hasClass("active"))
	              {
	              	var active = $( "#accordion" ).accordion( "option", "active" );
	           	$( "#accordion" ).accordion( "option", "active", 3 );
	              }
       }
});
});
