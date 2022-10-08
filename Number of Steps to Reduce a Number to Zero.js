//Given an integer num, return the number of steps to reduce it to zero.

//In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps  = function(num) {
    let ans = 0
    for (; num; ans++)
        if (num % 2) num--
        else num /= 2
    return ans
};
