// Stuff to do when page loads
$(function () {
  $("#add").on("click", function (event) {

    getQuotes();
    $("#count").focus();
    $("#count").val('');
  });

  $("#clear").on("click", function (event) {
    $("#container").empty(); // This is how we clear "content" (the stuff between tags)
    $("#count").val('');  // This is how we empty an <input>
  });
});

const renderQuotes = function (quotes) {
  const container = $("#container");

  // Create an <li> item for each quotes and add to our container
  for (const quote of quotes) {
    const item = `<li>${quote}</li>`;
    container.prepend(item);  // Adds to the beginning
  }

};


// Add a new list item
function getQuotes() {

  // Get the count from the input field
  const count = $("#count").val();

  // Call external REST service
  // const url = `https://jsonplaceholder.typicode.com/todos/${count}`;
  const url = `http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`;

  // jQuery ajax
  $.get(url, renderQuotes);
};
