export function knightMoves(start, finish) {
    // console.log(start, finish)

    const offset = [Math.abs(start[0]-finish[0]),Math.abs(start[1]-finish[1])]
    const minMoves = minimumMoves[offset[0]][offset[1]]

    console.log(availableMoves(start))
}


function availableMoves(node, result = []){
    const validMoves = [[-2,-1], [-1,-2], [1,-2], [2,-1] ,[-2,1] ,[-1,2] ,[1,2] ,[2,1]]

    for (let move of validMoves) {
        let newArray = [node[0] + move[0], node[1] + move[1]];
        if (newArray.every(coord => coord > 0 && coord <= 8)) {
            result.push(newArray);
        }
    }
    return result
}





const minimumMoves = [
    [0,3,2,3,2,3,4,5],
    [3,4,1,2,3,4,3,4],
    [2,1,4,3,2,3,4,5],
    [3,2,3,2,3,4,3,4],
    [2,3,2,3,4,3,4,5],
    [3,4,3,4,3,4,5,4],
    [4,3,4,3,4,5,4,5],
    [5,4,5,4,5,4,5,6]
    ]



const sixMoves = {
    "[1, 8]": [[3, 7], [5, 6], [4, 4], [5, 2], [7, 3]], 
    "[8, 8]": [[6, 7], [4, 6], [5, 6], [4, 2], [2, 3]], 
    "[8, 1]": [[7, 3], [5, 2], [4, 4], [5, 6], [3, 7]], 
    "[1, 1]": [[2, 3], [4, 2], [5, 6], [4, 6], [6, 7]]
}