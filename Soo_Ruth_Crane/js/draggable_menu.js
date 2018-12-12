$(document).ready(function() {
  $(".tex_3").hide();
  $('#default').backgroundDraggable();
  $(".blue").fadeIn();
  $(".Yellow").hide();
  $(".red").hide();
  $(".green").hide();
  $(".multi").hide();
  $(".tex_1").click(function(){

      $("#default").css({"background":"url(images/yellow_2.png)", "background-repeat": "no-repeat", "display": "inline-block", "width": "100%",
      "height": "100%"});
      $(".tex_1").fadeOut();
      $(".tex_2").fadeIn();
      $(".tex_3").fadeIn();
      $(".tex_4").fadeIn();
      $(".tex_5").fadeIn();

      $(".blue").hide();
      $(".Yellow").fadeIn();
      $(".red").hide();
      $(".green").hide();
      $(".multi").hide();

  });

  $(".tex_2").click(function(){

      $("#default").css({"background":"url(images/multi_2.png)", "background-repeat": "no-repeat", "display": "inline-block", "width": "100%",
      "height": "100%"});

      $(".tex_1").fadeIn();
      $(".tex_2").fadeOut();
      $(".tex_3").fadeIn();
      $(".tex_4").fadeIn();
      $(".tex_5").fadeIn();

      $(".blue").hide();
      $(".Yellow").hide();
      $(".red").hide();
      $(".green").hide();
      $(".multi").fadeIn();
  });
  $(".tex_3").click(function(){

      $("#default").css({"background":"url(images/blue.png)", "background-repeat": "no-repeat", "display": "inline-block", "width": "100%",
      "height": "100%"});

      $(".tex_1").fadeIn();
      $(".tex_2").fadeIn();
      $(".tex_3").fadeOut();
      $(".tex_4").fadeIn();
      $(".tex_5").fadeIn();

      $(".blue").fadeIn();
      $(".Yellow").hide();
      $(".red").hide();
      $(".green").hide();
      $(".multi").hide();
  });
  $(".tex_4").click(function(){

      $("#default").css({"background":"url(images/red_2.png)", "background-repeat": "no-repeat", "display": "inline-block", "width": "100%",
      "height": "100%"});

      $(".tex_1").fadeIn();
      $(".tex_2").fadeIn();
      $(".tex_3").fadeIn();
      $(".tex_4").fadeOut();
      $(".tex_5").fadeIn();

      $(".blue").hide();
      $(".Yellow").hide();
      $(".red").fadeIn();
      $(".green").hide();
      $(".multi").hide();
  });
  $(".tex_5").click(function(){

      $("#default").css({"background":"url(images/green_2.png)", "background-repeat": "no-repeat", "display": "inline-block", "width": "100%",
      "height": "100%"});

      $(".tex_1").fadeIn();
      $(".tex_2").fadeIn();
      $(".tex_3").fadeIn();
      $(".tex_4").fadeIn();
      $(".tex_5").fadeOut();

      $(".blue").hide();
      $(".Yellow").hide();
      $(".red").hide();
      $(".green").fadeIn();
      $(".multi").hide();
  });
});
