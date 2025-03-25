function isNumericOnly(arr) {
  return arr.every((item) => typeof item === "number" && !isNaN(item));
}

function twoSum(nums, t) {
  if (nums.length < 2 || !isNumericOnly(nums)) {
    return null;
  }

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let target = t - nums[i];
    if (map.has(target)) {
      return [map.get(target), i];
    }
    map.set(nums[i], i);
  }

  return null; // Explicitly return null if no pair is found
}

// sample
let arr = [2, 6, 3, 4, 9];
let target = 10;
console.log(twoSum(arr, target)); // Output: [1, 3] (6 + 4 = 10)
