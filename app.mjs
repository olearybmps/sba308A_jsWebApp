// app.mjs
import { getRandomQuote } from "./quotable_api.mjs";
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

displayDayDateTime();
displayRandomQuote();


