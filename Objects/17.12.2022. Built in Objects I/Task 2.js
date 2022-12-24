// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var removeDuplicates = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  newArr.sort(function (a, b) {
    return a - b;
  });

  return newArr;
};

console.log("2.");
console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// new solution, not good sort

const removeDuplicates2 = function (arr) {
  const arrUnique = [...new Set(arr)].sort();
  console.log(arrUnique);
  return arrUnique;
};
removeDuplicates2([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
