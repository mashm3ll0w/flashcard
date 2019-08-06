$(document).ready(function() {
  $("h3#js").click(function() {
    $("p.js-def").html("JavaScript Definition");

    $("p.js-def").click(function() {
      $(this).hide();
    });
  });

  $("h3#operator").click(function() {
    $("p.op-def").html("Operator Definition");
    $("p.op-def").hide();
  });
  $("h3#variable").click(function() {
    $("p.var-def").html("Variable Definition");
    $("p.var-def").hide();
  });
});