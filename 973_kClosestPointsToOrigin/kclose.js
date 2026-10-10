function kClosest(points: number[][], k: number): number[][] {
    const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
    let res = []

    for (const [x, y] of points) {
        let dist = x * x + y * y;
        maxHeap.push([dist, x, y]);
        console.log(dist)
        if (maxHeap.size() > k) {
            maxHeap.pop();
        }
    }

    while (maxHeap.size() > 0) {
        let temp = maxHeap.pop();
        res.push([temp[1], temp[2]])
    }
    return res;
};

/*
For your K Closest Points solution:
Time complexity: \(O(n \log k)\)
- You loop through all \(n\) points.
- Adding each point to a heap of size at most \(k\) takes \(O(\log k)\).
- Removing extra points also takes \(O(\log k)\).
- You pop the remaining \(k\) points to build the result.
Space complexity: \(O(k)\)
The heap stores at most \(k\) points, and the result array stores \(k\) points.
Interview answer: Time is \(O(n \log k)\), and space is \(O(k)\), where \(n\) is the number of points and \(k\) is how many closest points you need.
Note: If \(k = n\), the time complexity becomes \(O(n \log n)\).
*/