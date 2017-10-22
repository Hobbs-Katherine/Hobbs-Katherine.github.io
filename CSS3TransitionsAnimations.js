function toggleTransition() {
    if(document.getElementById("transitionButton").classList.contains("btn-red-transition")) {
         document.getElementById("transitionButton").classList.remove("btn-red-transition");
    } else {
         document.getElementById("transitionButton").classList.add("btn-red-transition");
    }
}

function toggleAnimation() {
    if(document.getElementById("animationButton").style.animationIterationCount == "infinite") {
         document.getElementById("animationButton").style.animationIterationCount = 0;
    } else {
         document.getElementById("animationButton").style.animationIterationCount = "infinite";
    }
}