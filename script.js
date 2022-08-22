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

cepInput.addEventListener("keyup", (e) => {
    const inptValue = e.target.value
    if(inptValue.length === 8){
        getAdress(inptValue)
    }
})

const getAdress = async (cep) => {
    toggleLoader()
    cepInput.blur()
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)

    if(data.erro === "true"){
        adressForm.reset()
        toggleLoader()
        return
    }
}

const toggleLoader = () => {
    const loader = document.querySelector("#loader")
    const fade = document.querySelector("#fade")

    loader.classList.toggle("hide")
    fade.classList.toggle("hide")
}