// Stuff to do when page loads
$(function () {
  $("#add").on("click", function (event) {
    getQuote();
    $("input").focus();
  });

  $("#clear").on("click", function (event) {
    $("#container").empty();
    $("#count").val('');
  });
});

const renderQuotes = function (quotes) {
  for (const quote of quotes) {
    renderQuote(quote);
  }
};

const renderQuote = function (quote) {
  const item = `<li>${quote}</li>`;
  const container = $("#container");
  container.prepend(item);
};

// Add a new list item
const getQuote = function () {
  
  // Get the count from the input field
  const count = $("#count").val();

  // Call external REST service
  // const url = `https://jsonplaceholder.typicode.com/todos/${count}`;
  const url = `http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`;

  // jQuery ajax
  $.get(url, function (data) {
    // console.log(data);
    renderQuotes(data);
  });
};
