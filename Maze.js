let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function routeFinder(maze, position = 0, row, column, direction = 'Start', path) {
    if (column < 0 || row < 0 ) return;
    if ( column >= maze.length || row >= maze[0].length) return;


    path[position] = direction;
    position++;

    if (maze[column][row] === 'e') {
        console.log('Path to exit ' + path)
        return;
    }
    if (maze[column][row] == '*') 
    if (maze[row][column] === ' ') {
        maze[row][column] = 'x';
        routeFinder(maze, position, column, row + 1, 'R', path);
        routeFinder(maze, position, column + 1, row, 'D', path);
        routeFinder(maze, position, column, row - 1, 'L', path);
        routeFinder(maze, position, column - 1, row + 1, 'U', path);
}
    position --;
}

routeFinder(mySmallMaze, 0, 0, 0, 'Start', [])