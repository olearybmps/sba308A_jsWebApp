// app.mjs
import {
    getRandomQuote,
    searchQuotes,
    listQuotesByAuthor,
} from "./quotable_api.mjs";
import { renderQuote, getCurrentDateTime } from "./helper.mjs";

function displayDayDateTime() {
    const greetingElement = document.getElementById("greetingDate");
    greetingElement.innerHTML = "";
    greetingElement.innerHTML = getCurrentDateTime();
}

async function displayRandomQuote() {
    try {
        const quote = await getRandomQuote();
        console.log("Quote:", quote);

        const quoteElement = renderQuote(quote);
        console.log(`quoteElement: ${quoteElement}`);
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
  
      if (quotes.count === 0) {
        searchResultsElement.textContent = "No results found for the given subject. Please try again with a different subject.";
      } else {
        quotes.results.forEach(quote => {
          const quoteElement = renderQuote(quote);
          searchResultsElement.appendChild(quoteElement);
        });
      }
    } catch (error) {
      console.error("Error searching quotes:", error);
    }
  }
  
  async function searchQuotesByAuthor(authorName) {
    try {
      const quotes = await listQuotesByAuthor(authorName);
      console.log("Search Results:", quotes);
      const searchResultsElement = document.getElementById("searchResults");
      searchResultsElement.innerHTML = "";
  
      if (quotes.count === 0) {
        searchResultsElement.textContent = "No quotes found for the given author. Please try again with a different author name.";
      } else {
        quotes.results.forEach(quote => {
          const quoteElement = renderQuote(quote);
          searchResultsElement.appendChild(quoteElement);
        });
      }
    } catch (error) {
      console.error("Error searching quotes by author:", error);
    }
  }

displayDayDateTime();
displayRandomQuote();

const searchInput = document.querySelector('input[name="quoteSearch"]');
const searchButton = document.querySelector(".searchBtn");

searchButton.addEventListener("click", () => {
    const subject = searchInput.value.trim();
    if (subject !== "") {
        searchQuotesBySubject(subject);
    }
});

const authorSearchInput = document.querySelector('input[name="authorSearch"]');
const authorSearchButton = document.querySelector(".searchAuthorBtn");

authorSearchButton.addEventListener("click", () => {
    const authorName = authorSearchInput.value.trim();
    if (authorName !== "") {
        searchQuotesByAuthor(authorName);
    }
});
