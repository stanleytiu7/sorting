function bubbleSort(array) {
  for (var i = 0; i < array.length; i++){
    for (var j = i + 1; j < array.length; j++){
      if (array[i] > array[j]){
        var swapped = swap(array[i], array[j]);
        array[i] = swapped[0];
        array[j] = swapped[1];
      }
    }
  }
  return array;
}

function swap(arrI, arrJ) {
  var temp;
  temp = arrI;
  arrI = arrJ;
  arrJ = temp;
  return [arrI, arrJ];
}

function mergeSort(array, pushArray) {
  // for null and singular case
  if (array.length === 0 ||  array.length === 1){ 
    return array;
  }
  // initialization case
  splitArray = split(array);

  // splitting stuff!!!!
  while(splitArray[0].length !== 1 || splitArray[1].length !== 1){
    if (splitArray[0].length === 1 && splitArray[1].length !== 1){ 
      splitArray.push(splitArray.shift());
    } 
    else {
    var temp = split(splitArray.shift());
    splitArray.push(temp[0]);
    splitArray.push(temp[1]);
    } 
  } 

  // putting it back together!!!
  while(splitArray[0].length !== array.length){
    splitArray.push(merge(splitArray));
    splitArray.shift();
    splitArray.shift();
  }
  // final array is stored in the first index of the final array and is the only array inside the final array.
  return splitArray[0];
}
function split(array){
  var tempArray = [];
  var middle = Math.ceil(array.length / 2);
  var left = array.slice(0, middle);
  tempArray.push(left);
  var right = array.slice(middle);
  tempArray.push(right);
  return tempArray;
}

function merge(array){
  var mergeArray = [];
  var left = array[0];
  var right = array[1];

  while (left.length > 0 || right.length > 0){
    if(left[0] <= right[0]){
      mergeArray.push(left.length ? left.shift() : left);
    } else if (right[0] <= left[0]){
      mergeArray.push(right.length ? right.shift() : right);
    } else if (left.length > 0 && right.length === 0){
      mergeArray.push(left.length ? left.shift() : left);
    } else if (right.length > 0 && left.length === 0){
      mergeArray.push(right.length ? right.shift() : right);
    }
  }
  //console.log(mergeArray);
  return mergeArray;
}


// function merge(L, R, A) {
//   var i = 0;
//   var j = 0;
//   var k = 0;
//
//   while(i < L.length && j < R.length) {
//     if(L[i] <= R[j]) {
//       A[k] = L[i];
//       i++;
//     } else {
//       A[k] = R[j];
//       j++;
//     }
//     k++;
//   }
//
//   while(i < L.length) {
//     A[k] = L[i];
//     i++;
//     k++;
//   }
//   while(j < R.length) {
//     A[k] = R[j];
//     j++;
//     k++;
//   }
//   return A;
// }
//
// function mergeSort(A) {
//   if(A.length < 2) {  // base case
//     return A;
//   }
//
//   var mid = Math.floor((A.length)/2);
//   var left = A.slice(0, mid);
//   var right = A.slice(mid, A.length);
//
//   mergeSort(left);
//   mergeSort(right);
//   return merge(left, right, A);
// }
