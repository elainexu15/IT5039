// Array of jokes
const jokes = [
  "Why was the mobile phone wearing glasses? Because it lost its contacts.",
  "What was the spider doing on the computer? He was making a web-site!",
  "What do you call an iPhone that sleeps too much? Dead Siri-ous.",
  "What did the computer have during his break time? He had a byte!",
  "What is the computer's favorite snack to eat? Microchips!",
  "What shoes do computers love the most? Re-boots!",
  "Why did the computer go to the dentist? To get his Bluetooth checked.",
  "What is the biggest lie anyone can tell? 'I have read and agreed to all the terms and conditions.'",
];

// Get the HTML elements
const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// Function to display a random joke
function displayRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.textContent = jokes[randomIndex];
}

// Add click event to button
jokeBtn.addEventListener("click", displayRandomJoke);
