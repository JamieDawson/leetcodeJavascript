function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      res += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      res += maxRight - height[right];
    }
  }
  return res;
}

/*
Two pointer method.
tracking MaxLeft and MaxRight instead of just left and right pointers.
*/
