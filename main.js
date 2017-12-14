$(document).ready(function () {

    //Creat an array of words that will be given to users to guess.
    const wordsArray = ['PEAR','BANANA','APPLE','MANGO', 'PEACH', 'WATERMELON', 'AVOCADO', 'ORANGE', 'LEMON', 'LIME', 'OLIVE', 'GRAPE'];

    //const wordsArray = ['BANANA', 'MMANGO', 'PPEACH']

    //Start - generate a random name of fruits from the given array and a corresponding number of blank spaces appears in the main playboard. 
    let start = function () {
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        console.log(randomWord)

        let givenArray = [];
        let answerArray = randomWord.split('');
        //console.log(answerArray)
        for (let i = 0; i < randomWord.length; i++) {
            givenArray[i] = '_';
        }
        $('#EmptyLetters').html(givenArray.join(' '));
        console.log(givenArray.join(' '))
        //create the alphabet letters and disappear when clicked in the game
        let letterAlphabet = $('.Alphabet');
        //console.log(letterAlphabet)
        let count = 6;
        let letterBank = [];
        //console.log(letterBank)

        letterAlphabet.on('click', function () {
            let letterInput = this.innerHTML;
            let indexOfLetter = answerArray.indexOf(letterInput)
            console.log(indexOfLetter)
            if (indexOfLetter === -1) {
                count -= 1;
                if (count > 0) {
                    $('#TriesLeft').html(count);
                    letterBank.push(letterInput)
                    $('#WrongLetters').text(letterBank.join(' '))
                    this.innerHTML = '_';

                } else if (count === 0) {
                    alert('You Lost! Please try again')
                }
            } else {
                answerArray.forEach(function (item, index) {
                if (letterInput === item) {
                    givenArray[index] = letterInput  
                  }
                })
                $('#EmptyLetters').html(givenArray.join(' '));
            }
        })

    }

    //start();
    $('#reset').on('click', start);







});