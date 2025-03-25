function findLargestAndSmallest(arr){
    let small = Infinity;
    let largest = -Infinity;
  
    for(let i=0 ; i < arr.length; i++){
        largest = Math.max(arr[i], largest);
        small = Math.min(arr[i], small);
    }
  
    return [largest, small]
  }
  

  //sample
  let arr = [3,1,5,2,6,3,7,8,9];
  console.log(findLargestAndSmallest(arr))