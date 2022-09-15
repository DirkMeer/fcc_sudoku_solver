const sudokuAlgo = require('../sudokuAlgo')

class SudokuSolver {

  validate(puzzleString) {
    //check for invalid characters
    let regex = new RegExp(/[^1-9.]/) //match all except 1 through 9 and dots
    if(regex.test(puzzleString)){
      console.log('invalid character was found')
      return false
    }
    //check for invalid length
    if(puzzleString.length !== 81){
      console.log('invalid puzzle string length')
      return false
    }

    console.log('valid puzzle string')
    return true
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    let resultstring = ''
    let result = sudokuAlgo(puzzleString)
    for(let i = 0; i < result.length; i++) {
      resultstring += result[i]
    }
    return resultstring
  }
}

module.exports = SudokuSolver;

