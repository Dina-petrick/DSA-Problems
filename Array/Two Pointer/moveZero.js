function moveZeros(arr) {
    let i = 0;
  
    for(let j = 0; j < arr.length; j++){
      if(arr[j] !== 0 ){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
  }
  
  // Example
  let arr = [1, 0,1, 0, 3, 12];
  moveZeros(arr);
  console.log(arr);
  