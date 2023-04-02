const prices = Array.from(document.querySelectorAll('[data-ns-test="prices"]'))
  .map(priceElem => parseFloat(priceElem.innerText));

const totalPrice = prices.reduce((acc, price) => acc + price, 0);

const table = document.querySelector('table');
const newRow = table.insertRow();
const newCell = newRow.insertCell();
newCell.colSpan = 2;
newCell.innerText = `Total Price: $${totalPrice.toFixed(2)}`;

newRow.setAttribute('data-ns-test', 'grandTotal');
newCell.setAttribute('data-ns-test', 'grandTotal');
