{
const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-currency");

const CalculateResult = (amount, currency) => {
const rateEUR = 4.4278;
const rateGBP = 4.9384;
const rateUSD = 3.9058;

    switch (currency) {
        case "EUR":
            return amount / rateEUR;
            
        case "USD":
            return amount / rateUSD;

        case "GBP":
            return amount / rateGBP;
    }
};

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

let result= CalculateResult(amount, currency)

    resultElement.innerText = result.toFixed(2);

});
}