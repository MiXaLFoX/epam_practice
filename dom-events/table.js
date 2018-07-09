
function createTable() {
  const rows = 10;
  const columns = 10;
  const table = document.createElement('table');
  table.className = 'table';

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell(j);
      cell.innerHTML = `${j + 1} cell in row ${i + 1}`;
      const btn = document.createElement('input');
      btn.setAttribute('type', 'button');
      btn.setAttribute('value', `button ${i + 1}`);
      if(j === 9) {
        cell.innerHTML = '';
        cell.appendChild(btn);
      }
    }
  }

  document.body.appendChild(table);
}
createTable();