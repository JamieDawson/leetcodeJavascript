var fizzBuzz = function(n) {
    let hold = []

    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 != 0){
            hold.push("Fizz")
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            hold.push("Buzz")
        } else if (i % 3 == 0 || i % 5 == 0) {
            hold.push("FizzBuzz");
        } else {
            let num = i;
            hold.push(num.toString());
        }
    }

    return (hold);
};

console.log(fizzBuzz(15));