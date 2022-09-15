'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let {puzzle, coordinate, value} = req.body
      coordinate.split('')
      //checks
      solver.checkRowPlacement(puzzle, coordinate[0], coordinate[1], value)
      solver.checkColPlacement(puzzle, coordinate[0], coordinate[1], value)

    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzleString = req.body.puzzle
      console.log(puzzleString)
      //validate the puzzlestring
      let validation = solver.validate(puzzleString)
      if(validation === 'valid'){
        //solve the puzzle and get return
        let response = solver.solve(puzzleString)
        console.log(response)
        res.json({solution: response})
        return
      }else if(validation === 'invalid character'){
        res.json({ error: 'Invalid characters in puzzle' })
      }else if(validation === 'invalid length'){
        res.json({ error: 'Expected puzzle to be 81 characters long' })
      }
    });
};
