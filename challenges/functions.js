// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (a,b,cb) =>{
  return cb(a,b);

}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


const add = (a,b) =>{ // first function
  return a+b; // returns the sum of the two parameters
};

const multiply = (a,b) =>{ //second function
  return a*b;  // returns the product of two given paramenters
};

const greeting = (a,b) => {
  return `Hello ${a} ${b}, nice to meet you!`;
}







/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
        // Functions have access to their local scope and global scope. A local scope is statment 
        // or variable that is in a functions block scope. If there is nothing in their local scope, then the
        // function will look in its global scope, which will invole any value above its block scope. So,
        // nestedfunction() would have access to not only internal, but it would have access to external as well.
 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction(); 