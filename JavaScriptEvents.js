function mouseEvent1(text) {
    if(text == "Click")
        return "I've been clicked";
    else 
        return "Click";
}

function mouseEvent2(text) {
    if(text == "Double Click")
        return "I've been double clicked";
    else 
        return "Double Click";
}

function mouseEvent3(state) {
    if(state == "down") 
        return "Mouse is down";
    else 
        return "Mouse is up";
}

function mouseEvent4(state) {
    if(state == "enter") 
        return "Mouse has entered";
    else 
        return "Mouse has left";
}

function frameEvent1() {
    alert("page loaded successfully");
}

function frameEvent2() {
    alert("Welcome, please click the buttons to see examples of JavaScript Events");
}

function frameEvent3() {
    var w = window.outerWidth;
    if(w < 1000)
        alert("you have a small screen");
    else {
        alert("you have a big screen");
    }
}

function animationEvent1() {
    if(button.style.animationIterationCount == "infinite") {
        button.style.animationIterationCount = 0;
    } else {
        button.style.animation = "animation 10s infinite alternate";
    }
}

function transitionEvent1() {
    if(document.getElementById("transitionButton").classList.contains("btn-green-transition")) {
        document.getElementById("transitionButton").classList.remove("btn-green-transition");
        document.getElementById("transitionButton").innerHTML = "Transition Toggle";
    } else {
        document.getElementById("transitionButton").classList.add("btn-green-transition");
        document.getElementById("transitionButton").innerHTML = "starting transition";
    }
}

function touchEvent1(state) {
    if(state == "start") 
        return "touch started";
    else if (state == "move")
        return "touch moved";
    else 
        return "touch ended";
}
