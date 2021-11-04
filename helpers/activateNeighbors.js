import { activateSelf, getAnchors } from "./index.js"

function activateNeighbors(field, i, j) {
  let anchors = getAnchors(field, i, j)
  anchors.forEach((el) => {
    if (el[0] != null && el[1] != null) {
      if (
        field[el[0]][el[1]] != 1 &&
        document
          .querySelector('table')
          .rows[el[0]].cells[el[1]].classList.contains('cell-start')
      ) {
        activateSelf(field, el[0], el[1])
      }
    }
  })
}
export default activateNeighbors