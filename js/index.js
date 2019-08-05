$(document).ready(function() {
  $("h3#js").click(function() {
    $("p.js-def").html("JavaScript Definition");
  });
  $("h3#operator").click(function() {
    $("p.op-def").html("Operator Definition");
  });
  $("h3#variable").click(function() {
    $("p.var-def").html("Variable Definition");
  });
});