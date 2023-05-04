// Stretch goals: local storage, copy/paste text button, nicer &/or repsonsive CSS
// Super-stretch goals: add Raven Comedian reward, add trickster (coyote? sphinx?) with riddles 

let currentWordCount = 0;
let wordsToEarnReward = 100;
let foxesEarned = 0;
let foxesShown = 0;

console.log('Once upon a midnight dreary'); 
const showCount = document.querySelector('#show-count');


//TODO USER INPUT WORD GOAL SECTION
//Event listener to make the user create the wordgoal
//you may have to change the logic behind get reward, so that way you can change 

document.getElementById('set-word-goal').addEventListener("change", () => {
    let userInputWordGoal = document.getElementById('set-word-goal').value;
    console.log(userInputWordGoal);
    wordsToEarnReward = userInputWordGoal;
})

//setRewardParameter(userInputWordGoal);

//let wordsToEarnReward = document.getElementById('set-word-goal').value;
//console.log(wordsToEarnReward);


/*
let submittingWordsToEarnReward = document.getElementById("set-word-goal").value;
console.log(wordsToEarnReward);

wordsToEarnReward.addEventListener("submit", (num) => {
    if (num > 0){
        num = wordsToEarnReward;
        console.log(wordsToEarnReward)
    }
})

userInputWordGoal.addEventListener("onchange", (num) =>
{
    setRewardParameter(num);
})

*/

/*
 */

//// if STUFF MET, then activate the reward function above OKAY YEAH 
//const wordGoal = 100;

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



//this acts as our main function: it allows the current word count to be accessible to the rest of the code, which is important because the whole point of this tool hinges on this

document.querySelector('#text-area-box').addEventListener("input", () => {
    const userTextInput = document.querySelector('#text-area-box').value;
    currentWordCount = countWords(userTextInput);
    showWordCount(currentWordCount);
    checkRewardEligibility();
});

//Displays wordcount on web page
function showWordCount(currentWordCount){
    document.getElementById('show-count').innerText = currentWordCount; 
}
//showWordCount();


const rewardContainer = document.querySelector("#reward-container");

//fetching from Random Fox API
async function getFoxRemotely() {
    const response = await fetch("https://randomfox.ca/floof/");
    const foxData = await response.json();
    return foxData;
}

//this function display the fox image and HTML onto the website.
async function rewardUserWithFox(){
    const gottenFoxData = getFoxRemotely();
    gottenFoxData.then((data) => {  
        rewardContainer.innerHTML = `
           <h2>A wild fox appears!</h2>
           <h3><img id="fox-image" src="${data.image}"></h3>
           <h3>Good job meeting your word goal.</h3>
           <h3>Do it again for another fox ^_^</h3>
          `
    })
}


//do you deserve the fox?????? this function will tell 
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


/* SPACE FOR DRAFT CODE 


//this should help us not lose text in between
function restoreText() {
	if (typeof localStorage != "undefined") { 
		$("#text-area-box").attr("value", localStorage.text);
	}
}


function setRewardParameter(userInputWordGoal) {
    let wordsToEarnReward = userInputWordGoal;
    console.log(wordsToEarnReward);
}

*/