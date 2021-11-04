function getAnchors(field, i, j) {
  if (i < 0 && i >= field.length && j < 0 && j >= field[0].length)
    return undefined
  let top = i > 0 ? i - 1 : null
  let bottom = i < field.length - 1 ? i + 1 : null
  let left = j > 0 ? j - 1 : null
  let right = j < field[0].length - 1 ? j + 1 : null
  return [
    [top, left],
    [top, j],
    [top, right],
    [i, left],
    [i, right],
    [bottom, left],
    [bottom, j],
    [bottom, right]
  ]
}
export default getAnchors