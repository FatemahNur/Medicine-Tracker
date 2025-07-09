const form = document.getElementById('medicineForm');
const tableBody = document.querySelector('#medicineTable tbody');

let medicines = JSON.parse(localStorage.getItem('medicines')) || [];

function renderTable() {
  tableBody.innerHTML = '';
  medicines.forEach(med => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${med.name}</td>
      <td>${med.dosage}</td>
      <td>${med.date}</td>
      <td>${med.time}</td>
      <td>${med.duration}</td>
      <td>${med.effects}</td>
      <td>${med.taken ? '✅ Taken' : '❌ Not taken'}</td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newMed = {
    name: document.getElementById('name').value,
    dosage: document.getElementById('dosage').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    duration: document.getElementById('duration').value,
    effects: document.getElementById('effects').value,
    taken: document.getElementById('taken').checked
  };

  medicines.push(newMed);
  localStorage.setItem('medicines', JSON.stringify(medicines));
  form.reset();
  renderTable();
});

renderTable();
