/*
  Javascript quotes array of objects  
*/

var quotes = [
    {
        quote:'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        source:'Benjamin Franklin',
        wikipedia:'https://en.wikipedia.org/wiki/Benjamin_Franklin',
        Born:'January 17, 1706',
        Died:'April 17, 1790'

    },
    {
        quote:'Quality means doing it right when no one is looking.',
        source:'Henry Ford',
        wikipedia:'https://en.wikipedia.org/wiki/Henry_Ford',
        citation:'Detroit News',
        year:1927,
        Born:'July 30, 1863',
        Died:'April 7, 1947'
    },
    {
        quote:'The true sign of intelligence is not knowledge but imagination.',
        source:'Albert Einstein',  
        wikipedia:'https://en.wikipedia.org/wiki/Albert_Einstein',      
        year:1945,
        Born:'March 14, 1879',
        Died:'April 18, 1955'
    },
    {
        quote:'The secret of getting ahead is getting started.',
        source:'Mark Twain',  
        wikipedia:'https://en.wikipedia.org/wiki/Mark_Twain',  
        Born:'February 7, 1871',
        Died:'April 21, 1910'
    },
    {
        quote:'Those who cannot understand how to put their thoughts on ice should not enter into the heat of debate.',
        source:'Friedrich Nietzsche',  
        wikipedia:'https://en.wikipedia.org/wiki/Friedrich_Nietzsche',
        citation:'Leipziger Volkszeitung',
        year:1896,
        Born:'October 15 1844',
        Died:'August 25 1900'
    }
]





/*
    Create an array of JavaScript objects --
        Create an array of JavaScript objects to hold the data for your quotes. 
        Name array [quotes]. 
        The [quotes] array should be accessible in the global scope.

        Each quote object should have the following properties:
        {
            quote: 'contains a string: the text of the quote to display on the page',
            source: 'contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb"',
            *citation: 'optional...contains a string identifying the publication the quote appears in. For example, "Famous Anonymous Jokes". If there is no known publication, then do not include this property on the object.',
            *year: 1997 //property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.//
        }
        Q:How to handle a not included property in a object?
        *optional
*/