/****************************
 * Variables and data types
 */
/**
 var firstName = 'John';
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/
/**
 * Variable mutation and type coercion
 */
var firstName = 'John';
var age = 28;

//Type coercion
/**console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' '+ lastName);*/

/**
 * Basic Operators
 */

/**var now, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;

//math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now/10);

//logic operators
var johnOlder = ageJohn > ageMark
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'johnOlder');
var x;
console.log(typeof x);*/

/**
 * Operator Precedence
 */

 /**var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;
//multiple operators
 var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8*4 - 6 = 32-6 = 26
console.log(x,y);

//more operators
x = x * 2;
x *= 2;

console.log(x);
x += 10;
console.log(x);

x -= 5;
console.log(x);

x /= 2;
console.log(x);

x++
console.log(x);

*/

/**
 * Coding Challenge 1
 */
/**
//define variables
var johnMass,johnHeight,markMass,markHeight,johnBMI,markBMI,johnBMIHigher;
johnMass = 70;
johnHeight = 2;
markMass = 78;
markHeight = 2.2;

//calculate BMI
johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

//is John's BMI higher than Mark's?
johnBMIHigher = johnBMI > markBMI;

if (johnBMIHigher) {
    console.log("John's BMI is higher than Mark's");
} else {
    console.log("Mark's BMI is higher than John's");
}*/

/**
 * Coding Challenge 2
 */
/**var johnScore1 = 130;
var johnScore2 = 120;
var johnScore3 = 103;

var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;

var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;

var johnAvg = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
var maryAvg = (maryScore1 + maryScore2 + maryScore3) / 3;

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log("John's team has the highest average, with " + johnAvg + " points!");
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log("Mike's team has the highest average, with " + mikeAvg + " points!")
} else if (maryAvg > mikeAvg && maryAvg > johnAvg) {
    console.log("Mary's team has the highest average, with " + maryAvg + " points!");
} else {
    console.log("There was a draw at " + johnAvg + " points");
}*/

/**
 * Functions
 */

/**function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + " is already retired.")
    }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");*/
/**
 * Function statements and expressions
 */

/**var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an Uber';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('farmer', 'John'));*/

/**
 * Arrays
 */

/**var names = ["John","Mark","Jane"];
var years = new Array(1990,1969,1948);
console.log(names,years[2]);
 

names[1] = "Ben";
names[5] = "Mary";
console.log(names);

for(var i = 0; i < 10; i++) {
    names[names.length] = (''+i) * i;
}*/

/**
 * Coding Challenge 3
 */

var bills = [124, 48, 268];
var tips = [];
var totals = [];

var calculateTip = function(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

/**for(var i = 0; i<bills.length;i++) {
    tips[i] = calculateTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}*/

tips[0] = calculateTip(bills[0]);
tips[1] = calculateTip(bills[1]);
tips[2] = calculateTip(bills[2]);

totals[0] = bills[0] + tips[0];
totals[1] = bills[1] + tips[1];
totals[2] = bills[2] + tips[2];


console.log("Bills:",bills);
console.log("Tips:",tips);
console.log("Totals:",totals);