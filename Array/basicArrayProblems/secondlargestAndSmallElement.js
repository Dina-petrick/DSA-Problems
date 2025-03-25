function findSecondLargestAndSmallest(nums) {
    if (nums.length < 2) return null;
  
    let secondSmallest = Infinity, smallest = Infinity;
    let secondLargest = -Infinity, largest = -Infinity;
  
    for (let num of nums) {
      // Find smallest and second smallest
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num > smallest && num < secondSmallest) {
        secondSmallest = num;
      }
  
      // Find largest and second largest
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num < largest && num > secondLargest) {
        secondLargest = num;
      }
    }
  
    return [secondSmallest, secondLargest];
  }
  
  let arr = [3, 1, 5, 2, 6, 3, 7, 8, 9];
  console.log(findSecondLargestAndSmallest(arr)); 
  