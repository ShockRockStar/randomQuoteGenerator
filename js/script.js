/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    source: "Marie Curie",
    year: 1911
  },
  {
    quote: "I am enough of the artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    source: "Albert Einstein",
    citation: "The Saturday Evening Post",
    year: 1929
  },
  {
    quote: "If I have seen further it is by standing on the shoulders of Giants.",
    source: "Isaac Newton",
    year: 1676
  },
  {
    quote: "Life cannot have had a random beginning ... The trouble is that there are about 2000 enzymes, and the chance of obtaining them all in a random trial is only one part in 10^40,000, an outrageously small probability that could not be faced even if the whole universe consisted of organic soup.",
    source: "Fred Hoyle"
  },
  {
    quote: "There is no law except the law that there is no law.",
    source: "John Archibald Wheeler"
  },
  {
    quote: "The black holes of nature are the most perfect macroscopic objects there are in the universe: the only elements in their construction are our concepts of space and time.",
    source: "Subrahmanyan Chandrasekhar"
  }

];

/***
 * `getRandomQuote` function
 * Declare a variable 'randomize' set it to 
 * a function to return a random number thats the length of the quote objects in the array
 * return the quote values
 ***/
function getRandomQuote() {
  let randomize = Math.floor(Math.random() * quotes.length);

  return quotes[randomize];
  
}



/***
 * `printQuote` function
 * Here is the printquote function
 * Two variables are created. 
 * One variable calls the getRandomQuote function
 * 2nd variable stores the information displayed on the screen
 * Using the return quote object (randQuote) to build html & quote properties.
 *  
***/
function printQuote() {
  let randQuote = getRandomQuote();
  let displayQuote = `<p class=quote> ${randQuote.quote}</p> <p class=source> ${randQuote.source}`;

/*Created 2 if statements here to check if the quote object has a citation or a year 
* The closing p tag is added to the end of the if statements, to properly display the CSS
*/ 
  
  if (randQuote.citation) {
      displayQuote += `<span class=citation>${randQuote.citation}</span>`;

  } if (randQuote.year) {
      displayQuote += `<span class=year>${randQuote.year}</span>`;
  }
      displayQuote+=`</p>`;

return document.getElementById("quote-box").innerHTML = displayQuote;

}


function bgColor(){
  let red = Math.floor(Math.random() * 256);

  let green = Math.floor(Math.random() * 256);

  let blue = Math.floor(Math.random() * 256);

  let backgroundColor = `rgba(${red}, ${green}, ${blue})`;

  return document.body.style.background = backgroundColor;

}

setInterval(printQuote, 12000);

document.getElementById('load-quote').addEventListener("click", bgColor, false);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);