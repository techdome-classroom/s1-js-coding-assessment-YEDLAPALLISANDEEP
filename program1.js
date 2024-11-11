const getTotalIsles = function (grid) {
   function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
      return;
    }
    grid[i][j] = 'W'; // Mark the land as visited
    dfs(grid, i - 1, j); // Up
    dfs(grid, i + 1, j); // Down
    dfs(grid, i, j - 1); // Left
    dfs(grid, i, j + 1); // Right
  }

  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let islandCount = 0;

  // Traverse the grid to find unvisited land cells
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'L') { // Found an unvisited land
        islandCount++; // Increment island count
        dfs(grid, i, j); // Mark all connected land as visited
      }
    }
  }

  return islandCount;
};



