// Fischer Yates Shuffle
export function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// makes a new array filled with the elements both arrays have in common
export function compare(array1, array2) {
  var newArr = [];
  array1.forEach((element1) => {
    array2.forEach((element2) => {
      if (element1 === element2) {
        newArr.push(element1);
      }
    });
  });
  return newArr;
}
