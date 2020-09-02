///////////////////////////////////////
// Lecture: Hoisting

//functions
/**calculateAge(1965);

function calculateAge(year) {
    console.log(2016-year);
}

//retirement(1965) //!doesn't work!

var retirement = function(year) {
    console.log(65-(2016-year));
}

retirement(1965);
*/
//variables
/** 

console.log(age);            //undefined
var age = 23;
//console.log(age);

function foo() {
    var age = 65;
    console.log(age);        //65
    console.log(window.age); //23
}
foo();
console.log(age);            //23
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/**
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/**
calculateAge(1985);

function calculateAge(year) {
    console.log(2016-year);
    console.log(this);
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(2016-this.yearOfBirth);
        console.log(this);

        function inner() {
            console.log(this);
        }
        inner();
    }
}

john.calculateAge();

var mike = {
    name: "mike",
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;

mike.calculateAge()