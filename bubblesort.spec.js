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

  it('sorts an array', function() {
    expect(mergeSort([-100, 20, 1, 0, -9, 100])).toEqual([-100, -9, 0, 1, 20, 100]);
  });
});
