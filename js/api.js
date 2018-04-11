$(document).ready(function() {
  $("#quote").on("click", function(){
    $.getJSON('https://talaikis.com/api/quotes/random/', function(json) {
      $(".message").html(JSON.stringify(json.quote));
    });
  });
});