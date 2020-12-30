$(document).ready(function(){

  if($(window).width() > 767){
    $("#main").css("margin-left", $(".wrapper-masthead").outerWidth());
  }

  $('[data-filter]').click(function(){
    var filter = $(this).data('filter');

    $('[data-filter]').removeClass('active');
    $(this).addClass('active');

    $('#portfolio-grid .card').removeClass('visible');

    if(filter != 0){
      $('#portfolio-grid').find('.'+filter).addClass('visible');
    }else{
      $('#portfolio-grid .card').addClass('visible');
    }
  });

});


$(window).resize(function(){

  if($(window).width() > 767){
    $("#main").css("margin-left", $(".wrapper-masthead").outerWidth());
  }else{
    $("#main").css("margin-left", 0);
  }

});
