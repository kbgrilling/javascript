// javascript file

function fizzbuzz(firstNum, secondNum) {
    // loop through 1 through 100
    for (let i = 1; i < 101; i++) {
        // create a div element to hold the current loop number
        let fizzbuzzElement = document.createElement('div');

        let countString = String(i);

        // updates the h3 tag in the middle two grid columns with the numbers selected by the user.;
        document.getElementById('onlyBuzz').getElementsByTagName('h3')[0].innerHTML = secondNum + " brings the BUZZ";
        document.getElementById('onlyFizz').getElementsByTagName('h3')[0].innerHTML = firstNum + " brings the FIZZ";

        //  if both numbers are multiples of current loop number add to the FIZZBUZZ column;
        if  (i % firstNum == 0 && i % secondNum == 0) {
            countString = countString + '- YES WE HAVE FIZZBUZZ';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz);
            document.getElementById('fizzbuzz').appendChild(fizzbuzzElement);

        } else if (i % secondNum == 0) {
            // if second number is a multiple of loop number add to buzz column;
            countString = countString + ': Only buzz';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz);
            document.getElementById('onlyBuzz').appendChild(fizzbuzzElement);

        } else if (i % firstNum == 0) {
            // if first number is a multiple of loop number add to fizz column;
            countString = countString + ':  Only fizz';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz)
            document.getElementById('onlyFizz').appendChild(fizzbuzzElement);

        } else {
            // if either number is not a mulitple of loop number add to nothing column.;
            countString = countString + ': ah man, Nothing!'
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz)
            document.getElementById('noFizzbuzz').appendChild(fizzbuzzElement);
        }
        // turns on visibility of the result grid;
        document.getElementById("results").style.visibility = 'visible';
    }
}






