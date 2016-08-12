//Browser Compatibility checks Chrome, Firefox, Explorer/Edge

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//When a user clicks on the "quote-box" element display extra info by calling the "ExtraInfoToggle" function
document.getElementById('quote-box').addEventListener("click", ExtraInfoToggle, false);

//set timer for auto displaying quotes
var DisplayTimer = 20000;// set for 20 seconds
var intervalID = window.setInterval(QuoteDisplayAutoTimer, DisplayTimer); 

//Array to prevent displaying a random quote more than once until ALL quotes from the array have been displayed. 
var preventQuotes = [];

//toggle display for extra info
var ExToggle = false;

//get a random quote from the quotes array.
function getRandomQuote(){
    //get the index of a quote using the Math.random function on the quotes array.
    var randomQuote = -1;
    //loop until it finds a quote that has not been displayed  
    while(true){
        //get random number
        randomQuote = Math.floor(Math.random()*quotes.length);
        //check preventQuotes for randomQuote
        if(preventQuotes.indexOf(randomQuote) != -1){                        
            console.log('Quote allready been displayed.');
            //clear preventQuotes if all quotes have been displayed.
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
    
    //create a new object from quotes with the new index value
    var QuoteObj = quotes[randomQuote]; 
    //return the object
    return QuoteObj;
}

 

//update the DOM Element "quote-box" with the "quotes" array by using the "getRandomQuote" function
function printQuote(){
    var QuoteObj = getRandomQuote();
    var html = '<p class="quote">' + QuoteObj.quote + '</p>' +
               '<p class="source"><a href="#" class="source_link" id="sourceId">' + QuoteObj.source + '</a>';
               

    //check for undefined values to choose if "citation" & "year" will be displayed. ***Is there a better way to do this?
    if(QuoteObj.citation !== undefined){
        html += '<span class="citation">' + QuoteObj.citation + '</span>';
    }
    if(QuoteObj.year !== undefined){
        html += '<span class="year">' + QuoteObj.year + '</span>';
    }  
    html += '</p>';

    //extra info elements that will be display toggled when the "quote-box" element is clicked by using the "ExtraInfoToggle" function
    html += '<p class="extraInfo" id="extraInfoId">'+    
                '<span><a href="'+ QuoteObj.wikipedia +'" target="_blank">wikipedia</a></span>'+
                '<span>Born: '+ QuoteObj.Born +'</span>'+
                '<span>Died: '+ QuoteObj.Died +'</span>'+                
            '</p>';

    //update background image
    document.body.style.background = "url('img/"+ QuoteObj.Image +"') no-repeat left top";

    //update element with new quote
    document.getElementById('quote-box').innerHTML = html;

    //change backgound and button color
    randomBGcolor();

    //reset extra info toggle
    ExToggle = false;  
   
   //reset timer to prevent running after click
   window.clearInterval(intervalID);
   intervalID = window.setInterval(QuoteDisplayAutoTimer, DisplayTimer); 

}


//store colors that have been used in randomBGcolor funtion 
var preventColor = [];
//**reused logic from getRandomQuote funtion | update if improved or create new funtion that both randomBGcolor & getRandomQuote could use?**
//run through all colors preventing duplicates until all has been displayed
function randomBGcolor(){    
    //Nice colors array
    var niceColors = ['36B55C','680B0A','2360B5','A44EB5','186868','B5602A','B54D7E','182268'];          
    var randomColor = -1;      
    while(true){
        //get random number
        randomColor = Math.floor(Math.random()*niceColors.length);
        //check preventColor for randomColor
        if(preventColor.indexOf(randomColor) != -1){                       
           
            if(niceColors.length === preventColor.length){
                preventColor = [];                
            }
        }else{
            //add to preventColor
            preventColor.push(randomColor);            
            break;
        }
    }    
    var WinningColor = niceColors[randomColor];
    //set background color with WinningColor    
    document.body.style.backgroundColor = '#' + WinningColor;
    //set button background color with WinningColor  
    document.getElementById('loadQuote').style.backgroundColor = '#' + WinningColor;
    
}

//toggle extra info on source click
function ExtraInfoToggle(){
    console.log('clicked:' + ExToggle);
    if(ExToggle){
        //hide extra info
        document.getElementById('extraInfoId').style.display = 'none';
        ExToggle = false;
    }else{
        //show extra info
        document.getElementById('extraInfoId').style.display = 'block';
        ExToggle = true;
    }
}

//auto display quotes with a timer
function QuoteDisplayAutoTimer() {  
   printQuote();    
}


//first run - show quote
printQuote();



 


