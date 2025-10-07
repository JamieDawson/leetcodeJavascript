const findLargest = (piles: number[]) => {
  let large = -1;
  for (let i = 0; i < piles.length; i++) {
    if (piles[i] > large) large = piles[i];
  }
  return large;
};

const findTotal = (piles: number[], middle: number): number => {
  let total = 0;

  for (let i = 0; i < piles.length; i++) {
    total += Math.ceil(piles[i] / middle);
  }
  return total;
};

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = findLargest(piles);
  let k;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    k = findTotal(piles, middle);
    if (k <= h) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}
