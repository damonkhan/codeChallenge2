var years = [1992, 1995, 1916, 2007, 1930];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            fullAges.push(true);
        } else {
            fullAges.push(false);
        }
    }

    return fullAges;
}

var fullAges1 = printFullAge(years);
var fullAges2 = printFullAge([1990, 1975, 1920, 2011]);

console.log(fullAges1);
console.log(fullAges2);
