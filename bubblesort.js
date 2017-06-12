function bubbleSort(array) {
  //for all the indices
  for (var i = 0; i < array.length; i++){
    //compare to the indices after it
    for (var j = i + 1; j < array.length; j++){
      //swap if the right one is greater
      if (array[i] > array[j]){
        var swapped = swap(array[i], array[j]);
        array[i] = swapped[0];
        array[j] = swapped[1];
      }
    }
  }
  return array;
}
// two value swap, easy to do if you use destructuring otherwise do it like this with a temp variable.
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
  // keep splitting while [0] and [1] are not single number arrays
  while(splitArray[0].length !== 1 || splitArray[1].length !== 1){
    // [0] contains only 1 number, [1] contains multiple number array, push [0] to end
    if (splitArray[0].length === 1 && splitArray[1].length !== 1){ 
      splitArray.push(splitArray.shift());
    } 
    else {
      //split
      var temp = split(splitArray.shift());
      //push to end
      splitArray.push(temp[0]);
      splitArray.push(temp[1]);
    } 
  } 

  // putting it back together!!!
  // while [0].length is not original array length
  while(splitArray[0].length !== array.length){ 
    splitArray.push(merge(splitArray));
    //for getting rid of the extra stuff at the front (left and right used in merge)
    splitArray.shift();
    splitArray.shift();
  }
  // final array is stored in the first index of the final array and is the only array inside the final array.
  return splitArray[0];
}
function split(array){
  var tempArray = [];
  // will make left side array larger for odd numbers
  var middle = Math.ceil(array.length / 2);
  var left = array.slice(0, middle);
  tempArray.push(left);
  var right = array.slice(middle);
  tempArray.push(right);
  // this is an array of 2 arrays, left and right halves
  return tempArray;
}

function merge(array){
  var mergeArray = [];
  //take first and second index as left and right to be merged
  var left = array[0];
  var right = array[1];

  //while both left and right arrays exist
  while (left.length > 0 || right.length > 0){
    //if left and right both exist compare them and push value
    if(left[0] <= right[0]){
      mergeArray.push(left.length ? left.shift() : left);
    } else if (right[0] <= left[0]){
      mergeArray.push(right.length ? right.shift() : right);

      //if left exists and right does not and viceversa
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
