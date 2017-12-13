$(document).ready(function () {

    //Creat an array of words that will be given to users to guess.
    const wordsArray = ['apple', 'banana', 'strawberry', 'watermelon', 'pineapple', 'orange', 'lemon', 'lime', 'kiwi', 'grape'];



    //Start - generate a random name of fruits from the given array and a corresponding number of blank spaces appears in the main playboard. 
    let start = function () {
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        console.log(randomWord)

        let givenArray = [];
        let answerArray = randomWord.split('');
        //console.log(randomWord.split(''))
        console.log(answerArray)
        for (let i = 0; i < randomWord.length; i++) {
            givenArray[i] = '_';
        }
        $('#EmptyLetters').html(givenArray.join(' '));

        //create the alphabet letters and disappear when clicked in the game
        let letterAlphabet = $('.Alphabet');
        let count = 8;
        let letterBank = [];

        letterAlphabet.on('click', function () {
            let letterInput = this.innerHTML.toLowerCase();
            let letterOutput = givenArray
            let indexOfLetter = answerArray.indexOf(letterInput)
            if (indexOfLetter === -1) {
                //msg when fail
               // alert('try again');
                //Remaining tries counter
                count -= 1;
                $('#TriesLeft').html(count);
                letterBank.push(letterInput)
                $('#WrongLetters').html(letterBank.join(' ').toUpperCase())
                //Adding wrong letter to the letter bank
                //console.log(letterBank.join(' '))
                this.innerHTML = '_';

            } else {
                //msg when succeed
                //alert("Yay You've got it")
                //Add letter to the empty
                letterOutput[indexOfLetter]=letterInput
                $('#EmptyLetters').html(letterOutput.join(' ').toUpperCase());
                
            }

            


        })
    }
    //start();
    $('#reset').on('click', start);







});