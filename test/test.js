/*
Unit conversions
how many meeters are in a inch.

example facts: 
m = 3.28 ft
ft = 12 in 
hr = 60 min
min = 60 sec

example queries:
2 m = ? in --> answer = 78.72
13 in = ? m -->  answer 0.330 (roughly)
13 in = ? hr --> "not convertible!"
*/

/*
my ideas
Seperate the conversions into their won mini functions to be returned

*/

let partFacts = (fact, convertingParam) => {};

let convertHour = (hour, convertingParam) => {
  let allowedConversion = ["min", "hour", "day"];
  let check = allowedConversion.find((item) => convertingParam === item);

  if (check === undefined) {
    console.log("not");
    return "not convertible!";
  }
  console.log(check);
};

convertHour("10", "day");
