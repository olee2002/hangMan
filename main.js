//Creat an array of words that will be given to users to guess.
const wordsArray = ['apple', 'banana', 'strawberry', 'watermelon', 'pineapple', 'orange', 'lemon', 'lime', 'kiwi', 'grape'];
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

let randomWordChosen;
let count = 0;
let givenArray = [];

//Start - generate a random name of fruits from the given array and a corresponding number of blank spaces appears in the main playboard. 
function start() {
    for (let i = 0; i < randomWord.length; i++) {
        givenArray[i] = '_';
        //console.log(givenArray)
    }
    randomWordChosen = givenArray.join(' ');
    document.getElementById('EmptyLetters').innerHTML = randomWordChosen;
    //console.log(randomWordChosen)
}
document.getElementById('reset').addEventListener('click', function () {
    start();
});


// function letterChosen() {
//     let letter = document.getElementById('EmptyLetters').value;
//     if (letter.length > 0) {
//         for (let i = 0; i < randomWord.length; i++) {
//             if (randomWord[i] === letter) {
//                 givenArray[i] = letter;
//             }
//         }
//         count++;
//         document.getElementById('TriesLeft').innerHTML = count - 1;
//         document.getElementById('EmptyLetters').innerHTML = givenArray.join(' ')
//     }
//     if (count > 5) {
//         alert("You Lost, Please Try Again!")
//     }

// }