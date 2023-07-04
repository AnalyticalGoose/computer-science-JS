export function knightMoves(start, finish) {
    const path = calculateShortestRoute(start, finish);
    if (path) {
        const numMoves = path.length - 1;
        console.log(`You made it in ${numMoves} moves! Here's your path:`);
        for (const position of path) {
            console.log(position);
        }
    } else {
        console.log("No valid path found.");
    }
}

function availableMoves(node, result = []) {
    const validMoves = [[-2, -1], [-1, -2], [1, -2], [2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1]];

    for (let move of validMoves) {
        let newArray = [node[0] + move[0], node[1] + move[1]];
        if (newArray.every(coord => coord > 0 && coord <= 8)) {
            result.push(newArray);
        }
    }
    return result;
}

function calculateShortestRoute(start, finish) {
    const offset = [Math.abs(start[0] - finish[0]), Math.abs(start[1] - finish[1])];
    const pathLength = minimumMoves[offset[0]][offset[1]];
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (path.length - 1 === pathLength) {
            // Found a path with the exact number of moves, check if it reaches the destination
            if (node[0] === finish[0] && node[1] === finish[1]) {
                return path; // Found the destination, return the shortest path
            }
        }

        const moves = availableMoves(node);

        for (const move of moves) {
            const newPath = [...path, move];

            if (!visited.has(move.toString())) {
                queue.push(newPath);
                visited.add(move.toString());
            }
        }
    }
    return null; // No valid path found
}

const minimumMoves = [
    [0, 3, 2, 3, 2, 3, 4, 5],
    [3, 4, 1, 2, 3, 4, 3, 4],
    [2, 1, 4, 3, 2, 3, 4, 5],
    [3, 2, 3, 2, 3, 4, 3, 4],
    [2, 3, 2, 3, 4, 3, 4, 5],
    [3, 4, 3, 4, 3, 4, 5, 4],
    [4, 3, 4, 3, 4, 5, 4, 5],
    [5, 4, 5, 4, 5, 4, 5, 6]
];