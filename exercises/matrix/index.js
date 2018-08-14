// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// matrix(5)
//     [[1,  2,  3,  4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]

function matrix(n) {
    let mtx = []
    let startX = 0
    let startY = 0
    let endX = n-1
    let endY = n-1
    let count = 1
    
    for(let i=0; i<n; i++){
        mtx.push([])
    }
       
    while(startX <= endX && startY <= endY){
        for(let i = startX; i <= endX; i++){
            mtx[startY][i] = count
            count++
        }
        startY++
        for(let i = startY; i <= endY; i++){
            mtx[i][endX] = count
            count++
        }
        endX--
        for(let i = endX; i >= startX; i--){
            mtx[endY][i] = count
            count++
        }
        endY--
        for(let i = endY; i >= startY; i--){
            mtx[i][startX] = count
            count++
        }
        startX++
    }

    return mtx
}

module.exports = matrix;
