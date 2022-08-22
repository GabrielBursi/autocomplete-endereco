const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");

cepInput.addEventListener("keypress", (e) => {
    const onlyNum = /[0-9]/
    const key = String.fromCharCode(e.keyCode)

    if(!onlyNum.test(key)) {
        e.preventDefault()
        return;
    }
})