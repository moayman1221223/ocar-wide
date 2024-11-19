// Array of random quotes
const quotes = [
    "Be yourself; everyone else is already taken.",
    "Always forgive your enemies; nothing annoys them so much.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "We are all in the gutter, but some of us are looking at the stars.",
    "Experience is simply the name we give our mistakes."
];

// Function to toggle additional info
function toggleInfo() {
    const moreInfo = document.getElementById('moreInfo');
    const button = document.querySelector('button[onclick="toggleInfo()"]');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Show More';
    }
}

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quoteText').textContent = `"${randomQuote}"`;
}

