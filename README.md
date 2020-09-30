# Techdegree-Project-1
 
randomQuoteGenerator This is a HTML/CSS/JavaScript program that displays a quote randomly at a set interval and when a user clicks a button.

I first start the program off with a let variable named quotes and set the variable equal to an array of (6) objects. The 6 Objects have a key, value pair. Some objects have more than one key and value, in some instances the object has a citation and year key.

The next part of the project required me to create a function named: getRandomQuote(). For this function I had to use the Math.floor and Math.random functions, multiple that by the length of the total objects in the quotes array to get a randomized number between 1 and 6, since I have 6 quote objects in the array. At the end of the function I return the quotes array and set the identifier to the randomize variable. This links the function to the array, choosing a different object every time the getRandomQuote function is called.

The Second function that I created, printQuote is intended to write the quotes to the screen using the HTML file. First I set the getRandomQuote() function equal to the variable randQuote, and will use randQuote to select the keys in the array objects.
I then created another variable, displayQuote to hold the HTML strings. I used a template literal to target the p tags and classes of the HTML. I used the randQuote variable and dot notation to assign the values of the specified objects in the quotes array.

Two conditional if statements are used to check if the array objects contain other key: value pairs in the array, such as a citation for the quote and/or a year for the quotes listed.

I add the closing p tag at the end of the 2nd if statement so that displayQuote is properly formatted by the CSS file.

In order to link the string that stores the retrieved quote information to the HTML file I need to create a return function to select the "quote-box" div. I use .innerHTML to update the div's HTML content.

The third function in this program produces a different background color each time the button is selected for a new quote. I named the function bgColor(). Since we wanted random rgb colors I had to declare three variables for red, green, and blue I needed to set three variables equal to the Math.floor(Math.random() function and multiply by 256 for each variable. 256, since thats the highest rgb value for each color tone.

I created another variable, backgroundColor so that I could create a proper rgb value i.e. rgb(255,255,255);

I had to return the value stored in backgroundColor to the document, body, and style.

In order to have the website automatically produce a quote I had to write the code: setInterval and assign the parameters, printQuote, which was the 2nd function the creates the string for the quotes, and the other parameter is the speed at which the page refreshes.

Another getElementById had to be created for the bgColor function to link the function to the HTML.

This was a fun project to work on because I could see how the JS links up to to the HTML and how the CSS formatted my quotes.
