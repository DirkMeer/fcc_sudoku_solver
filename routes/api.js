'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzleString = req.body.puzzle
      console.log(puzzleString)
      //validate the puzzlestring
      if(solver.validate(puzzleString)){
        //solve the puzzle and get return
        let response = solver.solve(puzzleString)
        console.log(response)
        res.json({solution: response})
      }


    });
};
