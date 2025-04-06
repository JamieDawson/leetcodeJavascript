var mergeAlternately = function (word1, word2) {
    let i = 0;
    let j = 0;
    let myArr = []
    let extra;

    while (i < word1.length && j < word2.length) {
        console.log(word1[i], word2[j])
        myArr.push(word1[i])
        myArr.push(word2[j])
        i++;
        j++;
    }
    console.log(myArr)

    if (i < word1.length) {
        extra = word1.slice(i)
        myArr.push(extra);
    }
    if (j < word2.length) {
        extra = word2.slice(j)
        myArr.push(extra);

    }
    console.log(myArr)
    return myArr.join("")
};

/*
Similiar to merging two Linked List in order!
*/