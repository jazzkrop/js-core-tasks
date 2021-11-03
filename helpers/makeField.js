function makeField(height, width, numberOfBombs) {
  let field = []
  // init array
  for (let i = 0; i < height; i++) {
    field[i] = []
    for (let j = 0; j < width; j++) {
      field[i][j] = 0
    }
  }
  // plant bombs
  while (numberOfBombs > 0) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        // 1 - plant bomb
        // 0 - no bomb
        if (numberOfBombs <= 0) break
        if (field[i][j] == 1) {
          continue
        }
        let bomb = Math.floor(Math.random() * 20) < 2 ? 1 : 0
        field[i][j] = bomb
        numberOfBombs -= bomb
      }
    }
  }
  return field
}
export default makeField