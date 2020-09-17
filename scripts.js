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

  const data = [
    "To err is human, to forgive devine",
    "Some days I really wish I was a cat",
  ];

  renderQuotes(data);
};
