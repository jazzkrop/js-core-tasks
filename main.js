import { drawTable, getAnchors, getNumberOfBombsAround, makeField, gameOver, activateNeighbors, activateSelf } from './helpers/index.js'
const width = 15
const height = 15
let numberOfBombs = 30

let field = makeField(height, width, numberOfBombs)

let table = document.createElement('table')



//draw table
drawTable(height, width)

//reaction for click
table = document.querySelector('table')
const rows = document.querySelectorAll('tr')
const rowsArray = Array.from(rows)

table.addEventListener('click', (event) => {
  const rowIndex = rowsArray.findIndex((row) => row.contains(event.target))
  const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'))
  const columnIndex = columns.findIndex((column) => column == event.target)

  event.target.classList.remove('cell-start')

  if (field[rowIndex][columnIndex] == 1) {
    event.target.classList.add('cell-click-bomb')
    gameOver()
  } else {
    activateSelf(field, rowIndex, columnIndex)
  }
})


