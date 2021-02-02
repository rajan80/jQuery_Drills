//$('#btnSubmit').click(function(){
// alert("click")

$("form").submit(function (e) {
  e.preventDefault();
  $("input[type='text']").val();

  $("div").append()($( <h2>("input[type='text']").val()</h2>));

  $("h2").mouseover(function () {
    $(this).css({
      "background-color": random_bg_color(),
      "border-radius": Math.random() * 40 + "px",
    });
  });
  $("input[type='text']").on("keyup", function () {
    if ($("input[type='text']").val() === "") {
      $("#btnSubmit").attr("disable", true);
    } else {
      $("#btnSubmit").attr("disabled", false);
    }
  });
  $("body").append($("<div></div>"));
});
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

random_bg_color();
