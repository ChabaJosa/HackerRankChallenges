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
  for (let i = 0; i < arr.length; i ++) { 
    leftToRight += arr[i][i];
  } 
  let  j = 0
  for (let i = arr.length - 1; i >= 0; i--) {  
    rightToLeft += arr[i][j];
    j++
  } 
  console.log(Math.abs(leftToRight - rightToLeft)) // [leftToRight, rightToLeft]

}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
