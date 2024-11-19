// Array of quotes
const quotes = [
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

// Function to generate a new quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${randomQuote.text}"`;
    document.getElementById("author").textContent = `-- ${randomQuote.author}`;
}
