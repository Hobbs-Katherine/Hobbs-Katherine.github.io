function changeButtonColor() {
                                        //button element with a class of btn
    var button = document.querySelector("button.btn"); //returns the first element
    if(button.classList.contains("btn-purple")) {
        button.classList.remove("btn-purple");
        button.classList.add("btn-orange");
    } else {
        button.classList.add("btn-purple");
    }
}

function changeButtonText() {
                                            //button element with a type attribute
    var buttons = document.querySelectorAll("button[type]"); //returns an array of elements
    for (var i = 0; i < buttons.length; i++) {
        if(buttons[i].style.fontFamily == "cursive") {
            buttons[i].style.fontFamily = "serif";
        } else {
            buttons[i].style.fontFamily = "cursive";
        }
    }
}