 // Variable to Control Backgroud Interval
let backgroundInterval;


// Selecting Landing Page Element
let landingPage = document.querySelector(".landing_page");

//Get Array Of Images
let imgArray = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

// Function To Randomize Imgs
function randomizeImgs(){

        backgroundInterval = setInterval(() => {
            //Get Random Number
            let randomNomber = Math.floor(Math.random() * imgArray.length);
        
            //Change Backgroung Image URL
            landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNomber] + '")';
        }, 1500);
    }


randomizeImgs();

