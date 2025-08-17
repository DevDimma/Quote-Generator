function displayQuote(response) {
  let quoteSpaceElement = document.querySelector("#quote-area");
  quoteSpaceElement.style.display = "block";
  new Typewriter('#quote-area', {
  strings: response.data.answer,
  autoStart: true,
  delay : 10,
  cursor: null
});
}


function generateQuote(event) {
event.preventDefault();

let userInstructions = document.querySelector("#user-instructions");
let apiKey = "a6469t9f026f33001d9f3f695ocb3042";
let prompt = `Generate a neutral quote based on ${userInstructions.value}`;
let context = "You are a quote AI assistant that generates quote. The quote should be neutral depending on users input, reflecting the essence of the user's quote, please print it out in basic html format and only h1 and p tags should be used, use emojis too";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayQuote);
}


let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);