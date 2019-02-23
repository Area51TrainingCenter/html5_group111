/* 
$(".ui-nav-site ul li").click(tarea)
function tarea(){

}
*/
$(".ui-nav-site ul li").click(function(){
  //console.log("data");
  //$(".ui-nav-site ul li").css("background-color","transparent")
  //$(".ui-nav-site ul li").css("color","white")
  /*
  $(this).css("color","white"); 
  $(this).css("background-color","black"); 
  $(this).css("font-size","20px"); 
  */
  $(".ui-nav-site ul li").removeClass("item-activo");
  $(this).addClass("item-activo");
  var seccion=$(this).attr("data-seccion");

  var limite=$("#"+seccion).offset().top;
  /*$(window).scrollTop(limite);*/

  $("html,body").animate({scrollTop:limite-50},1000)
})
/*
$("#item-services").click(function(){
  var limite=$("#services").offset().top;
  $(window).scrollTop(limite-50);
})

$("#item-projects").click(function(){
  var limite=$("#project").offset().top;
  $(window).scrollTop(limite-50);
})

$("#item-blog").click(function(){
  var limite=$("#blog").offset().top;
  $(window).scrollTop(limite-50);
})
*/


$(".item-grid").click(function(){
   $(".modal").fadeIn(1000);
   var title=$(this).find("img").attr("data-title");
   var ruta=$(this).find("img").attr("data-ruta");
   /*var title=$(this).attr("data-title");
   var ruta=$(this).attr("data-ruta");*/
   $("#title-modal").text(title) 
   $(".foto-modal").attr("src",ruta);
})


$(".btn-cerrar-modal").click(function(){
  //$(".modal").hide(); 
  $(".modal").fadeOut(800);
})