function showQuote() {
    const quotes = [
      "Success is not an accident, success is actually a choice.",
      "Be the best version of yourself in anything that you do.",
      "Play like you're in first. Train like you're in second.",
      "I can do all things through Christ who strengthens me.",
      "Every time I rise up, I have confidence that I’m going to make it."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  