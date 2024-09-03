var nrSelect = document.getElementById('nrSelect');
var btnGuess = document.getElementById('btnGuess');


var count = 1;

var guessNumber = false;

btnGuess.onclick = function() {

    count =1;
    guessNumber = false;

    var random = Math.floor(Math.random()*6);

    while(guessNumber === false){
        

        console.log(random)

        if(nrSelect.value == random) {
            guessNumber = true;
            console.log("Guessed within :"+ count + "times");

        }

        else {
            count=count +1;
        }

        
    }


}