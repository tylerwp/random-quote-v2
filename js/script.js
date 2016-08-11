// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Array to prevent displaying a random quote more than once until ALL quotes from the array have been displayed. 
var preventQuotes = [];

//get a random quote from the quotes array.
function getRandomQuote(){
    //get the index of a quote using the Math.random function on the quotes array.
    var randomQuote = -1;
    //loop until its finds a quite that has not been displayed  
    while(true){
        //get random number
        randomQuote = Math.floor(Math.random()*quotes.length);
        //check preventQuotes for randomQuote
        if(preventQuotes.indexOf(randomQuote) != -1){                        
            console.log('Quote allready been displayed.');
            //clear preventQuotes if all qoutes have been displayed.
            if(quotes.length === preventQuotes.length){
                preventQuotes = [];
                console.log('Clearing preventQuotes');
            }
        }else{
            //add to preventQuotes
            preventQuotes.push(randomQuote);            
            break;
        }
    }
    //console.log(preventQuotes);
    //create a new object from quotes with the new index value
    var QuoteObj = quotes[randomQuote]; 
    //return the object
    return QuoteObj;
}



/* 
        Q:How to handle a not included property in a object?        
*/


/*
    function printQuote -- 
        Create a function named printQuote which follows these rules:

        - printQuote calls the getRandomQuote function and stores the returned quote object in a variable

        - printQuote constructs a string using the different properties of the quote object using the following HTML 
        template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>

        - printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing

        - printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
         
         <p class="quote">You can do anything but not everything</p>
         <p class="source">David Allen<span class="citation">Making It All Work</span><span class="year">2009</span></p>

*/
function printQuote(){
    document.getElementById(uote-box).innerHTML = "";
}


/*
    Extra Credit --
        Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.

        Randomly change the background color of the page, when the quote changes

        Don't display a random quote more than once until ALL quotes from the array have been displayed.

        Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)

*/





