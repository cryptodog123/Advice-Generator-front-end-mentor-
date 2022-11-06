// Selectors

const btn = document.querySelector(".dice-btn");
const count = document.querySelector(".advice-number"); // Advice #
const quote = document.querySelector(".advice-quote"); // The quote itself

let number = 0;

const renderNewQuote = function (advice) {
  // Remove previous quote
  quote.innerHTML = "";
  // Add new quote
  quote.innerHTML = advice;
};

btn.addEventListener("click", async function () {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice/${++number}`);
    const { slip: data } = await res.json();
    const { id, advice } = data;
    count.textContent = id;
    renderNewQuote(advice);
  } catch (err) {
    console.log(err);
  }
});
