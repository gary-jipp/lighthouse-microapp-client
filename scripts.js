// Stuff to do when page loads
$(function () {
  $("#add").on("click", function (event) {
    addNewQuotes();
    $("#count").focus();
  });

  $("#clear").on("click", function (event) {
    $("#container").empty(); // This is how we clear "content" (the stuff between tags)
    // $("#count").val('');  // This is how we empty an <input>
  });
});

// Notice we can define functions in this format as well
const renderQuotes = function (quotes) {
  const container = $("#container");

  // Create an <li> item for each quotes and add to our container
  for (const quote of quotes) {
    const $item = $(`<li>${quote}</li>`);
    container.prepend($item);  // Adds to the beginning
  }
};

// Get some new quotes
function addNewQuotes() {

  // Get the count as the value of the input field
  const count = $("#count").val();

  // Call external REST service with our count (that's what this url expects)
  const url = `http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`;

  // jQuery ajax
  $.get(url, renderQuotes);
};
