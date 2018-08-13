// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
    
    // let arr = str.toLowerCase().split('')
    // let aeiou = ['a','e','i','o','u']
    // let count = 0
    // arr.forEach(letter => {
    //     aeiou.includes(letter) ? count+=1 : null
    // })
    // return count
}

module.exports = vowels;
