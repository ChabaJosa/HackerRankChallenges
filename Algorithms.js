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
  let arrCopy = [...s];
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
      // This guy is the problem arrCopy[0][0]
    } else if (sumColTwo != 15) {
      // This guy is the problem arrCopy[0][1]
    } else if (sumColThr != 15) {
      // This guy is the problem arrCopy[0][2]
    }
  } else if (missingValObj.second != 0) {
    //
    //  Check which column isn't adding up
    //
    if (sumColOne != 15) {
      // This guy is the problem arrCopy[1][0]
    } else if (sumColTwo != 15) {
      // This guy is the problem arrCopy[1][1]
    } else if (sumColThr != 15) {
      // This guy is the problem arrCopy[1][2]
    }
  } else if (missingValObj.third != 0) {
    //
    //  Check which column isn't adding up
    //
    if (sumColOne != 15) {
      // This guy is the problem arrCopy[2][0]
      arrCopy[2][0] += missingValObj.third;
      res = Math.abs(arrCopy[2][0]);
    } else if (sumColTwo != 15) {
      // This guy is the problem arrCopy[2][1]
      arrCopy[2][1] += missingValObj.third;
      res = Math.abs(arrCopy[2][1]);
    } else if (sumColThr != 15) {
      // This guy is the problem arrCopy[2][2]
      arrCopy[2][2] += missingValObj.third;
      res = Math.abs(arrCopy[2][1]);
    }
  }
  //
  console.log(res);
}

// formingMagicSquare([
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 5],
// ]);

function formingMagicSquareV2(s) {
  // Write your code here
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let arrCopy = [...s];
  let res = 0;
  //
  while (
    //
    // Checks Row Sum Same
    //
    (arrCopy[0].reduce(reducer) != arrCopy[1].reduce(reducer) ||
      arrCopy[1].reduce(reducer) != arrCopy[2].reduce(reducer) ||
      //
      // Checks Columns Sum Same
      //
      arrCopy[0][0] + arrCopy[1][0] + arrCopy[2][0] !=
        arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] ||
      arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] !=
        arrCopy[0][2] + arrCopy[1][2] + arrCopy[2][2]) &&
    //
    //  Make sure res is under 10
    //
    res < 10
  ) {
    console.log("Hi");
    if (
      arrCopy[0].reduce(reducer) != arrCopy[1].reduce(reducer) ||
      arrCopy[1].reduce(reducer) != arrCopy[2].reduce(reducer)
    ) {
      //  If True There's an Issue with Rows
      //
      console.log("Hi2");
      let missingValRow1 = 15 - arrCopy[0].reduce(reducer);
      let missingValRow2 = 15 - arrCopy[1].reduce(reducer);
      let missingValRow3 = 15 - arrCopy[2].reduce(reducer);
      //
      res +=
        Math.abs(missingValRow1) +
        Math.abs(missingValRow2) +
        Math.abs(missingValRow3);
      //
      if (
        arrCopy[0].reduce(reducer) === 15 &&
        arrCopy[1].reduce(reducer) === 15 &&
        arrCopy[1].reduce(reducer) === 15
      ) {
        break;
      }
      //
      //  Determine which column doesn't add up, then modify Arr for Loop
      //
      if (arrCopy[0][0] + arrCopy[1][0] + arrCopy[2][0] != 15) {
        //  Column1
        arrCopy[2][0] +=
          missingValRow1 != 0
            ? missingValRow1
            : missingValRow2 != 0
            ? missingValRow2
            : missingValRow3;
      } else if (arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] != 15) {
        // Column2
        arrCopy[2][1] +=
          missingValRow1 != 0
            ? missingValRow1
            : missingValRow2 != 0
            ? missingValRow2
            : missingValRow3;
      } else if (arrCopy[0][2] + arrCopy[1][2] + arrCopy[2][2] != 15) {
        // Column3
        arrCopy[2][2] +=
          missingValRow1 != 0
            ? missingValRow1
            : missingValRow2 != 0
            ? missingValRow2
            : missingValRow3;
      }
      console.log("Res ---------->", res);
    } else {
      console.log("Hi3");
      // //  Else Issue with Columns
      // //
      // if (arrCopy[0][0] + arrCopy[1][0] + arrCopy[2][0] != 15) {
      //     //  Column1
      //     arrCopy[2][0] += missingValRow1 != 0 ? missingValRow1 : (
      //                     missingValRow2 != 0 ? missingValRow2 : missingValRow3)
      // }
      // else if (arrCopy[0][1] + arrCopy[1][1] + arrCopy[2][1] != 15) {
      //     // Column2
      //     arrCopy[2][1] += missingValRow1 != 0 ? missingValRow1 : (
      //                     missingValRow2 != 0 ? missingValRow2 : missingValRow3)
      // }
      // else if (arrCopy[0][2] + arrCopy[1][2] + arrCopy[2][2] != 15) {
      //     // Column3
      //     arrCopy[2][2] += missingValRow1 != 0 ? missingValRow1 : (
      //                     missingValRow2 != 0 ? missingValRow2 : missingValRow3)
      // }
      break;
    }
  }

  console.log(res);
}

// formingMagicSquareV2([
//   [4, 8, 2],
//   [4, 5, 7],
//   [6, 1, 6],
// ]);

function plusMinus(arr) {
  // Write your code here
  let posCount = 0;
  let negCount = 0;
  let zerCount = 0;
  //
  arr.forEach((item) => {
    item > 0 ? posCount++ : item === 0 ? zerCount++ : negCount++;
    //
  });
  //
  console.log(
    (posCount / arr.length).toFixed(6),
    (negCount / arr.length).toFixed(6),
    (zerCount / arr.length).toFixed(6)
  );
}

// plusMinus([-4, 3, -9, 0, 4, 1]);

function staircase(n) {
  // Write your code here
  let holdArr = [];
  let resArr = [];
  for (let i = 0; i < n; i++) {
    holdArr.push(String("#").padStart(n - i, "#"));
  }
  //
  holdArr = holdArr.reverse();
  //
  holdArr.forEach((item, i) => {
    if (item.length <= n) {
      resArr.push(item.padStart(n, " "));
      console.log(item.length, n);
    }
  });
  //
  resArr.forEach((item) => {
    console.log(item);
  });
}

// staircase(18);

function gradingStudents(grades) {
  // https://www.hackerrank.com/challenges/grading/problem
  //
  // let res = [];
  // grades.forEach((item) => {
  //   let rem = item % 5;
  //   rem = 5 - rem;
  //   if (rem < 3 && item > 37 && rem != 0) {
  //     res.push(item + rem);
  //   } else {
  //     res.push(item);
  //   }
  // });
  console.log(
    grades.map((item) => {
      let rem = item % 5;
      rem = 5 - rem;
      if (rem < 3 && item > 37 && rem != 0) {
        return item + rem;
      } else {
        return item;
      }
    })
  );
}

gradingStudents([
  22, 86, 30, 0, 16, 51, 53, 42, 48, 22, 69, 12, 27, 34, 24, 95, 16, 32, 22, 52,
  56, 71, 95,
]);
