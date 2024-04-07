// app.mjs
import { getRandomQuote, searchQuotes } from "./quotable_api.mjs";
import { renderQuote, getCurrentDateTime } from "./helper.mjs";

function displayDayDateTime() {
    const greetingElement = document.getElementById('greetingDate');
    greetingElement.innerHTML = "";
    greetingElement.innerHTML = getCurrentDateTime();
}

async function displayRandomQuote() {
    try {
        const quote = await getRandomQuote();
        console.log("Quote:", quote);

        const quoteElement = renderQuote(quote);
        const containerElement = document.getElementById("quoteContainer");
        containerElement.innerHTML = "";
        containerElement.appendChild(quoteElement);
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

async function searchQuotesBySubject(subject) {
    try {
      const quotes = await searchQuotes(subject);
      console.log("Search Results:", quotes);
      const searchResultsElement = document.getElementById("searchResults");
      searchResultsElement.innerHTML = "";
      quotes.results.forEach(quote => {
        const quoteElement = renderQuote(quote);
        searchResultsElement.appendChild(quoteElement);
      });
    } catch (error) {
      console.error("Error searching quotes:", error);
    }
  }
  
  displayDayDateTime();
  displayRandomQuote();
  
  const searchInput = document.querySelector('input[name="quoteSearch"]');
  const searchButton = document.querySelector('.searchBtn');
  
  searchButton.addEventListener('click', () => {
    const subject = searchInput.value.trim();
    if (subject !== '') {
      searchQuotesBySubject(subject);
    }
  });
