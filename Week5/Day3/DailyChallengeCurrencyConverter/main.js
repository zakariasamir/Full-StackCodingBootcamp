const apiKey = "90200eada51e084d4cb54522";
const apiBaseUrl = "https://v6.exchangerate-api.com/v6/" + apiKey;
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

async function loadCurrencies() {
  const response = await fetch(`${apiBaseUrl}/codes`);
  const data = await response.json();
  if (data.supported_codes) {
    data.supported_codes.forEach(([code, name]) => {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);
      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
  }
}

async function convertCurrency() {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === "" || amount <= 0) {
    resultDiv.innerHTML = "Please enter a valid amount";
    return;
  }

  const response = await fetch(`${apiBaseUrl}/pair/${from}/${to}/${amount}`);
  const data = await response.json();

  if (data.conversion_result) {
    resultDiv.innerHTML = `${amount} ${from} = ${data.conversion_result.toFixed(
      2
    )} ${to}`;
  } else {
    resultDiv.innerHTML = "Error fetching conversion rate";
  }
}

function switchCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convertCurrency();
}

loadCurrencies();
