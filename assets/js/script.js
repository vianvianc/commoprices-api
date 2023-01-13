var searchForm = document.querySelector("#search-form");
var searchTermInput = document.querySelector("#commodity");
var formatSelect = document.querySelector("#search-format");
var commodityContainer = document.querySelector("#commodity-container");

apiKey = "a45j8kri99ls4lwqgp45o8358l4y6nfqv012ujr3p312cveb9kv8x40207q1";

var getCommodity = function () {
  var apiUrl =
    "https://commodities-api.com/api/latest?access_key=" +
    apiKey +
    "&base=USD&symbols=BRENTOIL";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          renderResults(data);
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



function renderResults(resultData) {
  console.log("inside renderResults function");
  console.log(resultData.data);
  var commodityName = document.createElement("h2");
  commodityName.textContent = resultData.data.date;
  commodityContainer.append(commodityName);
  var commodityDate = document.createElement("h2");
  commodityDate.textContent = resultData.data.date;
  commodityContainer.append(commodityDate);
  var commodityRate = document.createElement("h2");
  commodityRate.textContent = 1 / resultData.data.rates.BRENTOIL;
  commodityContainer.append(commodityRate);
  var commodityUnit = document.createElement("h2");
  commodityUnit.textContent = resultData.data.unit;
  commodityContainer.append(commodityUnit);
}
getCommodity();

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var formatToSearch = formatSelect.value;
  console.log(formatToSearch);
  //call the function and pass the value
});
