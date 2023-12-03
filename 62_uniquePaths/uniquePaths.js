var uniquePaths = function (m, n) {
  // Create a 2D DP array filled with zeros
  //let dp = new Array(m).fill().map(() => new Array(n).fill(0));
  let dp = Array(m).fill(Array(n).fill(0));

  // Initialize the rightmost column and bottom row to 1
  for (let i = 0; i < m; i++) {
    dp[i][n - 1] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[m - 1][j] = 1;
  }
  //console.log(dp);

  // Fill in the DP array bottom-up
  for (let i = m - 2; i >= 0; i--) {
    console.log(dp);
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
  }
  console.log(dp);

  // Return the result stored in the top-left corner
  return dp[0][0];
};
var row = 3;
var col = 3;

uniquePaths(row, col);

//https://leetcode.com/problems/unique-paths/solutions/3994830/step-by-step-beginner-friendly-dp-3-approaches-full-explanation-dp/
