// Maximum Sum Subarray (Kadane’s Algorithm)


function maxSum(arr){
    let maxNum = -Infinity;
    let currentSum = 0;
    
    for(let num of arr){
        currentSum += num;
        maxNum = Math.max(maxNum, currentSum);
        if(currentSum < 0){
          currentSum = 0;
        }
    }
    console.log(maxNum)
  
    return maxSum;
  }
  
//   Sample 
  maxSum([1,-2,4,-4,5,6,-10,12])