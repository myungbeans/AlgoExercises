// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const cleanStr = (str) => {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    }

    return cleanStr(stringA) === cleanStr(stringB)
}

// const charMap = (str) => {
//     let chars = {}
//     let regStr = str.replace(/[^\w]/g, '').toLowerCase()
//     for (let letter of regStr){
//         chars[letter] = chars[letter] + 1 || 1
//     }
//     return chars
// }

// let charMapA = charMap(stringA)
// let charMapB = charMap(stringB)
// return Object.keys(charMapA).length === Object.keys(charMapB).length && Object.keys(charMapB).every(key => charMapB[key] === charMapA[key])

module.exports = anagrams;
