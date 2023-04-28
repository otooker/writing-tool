// bare min needs: text box, word counter, fox image api FUNCTIONAL PROGRAMMING keep it cleeean please

// so in the orinal written kitten, they are calling their functions in the HTML so that way it doesn't get crazy messy in the js page. that being said, that's not good practice and it hurts my head rn 

const currentWordCount = 0;
const wordsToEarnReward = 100;
const foxesEarned = 0;
const foxesShown = 0;


console.log('Once upon a midnight dreary'); 
const showCount = document.querySelector('#show-count');
//console.log(showCount) 

//the actual wordcounter, it ensures to count on the next line! woohoo! 
function countWords(string) {
    let currentWords = 0;
    let array = string.split(/\s/);
    array = array.filter(word => word.match(/[A-Za-z0-9]/));
    currentWords = array.filter(word => word !== '').length;
    return currentWords;
}

// tests for countWords function
//console.log(countWords('This is a bunch of words equalling eight.')) //expecting 8
//console.log(countWords('Test two.')) //expecting 2
 
function showWordCount(){
    document.querySelector('#text-area-box').addEventListener("input", () => {
        const userTextInput = document.querySelector('#text-area-box').value;
        const currentWordCount = countWords(userTextInput);
        document.getElementById('show-count').innerText = currentWordCount;
    });
}
showWordCount();


// fetching API image, 123 foxes available 
const rewardContainer = document.querySelector("#reward-container");
const baseURL ='https://randomfox.ca/images/';


// this is a really simple API that literally just gets a photo at a number 1-123. If you're feeling fun and frisky after making this all work, go ahead and try to do the other idea (spooky jokes or riddles) for fun
const getRandomFoxNumber = () => {
    const randomNumber = Math.floor(Math.random() * 123) +1;
    return randomNumber;
}

//get the fox data -- which is really just the image but we gotta fetch somewhere
async function getFox(number) {
    let gottenFox = await fetch(`${baseURL}${number}.jpg`)
    return gottenFox;
    //.then(result => result.json()); //not sure if i need this since I'm just pulling one image
}

//console.log(getFox(2)) //should bring you to an image of a smiling fox in the woods by some water


// render the fox image on the page, need await async for the promise?
// HEY YOU figure out where the rewardContainer comes into play 

async function renderFoxOnWebpage(){
    let imageSource = await getFox(getRandomFoxNumber());
    return `
    <h2>A wild fox appears! Good job writing 100 words ^_^</h2>
    <h3><img src="${imageSource}"></h3>
    `
    }
//console.log(renderFoxOnWebpage());


async function getRewardedWithFox(){
    
    //renderFoxOnWebpage()
    rewardContainer.innerHTML = await renderFoxOnWebpage();
}
getRewardedWithFox();
//showCount.innerHTML = countWords(userTextInput);
// TODO: function for storing highestWordCount 



//TODO: function for displaying API at intervals of 100, onchange event listener might help




/* SPACE FOR DRAFT CODE 

//this should help us not lose text in between
function restoreText() {
	if (typeof localStorage != "undefined") { 
		$("#text-area-box").attr("value", localStorage.text);
	}
}




function countedWordsFromInput() {
    document.querySelector('#text-area-box').addEventListener("input", () => {
        const userTextInput = document.querySelector('#text-area-box').value;
        const currentWordCount = countWords(userTextInput);
        return currentWordCount;
}



function main(){
    renderFoxOnWebpage();
}

*/