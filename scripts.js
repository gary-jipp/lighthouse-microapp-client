// Stuff to do when page loads
$(function () {
  $("#add").on("click", function (event) {
    getQuote();
    $("input").focus();
  });

  $("#clear").on("click", function (event) {
    $("#container").empty();
  });
});

const renderQuote = function (text) {
  const item = `<li>${text}</li>`;

  const container = $("#container");
  container.prepend(item);
};

// Add a new list item
function getQuote() {
  // Calling an external REST service
  const url = "https://api.kanye.rest";

  $.get(url, function (data) {
    // console.log(data);
    renderQuote(data.quote);
  });
}
