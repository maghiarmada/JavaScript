/*************************
*variables and data types
*/
/*
var firstName = 'Madalina';
console.log(firstName);
 
var lastName = 'Maghiar';
var age = 24;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Developer';
console.log(job);

var _3years = 3;
var johnMark = 'John and mark';
var if = 23;
*/

/*************************
* variables mutation and type corection
*/
/*
 var firstName = 'Madalina';

var age = 24;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'developer';
isMarried = true; 

console.log(firstName + ' is a' + age + 'years old' + job + '.Is he married ' + isMarried);

//variable mutation

age = 'twenty four';
job = 'dancer';
alert(firstName + ' is a' + age + 'years old' + job + '.Is he married ' + isMarried);

var lastName = prompt ('what is his last name?');
console.log(firstName + ' ' + lastName);

/***************
* basic operations

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 24;
ageMark = 27;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
 var johnOlder = ageJohn > ageMark;
console.log(johnOlder); 

//typeof operator 

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ' Mark is older the John');
var x;
console.log(typeof x);




/**********************
* operator precedence


var now = 2018;
var yearJohn = 1991;
var fullAge = 20;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var age = now - yearJohn;
var ageMark = 35;
var avarage = ageJohn + ageMark / 2;

var firstName = 'John';
var civilStatus = 'married';

if (civilStatus == 'married'){
	console.log(firstName + 'is married');
} else {
	console.log(firstName + 'will hopefully marry soon :)');
	
}

var isMarried = true;
if(isMarried) {
	console.log(firstName + 'is married!');
	
//multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6;

console.log(x, y);

//more operators

/*x = x * 2;
x *= 2;
console.log(x);





//coding challenge

/*var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);
	
	var firstName = 'John';
var civilStatus = 'married';

if (civilStatus == 'married'){
	console.log(firstName + 'is married');
} else {
	console.log(firstName + 'will hopefully marry soon :)');
	
}

var isMarried = true;
if(isMarried) {
	console.log(firstName + 'is married!');
} else {
	console.log(firstName + 'will hopefully marry soon :)');
}
	
	
/**********************
* boolean logic

	
	var firstName = 'John';
	var age =20;
	
	if (age >= 13 ) {
		console.log(firstName + 'is a boy.');
	} else if (age >= 13 && ahe <= 20) {
			   console.log(firstName + 'is a teenger.');
			   }else {
				   console.log(firstName + 'is a  man.');
			   }
	
	var firstName = 'Madalina';
	var age = 22;
	
	age >= 18 ? console.log(firstName + 'drinks beer.') : console.log(firstName + 'drinks juice');
	
	var drink = age >= 18 ? 'beer' : 'juice';
	console.log(drinks);
	
	/*if(age >= 18) {
		var drink = 'beer';
	}else {
		var drink = 'juice';
	}*/
	
	//switch statment 
	/*
	var job = 'teacher';
	switch(job) {
		case 'teacher':
			console.log(firstName + 'teachers kids how to code');
			break;
		case ' driver':
			console.log(firstName + 'drivers an uber in lisbon');
			break;
		case 'designer':
			console.log(firstName + 'designs beatiful sites');
			break;
		default:
			console.log(firstName + 'does something else');
	}
	
	
	
	/*var scoreJohn = (110 + 120 + 103) / 3;
	var scoreMike = (116 + 94 + 123) / 3;
	var scoreMary = (97 + 134 + 105) /3;
	
	
	console.log(scoreJohn, scoreMike, scoreMary);
	
	if(scoreJohn > scoreMike) {
		console.log('John\'s team wins with' + scoreJohn + 'points'
		scoreJohn + 'points');
	}else if (scoareMike > scoreJohn){
		console.log('Mike\'s team wins with' + scoreMike + 'points');
	} else {
		console.log('there is a draw');
	}
	
	
	
	/********* functions
	*
	
	
	
	function calculateAge(birthYear){
		return 2018 - birthYear;
	}
	
	var ageJohn = calculateAge(1990);
	var ageMike = calculateAge(1948);
	var ageJane = calculateAge(1969);

	console.log(ageJohn, ageJane, ageMike);

function yearsUntilRetirement (year, firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if (retirement > 0){
	console.log(firstName + 'retires in ' + retirement + 'years');
	}else{
		console.log(firstName + 'is already retired')
	}
	
}
yearsUntilRetirement(1990,'john');


/*****
*arrays


var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1934, 1928);





/****** objects and properties


 var john ={
	 firstName: 'john',
	 lastName:'smith',
	 birthYear: 2000,
	 family: ['jane','mark', 'bob', 'emily'],
	 job: 'teacher',
	 isMarried: true
 };

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);



/*****
loop 


for( var i=0; i < 10; i++){
	console.log(i);
}

var john = ['john', 'smith', 1990, 'designer']





/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var mada = {
    fullName: 'Madalina Denisa',
    mass: 65,
    height: 1.75,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var adela = {
    fullName: 'Adela popa',
    mass: 53,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (mada.calcBMI() > adela.calcBMI()) {
    console.log(mada.fullName + ' has a higher BMI of ' + mada.bmi);
} else if (adela.bmi > mada.bmi) {
    console.log(adela.fullName + ' has a higher BMI of ' + adela.bmi);
} else {
    console.log('They have the same BMI');
}
*/





/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
*/
