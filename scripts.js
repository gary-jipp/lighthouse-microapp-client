function toggleHidden($item) {
  $item.toggleClass("hidden");
}

// Stuff to do when page loads
$(function () {

  $("#add").on("click", function (event) {
    addNewChild($("#container"));
    $("input").focus();
  });

  $("#clear").on("click", function(event) {
    $("#container").empty();
    });
    
 });

// Add a new list item
function addNewChild(parent) {
  const child = $("<li>");
  const text = $("#input").val();

  // Calling an external REST service
  const url = "https://api.kanye.rest";
  
  $.get(url, function (data) {
    // console.log(data);
    child.text(data.quote);
  });

  parent.append(child);
}
