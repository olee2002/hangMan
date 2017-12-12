$(document).ready(function() {

//Creat an array of words that will be given to users to guess.
const wordsArray = ['apple', 'banana', 'strawberry', 'watermelon', 'pineapple', 'orange', 'lemon', 'lime', 'kiwi', 'grape'];



//Start - generate a random name of fruits from the given array and a corresponding number of blank spaces appears in the main playboard. 
let start = function () {
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    console.log(randomWord)
    let givenArray = [];

    for (let i = 0; i < randomWord.length; i++) {
        givenArray[i] = '_';
        //console.log(givenArray)
    }

    $('#EmptyLetters').html(givenArray.join(' '));
    //console.log(randomWordChosen)
}
//start();
$('#reset').on('click', start);



//create the alphabet letters to choose in the game
let letterAlphabet =$('.Alphabet');
for (let i = 0; i < letterAlphabet.length; i++) {
    console.log(letterAlphabet[i])
    letterAlphabet[i].addEventListener('click',letterClicked)
    function letterClicked(){
    this.innerHTML = "_";
    }

    
}



});