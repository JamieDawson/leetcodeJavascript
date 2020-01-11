var judgeCircle = function(moves) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < moves.length; i++) {
    if (moves[i] == 'U') y++;
    if (moves[i] == 'D') y--;
    if (moves[i] == 'R') x++;
    if (moves[i] == 'L') x--;
  }
  if (x == 0 && y == 0) return true;
  return false;
};

//Test cases
//judgeCircle('RL'); //Returns true
//judgeCircle('UD'); //Returns true
//judgeCircle('LL'); //Returns false

//Link to question:
//https://leetcode.com/problems/robot-return-to-origin/

/*
Logic behing my answer:
The question is asking you to handle this issue as if you are handling a 
basic X/Y graph. I just create two integers to represent the X and Y on the 
graph and manipulate the numbers as needed.

U = Up
D = Down
R = Right
L = Left

If x or y are both zero, then that means we got back to the starting position. 
*/
