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
var johnScore1 = 130;
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
} else {
    console.log("Mary's team has the highest average, with " + maryAvg + " points!");

}