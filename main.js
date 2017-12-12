//Creat an array of words that will be given to users to guess.
const wordsArray = ['apple','banana','strawberry','watermelon','pineapple','orange','lemon','lime','kiwi','grape'];
const randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

let randomWordChosen;
let count = 0;
let givenArray = [];

//Start - generate a random name of fruits from the given array and a corresponding number of blank spaces appears in the main playboard. 
function start() {
    for(let i=0;i<randomWord.length;i++){
        givenArray[i] ='_';
        console.log(givenArray)
    }
randomWordChosen = givenArray.join(' ');
document.getElementById('EmptyLetters').innerHTML = randomWordChosen;
console.log(randomWordChosen)
}
start();