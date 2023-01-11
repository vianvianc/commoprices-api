var commodityInputEl = document.querySelector("#commodity");
var commodityContainerEl = document.querySelector("#commodity-container");
var commoditySearchTerm = document.querySelector("#commodity-search-term");

apiKey = "a45j8kri99ls4lwqgp45o8358l4y6nfqv012ujr3p312cveb9kv8x40207q1";

var formSubmitHandler = function (event) {
  event.preventDefault();
  var commodityName = commodityInputEl.value.trim();
  if (commodityName) {
    getCommodity(commodityName);
    commodityContainerEl.textContent = "";
    commodityInputEl.value = "";
  } else {
    ("Please enter a valid commodity symbol");
  }
};

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
