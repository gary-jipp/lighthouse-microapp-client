function toggleHidden($item) {
  $item.toggleClass("hidden");
}

$(function () {

  $("#add").on("click", function (event) {
    addNewChild($("#mylist"));
    $("input").focus();
  });

  $("#clear").on("click", function(event) {
    $("#mylist").empty();
    });
    
 });

function addNewChild(parent) {
  const child = $("<li>");
  const text = $("#input").val();

  const url = "https://api.kanye.rest";
  const url1 = "http://localhost:8080/api/kanye";

  $.get(url, function (data) {
    // console.log(data);
    child.text(data.quote);
  });

  parent.append(child);
}
