# Random-Quote-Generator
Unit 1 
Create an array of objects to hold the data for your quotes.
In your JavaScript file, start by creating the array of quote objects. Be sure to use the name quotes when creating the variable that holds the array of quote objects.
The quotes array should be accessible in what's called "the global scope", which basically just means that it's not contained within a function.
Pro Tip: Remember, arrays are defined with brackets, [], and objects are defined with curly braces, {}.

Add properties to the quote objects.
Each quote object in the quotes array should have the following properties:
quote - a string containing the text of the quote that will be displayed on the page.
source - a string containing the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb” or "Anonymous".
citation - optional - a string identifying where the quote comes from, like a speech, publication or a movie. If there is no known publication, do not include this property on the object.
year - optional - a number identifying the year of the quote. If there is no known year, then do not include this property on the object.
Pro Tip: Remember that an object's properties are defined in key/value pairs, like so:

quote: "There's no place like home."
NOTE: To get the most out of this project, it would be best to include at least one year and citation property in your array of quote objects. This will give you the chance to get some good practice working with conditionals when you create the printQuote() function that prints the quotes to the screen.

Create the getRandomQuote function.
Be sure to name the function getRandomQuote.
The function should take in one parameter, that you can rightly call, array, since the argument that will later get passed into this function when it is invoked will be the array of quotes.
The body of the function should select and return a random quote object from the quotes array. Remember the method for finding a random number? If not, that's okay. Check the resources list in these instructions, or revisit the material in the unit. Alternatively, try using Google to see if you can find what you need on the web. Even professional developers use Google several times a day, so it's good to start developing your Google skills now.
Pro Tip: Remember, we target and select items in an array with "box notation". So array[0] will select the first item in an array, because, as you'll likely remember, arrays always begin with a first index of zero.

Create the printQuote function.
Be sure to name the function printQuote.
In the body of this function:
getRandomQuote should be called on the array of quote obejcts, and the result stored in a variable.
A new empty string should be created and stored in a variable.
The required quote object properties, and the optional quote properties if they exist, should be appropriately concatenated to the new string you created using the following HTML template:
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
The span elements that hold the citation and year properties should only be created if the current quote object has those properties. This is where your conditionals will come in handy.
Finally the printQuote function should display the completed HTML string to the page by targeting the necessary DOM element and using the appropriate JavaScript method, like so:
document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
Pro Tip: Remember that we target and select object properties with "dot notation". So to reference the citation in a quote object, we would do something like this: quote.citation.
