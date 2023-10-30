//CPF E CNPJ
let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => (Math.round(Math.random() * number));
let mod = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));

function gera() {
  document.form_main.numero.value = (document.form_main.tipo[0].checked) ? cpf() : cnpj();
}

function cpf() {
  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - (mod(d1, 11));
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - (mod(d2, 11));
  if (d2 >= 10) d2 = 0;

  if (document.form_main.mascara.checked)
    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
  else
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
}

function cnpj() {
  let total_array = 8;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8] = create_array(total_array, n);
  let n9 = 0;
  let n10 = 0;
  let n11 = 0;
  let n12 = 1;

  let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
  d1 = 11 - (mod(d1, 11));
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
  d2 = 11 - (mod(d2, 11));
  if (d2 >= 10) d2 = 0;

  if (document.form_main.mascara.checked)
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
  else
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
}

//Senha
const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});

const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if (newArray.length === 0) return;

  let password = "";

  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passInput.value = password;
};