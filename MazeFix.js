let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let mazeTwo = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function routeFinder(maze, position = 0, row, column, direction = 'Start', path) {
    if (column < 0 || row < 0 ) return;
    if ( column >= maze[0].length || row >= maze.length) return;

    path[position] = direction;
    position ++;
    if (maze[row][column] === 'e') {
        console.log('Path to exit ' + path)
        return;
    }
    if (maze[row][column] === ' ') {
        maze[row][column] = 'x';
        routeFinder(maze, position, column + 1, row, 'R', path);
        routeFinder(maze, position, column, row + 1, 'D', path);
        routeFinder(maze, position, column - 1, row, 'L', path);
        routeFinder(maze, position, column, row - 1, 'U', path);
        maze[row][column] = ' ';
    }
    position --;
}

routeFinder(mazeTwo, 0, 0, 0, 'S', [])
routeFinder(mySmallMaze, 0, 0, 0, 'Start', [])