$(document).ready(function () {

    //Creat an array of words that will be given to users to guess.
    const wordsArray = ['PEAR', 'MANGO', 'PEACH', 'WATERMELON', 'AVOCADO', 'ORANGE', 'LEMON', 'LIME', 'OLIVE', 'GRAPE'];



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
        let count = 8;
        let letterBank = [];
        //console.log(letterBank)

        letterAlphabet.on('click', function () {
            let letterInput = this.innerHTML;
            //let letterOutput = givenArray
            let indexOfLetter = answerArray.indexOf(letterInput)
            console.log(indexOfLetter)
            if (indexOfLetter === -1) {
                //msg when fail
                //Remaining tries counter
                //Adding wrong letter to the letter bank
                letterBank.push(letterInput)
                $('#WrongLetters').text(letterBank.join(' '))
                
                //console.log(letterBank.join(' '))
                this.innerHTML = '_';
                count -= 1;
                $('#TriesLeft').html(count);
                
                
                alert('Incorrect!');
            } else {
                //msg when succeed
                alert("correct")
                //Add letter to the empty space
                answerArray.forEach(function (item) {
                    console.log(item)
                    console.log(letterInput)
                    if (letterInput===item) {
                        givenArray[indexOfLetter]=letterInput  
                        $('#EmptyLetters').html(givenArray.join(' '));
                        
                    }
                })
            }
        // if(givenArray.values===answerArray.values){
        //     console.log(givenArray.values)
        //     alert('You Win!')
        // }else if (count === 0){
        //     alert('You Lost! Please try again')
        // }
        
        })
    }
    //start();
    $('#reset').on('click', start);







});