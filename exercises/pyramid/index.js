// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// pyramid(4)
// '    #    ' 0
// '   ###   ' 1
// '  #####  ' 2
// ' ####### '
// '#########'

function pyramid(n, row=0, str="") {
    let base = 2*n-1
    for (let row=0; row < n; row++){
        let str = ""
        for(let i=0; i < base; i++){
            if(str.length >= Math.floor(base/2) - row && str.length <= Math.floor(base/2) + row){
                str+="#"
            } else {
                str+=" "
            }
        }
        console.log(str)
    }
    
    
    
    // if(n===row){
    //     return
    // }
    // if(str.length === 2*n-1)){
    //     console.log(str)
    //     return pyramid(n, row+=1)
    // }
    // if(str.length >= Math.floor((2*n-1)/2) - row && str.length <= Math.floor((2*n-1)/2) + row) {
    //     str+="#"
    // } else {
    //     str+=" "
    // }
    // pyramid(n, row, str)
}

module.exports = pyramid;
