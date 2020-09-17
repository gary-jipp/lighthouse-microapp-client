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
 
  // Calling our own REST service
  const url = "http://localhost:8080/api/kanye";
  
  $.get(url, function (data) {
    // console.log(data);
    child.text(data.quote);
    parent.append(child);
  });


}
