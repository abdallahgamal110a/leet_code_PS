/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stringOne = s.split(" ");
    
    let filteredArray = stringOne.filter(item => item !== '');
    
    let stringTwo = filteredArray[filteredArray.length - 1];
    let arrayOne = [...stringTwo];

    return arrayOne.length;
};