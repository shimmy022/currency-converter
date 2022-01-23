let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEUR = 4.4278;
let rateGBP = 4.9384;
let rateUSD = 3.9058;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let amount = +amountElement.value;
let currency = currencyElement.value;

let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
    }

    
    resultElement.innerText = result.toFixed(2);

});