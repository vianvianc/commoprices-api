
var searchForm = document.querySelector("#search-form");
var searchTermInput = document.querySelector("#commodity");
var formatSelect = document.querySelector("#search-format");

apiKey = "a45j8kri99ls4lwqgp45o8358l4y6nfqv012ujr3p312cveb9kv8x40207q1";



var getCommodity = function () {
  var apiUrl =
    "https://commodities-api.com/api/latest?access_key=" +
    apiKey +
    "&base=USD&symbols=XAU,XAG";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          //   displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Commodities API");
    });
};
getCommodity();

