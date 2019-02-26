const printBoard = board => {
console.log('Current Board:');
console.log(board[0].join(' | '));
console.log(board[1].join(' | '));
console.log(board[2].join(' | '));
};

let board = [
[' ', ' ', ' '], //0th index
[' ', ' ', ' '], //1st index
[' ', ' ', ' '] //2nd index
];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
