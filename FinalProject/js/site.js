console.log("JS Active!")
getQuoteOfTheDay();
const slideShowImage = document.getElementById('slideshow')
const quoteOfTheDay = document.getElementById('qotd')
let arrayOfQuotes = []

let imageURLs = [
    "./images/sunset2.jpg",
    "./images/sunset3.jpg",
    "./images/sunset4.jpg",
    "./images/sunset5.jpg",
    "./images/sunset6.jpg",
    "./images/sunset7.jpg"
];

let currentImageIndex = 0
function updateImage(){
    currentImageIndex++
    if(currentImageIndex >= imageURLs.length){
        currentImageIndex = 0
    };
    slideShowImage.src = imageURLs[currentImageIndex]
};
setInterval(updateImage, 4000)

function getQuoteOfTheDay(){
    let url = `https://type.fit/api/quotes`
    fetch(url)
        .then(r => r.json())
        .then(data => {
            loadQuote(data)
        });
};

function loadQuote(quotes){
    html = ""
    for(let key in quotes){
        let quote = quotes[key]
        arrayOfQuotes[key] = quote
    };
    let randomQuoteIndex = generateRandomNumber()
    quote = arrayOfQuotes[randomQuoteIndex].text
    author = arrayOfQuotes[randomQuoteIndex].author
    html = `<h2 style="text-align: center;">Quote of the Day!</h2>
    <p><q style="text-align: center;">${quote}</q> -${author}</p>`
    quoteOfTheDay.innerHTML = html
};

function generateRandomNumber() {
    var randNum = Math.floor(Math.random() * arrayOfQuotes.length)
    return randNum
};