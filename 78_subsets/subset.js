function subsets(nums: number[]): number[][] {
     const res = [];
        const subset = [];
        dfs(nums, 0, subset, res);
        return res;
};

const dfs = (nums, i, subset, res) => {
        if (i >= nums.length) {
            res.push([subset]);
            console.log(res);
            return;
        }
        subset.push(nums[i]);
        dfs(nums, i + 1, subset, res);
        subset.pop();
        dfs(nums, i + 1, subset, res);
    
}