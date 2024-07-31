const body = document.querySelector('body');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan'];

setInterval(() => {
    body.style.backgroundColor = colors[randomizer()];
    console.log(randomizer());
}, 500);

function randomizer() {
    let x = Math.floor(Math.random() * colors.length) 
    return x;
}