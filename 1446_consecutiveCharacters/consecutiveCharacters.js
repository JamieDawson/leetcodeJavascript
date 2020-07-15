var maxPower = function(s) {
    let last = '';
    let count = 1;
    let power = 0;
    let value;
    for (value of s) {
        if (value === last) {
            count += 1;
            power = Math.max(power, count);
        } else {
            power = Math.max(power, count);
            count = 1;
            last = value;
        };
    };
    return power;
};