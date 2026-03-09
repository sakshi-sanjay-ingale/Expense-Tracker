const form = document.getElementById('expense-form');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let total = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!desc || isNaN(amount)) return;

  const li = document.createElement('li');
  li.textContent = `${desc} - ₹${amount.toFixed(2)}`;
  expenseList.appendChild(li);

  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  descInput.value = '';
  amountInput.value = '';
});