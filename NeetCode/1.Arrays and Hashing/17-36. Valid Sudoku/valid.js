var isValidSudoku = function(board) {
    let check;
    let rowLength = board.length;
    let colLength = board[0].length;
    let arr = [[0,1,2], [3,4,5], [6,7,8]]
    
    //Check row function
    for(var i = 0; i < rowLength; i++) {
        check = new Set();
        for(let j = 0; j < rowLength; j++) {
            if(board[i][j] > "0" && board[i][j] <= "9") {
                if(check.has(board[i][j])) {
                    return false;
                } else {
                    check.add(board[i][j])
                }

            }
        }
    }

    //check column function.
    for(var i = 0; i < colLength; i++) {
        check = new Set();
        for(let j = 0; j < colLength; j++) {
            if(board[j][i] >= "0" && board[j][i] <= "9") {
                if(check.has(board[j][i])) {
                    return false;
                } else {
                    check.add(board[j][i]);
                }
            }
        }
    }


    for(var i = 0; i < board.length; i += 3) {
        for(var j = 0; j < board[i].length; j += 3) {
            console.log(i, j)
        }
    }

    
};

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

isValidSudoku(board);

/*
Craete row function
Create col function
create square function

*/

