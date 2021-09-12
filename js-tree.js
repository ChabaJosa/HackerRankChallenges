// From: https://www.youtube.com/watch?v=ZNH0MuQ51m4
//
let tree;
let nums = [7,47,512, 13,,123, 25,38, 1,54];
//
function setup() {
  tree = new Tree();
  nums.forEach((item) => {
    tree.addValue(item);
  });
  //   tree.addValue(5);
  //   tree.addValue(3);
  //   tree.addValue(7);
  console.log(JSON.stringify(tree, null, 2));
}

function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function (val) {
  let n = new Node(val);
  if (this.root === null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
};

Node.prototype.addNode = function (n) {
  //
  //  Left
  //
  if (n.value < this.value) {
    if (this.left === null) {
      //
      // Reached the bottom left
      //
      this.left = n;
    } else {
      //
      // Recursively Call The Function Again
      // And Keep Going Into The Tree (Left)
      //
      this.left.addNode(n);
    }
  }
  //
  //  Right
  //
  else if (n.value > this.value) {
    if (this.right === null) {
      //
      // Reached the bottom right
      //
      this.right = n;
    } else {
      //
      // Recursively Call The Function Again
      // And Keep Going Into The Tree (Right)
      //
      this.right.addNode(n);
    }
  }
  //
  // Equal Value Wont Get Added To The Tree
  //
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

setup();
