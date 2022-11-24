// 9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).
// Note: This is actually an interview question that has been claimed to weed out a significant
// percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
// good about yourself.

for ( var num = 1; num < 101; num ++ ) {
  
    // check if the number is divisible by 3 or 5
    var checkForThree = num % 3;
    var checkForFive = num % 5;
    
    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( num );
  } 
  
  