// javascript file

function fizzbuzz(firstNum, secondNum) {
    // loop through 1 through 100
    for (let i = 1; i < 101; i++) {
        // create a div element to hold the current loop number
        let fizzbuzzElement = document.createElement('div');
        // turns current loop number into a string;
        let countString = String(i);

        // updates the h3 tag in the middle two grid columns with the numbers selected by the user.;
        document.getElementById('onlyBuzz').getElementsByTagName('h3')[0].innerHTML = secondNum + " brings the BUZZ";
        document.getElementById('onlyFizz').getElementsByTagName('h3')[0].innerHTML = firstNum + " brings the FIZZ";

        /* ------
        Below are a series of if statements.
        if... both input numbers are multiples of current loop number add to the FIZZBUZZ column;
        if... second input number only is a multiple of current loop number add to the buzz column;
        if... first input number only is a multiple of current loop number add to the fizz column;
        if... neither number is not a multiple of loop number add to nothing column.;
        updates the countString string to corresponding column
        creates a text node to hold countString
        adds the textNode created above to the newly created fizzbuzzElement div from line 7
        adds the new fizzbuzzElement Div to the corresponding column;
        -------- */
        if  (i % firstNum == 0 && i % secondNum == 0) {
            countString = countString + ': YES WE HAVE FIZZBUZZ';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz);
            document.getElementById('fizzbuzz').appendChild(fizzbuzzElement);

        } else if (i % secondNum == 0) {
            countString = countString + ': Only buzz';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz);
            document.getElementById('onlyBuzz').appendChild(fizzbuzzElement);

        } else if (i % firstNum == 0) {
            countString = countString + ':  Only fizz';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz)
            document.getElementById('onlyFizz').appendChild(fizzbuzzElement);

        } else {
            countString = countString + ': ah man, Nothing!'
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz)
            document.getElementById('noFizzbuzz').appendChild(fizzbuzzElement);
        }
        // turns on visibility of the result grid;
        document.getElementById("results").style.visibility = 'visible';
    }
}






