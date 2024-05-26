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
You can also perform subtraction (-), multiplication (*), and division (/).

In programming, you will often need to work with lots of data.
There are many data structures that can help you organize and manage your data.
One of the most basic data structures is an array.

An array is a non-primitive data type that can hold a series of values.
Non-primitive data types differ from primitive data types in that they can hold more complex data.
Primitive data types like strings and numbers can only hold one value at a time.

Arrays are denoted using square brackets ([]).
Here is an example of a variable with the value of an empty array:

let array = [];
When an array holds values, or elements, those values are separated by commas.
Here is an array that holds two strings:

let array = ["first", "second"];

You can access the values inside an array using the index of the value.
An index is a number representing the position of the value in the array, starting from 0 for the first value.

You can access the value using bracket notation, such as array[0].

Arrays are special in that they are considered mutable.
This means you can change the value at an index directly.

For example, this code would assign the number 25 to the second element in the array:

let array = [1, 2, 3];
array[1] = 25;
console.log(array); // prints [1, 25, 3]

Notice how the value inside your rows array has been changed directly?
This is called mutation.
As you learn more about arrays, you will learn when to mutate an array, and when you should not.

Before moving on, this is a great opportunity to learn a common array use.
Currently, your code accesses the last element in the array with rows[2].
But you may not know how many elements are in an array when you want the last one.

You can make use of the .length property of an array - this returns the number of elements in the array.
To get the last element of any array, you can use the following syntax:

array[array.length - 1]

array.length returns the number of elements in the array.
By subtracting 1, you get the index of the last element in the array.

A method in JavaScript is a function that's associated with certain values or objects.
An example you've already encountered is the .log() method, which is part of the console object.

Arrays have their own methods, and the first you will explore is the .push() method.
This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:

array.push(12);

Another method essential for this project is the .pop() method.
It removes the last element from an array and returns that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

const variables are special.

First, a const variable cannot be reassigned like a let variable.
This code would throw an error:

const firstName = "Naomi";
firstName = "Jessica";

A const variable also cannot be uninitialized.
This code would throw an error:

const firstName;

for loops use the following syntax:

for (iterator; condition; iteration) {
  logic;
}
The iterator is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.

It is a common convention to use i as your iterator variable in a loop.
A for loop allows you to declare this in the parentheses ().
For example, here is a for loop that declares an index variable and assigns it the value 100.

for (let index = 100; "second"; "third") {

}
The condition of a for loop tells the loop how many times it should iterate.
When the condition becomes false, the loop will stop.

In JavaScript, a Boolean value can be either true or false.
For now, you will use the less than operator (<).
This allows you to check if the value on the left is less than the value on the right.
For example, count < 3 would evaluate to true if count is 2, and false if count is 4.

Your iteration statement will tell your loop what to do with the iterator after each run.

When you reassign a variable, you can use the variable to reference the previous value before the reassignment.
This allows you to do things like add three to an existing number.
For example, bees = bees + 3; would increase the value of bees by three.

A for...of loop iterates over each item in an iterable object and temporarily assigns it to a variable.

The syntax for a for...of loop looks like:

for (const value of iterable) {

}

Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

Remember in your previous loop that you used the addition operator + to increase the value of i by 1.

You can do a similar thing with a string value, by appending a new string to an existing string.
For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable.
This is called concatenation.

You will need to add a new line to each row.
However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error.
Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged.
For example:

lineOne = lineOne + "\n" + lineTwo;

The repeat() method accepts a number as an argument, specifying the number of times to repeat the target string.
For example, using .repeat() to generate the string "Code! Code! Code!":

const activity = "Code! ";
activity.repeat(3);

The first index of your rows array is 0, which is why you start your for loop with i = 0.
But repeating a string zero times results in nothing to print.

To fix this, add 1 to the value of i in your .repeat() call.

A function is a block of code that can be reused throughout your application.
Functions are declared with the following syntax:

function name(parameter) {

}

The function keyword tells JavaScript that the name variable is going to be a function.
parameter is a variable that represents a value that is passed into the function when it is used.
A function may have as many, or as few, parameters as you'd like.
Like a for loop, the space between the curly braces is the function body.

In order to use a function, you need to call it.
A function call tells your application to run the code from the function wherever you choose to call it.
The syntax for a function call is the function name followed by parentheses.
For example, this code defines and calls a test function.

function test() {

}
test();
All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.

By default, functions return undefined as their value.

In order to return something else, you need to use the return keyword.
Here is an example of a function that returns the string "Functions are cool!":

function demo() {
  return "Functions are cool!";
}

Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code.

To add a parameter to your function, you need to add a variable name inside the parentheses. For example, this demo function has a name parameter:

function demo(name) {

}

If you open your console again, you'll see that your padRow function is returning undefined, even though you defined a return value!
This is because parameters need to be given a value when you call the function.

When you pass a value to a function call, that value is referred to as an argument.
Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

function demo(name) {
  return name;
}
demo("Naomi");

Variables in JavaScript are available in a specific scope.
In other words, where a variable is declared determines where in your code it can be used.

The first scope is the global scope.
Variables that are declared outside of any "block" like a function or for loop are in the global scope.
Your character, count, and rows variables are all in the global scope.

When a variable is in the global scope, a function can access it in its definition.
Here is an example of a function using a global title variable:

const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi")

*/

const character = "#";
const count = 8;
const rows = [];
function padRow(name) {
  return character + name;
}
const call = padRow("Sean");
console.log(call);
for(let i = 0; i < count; i= i +1) {
  rows.push(character.repeat(i + 1))
}
let result = "";
console.log(result);
for (const row of rows) {
    result = result + "\n" + row;
}