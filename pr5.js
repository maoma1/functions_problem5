/* write a JavaScript program that iterates the integers from 1 to 100. But for multiples of
three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that
are multiples of both three and five print "FizzBuzz".*/

//create a fxn called getInteger //
    function getInteger () {
        let counter =1;
  //use for loop to iterate through the integers      
         for(let i=1; i < 101; i++) {
 /*then set the conditions and what the code
     should excute for each condition, starting with the && (fizzbuzz)
     operator to be sure that this runs first */
         if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("fizzbuzz");   
        } else if (i % 3=== 0) {
            console.log("fizz");
        } else if (i % 5 ===0){
            console.log("buzz");
        } else {
            console.log(i);
            }
          }
    }

    getInteger();
      
      


