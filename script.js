const jokes = [
    // Your existing jokes
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don't programmers like nature? It has too many bugs.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "How does a penguin build its house? Igloos it together.",
    "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans!",
    "Why did the computer go to the doctor? It had a virus.",
    "What do you call an alligator in a vest? An investigator!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "How does a scientist freshen her breath? With experi-mints!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a factory that makes good products? A satisfactory!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did the fish say when it hit the wall? Dam!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why was the math teacher suspicious of prime numbers? Because they’re always odd!",
    "Why did the picture go to jail? Because it was framed!",
    "What do you call a fish with no eyes? Fsh!",
    "Why can't you give Elsa a balloon? Because she will let it go!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the stadium get hot after the game? Because all the fans left!",
    "How do you organize a space party? You planet!",
    "Why did the cookie go to the doctor? Because it felt crummy!",
    "What do you get when you cross a snowman and a dog? Frostbite!",
    "Why did the banana go to the doctor? Because it wasn’t peeling well!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the golfer bring an extra pair of socks? In case he got a hole in one!",
    "What do you call an elephant that doesn’t matter? An irrelephant!",
    "Why was the broom late? It swept in!",
    "What do you call a bear that's stuck in the rain? A drizzly bear!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why did the computer break up with the internet? There was too much buffering!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why was the belt arrested? For holding up a pair of pants!",
    "What do you call a man with a rubber toe? Roberto!",
    "Why did the baker go to therapy? He kneaded it!",
    "What did one hat say to the other? You stay here, I'll go on ahead!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why did the girl bring a ladder to the bar? She heard the drinks were on the house!",
    "How do you make a tissue dance? Put a little boogie in it!",
    "Why did the man put his money in the blender? Because he wanted to make some liquid assets!",
    "What do you get when you cross a cow and a trampoline? A milkshake!",
    "Why did the cookie cry? Because its mom was a wafer (away for) so long!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call a sleeping bull? A bulldozer!",
    "Why are ghosts bad liars? Because you can see right through them!",
    "What did the zero say to the eight? Nice belt!",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field!",
    "What did the fish say when it hit the wall? Dam!"
];

const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('joke');
const jokeHistory = document.getElementById('jokeHistory');
const toggleHistoryButton = document.getElementById('toggleHistoryButton');
const prettyButton = document.getElementById('prettyButton');
let isPretty = false; // Track the current mode

jokeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const selectedJoke = jokes[randomIndex];

    // Display the joke
    jokeDisplay.textContent = selectedJoke;

    // Add the joke to the history
    addJokeToHistory(selectedJoke);
});

toggleHistoryButton.addEventListener('click', () => {
    if (jokeHistory.style.display === 'none' || jokeHistory.style.display === '') {
        jokeHistory.style.display = 'block'; // Show the joke history
    } else {
        jokeHistory.style.display = 'none'; // Hide the joke history
    }
});

prettyButton.addEventListener('click', () => {
    isPretty = !isPretty; // Toggle the pretty mode
    if (isPretty) {
        applyRandomColors();
    } else {
        resetToDefaultColors();
    }
});

function applyRandomColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    const randomColor3 = getRandomColor();

    // Set body background and container colors
    document.body.style.backgroundColor = randomColor1;
    document.querySelector('.container').style.backgroundColor = randomColor2;

    // Set button colors
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = randomColor3;
    });
}

function resetToDefaultColors() {
    document.body.style.backgroundColor = '#f2f2f2';
    document.querySelector('.container').style.backgroundColor = '#ffffff';

    // Reset button colors
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#007BFF'; // Default button color
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addJokeToHistory(joke) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = joke;

    // Create a share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share';
    shareButton.classList.add('share-button');

    // Add click event for sharing the joke
    shareButton.addEventListener('click', () => {
        shareJoke(joke);
    });

    // Append the share button to the list item
    listItem.appendChild(shareButton);

    // Append it to the joke history
    jokeHistory.appendChild(listItem);

    // Add hover effect for share button
    listItem.addEventListener('mouseover', () => {
        shareButton.style.display = 'inline';
    });
    listItem.addEventListener('mouseout', () => {
        shareButton.style.display = 'none';
    });
}

function shareJoke(joke) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this joke!',
            text: joke,
            url: window.location.href // Optionally include the URL of your joke generator
        })
        .then(() => console.log('Joke shared successfully'))
        .catch((error) => console.error('Error sharing the joke:', error));
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Sharing not supported on this browser. Please copy the joke manually.');
    }
}
