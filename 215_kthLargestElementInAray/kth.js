function findKthLargest(nums: number[], k: number): number {
    let mpq = new MinPriorityQueue<number>();
    let foundNum = 0;

    for (let num of nums) {
        mpq.enqueue(num);
        if (mpq.size() > k) mpq.dequeue();
    }

    return mpq.dequeue();
};