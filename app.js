// bare min needs: text box, word counter, fox image api FUNCTIONAL PROGRAMMING keep it cleeean please

// so in the orinal written kitten, they are calling their functions in the HTML so that way it doesn't get crazy messy in the js page. that being said, that's not good practice and it hurts my head rn 

let currentWordCount = 0;
const wordsToEarnReward = 100;
let foxesEarned = 0;
let foxesShown = 0;


console.log('Once upon a midnight dreary'); 
const showCount = document.querySelector('#show-count');

//the actual wordcounter, it ensures to count on the next line! woohoo! 
function countWords(string) {
    let currentWords = 0;
    let array = string.split(/\s/);
    array = array.filter(word => word.match(/[A-Za-z0-9]/));
    currentWords = array.filter(word => word !== '').length;
    return currentWords;
}

// tests for countWords()
//console.log(countWords('This is a bunch of words equalling eight.')) //expecting 8
//console.log(countWords('Test two.')) //expecting 2

//console.log(currentWordCount);
//displays active word count on html page 

document.querySelector('#text-area-box').addEventListener("input", () => {
    const userTextInput = document.querySelector('#text-area-box').value;
    currentWordCount = countWords(userTextInput);
    showWordCount(currentWordCount);
    checkRewardEligibility();
});

function showWordCount(currentWordCount){
    document.getElementById('show-count').innerText = currentWordCount; 
}
//showWordCount();


const rewardContainer = document.querySelector("#reward-container");

// this is a really simple API that literally just gets a photo at a number 1-123. If you're feeling fun and frisky after making this all work, go ahead and try to do the other idea (spooky jokes or riddles) for fun


//get the fox data from API -- which is really just the image but we gotta fetch somewhere
async function getFoxRemotely() {
    const response = await fetch("https://randomfox.ca/floof/");
    const foxData = await response.json();
    return foxData;
    //.then(result => result.json()); //not sure if i need this since I'm just pulling one image
}

//this, right now, renders the fox image and HTML onto the website. Next step, is making sure this only gets activated as a reward for writing 100 words. Try to write the code so it can be adjusted to other word lengths. 

async function rewardUserWithFox(){
   // if (checkRewardEligibility === true) 
   
    const gottenFoxData = getFoxRemotely();
    gottenFoxData.then((data) => {
//console.log(data.image);  
        rewardContainer.innerHTML = `
           <h2>A wild fox appears! Good job writing 100 words ^_^</h2>
           <h3><img id="fox-image" src="${data.image}"></h3>
           `
    })
}

/*
function setRewardParameter(num) {
    wordsForReward = num;
    
    foxesShown = parseInt(foxesEarned);
} */

//// if STUFF MET, then activate the reward function above OKAY YEAH 
//const wordGoal = 100;





function checkRewardEligibility(){
    const milestonesPassed = Math.floor(currentWordCount/wordsToEarnReward);
    if(milestonesPassed > foxesShown) {
        foxesEarned = milestonesPassed;
    }
    if (foxesEarned > foxesShown){
        rewardUserWithFox();
        foxesShown++;
}
}


//checkRewardEligibility(100, 101);

//foxesShown++;


//checkRewardEligibility()

//console.log(checkRewardEligibility(3, 0));

// TODO: function for storing highestWordCount -- divided by highest amount of foxes earned times the goal word count?          WHAT IS THE LOGIC 


//TODO: function for displaying API at intervals of 100, onchange event listener might help




/* SPACE FOR DRAFT CODE 

//showCount.innerHTML = countWords(userTextInput);



//this should help us not lose text in between
function restoreText() {
	if (typeof localStorage != "undefined") { 
		$("#text-area-box").attr("value", localStorage.text);
	}
}


const currentWords = countWords(document.querySelector('#text-area-box').value)
console.log(currentWords);
foxesEarned = currentWords/wordGoal;


function countedWordsFromInput() {
    document.querySelector('#text-area-box').addEventListener("input", () => {
        const userTextInput = document.querySelector('#text-area-box').value;
        const currentWordCount = countWords(userTextInput);
        return currentWordCount;
}


function main(){
    renderFoxOnWebpage();
}



REDUNDANT CODE -- the API randomizes itself 
const getRandomFoxNumber = () => {
    const randomNumber = Math.floor(Math.random() * 123) +1;
    return randomNumber;
}


The first draft of getting the fox on the page
function renderFoxOnWebpage(){
    //let imageSource = await getFox(getRandomFoxNumber());
    return `
    <h2>A wild fox appears! Good job writing 100 words ^_^</h2>
    <h3><img src="${data.image}"></h3>
    `
    }
//console.log(renderFoxOnWebpage());







*/