/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arrayTotal = [...nums, ...nums];
    return arrayTotal;
};