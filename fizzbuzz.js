// javascript file

function fizzbuzz(firstNum, secondNum) {

    for (let i = 1; i < 101; i++) {
        //let fizzbuzzListItem = document.createElement('li');
        //fizzbuzzList.appendChild(fizzbuzzListItem);
        let fizzbuzzElement = document.createElement('div');
        let countString = String(i);
        //console.log(i);
        document.getElementById('onlyBuzz').getElementsByTagName('h3')[0].innerHTML = secondNum + " brings the BUZZ";
        document.getElementById('onlyFizz').getElementsByTagName('h3')[0].innerHTML = firstNum + " brings the FIZZ";

        if  (i % firstNum == 0 && i % secondNum == 0) {
            countString = countString + '- YES WE HAVE FIZZBUZZ';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz);
            document.getElementById('fizzbuzz').appendChild(fizzbuzzElement);
           // console.log('fizzbuzz');
        } else if (i % secondNum == 0) {

            countString = countString + ': Only buzz';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz);
            document.getElementById('onlyBuzz').appendChild(fizzbuzzElement);

            //console.log('buzz');
        } else if (i % firstNum == 0) {
            countString = countString + ':  Only fizz';
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz)
            document.getElementById('onlyFizz').appendChild(fizzbuzzElement);
            //fizzbuzzListItem.appendChild(itemNum);
            //console.log('fizz');
        } else {
            countString = countString + ': ah man, Nothing!'
            let anyFizzbuzz = document.createTextNode(countString);
            fizzbuzzElement.appendChild(anyFizzbuzz)
            document.getElementById('noFizzbuzz').appendChild(fizzbuzzElement);
        }

        //let itemNum = document.createTextNode(countString);
       // fizzbuzzListItem.appendChild(itemNum);
       //document.getElementById('printFizzBuzz').appendChild(fizzbuzzList);
        document.getElementById("results").style.visibility = 'visible';
    }
}






