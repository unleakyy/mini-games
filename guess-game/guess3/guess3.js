const guessBtn = document.getElementById('guess');
const okBtn = document.getElementById('okBtn');
const userInput = document.getElementById('userInput')
const cover = document.querySelector('.cover');
const userContainer = document.querySelector('.user-container');
const main = document.querySelector('main');
const newNode = document.createElement('p');
const spanText = document.querySelector('span');
const comment = document.getElementById('comment');

let isValid = false;
let user;
let answer = document.getElementById('answer');

let test1 = (Math.floor(Math.random() * 2500) + 1);

function checkInput(x) {
    user = Number(x);

    if (isNaN(user)) {
        comment.textContent = `'${x}' is not a number, bro.`;
    } else if (x.trim() == null || x == 'undefined' || x.trim() == '') {
        comment.textContent = `Ayusin mo, 'te.`;
    } else {
        isValid = true;
    }
}

okBtn.addEventListener('click', () => {
    checkInput(userInput.value);
    if (isValid) {
        answer.textContent = test1;
            
        userContainer.classList.add('fadeOut');
        userContainer.remove();
        newNode.textContent = `Your guess is ${user}`;
        main.append(newNode);
        setTimeout1();
    }
})
function setTimeout1() {
    setTimeout(() => {
        cover.classList.add('fadeOut');
        setTimeout(() => {
            if (user == test1) {
                newNode.textContent = `...`;
                setTimeout(() => {
                    window.location.href = '../endgame/endgame.html';
                }, 2000);
            } else {
                newNode.textContent = `HALAAAA. SAYANG! ISA NA LANG.`;
                newNode.classList.add('fadeIn');
                setTimeout(() => {
                    window.location.href = '../../index.html';
                }, 3000);
            }
        }, 1500);
    }, 1200);
}
