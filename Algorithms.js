function aVeryBigSum(arr) {
  // Write your code here
  let counter = 0;
  arr.forEach((value) => (counter += value));
  console.log(counter);
  //   return counter;
  //
}

// aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);

function diagonalDifference(arr) {
  // Write your code here
  let leftToRight = 0;
  let rightToLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
  }
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    rightToLeft += arr[i][j];
    j++;
  }
  console.log(Math.abs(leftToRight - rightToLeft)); // [leftToRight, rightToLeft]
}

// diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

function formingMagicSquare(s) {
  // Write your code here
  const firstRow = s[0];
  const secondRow = s[1];
  const thirdRow = s[2];
  const sumColOne = firstRow[0] + secondRow[0] + thirdRow[0];
  const sumColTwo = firstRow[1] + secondRow[1] + thirdRow[1];
  const sumColThr = firstRow[2] + secondRow[2] + thirdRow[2];
  let missingValObj = { first: 0, second: 0, third: 0 };
  let arrCpy = [...s];
  let res = 0;
  //
  // Check Row Sums
  //
  s.forEach((item) => {
    //
    let rowSum = item.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    //
    let missingVal = 15 - rowSum;
    if (item[0] === firstRow[0]) {
      missingValObj.first = missingVal;
    } else if (item[0] === secondRow[0]) {
      missingValObj.second = missingVal;
    } else if (item[0] === thirdRow[0]) {
      missingValObj.third = missingVal;
    }
    //
  });
  //
  if (missingValObj.first != 0) {
    //
    //  Check which column isn't adding up
    //
    if (sumColOne != 15) {
      // This guy is the problem arrCpy[0][0]
    } else if (sumColTwo != 15) {
      // This guy is the problem arrCpy[0][1]
    } else if (sumColThr != 15) {
      // This guy is the problem arrCpy[0][2]
    }
  } else if (missingValObj.second != 0) {
    //
    //  Check which column isn't adding up
    //
    if (sumColOne != 15) {
      // This guy is the problem arrCpy[1][0]
    } else if (sumColTwo != 15) {
      // This guy is the problem arrCpy[1][1]
    } else if (sumColThr != 15) {
      // This guy is the problem arrCpy[1][2]
    }
  } else if (missingValObj.third != 0) {
    //
    //  Check which column isn't adding up
    //
    if (sumColOne != 15) {
      // This guy is the problem arrCpy[2][0]
      arrCpy[2][0] += missingValObj.third;
      res = Math.abs(arrCpy[2][0]);
    } else if (sumColTwo != 15) {
      // This guy is the problem arrCpy[2][1]
      arrCpy[2][1] += missingValObj.third;
      res = Math.abs(arrCpy[2][1]);
    } else if (sumColThr != 15) {
      // This guy is the problem arrCpy[2][2]
      arrCpy[2][2] += missingValObj.third;
      res = Math.abs(arrCpy[2][1]);
    }
  }
  //
  console.log(res);
}

formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);


function formingMagicSquareV2(s) {
  // Write your code here
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  let arrCopy = [...s]
  let res = 0
  while (
      //
      // Checks Row Sum Same
      //
      arrCopy[0].reduce(reducer) !=
      arrCopy[1].reduce(reducer) &&
      arrCopy[1].reduce(reducer) !=
      arrCopy[2].reduce(reducer) &&
      //
      // Checks Columns Sum Same
      //
      arrCopy[0][0] + arrCopy[1][0] + arrCopy[2][0] !=
      arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] &&
      arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] !=
      arrCopy[0][2] + arrCopy[1][2] + arrCopy[2][2]
  ) {
      if (
          arrCopy[0].reduce(reducer) !=
          arrCopy[1].reduce(reducer) &&
          arrCopy[1].reduce(reducer) !=
          arrCopy[2].reduce(reducer)
      ) {  
          //  If True There's an Issue with Rows
          //
          let missingValRow1 = 15 - arrCopy[0].reduce(reducer)
          let missingValRow2 = 15 - arrCopy[1].reduce(reducer)
          let missingValRow3 = 15 - arrCopy[2].reduce(reducer)
          //
          res += Math.abs(missingValRow1) + Math.abs(missingValRow2)
              + Math.abs(missingValRow3)
          // 
          //  Determine which column doesn't add up, then modify Arr for Loop
          //
          if (arrCopy[0][0] + arrCopy[1][0] + arrCopy[2][0] != 15) {
              //  Column1
              arrCpy[2][0] += missingValRow1 != 0 ? missingValRow1 : (
                              missingValRow2 != 0 ? missingValRow2 : missingValRow3)
          }
          else if (arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] != 15) {
              // Column2
              arrCpy[2][1] += missingValRow1 != 0 ? missingValRow1 : (
                              missingValRow2 != 0 ? missingValRow2 : missingValRow3)
          }
          else if (arrCopy[0][2] + arrCopy[1][2] + arrCopy[2][2] != 15) {
              // Column3
              arrCpy[2][2] += missingValRow1 != 0 ? missingValRow1 : (
                              missingValRow2 != 0 ? missingValRow2 : missingValRow3)
          }
      } else { 
          // //  Else Issue with Columns
          // //
          // if (arrCopy[0][0] + arrCopy[1][0] + arrCopy[2][0] != 15) {
          //     //  Column1
          //     arrCpy[2][0] += missingValRow1 != 0 ? missingValRow1 : (
          //                     missingValRow2 != 0 ? missingValRow2 : missingValRow3)
          // }
          // else if (arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] != 15) {
          //     // Column2
          //     arrCpy[2][1] += missingValRow1 != 0 ? missingValRow1 : (
          //                     missingValRow2 != 0 ? missingValRow2 : missingValRow3)
          // }
          // else if (arrCopy[0][2] + arrCopy[1][2] + arrCopy[2][2] != 15) {
          //     // Column3
          //     arrCpy[2][2] += missingValRow1 != 0 ? missingValRow1 : (
          //                     missingValRow2 != 0 ? missingValRow2 : missingValRow3)
          // }
          break
      }
  }
  
  return res
}

formingMagicSquareV2([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);

