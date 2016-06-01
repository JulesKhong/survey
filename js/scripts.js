var userSummary = function(color, food) {
  return color + " " + food;
};

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var color = $("#color").val();
    var food = $("#food").val();
    var result = userSummary(color, food);
    $("#output").text("Would you like some " + result + "?")
  });
});
