
let selected;

function createTable() {
  const rows = 10;
  const columns = 10;
  const table = document.createElement('table');
  table.id = 'table';

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell(j);
      cell.innerHTML = `${j + 1} cell in row ${i + 1}`;
      const btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.innerHTML = `button ${i + 1}`;
      if(j === 9) {
        cell.innerHTML = '';
        cell.appendChild(btn);
      }
    }
  }

  document.body.appendChild(table);
}
createTable();

function setRowBackground (e) {
  let target = e.target;
  const tr = target.closest('tr');

  if(target.tagName === 'BUTTON') {
    highlight(tr);
  }
}

function highlight(element) {
  if(selected) {
    selected.classList.remove('green-row');
  }
  selected = element;
  selected.classList.add('green-row');
}

document.getElementById('table').addEventListener('click', setRowBackground);