var canPlaceFlowers = function(flowerbed, n) {

    if (n == 0)
        return (true);

    if (flowerbed[0] == 0 && n == 1){
        if (!(flowerbed[1])){
            return (true);
        }
    }

    if (flowerbed[0] == 0 && flowerbed[1] == 0){
        flowerbed[0] = 1;
        n--;
    }

    for (var i = 0; i < flowerbed.length; i++){

        if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0){
            flowerbed[i] = 1;
            n--;
        }
    }

    if (flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0){
        n--;
    }


    if (n <= 0)
        return (true);
    return (false);

};

var flowerbed = [1, 0, 0, 0, 0, 1];
var n = 1;
console.log(canPlaceFlowers(flowerbed, n));