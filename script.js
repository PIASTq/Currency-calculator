const formElement = document.querySelector(".js-form");
const plnInput = document.querySelector(".js-pln");
const selectElement = document.querySelector(".js-select");
const countElement = document.querySelector(".js-count");

const calculateResult = (select, PLN) => {

    const EUR = 4.5107;
    const USD = 3.9825;
    const GBP = 5.041;
    const CHF = 4.1738;

    switch (select) {
        case "EUR":
            return PLN / EUR;
        case "USD":
            return PLN / USD;
        case "GBP":
            return PLN / GBP;
        case "CHF":
            return PLN / CHF;
    }
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const select = selectElement.value;
    const PLN = plnInput.value;

    let result = calculateResult(select, PLN);

    countElement.innerText = `${PLN} PLN = ${result} ${select}`;
});