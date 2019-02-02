/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/


// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*Creating var name myQuotesLength which will be use to asses the number of items within my function call which is returning the array quotes. 
This will also be used in the parameters of getRandomQuote function. 
*/
var myQuotesLength = myQuotes().length;
var quotes = myQuotes();

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
/*
Will use getRandom quote to generate the randomnumber. The parameter 'maxNum' will likely hold the value 'myQuotesLength' which holds the total number
of items within the 'quotes' array. Doing this will allow the number to never be greater than the number of items in the array. 
*/
function getRandomQuote(maxNum) {
  var randomNum = Math.floor(Math.random() * maxNum);
  var randomQuote = quotes[randomNum];
 // console.log('random quote', randomQuote );
  return randomQuote;
}
//console.log( myQuotesLength );
console.log('hey', getRandomQuote(myQuotesLength) );





/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var message = getRandomQuote(myQuotesLength);
  console.log('message', message );
    var quoteDiv = document.getElementById('quote-box');
      /*partially figured this solution out. I had the getElementByClassName correct. I was forgetting the index value [0]. Kudos W3Schools for the code example
      https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp*/
      quoteDiv.getElementsByClassName('quote')[0].innerHTML = message.quote;
      
    //  quoteDiv.innerHTML = message.quote;
  


}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.