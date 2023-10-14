// m1

// practice-1
var totalBudget = 1000;
var orangePrice = 300;
var applePrice = 400;

var remains = totalBudget - orangePrice - applePrice;

console.log(remains);

// practice-2
var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalNum = math + biology + chemistry + physics + bangla;

var average = totalNum / 5;
average = average.toFixed(2);

console.log(average);

// practice-3
var line1 = 'I am going to be';
var line2 = 'an awesome web developer.';

var combined = line1 + '' + line2;

console.log(combined);

// practice-4
var theNumber = 119;
var divBy = 5;

console.log(theNumber % divBy);

// practice-1

// practice-2
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;
var failOne = 39;

var score = failOne;

if (score >= 80) {
    console.log('Gread = A')
}
else if (score >= 60) {
    console.log('Gread = B')
}
else if (score >= 50) {
    console.log('Gread = C')
}
else if (score >= 40) {
    console.log('Gread = D')
}
else {
    console.log('Gread = F');
}

// practice-3
var numbers = [10, 20];

var largestNumber = Math.max(...numbers);

console.log(largestNumber);

// practice-4
var side1 = 9;
var side2 = 1;
var side3 = 1;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('its a somo di bahu trivuj');
}
else {
    console.log('its not a somo di bahu trivuj');
}

// practice-5
