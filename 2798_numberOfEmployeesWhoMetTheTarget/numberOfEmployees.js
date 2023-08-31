var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (var i = 0; i < hours.length; i++) {
    if (hours[i] >= target) count++;
  }
  return count;
};

let hours = [0, 1, 2, 3, 4];
let target = 2;

numberOfEmployeesWhoMetTarget(hours, target);
