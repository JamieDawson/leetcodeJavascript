const convert = (val) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let col = val[0];
  let row = val[1] - 1;
  const index = alphabet.indexOf(col);
  return [row, index];
};
const findLoop = (sheet) => {
  const visited = new Set();

  const dfsForPath = (row, col, path) => {
    if (row < 0 || row >= sheet.length || col < 0 || col >= sheet[0].length) {
      return false;
    }

    const key = `${row},${col}`;
    if (path.has(key)) {
      console.log(`Loop detected at ${key}`);
      return true;
    }
    if (visited.has(key)) return false;

    path.add(key);
    visited.add(key);

    const val = sheet[row][col];
    if (!val || val === "") return false;

    const [nextRow, nextCol] = convert(val);
    const result = dfsForPath(nextRow, nextCol, path);
    path.delete(key);
    return result;
  };

  for (let row = 0; row < sheet.length; row++) {
    for (let col = 0; col < sheet[row].length; col++) {
      const val = sheet[row][col];
      if (val === "") continue;
      let path = new Set();
      if (dfsForPath(row, col, path)) {
        console.log("YES - Loop exists");
        return true;
      }
    }
  }

  console.log("I did not find a loop!");
  return false;
};

let sheet = [
  ["A2", "B2", "C1"],
  ["A3", "B1", ""],
  ["", "", ""],
];

findLoop(sheet);
