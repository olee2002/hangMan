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
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterChoice = str.split('')
let iterateAlphabet = function() {
    
    for (var i = 0; i < letterChoice.length; i++) {
    //console.log(letterChoice[i])
    `<div class='letter'>A</div> `
 }
 $('#Alphabet').html(letterChoice)
}
iterateAlphabet();
$('#Alphabet').on ('click', function(){
this.target.letterChoice
})



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