$(document).ready(function(){

  if($(window).width() > 767){
    $("#main").css("margin-left", $(".wrapper-masthead").outerWidth());
  }

});


$(window).resize(function(){

  if($(window).width() > 767){
    $("#main").css("margin-left", $(".wrapper-masthead").outerWidth());
  }else{
    $("#main").css("margin-left", 0);
  }

});
