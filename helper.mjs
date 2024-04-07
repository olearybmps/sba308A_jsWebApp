// helper.mjs
export function renderQuote(quote) {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");
    quoteElement.innerHTML = `${quote.content}" - ${quote.author}`;
    return quoteElement;
}

// https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

export function getCurrentDateTime() {
    const today = new Date();

    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    const strTime = today.toLocaleTimeString("en-US", options);
    const formatTime = strTime.includes(":00") ? strTime.replace(" ", "") : strTime.replace(":00", "");

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const strDate = today.toLocaleDateString("en-US", dateOptions);

    const greeting = getGreeting(today.getHours());

    const greetDateTimeMsg = `
                                <div class="time">${formatTime}</div>
                                <div class="date">${strDate.toUpperCase()}</div>
                                <div class="greeting">${greeting}</div>
                            `;

    return greetDateTimeMsg;
}

function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}
