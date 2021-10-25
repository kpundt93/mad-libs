$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    inputs = $("input").toArray();
    outputs = $("span").toArray();

    let loopCount = 0;
    inputs.forEach(function(input) {
      outputs[loopCount].prepend(input.value);
      loopCount += 1;
    });

    $("#story").show();
    $(this).hide();

  });
});
