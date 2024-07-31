const revealBtn = document.getElementById('revealBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const magicGuess = document.getElementById('magicGuess');
const tryAgainContainer = document.querySelector('.tryAgainContainer');
const revealContainer = document.getElementById('reveal-container');
const tryContainer = document.getElementById('try-container');
const curtain = document.querySelector('.curtain');
const okBtn = document.getElementById('okBtn');
const resultText = document.getElementById('resultText');
let user;
let computer;

// if OK button is pressed to start the magic
okBtn.addEventListener('click', () => {
    // prompts user to enter what they think about
    do {
        user = window.prompt('Think of a number or a word, and then type it below. \n\nIMPORTANT: REMEMBER YOUR CHOICE.');
        if (user == null) {
            window.alert('Iisip ka lang eh. Dali na.');
        } else if (user.length > 12) {
            window.alert('Dang, ang haba naman naisip mo.');
        } else {
            user = user.trim();
        }
    } while (user == 'undefined' || user == null || user == '' || user.length > 12);

    // sets up the user input to the reveal
    computer = user.toUpperCase();
    magicGuess.textContent = computer;
    const start = document.querySelector('.start');
    start.remove();
    setTimeout(() => {
        revealContainer.style.display = 'block';
        revealContainer.classList.add('fadeIn')
    }, 2000);
})




// if reveal button is pressed
revealBtn.addEventListener('click', () => {
    curtain.classList.add('fadeOut');
    setTimeout(() => {
        const parent = document.querySelector('.introduction');
        let child = document.getElementById('what');
        parent.removeChild(child);
        child = document.createElement('img');
        parent.appendChild(child);
        child.setAttribute('src', './mind-blown-mind-explosion.gif');
        revealContainer.remove();
        tryContainer.style.display = 'block';
        tryAgainContainer.classList.add('fadeIn');
        if (!(user.toLowerCase() == computer.toLowerCase())) {
            resultText.textContent = 'WOW, CONGRATS!'
        }
    }, 1200);
})

// if try again is pressed
tryAgainBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
})



