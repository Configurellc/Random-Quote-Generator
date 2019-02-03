/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/


// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*******************************************************************************************************************************************
***Quotes array exists within .\js\quotes.js***
Creating var name myQuotesLength which will be use to asses the number of items within my function call which is returning the array quotes. 
This will also be used in the parameters of getRandomQuote function. 
*********************************************************************************************************************************************/
var myQuotesLength = myQuotes().length;
var quotes = myQuotes();

/**************************************************************************************************************************************************
Will use getRandom quote to generate the randomnumber. The parameter 'maxNum' will likely hold the value 'myQuotesLength' which holds the total number
of items within the 'quotes' array. Doing this will allow the number to never be greater than the number of items in the array. 
****************************************************************************************************************************************************/
function getRandomQuote(maxNum) {
  var randomNum = Math.floor(Math.random() * maxNum);
  var randomQuote = quotes[randomNum];
// console.log('random quote', randomQuote );
  return randomQuote;
}
//console.log( myQuotesLength );
//console.log('hey', getRandomQuote(myQuotesLength) );


function printQuote() {
  var message = getRandomQuote(myQuotesLength);
  console.log('message', message );
var  quote_Parent = document.querySelector('#quote-box');
var quote_Child = quote_Parent.querySelectorAll('.quote');
quote_Child[0].innerHTML = message.quote;

var source_Parent = document.querySelector('.source');
var sourceField = document.querySelectorAll('.source');
sourceField[0].innerHTML = message.source;
console.log('source', source_Parent);
var citation_Child = source_Parent.querySelectorAll('.citation');
citation_Child[0].innerHTML = message.citation;
 //var yearChildren = parentDiv.querySelectorAll('.year');


/**********************************************************************************************************************************************************
Below is the partial solution, that currently works but when I add in the missing tag "citation" code breaks. Refactoring solution above.
============================================================================================================
partially figured this solution out. I had the getElementByClassName correct. I was forgetting the index value [0]. Kudos W3Schools for the code example
https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp
***********************************************************************************************************************************************************
  var quoteDiv = document.getElementById('quote-box');
  //  quoteDiv.getElementsByClassName('quote')[0].innerHTML = message.quote;
   // quoteDiv.getElementsByClassName('source')[0].innerHTML = message.source;

  ***********code breaks when I add in below code block ****************************************************
  var citationDiv = document.getElementsByClassName('citation')[0].innerHTML = message.citation;
  var yearDiv = document.getElementsByClassName('year')[0].innerHTML = message.year;
//quoteDiv.innerHTML = message.quote;
*************************************************************************************************************
The below If condition to remove undefined when year has not been set. 
**************************************************************************************************************
if  (yearDiv === undefined) {
    yearDiv = document.getElementsByClassName('year')[0].innerHTML = ' ';
  }
  */
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


