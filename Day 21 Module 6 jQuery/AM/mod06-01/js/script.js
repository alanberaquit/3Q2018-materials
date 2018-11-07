// $("button").on("click", function(){
//     $("div").fadeOut(1000, function(){
//         console.log("Fade out effect");
//     $(this).remove();
//   });
// });


$("button").on("click", function(){
 $('div').slideToggle(1000, function(){
 });
});

$("div").on("mouseenter", function(){
  $("h1").text($(this).text());
});

$("div").on("mouseleave", function(){
  $("h1").text("jQuery Effects");
});


$("div").on("click", function(){
  $(this).fadeOut();
});

