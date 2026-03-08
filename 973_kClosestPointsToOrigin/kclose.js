function kClosest(points: number[][], k: number): number[][] {
    let spots = []

    for (let [x, y] of points) {
        let total = x * x + y * y;
        spots.push([total, [x, y]])
    }
    
    spots.sort((a, b) => a[0] - b[0])


    return spots.slice(0, k).map(p => p[1])
};

/*
Time: O(n log n)
Space: O(n)

*/