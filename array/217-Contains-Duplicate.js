/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
        i++;
    }
    return false;
};