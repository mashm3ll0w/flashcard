var headings = ["js", "op", "var", "var-naming", "functions", "string", "method", "argument", "parameter", "return", "alert", "jquery"];

$(document).ready(function() {

  headings.forEach(function(heading) {
    $("h3#" + heading).click(function() {
      $("p." + heading + "-def").html("Definition");
    });
    $("p." + heading + "-def").click(function() {
      $(this).html("");
    });
  });
});