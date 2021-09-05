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
  let leftToRight = 0;
  let rightToLeft = 0;
  for (i = 0; i < arr.length; i = i + 4) {
    // leftToRight.push(arr[i]);
    leftToRight += arr[i];
  }
  for (i = arr.length - 3; i > 0; i = i - 2) {
    // rightToLeft.push(arr[i]);
    rightToLeft += arr[i];
  }
  console.log( Math.abs(leftToRight - rightToLeft))
  return Math.abs(leftToRight - rightToLeft)
  //
}

// diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]);
