var busyStudent = function (startTime, endTime, queryTime) {
	let i = 0;
	let counter = 0;

	while (i < startTime.length) {
		if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
			counter++;
		}
		i++;
	}
	return counter;
};

let startTime = [1, 1, 1, 1];
let endTime = [1, 3, 2, 4];
let queryTime = 7;

busyStudent(startTime, endTime, queryTime);
