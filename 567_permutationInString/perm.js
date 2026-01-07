const matches = (an, b) => {
  for (let v in an) {
    if (an[v] !== b[v]) return false;
  }
  return true;
};

function checkInclusion(s1: string, s2: string): boolean {
  let need = {};
  let window = {};
  let left = 0;

  for (let v of s1) {
    if (!need[v]) {
      need[v] = 1;
    } else {
      need[v]++;
    }
  }

  for (let v of s2) {
    if (!window[v]) {
      window[v] = 0;
    }
  }

  for (let right = 0; right < s2.length; right++) {
    //grab current value
    let curr = s2[right];

    //push it into window
    window[curr]++;

    //if right - left + 1 > s1.length
    //grab left value
    //decrase it from window
    //left++

    if (right - left + 1 > s1.length) {
      let leftCurr = s2[left];
      window[leftCurr]--;
      left++;
    }

    //if right - left + 1 is equal to s1.length
    //check matches with need & window
    if (right - left + 1 === s1.length) {
      let check = matches(need, window);
      if (check === true) return true;
    }
  }

  return false;
}
