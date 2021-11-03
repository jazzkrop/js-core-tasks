import { activateNeighbors, getNumberOfBombsAround } from "./index.js"

function activateSelf(field, i, j) {
  let thisElement = document.querySelector('table').rows[i].cells[j]
  thisElement.classList.remove('cell-start')
  thisElement.classList.add('cell-click-safe')

  if (getNumberOfBombsAround(field, i, j) != 0) {
    let bombsAround = document.createTextNode(
      getNumberOfBombsAround(field, i, j)
    )
    thisElement.appendChild(bombsAround)
  } else {
    activateNeighbors(field, i, j)
  }
}
export default activateSelf