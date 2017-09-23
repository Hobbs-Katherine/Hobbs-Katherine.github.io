function rollTheDice1() {
    //get the number of rolls from the select tag
    var numRolls = document.getElementById("numDiceRolls").value;
    
    //cast num Rolls to int
    var numRolls = parseInt(numRolls);
    
    var list = "";
    //loop through the selected number of times and calculate the dice roll using the random function from the math library
    for(var i = 0; i < numRolls; i++) {
        list += getDiceRoll(i);
    }
   
    //append the dice rolls inside the unordered list
    document.getElementById("diceRolls").innerHTML = list;
   
}

function rollTheDice2() {
    //get the number of rolls from the select tag
    var numRolls = document.getElementById("numDiceRolls").value;
    
    //cast num Rolls to int
    var numRolls = parseInt(numRolls);
    
    var list = "";
    //loop through the selected number of times and calculate the dice roll using the random function from the math library
    var i = 0;
    while(i < numRolls) {
        list += getDiceRoll(i);
        i++;
    }
   
    //append the dice rolls inside the unordered list
    document.getElementById("diceRolls").innerHTML = list;
   
}

function getDiceRoll(value) {
    return "<li>Roll #" + (value+1) + ": " + (Math.floor(Math.random() * 6) + 1) + "</li>";
}

function getFavoriteThings() {
    var favoriteThings = {fruit:"bananas", color:"green", day:"Tuesday", smell:"rain"};
    
    var list = "";
    var item;
    for(item in favoriteThings) {
        list += "<li>" + item + ": " + favoriteThings[item] + "</li>";
    }
    
    document.getElementById("favoriteThings").innerHTML = list;
}

function beginGame() {
    var doContinue = false;
    var i = 0;
    var again = "Again";
    do {
        if(i == 0) {
            doContinue = confirm("Hello");   
        } else if (i > 0) {
            doContinue = confirm("Hello " + again);
            again += ", and Again";
        }
        i++;
    }
    while (doContinue);
    alert("Good-bye");
    
}

