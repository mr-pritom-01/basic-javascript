// ctrl + c (stops infinity)

//1 array
var friendsAge = [10, 11, 12, 13, 14, 15];
var picnicFee = [5000, 1500, 2000, 1000];
var names = ["Mahi", "Rahi", "Kahi", "Chahi"];

console.log("Upadan =", friendsAge.length);
console.log(picnicFee);
console.log(names);

//2  get element by index
var numbers = [10, 20, 30, 40, 50];
numbers[4] = 44; // changing numbers

// console.log(numbers[0]);

var getElement = numbers[4];

// console.log(getElement);

var indexOf = numbers.indexOf(20);

console.log(indexOf);

// 3 another example
var num = [1, 11, 22, 33, 44, 55, 66];
var names = ["Ami", "Tumi", "She", "Shobai"];

// 4  bvar index = num.indexOf(44);
var index = num[5];
console.log(index);

// 5 pop & push
var arrays = ["I", "Love", "You"];

arrays.push("Soniya &");
arrays.push("Muniya");
arrays.push("Chunniya");

arrays.pop();

console.log(arrays);

// note
// multiple condition
// money1 > money2 && result1 > result2 && height1 && height2 (shobgula shorto puron korte hbe)
// money1 > money2 || result1 > result2 || height1 || height2 (jekono ekta shorto puron)

// 6 if & else
var bbqPrice = 500;
var myBudget = 500;

// if (bbqPrice <= myPocket){
//     console.log('I can effort this thing');
// }
// if (bbqPrice > myPocket){
//     console.log('I am fokir ultra max pro');
// }

if (bbqPrice <= myBudget) {
  console.log("I will eat chicken bbq");
} else {
  console.log("I cannot eat chicken bbq");
}

// 7 multiple condition
var isGraduated = true; //  one = sign is used of set value
var salary = 75000;
var car = 1;

if (isGraduated == true && salary > 50000 && car >= 1) {
  console.log("You will get e wife");
} else {
  console.log("tor kopale biya nai");
}

// 8
var isGraduated = false;
var salary = 7000;
var car = 0;

if (isGraduated == true || salary >= 50000 || car >= 1) {
  console.log("Biya korte parba");
} else {
  console.log("Tui gu kha");
}

// 9
var isGraduated = false;
var salary = 7000;
var car = 0;

if (isGraduated == true || salary >= 50000 || car >= 1) {
  console.log("Biya korte parba");
} else {
  console.log("Tui gu kha");
}
// 10
var myMoney = 5;
var porotaVaji = 40;
var butterBon = 20;
var toastBiscuit = 15;

if (myMoney >= porotaVaji) {
  console.log("Porota Dal-Bhaji den");
} else if (myMoney >= butterBon) {
  console.log("butter bon den");
} else if (myMoney >= toastBiscuit) {
  console.log("Gorib ra toast biscuit khay");
} else {
  console.log("Khali Cha den");
}
// 11
// 12 nested condition

// 13
var numbers = [10, 20, 30, 40, 50, 60];

numbers.shift();

console.log(numbers);

// 14
var givePlate = 0;

while (givePlate < 7) {
  console.log("Give me a plate please...");
  console.log(givePlate);
  givePlate += 1;
}

// 15
var number = 1;
var numbers = 0;

while (number <= 10) {
  console.log(number);

  number = number + 2;
}

while (numbers <= 10) {
  console.log(numbers);

  numbers = numbers + 2;
}

// 16 for loop
for (var roastDen = 1; roastDen <= 6; roastDen++) {
  console.log("Give me a roast !!");
  console.log(roastDen);
}
// 17
for (evenNumber = 1; evenNumber <= 20; evenNumber += 2) {
  console.log(evenNumber);
}
// 18 array loop (target display every element of an array)
var numbers = [10, 20, 30, 40, 50, 60, 70];

for (i = 0; i <= 6; i++) {
  var number = numbers[i];
  console.log(number);
}
// 19
var tables = [10, 20, 30, 40, 50, 1, 2, 3, 4, 5, 6];

for (i = 0; i < tables.length; i++) {
  var table = tables[i];
  console.log(table);
}

// 20
var roastGiven = 1;

while (roastGiven < 10) {
  if (roastGiven > 5) {
    break;
  }
  console.log("Roast Den");
  console.log(roastGiven);
  roastGiven++;
}
// 21
var items = ["Book", "Pen", "Pencil", "Rubber", "Cutter"];

for (i = 0; i < items.length; i++) {
  var item = items[i];
  if (item == "Rubber") {
    break;
  }
  console.log(item);
}
// 22 50 er beshi nibe na
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 52, 35, 55, 78, 11];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}

// 23 reverse way
var no = 10;

while (no >= 1) {
  console.log(no);
  no--;
}
// 24
for (i = 10; i >= 1; i--) {
  console.log(i);
}

// var nums = [10,20,30,40,50,60,40];

// for (i = 10; i >= 0; i--){
//     var num = nums[i];
//     console.log(num);
// }

// 25
let a = 1;
while (a < 10){
    if(a % 2 == 0){
        console.log(a, 'is even');
    }
    else {
        console.log(a, 'is odd');
    }
    a += 1;
}
// 26