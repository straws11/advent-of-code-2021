import { readFile } from './helpers'

function turnsToWin(board: number[][]): { count: number; unmarkedSum: number } {
  //calculate the amount of turns to win for this board
  const captured: boolean[][] = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false));
  var count: number = 0;
  for (const move of moves) {
    count++;
    //for each move, find the matching values and update in the boolean array
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (board[j][k] == move) {
          captured[j][k] = true;
        }
      }
    }
    // determine if there is a full row
    for (let i = 0; i < 5; i++) {
      //for each row
      if (captured[i].every((value) => value)) {
        //every value is true in this row
        const unmarkedSum: number = calculateSum(board, captured);
        return { count, unmarkedSum };
      }
    }

    // determine if there is a full column
    for (let i = 0; i < 5; i++) {
      var colTrue: boolean = true;
      // now for each row element in this col
      for (let j = 0; j < 5; j++) {
        colTrue = captured[j][i];
        if (!colTrue) {
          break;
        }
      }
      if (colTrue) {
        const unmarkedSum: number = calculateSum(board, captured);
        return { count, unmarkedSum };
      }
    }
  }
}

function calculateSum(board: number[][], markedStatus: boolean[][]): number {
  //calculate sum of the entire board, excluding marked numbers
  const allVals: number[] = board.flat();
  const marked: boolean[] = markedStatus.flat();
  var total: number = 0;
  for (let i = 0; i < allVals.length; i++) {
    if (!marked[i]) {
      total += allVals[i];
    }
  }
  return total;
}


// read contents and split into moves and array of 2d boards

const contents: string[] = readFile('day4_in.txt');
const moves: number[] = contents[0].split(',').map((numStr) => parseInt(numStr));
//console.log(contents);
const rows: number[][] = contents.slice(2).map((val) => {
  var row: number[] = [];
  for (let i = 0; i < 5; i++) {
    row.push(parseInt(val.slice(i * 3, i * 3 + 2).trim(), 10));
  }
  return row;
}).filter((arr) => !isNaN(arr[0]));

const boards: number[][][] = [];

for (let i = 0; i < rows.length; i += 5) {
  boards.push(rows.slice(i, i + 5));
}

// play game for each board, calculate the amount of moves it takes
// and also the sum of all unmarked values at win state
const winCounts: { count: number; unmarkedSum: number }[] = boards.map((board) => turnsToWin(board));
var minVal = winCounts[0];
console.log(winCounts)

for (let i = 0; i < winCounts.length; i++) {
  //determine which board needed least amount of moves
  if (winCounts[i].count < minVal.count) {
    minVal = winCounts[i];
  }
}


//calculate the final answer
console.log("Score: " + minVal.unmarkedSum * moves[minVal.count - 1]);
