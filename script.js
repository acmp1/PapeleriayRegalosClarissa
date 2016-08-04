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
function initMap() {
  var myLatLng = {lat: 21.876599, lng: -102.308505};

  var map = new google.maps.Map(document.getElementById('gmap'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Papelería y Regalos Clarissa'
  });
}
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
              $("#gmap").height(135.75);
              $("#gmap").width(241.875);
              $("#logo").height(53.4);
              $("#logo").width(177.6);
              if($("#bContacto").hasClass("active"))
              {
              	$("#accordion").hide();
              	$("#imagen").hide();
              }
       } else if ($(window).width() <= 942) {  

              $("#imagen").height(253.4);
              $("#imagen").width(451.5);
              $("#gmap").height(253.4);
              $("#gmap").width(451.5);
              if($("#bContacto").hasClass("active"))
              {
              	$("#accordion").hide();
              	$("#imagen").hide();
              }
       } else {
           $("#imagen").height(362);
           $("#imagen").width(645);
           $("#gmap").height(362);
           $("#gmap").width(645);
           $("#logo").height(106.8);
           $("#logo").width(355.2);
       }     

});
});
