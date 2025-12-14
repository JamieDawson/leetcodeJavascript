const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question("Enter something: ", (answer) => {
    console.log(`You typed: ${answer}`);
    ask(); // keep asking
  });
}

ask();
