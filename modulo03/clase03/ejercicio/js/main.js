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


  $(window).scroll(function(){
  	var top=$(window).scrollTop();
  	if(top>100){
  	//	console.log("el menu debe ser fixed");
  		$(".header-script").addClass("fixed-menu");
  	}
  	else{
			$(".header-script").removeClass("fixed-menu");

  	}
  })
