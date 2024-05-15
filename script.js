/*
One of the most important concepts in programming is variables.
A variable points to a specific memory address that stores a value.
Variables are given a name which can be used throughout your code to access that value.

Declaring a variable means giving it a name.
In JavaScript, this is often done with the let keyword.
For example, here is how you would declare a hello variable:

let hello;

Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.

You can assign a value using the assignment operator =.
For example:

let hello = "Hello";

Assigning a value to a variable at the moment of its declaration is known as initialization.

JavaScript has seven primitive data types, with String being one of them.
In JavaScript, a string represents a sequence of characters and can be enclosed in either single (') or double (") quotes.

Note that strings are immutable, which means once they are created, they cannot be changed.

The console allows you to print and view JavaScript output.
You can send information to the console using console.log().
For example, this code will print "Naomi" to the console:

let developer = "Naomi";
console.log(developer);

The code above accesses the developer variable with its name in the console.log().
Note that the value between the parentheses is the value that will be printed.

When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on.
In this example, the value of programmer is changed from "Naomi" to "CamperChan".

let programmer = "Naomi";
programmer = "CamperChan";

Note that when reassigning a variable that has already been declared, you do not use the let keyword.

When variable names are more than one word, there are specific naming conventions for how you capitalize the words.
In JavaScript, the convention to use is camel case.

Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased.
Here are some examples of camel case:

let variableOne;
let secondVariable;
let yetAnotherVariable;
let thisIsAnAbsurdlyLongName;

The default value of an uninitialized variable is undefined.
This is a special data type that represents a value that does not have a definition yet.

You can still assign a value to an uninitialized variable.
Here is an example:

let uninitialized;
uninitialized = "assigned";

You can also assign the value of a variable to another variable.
For example:

let first = "One";
let second = "Two";
second = first;

The second variable would now have the value "One".

When using a number value, you do not use quotes.
For example:

let money = 100;

With the number data type, you can perform mathematical operations, like addition.


*/

let character = 'Hello';
let count = 8;
console.log(count + 1);