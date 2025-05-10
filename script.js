console.log("Olá mundo");

const number = document.querySelector("#number");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const form = document.querySelector("#form");
const regex = /\D+/g;
// Função para formatar o valor inserido no input
function formatNumber(input) {
  // Formatar o conteúdo do input para aceitar somente números.
  let value = input.value.replace(/\D/g, "");
  // Converte o conteúdo de String para Number e substitui o conteúdo antigo pelo formatado.
  let newNumber = Number((input.value = value));
  input.value = newNumber;

  return input.value;
}

//Observar cada interação do usuário com os inputs.
number.addEventListener("input", () => {
  // Criando uma expressão regular que retorna apenas letras.

  number.value = number.value.replace(regex, "");
  console.log(number.value);
});

start.addEventListener("input", () => {
  // Criando uma expressão regular que retorna apenas letras.

  start.value = start.value.replace(regex, "");
  console.log(start.value);
});

end.addEventListener("input", () => {
  // Criando uma expressão regular que retorna apenas letras.

  end.value = end.value.replace(regex, "");
  console.log(end.value);
});

form.onsubmit = (e) => {
  e.preventDefault();

  console.log(number.value, start.value, end.value);
};
