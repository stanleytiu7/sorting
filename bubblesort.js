var bubbleSort = function(array) {
  for(var i = 0;i < array.length; i++){
    for(var j = i+1;j < array.length; j++){
      if(array[i] > array[j]){
        var x = swap(array[i],array[j]);
        array[i] = x[0];
        array[j] = x[1];
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
  return [arrI,arrJ];
}

var mergeSort = function(array, pushArray) {
    if(array === []) return array;
    if(array.length === 1) var splitArray = splitArray.push(array);
    else var splitArray = pushArray;

    var middle = Math.floor(array.length/2);
    var left = array.slice(0,middle);
    splitArray.push(left);
    var right = array.slice(middle);
    splitArray.push(right);
    console.log('hi', splitArray);

    mergeSort(splitArray.shift(), splitArray);

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
