/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sortOne = [...s];
    let sortTwo = [...t];
    sortOne.sort();
    sortTwo.sort();

    let stringOne = sortOne.join("");
    let stringTwo = sortTwo.join("");
    
    if (stringOne === stringTwo) {
        return true; 
    } else {
        return false;
    }
    
};