$(document).ready(function() {
  $("#quote").on("click", function(){
    $.getJSON('https://talaikis.com/api/quotes/random/', function(json) {
      $(".message").html('"' + json.quote + '"');
      $(".author").html(` - ` + json.author);
      $(".cat").html('categories: ' + json.cat)
    });
  });
});