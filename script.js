const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");
const para = document.querySelector(".score");
const input = document.querySelector('.input');

let maxExclusive = 10;
let score = 0;
let a = 8;
let b = 2;

btn.addEventListener("click", () => {
    checkInput();
})

const generateRandom = () => {
    para.innerText = `score:${score}`;
    a = Math.floor(Math.random() * maxExclusive);
    b = Math.floor(Math.random() * maxExclusive);
    heading.innerText = `What is ${a} multiply by ${b}?`

}
generateRandom();

const checkInput = () => {
    if (input.value == a * b) {
        score++;
        generateRandom();
        input.value = '';
    }
    else {
        alert("Calculate Again!!!!!!!");
    }
}