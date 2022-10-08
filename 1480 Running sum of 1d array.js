//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums.

var runningSum = function(nums) {
    let currentSum = 0
    return nums.map((num) => currentSum += num)
};
