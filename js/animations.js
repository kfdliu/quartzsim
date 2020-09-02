// Contains all the functions for animation display/logic

class Animations {
    constructor ()
    {

    }

    rotateQuartz(position) // This function is called when either roll button is moused over
    { 
        if (position == 'left') // Clockwise Spin
        {
            let ele = document.getElementById('lQuartz');
            ele.style.animation = "rotatecw 1.5s infinite linear";
            ele.style.cursor = "pointer";
            let elmnt = document.getElementById('leftButton');
            elmnt.style.borderColor = "black";
            elmnt.style.borderWidth = "3px";
            elmnt.style.borderRadius = "5px";
        }    
        else if (position == 'right') // Counter-clockwise Spin
        {
            let ele = document.getElementById('rQuartz');
            ele.style.animation = "rotateccw 1.5s infinite linear";
            ele.style.cursor = "pointer";
            let elmnt = document.getElementById('rightButton');
            elmnt.style.borderColor = "black";
            elmnt.style.borderWidth = "3px";
            elmnt.style.borderRadius = "5px";
        }
    }
    
    bbHop () // This function is called when BB is clicked to clear stats
    { 
        let ele = document.getElementById('bbimg');
        setTimeout(function() {
            ele.style.animation = "rotateccw 0.3s 1"; // Spin
        }, 0)
        setTimeout(function() {
            ele.style.animation = "moveUp 0.20s alternate 3"; // Hop
        }, 300)
        setTimeout(function() {
            ele.style.animation = "none"; // Stop animation
        }, 1000)
    }

    jeanneTilt () // This function is called when Jeanne is clicked to display rateups
    {
        let ele = document.getElementById('jeanneimg');
        setTimeout(function() {
            ele.style.animation = "tiltRight 0.5s 1"; // Tilt right
        }, 0)
        setTimeout(function() {
            ele.style.animation = "tiltLeft 0.5s 1"; // Tilt left
        }, 500)
        setTimeout(function() {
            ele.style.animation = "returnCenter 0.5s 1"; // Return to center
        }, 1000)
        ele.style.animation = "none"; // end animation
    }
    
    stopAnimation () // This function is called when the user mouses off the roll buttons
    { 
        let ele = document.getElementById('lQuartz');
        ele.style.animation = "none";
        ele = document.getElementById('rQuartz');
        ele.style.animation = "none";
    
        ele = document.getElementById('leftButton');
        ele.style.borderColor = "pink";
        ele.style.borderWidth = "none";
        ele.style.borderRadius = "5px";
    
        ele = document.getElementById('rightButton');
        ele.style.borderColor = "pink";
        ele.style.borderWidth = "none";
        ele.style.borderRadius = "5px";    
    }
    
    scrollToBottom () // Scrolls to the bottom of the screen upon clicking multi or single roll
    { 
        let elmnt = document.getElementById("html");
        elmnt.scrollIntoView(false);
    }
}