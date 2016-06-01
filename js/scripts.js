var favFood = function(food) {
  return food;
};

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var color = $("#color").val();
    var food = $("#food").val();
    var result = favFood(food);
    $("#output").text("Would you like some " + result + "?")
  $("body").css("background-color", color);
  });
});
