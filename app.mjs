// app.mjs
import { getRandomQuote } from './quotable_api.mjs';

async function testGetRandomQuote() {
    try {
        const randomQuote = await getRandomQuote();
        console.log("Random Quote:", randomQuote);
    } catch (error) {
        console.error("Error in getRandomQuote:", error);
    }
}

testGetRandomQuote();