var subtractProductAndSum = function(n) {
    let n_str = n.toString();
    let n_mult = 1;
    let n_sum = 0
    let i = 0;
    
    
    while ( i < n_str.length){
           n_mult *= n_str[i]*1
           n_sum += n_str[i]*1
        i ++;
    };
    
    return n_mult - n_sum;
};
subtractProductAndSum(234);
