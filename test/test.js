let runTest = (tasks) => {
  tasks.map((item) => item.taskId);
};

let tasks = [
  { taskId: id1, queuedAtTime: 0, executionDuration: 10 },
  { taskId: id2, queuedAtTime: 3, executionDuration: 7 },
  { taskId: id3, queuedAtTime: 6, executionDuration: 3 },
];

runTest(tasks);
