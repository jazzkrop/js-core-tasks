import getAnchors from "./getAnchors.js"

function getNumberOfBombsAround(field, i, j) {
  if (field[i][j] == 1) {
    return undefined
  }

  let number = 0

  let anchors = getAnchors(field, i, j)

  anchors.forEach((el) => {
    if (el[0] != null && el[1] != null) {
      number += field[el[0]][el[1]]
    }
  })
  return number
}
export default getNumberOfBombsAround