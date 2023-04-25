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


// fetching API image, 123 foxes available 
const rewardContainer = document.querySelector("#reward-container");
const baseURL ='https://randomfox.ca/images/';

//get the fox data -- which is really just the image but we gotta fetch somewhere
async function getFox(number) {
    return fetch(`${baseURL}${number}.jpg`)
    //.then(result => result.json()); //not sure if i need this since I'm just pulling one image
}


//console.log(getFox(2)) should bring you to an image of a smiling fox in the woods by some water

// this is a really simple API that literally just gets a photo at a number 1-123. If you're feeling fun and frisky after making this all work, go ahead and try to do the other idea (spooky jokes or riddles) for fun
const getRandomFoxNumber = () => {
    const randomNumber = Math.floor(Math.random() * 123) +1;
    return randomNumber;
}

console.log(getRandomFoxNumber()) //it's random! so as long as it's a num between 1-123, you're in a good pplace

// render the fox image on the page

function renderFoxOnWebpage(fox){
    return `
    <h2>A wild fox appears! Good job writing 100 words ^_^</h2>
    <h3><img src="${getFox(getRandomFoxNumber())}"></h3>
    `
}


//storing highest number function?????? needed????


function getRewardedWithFox(){
    
}



//console.log(renderFoxOnWebpage()); //not sure if this works yet, test may


//TODO: function for displaying API at intervals of 100 

function main(){
    renderFoxOnWebpage();
}



/* SPACE FOR DRAFT CODE 










*/


