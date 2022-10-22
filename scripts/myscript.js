let btn = document.querySelector("#rand-button");
let anme = document.querySelector("#anime");
let chrctr = document.querySelector("#character");
let qt = document.querySelector("#quote");
let tbtn = document.querySelector("#tweet-button");


btn.addEventListener("click", function () {
    fetch('https://animechan.vercel.app/api/random')
        .catch(error => console.error("On create anime error", error))
        .then(response => response.json())
        // .then(quote => console.log(quote))
        .then(response => {
            const anime = response.anime;
            console.log("anime", anime);
            anme.innerHTML = anime;
            const character = response.character;
            console.log("character", character);
            chrctr.innerHTML = character;
            const quote = response.quote;
            console.log("quote", quote);
            qt.innerHTML = quote;
        });
    
});



tbtn.addEventListener("click", tweetQuote);

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qt.innerText} ${chrctr.innerText}`;
    window.open(twitterUrl, "_blank");
  }