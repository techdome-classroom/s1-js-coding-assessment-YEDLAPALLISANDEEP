const decodeTheRing = function (s, p) {
 const m = s.length;
  const n = p.length;
  
  // Initialize DP table with false values
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));
  
  // Base case: empty string matches empty pattern
  dp[0][0] = true;

  // Handle cases where the pattern starts with '*', which can match an empty sequence
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1]; // Match one character
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' can match zero or more characters
      }
    }
  }

  // The final result will be in dp[m][n]
  return dp[m][n];
};
    // write your code here

  
  module.exports = decodeTheRing;
