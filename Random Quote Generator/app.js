const quoteArray = [
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": " - Albert Schweitzer"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": " - Steve Jobs"
    },
    {
        "quote": "Believe you can and you're halfway there.",
        "author": " - Theodore Roosevelt"
    },
    {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": " - Confucius"
    },
    {
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "author": " - Steve Jobs"
    }
]

// select the dom element 
const quoteElement = document.querySelector('.actual__quote');
const authorName = document.querySelector('.author');

const newQuoteBtn = document.querySelector('.new__quote').addEventListener('click' , function(event) {
    // generate the random number.
    let random = Math.floor(Math.random() * quoteArray.length + 1);
    // get the quote 
    quoteElement.textContent = quoteArray[random].quote
    authorName.textContent = quoteArray[random].author
})
