function generateQuote(event) {
  event.preventDefault();

  new Typewriter('#quote-area', {
  strings: "hello",
  autoStart: true,
  delay : 1,
  cursor: null
});
}


let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);