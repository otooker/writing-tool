// bare min needs: text box, word counter, fox image api FUNCTIONAL PROGRAMMING keep it cleeean please

console.log('Once upon a midnight dreary');

const showCount = document.querySelector('#show-count');
//console.log(showCount)

//the actual wordcounter, it ensures to count on the next line! woohoo! 
function countWords(string) {
    let currentWords = 0
    let array = string.split(/\s/);
    array = array.filter(word => word.match(/[A-Za-z0-9]/));
    currentWords = array.filter(word => word !== '').length;
    return currentWords;
    //;
}

// tests for countWords function
//console.log(countWords('This is a bunch of words equalling eight.')) //expecting 8
//console.log(countWords('Test two.')) //expecting 2


//this is supposed to actively listen to the text area to give a us a string to count -- a lot of stuff in the function for event listener because the whole premise of this application depends on it 
//textArea.value.split(/\s/).filter(word => word.match(/\w/)).length  --- this was helper code
function showWordCount(){
    //const userTextInput = document.querySelector('#text-area-box').value;  // moved to event listenr
    //console.log(userTextInput);
    document.querySelector('#text-area-box').addEventListener("input", () => {
        const userTextInput = document.querySelector('#text-area-box').value;
        const currentWordCount = countWords(userTextInput);
        document.getElementById('show-count').innerText = currentWordCount;
    });
}
showWordCount();
//showCount.innerHTML = countWords(userTextInput);

// TODO: function for storing highestWordCount 



//TODO: function for displaying API at intervals of 100 





/* SPACE FOR DRAFT CODE 










*/


