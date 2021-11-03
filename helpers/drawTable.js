let App = document.getElementById('App')
let table = document.createElement('table')
function drawTable(height, width) {
  for (let i = 0; i < height; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < width; j++) {
      const cell = document.createElement('td')
      cell.classList.add('cell-start')
      row.appendChild(cell)
    }
    table.appendChild(row)
  }
  App.appendChild(table)
}
export default drawTable