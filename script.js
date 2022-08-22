const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");
const fade = document.querySelector("#fade");

cepInput.addEventListener("keypress", (e) => {
  const onlyNum = /[0-9]/;
  const key = String.fromCharCode(e.keyCode);

  if (!onlyNum.test(key)) {
    e.preventDefault();
    return;
  }
});

cepInput.addEventListener("keyup", (e) => {
  const inptValue = e.target.value;
  if (inptValue.length === 8) {
    getAdress(inptValue);
  }
});

const getAdress = async (cep) => {
  toggleLoader();
  cepInput.blur();
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);

  if (data.erro === "true") {
    addressForm.reset();
    toggleMessage("CEP invalido, tente novamente");
    toggleLoader();
    return;
  }
//   if(addressInput.value === ""){
//     toggleDisabled();
//   }
  
  addressInput.value = data.logradouro;
  cityInput.value = data.localidade;
  neighborhoodInput.value = data.bairro;
  regionInput.value = data.uf;

  toggleLoader();
};

// const toggleDisabled = () => {
//     if(regionInput.hasAttribute('disabled')){
//         formInputs.forEach((inpt) => {
//             inpt.removeAttribute('disabled');
//         })
//     }else{
//         formInputs.forEach((inpt) => {
//           inpt.setAttribute("disabled", "disabled");
//         });
//     }
// }

const toggleLoader = () => {
  const loader = document.querySelector("#loader");
  loader.classList.toggle("hide");
  fade.classList.toggle("hide");
};

const toggleMessage = (msg) => {
  const messageEl = document.querySelector("#message");
  const messageElText = document.querySelector("#message p");

  messageElText.innerText = msg;
  fade.classList.toggle("hide");
  messageEl.classList.toggle("hide");
};

closeButton.addEventListener("click", () => {
  toggleMessage();
});
