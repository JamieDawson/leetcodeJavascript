function dailyTemperatures(temperatures: number[]): number[] {
    let ans = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        let curr = temperatures[i];

        while (stack.length > 0 && curr > temperatures[stack[stack.length - 1]]) {
            let s = stack.pop();
            ans[s] = i - s
        }

        stack.push(i)
    }

    return ans;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));

/*

IDEA 1:
TIME: O (n log n)
NOTE: This idea will not work for leetcode because it exceeds the time if the test case is super long.

create an array and fill it with 0's teh size of tempeperatures 

Create a loop in a lot. The first loop deals with the first day,
    the second loop deals with the folowing days
        if 2nd day value is bigger than fist day value
            set how many days had to check ot ith spot in the return array.
            break;

return array

*/
