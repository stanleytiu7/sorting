describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array', function(){
    expect(bubbleSort([4,2,5])).toEqual([2,4,5]);
  });

  it('counts number of swaps', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([3,2,1]);
    expect(swap.calls.count()).toEqual(3);
  });
});

describe('Merge Sort', function() {
  it('handles an empty array', function(){
    expect(mergeSort([])).toEqual([]);
  });

  it('handles a single element array', function(){
    expect(mergeSort([1])).toEqual([1]);
  });

  it('sorts an array', function() {
    expect(mergeSort([-500,-100, 20, 25, 1, 81, 91, 0, -9, 100])).toEqual([-500, -100, -9, 0, 1, 20, 25, 81, 91, 100]);
  });
});
