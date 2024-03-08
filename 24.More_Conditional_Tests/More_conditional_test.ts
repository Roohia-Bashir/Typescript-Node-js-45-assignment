// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Equality Inequality Test With Strings
console.log("Equality test with strings:", ("Imran Khan" as string) === "Imran Khan"); 
console.log("Inequality test with strings:", ("Imran Khan" as string) !== "Nawaz Sharif"); 

// Testing Using Lowercase Function
console.log("Lowercase function test:", "ROOHIA BASHIR".toLowerCase() === "roohia bashir"); 

// Numerical Tests (Inequality , greater than and equals to, less than and equals to)
console.log("Equality test with numbers:", 1000 === 1000); //equality
console.log("Inequality test with numbers:", (10 as number) !== 9); //inequality
console.log("Greater than test:", 10000 > 5000); //greater than
console.log("Less than test:", 5000 < 100000);//less than
console.log("Greater than or equal to test:", 10 >= 10);//greater than or equal to
console.log("Less than or equal to test:", 5 <= 10);//less than or equal to

// Tests of "and" and "or" Operators
console.log("And operator test:", true && true); 
console.log("Or operator test:", true || false);

// Test whether an item is in an Array
const cars :string[] = ["Porsche", "Ford", "BMW"];
console.log("Test 'Porsche' in the array:", cars.includes("Porsche")); //  Include ka Array Func use kiya he.

// Test whether an item is not in an array
console.log("Testing 'Honda' is not in array:", !cars.includes("Honda")); // Answer must be true.